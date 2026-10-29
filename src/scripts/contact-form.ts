import type { WidgetMethods } from 'altcha/lib';

type Widget = HTMLElement & WidgetMethods;
type ContactResponse = { ok?: boolean; redirect?: string; code?: string; message?: string };

export function setupContactForms(): void {
  for (const protection of document.querySelectorAll<HTMLElement>('[data-contact-protection]')) {
    const form = protection.closest<HTMLFormElement>('form');
    const widget = protection.querySelector<Widget>('altcha-widget');
    const status = protection.querySelector<HTMLElement>('[data-contact-status]');
    const button = form?.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (!form || !widget || !status || !button || form.dataset.contactReady) continue;
    form.dataset.contactReady = 'true';
    const en = protection.dataset.locale === 'en';
    const text = {
      verifying: en ? 'Verifying… Please wait.' : 'Vérification… Un instant.',
      sending: en ? 'Sending your request…' : 'Envoi de votre demande…',
      unavailable: en
        ? 'Protected sending is unavailable. Your text is still here. Please try again or contact me directly by email or phone.'
        : 'L’envoi protégé est indisponible. Votre texte est conservé ici. Réessayez ou contactez-moi directement par e-mail ou téléphone.',
      uncertain: en
        ? 'Confirmation was not received. Your message may have been sent. Please contact me directly before sending it again.'
        : 'La confirmation n’a pas été reçue. Votre message a peut-être été envoyé. Contactez-moi directement avant de le renvoyer.',
      tooLarge: en ? 'This request is too large. Please shorten your message.' : 'Cette demande est trop volumineuse. Raccourcissez votre message.',
    };
    let busy = false;
    let navigating = false;
    const announce = (message: string, error = false) => {
      status.textContent = message;
      status.dataset.error = String(error);
      if (error) status.focus();
    };
    // Attach the guard immediately, including while the local widget chunk loads.
    const ready = (async () => {
      if (!window.isSecureContext || !crypto.subtle || !window.Worker) throw new Error('unsupported_browser');
      await import('altcha');
      await import('altcha/i18n/fr-fr');
      await customElements.whenDefined('altcha-widget');
    })();
    // Avoid an unhandled rejection; submit still awaits/reports the same failure.
    void ready.catch(() => announce(text.unavailable, true));

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (busy || !form.reportValidity()) return;
      busy = true;
      button.disabled = true;
      form.setAttribute('aria-busy', 'true');
      let submitted = false;
      let timer: ReturnType<typeof setTimeout> | undefined;
      try {
        announce(text.verifying);
        await ready;
        // A fresh proof on every explicit attempt handles long-lived tabs and consumed proofs.
        widget.reset();
        const verified = await widget.verify();
        if (!verified?.payload) throw new Error('verification_failed');
        const data = new URLSearchParams();
        for (const [name, value] of new FormData(form)) {
          if (typeof value === 'string') data.set(name, value);
        }
        data.set('altcha', verified.payload);
        if (new TextEncoder().encode(data.toString()).length > 32768) {
          announce(text.tooLarge, true);
          return;
        }
        announce(text.sending);
        const controller = new AbortController();
        timer = setTimeout(() => controller.abort(), 30000);
        submitted = true;
        const response = await fetch(form.action, {
          method: 'POST', body: data, headers: { Accept: 'application/json' },
          credentials: 'omit', signal: controller.signal,
        });
        const result: ContactResponse = await response.json();
        if (!response.ok || !result.ok) {
          announce(result.message || text.unavailable, true);
          return;
        }
        const expected = en ? '/en/thank-you/' : '/merci/';
        if (result.redirect !== expected) throw new Error('unexpected_redirect');
        navigating = true;
        location.assign(expected);
      } catch {
        announce(submitted ? text.uncertain : text.unavailable, true);
      } finally {
        if (timer) clearTimeout(timer);
        if (!navigating) {
          if (typeof widget.reset === 'function') widget.reset();
          busy = false;
          button.disabled = false;
          form.removeAttribute('aria-busy');
        }
      }
    });
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        busy = false; navigating = false; button.disabled = false;
        form.removeAttribute('aria-busy');
        if (typeof widget.reset === 'function') widget.reset();
      }
    });
  }
}

