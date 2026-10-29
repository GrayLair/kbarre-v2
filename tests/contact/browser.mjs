import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { chromium } from 'playwright';
import { harness, fields, root } from './harness.mjs';

const server = await harness();
const browser = await chromium.launch({ headless: true });
const external = new Set();
let checks = 0;
function check(value, label) { assert.ok(value, label); checks++; console.log('PASS ' + label); }
async function fill(page, locale) {
  const data = fields(locale);
  await page.locator('[name="name"]').fill(data.name);
  await page.locator('[name="email"]').fill(data.email);
  await page.locator('[name="request_type"]').selectOption(data.request_type);
  await page.locator('[name="message"]').fill(data.message);
}
try {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  context.on('request', request => {
    if (/^https?:/.test(request.url()) && new URL(request.url()).origin !== server.base) external.add(request.url());
  });
  const page = await context.newPage();
  for (const locale of ['fr', 'en']) {
    await page.goto(server.base + (locale === 'fr' ? '/contact/' : '/en/contact/'));
    await fill(page, locale);
    await page.locator('button[type="submit"]').focus();
    await page.keyboard.press('Enter');
    await page.waitForURL('**' + (locale === 'fr' ? '/merci/' : '/en/thank-you/'), { timeout: 45000 });
    check(true, locale + ' real browser PoW and PHP success via keyboard');
  }
  check(await server.sent() === 2, 'browser positive requests reach test transport exactly twice');

  await page.goto(server.base + '/en/contact/');
  await fill(page, 'en');
  await page.locator('form.lead-form').evaluate(form => form.action = '/_test/mail-failure/contact.php');
  await page.locator('button[type="submit"]').click();
  await page.waitForFunction(() => document.querySelector('[data-contact-status]')?.getAttribute('data-error') === 'true', { timeout: 45000 });
  check(await page.locator('[name="message"]').inputValue() === fields('en').message, 'mail failure retains user text');
  check(await page.locator('[data-contact-status]').evaluate(el => document.activeElement === el), 'error status receives keyboard focus');
  check(await page.locator('button[type="submit"]').isEnabled(), 'retry is available after error');
  check(await page.locator('[data-contact-status]').innerText().then(text => text.includes('temporarily unavailable')), 'English error remains localized');
  check(await server.sent() === 2, 'failed delivery creates no false success');
  // A second explicit attempt gets a fresh proof, not the consumed one.
  await page.locator('form.lead-form').evaluate(form => form.action = '/contact.php');
  await page.locator('button[type="submit"]').click();
  await page.waitForURL('**/en/thank-you/', { timeout: 45000 });
  check(await server.sent() === 3, 'retry renews the consumed proof');

  await page.goBack();
  check(await page.locator('button[type="submit"]').isEnabled(), 'back navigation restores an enabled form');
  check(await context.cookies().then(cookies => cookies.length) === 0, 'contact protection sets no cookies');
  check(external.size === 0, 'all network requests stay on the site origin');

  const unsupported = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await unsupported.addInitScript(() => Object.defineProperty(window.crypto, 'subtle', { value: undefined }));
  const fallback = await unsupported.newPage();
  await fallback.goto(server.base + '/contact/');
  await fallback.waitForFunction(() => document.querySelector('[data-contact-status]')?.getAttribute('data-error') === 'true');
  check(await fallback.locator('a[href="mailto:contact@kbarre.fr"]').count() > 0, 'unsupported crypto keeps direct contact available');
  await fill(fallback, 'fr');
  await fallback.locator('button[type="submit"]').click();
  check(await fallback.locator('[name="message"]').inputValue() === fields('fr').message, 'unsupported browser preserves the message');
  await mkdir(resolve(root, 'output/playwright'), { recursive: true });
  await fallback.screenshot({ path: resolve(root, 'output/playwright/contact-mobile-fallback.png'), fullPage: true });
  await unsupported.close();

  const noJS = await browser.newContext({ javaScriptEnabled: false });
  const plain = await noJS.newPage();
  await plain.goto(server.base + '/en/contact/');
  check(await plain.locator('noscript').innerText().then(text => text.includes('JavaScript')), 'no-JS instructions are visible');
  check(await plain.locator('a[href^="mailto:"]').count() > 0 && await plain.locator('a[href^="tel:"]').count() > 0, 'no-JS email and phone remain available');
  await noJS.close();
  await context.close();
} finally {
  await browser.close();
  await server.stop();
}
console.log(checks + ' browser assertions passed. No real mail sent. This is not a phone or screen-reader audit.');

