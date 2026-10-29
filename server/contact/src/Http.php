<?php
declare(strict_types=1);
namespace Kbarre\Contact;

final class Http
{
    public static function run(string $action, App $app): void
    {
        $started = microtime(true);
        $requestId = bin2hex(random_bytes(8));
        $locale = 'fr';
        $reason = 'accepted';
        $status = 200;
        $headers = [];
        $result = [];
        try {
            $expected = $action === 'challenge' ? 'GET' : 'POST';
            if (($_SERVER['REQUEST_METHOD'] ?? '') !== $expected) {
                $headers['Allow'] = $expected;
                throw new Failure(405, 'method_invalid');
            }
            if (!empty($_FILES)) {
                throw new Failure(415, 'format_invalid');
            }
            $size = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
            if ($size > $app->config->int('max_body_bytes')) {
                throw new Failure(413, 'body_too_large');
            }
            $ip = (string) ($_SERVER['REMOTE_ADDR'] ?? '');
            if ($action === 'challenge') {
                // Bound generation independently of contact submissions.
                $result = $app->challenge($ip, time());
            } else {
                $contentType = strtolower(trim(explode(';', (string) ($_SERVER['CONTENT_TYPE'] ?? ''))[0]));
                if ($contentType !== 'application/x-www-form-urlencoded') {
                    throw new Failure(415, 'format_invalid');
                }
                $stream = fopen('php://input', 'rb');
                if ($stream === false) {
                    throw new \RuntimeException('input_unavailable');
                }
                $raw = stream_get_contents($stream, $app->config->int('max_body_bytes') + 1);
                fclose($stream);
                if ($raw === false) {
                    throw new \RuntimeException('input_unavailable');
                }
                if (strlen($raw) > $app->config->int('max_body_bytes')) {
                    throw new Failure(413, 'body_too_large');
                }
                parse_str($raw, $data);
                $locale = ($data['locale'] ?? '') === 'en' ? 'en' : 'fr';
                $redirect = $app->submit($data, $ip, time());
                $reason = $app->outcome();
                $result = ['ok' => true, 'redirect' => $redirect];
                if (!self::wantsJson()) {
                    $status = 303;
                    $headers['Location'] = $redirect;
                }
            }
        } catch (Failure $error) {
            $status = $error->status;
            $reason = $error->reason;
            if ($error->retryAfter > 0) {
                $headers['Retry-After'] = (string) $error->retryAfter;
            }
            $result = ['ok' => false, 'code' => $reason, 'message' => self::message($reason, $locale)];
        } catch (\Throwable $error) {
            $status = 503;
            $reason = 'service_unavailable';
            $result = ['ok' => false, 'code' => $reason, 'message' => self::message($reason, $locale)];
        }
        // Do not log exception text, raw IP, payload, form contents or headers.
        error_log(json_encode([
            'event' => 'contact', 'id' => $requestId, 'action' => $action,
            'status' => $status, 'reason' => $reason,
            'duration_ms' => (int) round((microtime(true) - $started) * 1000),
        ], JSON_THROW_ON_ERROR));
        http_response_code($status);
        header('Cache-Control: no-store, max-age=0');
        header('X-Content-Type-Options: nosniff');
        header('X-Request-ID: ' . $requestId);
        foreach ($headers as $name => $value) {
            header($name . ': ' . $value);
        }
        if ($action === 'challenge' || self::wantsJson()) {
            header('Content-Type: application/json; charset=UTF-8');
            echo json_encode($result, JSON_THROW_ON_ERROR | JSON_UNESCAPED_UNICODE);
        } elseif ($status >= 400) {
            self::errorPage($result['message'], $locale);
        }
    }

    public static function wantsJson(): bool
    {
        return str_contains(strtolower((string) ($_SERVER['HTTP_ACCEPT'] ?? '')), 'application/json');
    }

    public static function message(string $reason, string $locale): string
    {
        $en = $locale === 'en';
        return match ($reason) {
            'fields_invalid' => $en ? 'Please check the fields and enter a message of 20 to 10,000 characters.' : 'Vérifiez les champs et saisissez un message de 20 à 10 000 caractères.',
            'rate_limited' => $en ? 'Too many attempts. Please wait before trying again, or contact me directly.' : 'Trop de tentatives. Patientez avant de réessayer, ou contactez-moi directement.',
            'proof_invalid', 'proof_expired', 'proof_reused' => $en ? 'Please renew the verification and try again. Your text is still in the form.' : 'Renouvelez la vérification puis réessayez. Votre texte reste dans le formulaire.',
            'body_too_large' => $en ? 'This request is too large. Please shorten your message.' : 'Cette demande est trop volumineuse. Raccourcissez votre message.',
            'method_invalid', 'format_invalid' => $en ? 'Please use the contact form to send your request.' : 'Utilisez le formulaire de contact pour envoyer votre demande.',
            default => $en ? 'Sending is temporarily unavailable. Please try again or use the email or phone links on the contact page.' : 'L’envoi est temporairement indisponible. Réessayez ou utilisez les liens e-mail et téléphone de la page contact.',
        };
    }

    public static function errorPage(string $message, string $locale): void
    {
        header('Content-Type: text/html; charset=UTF-8');
        $title = $locale === 'en' ? 'Contact request' : 'Demande de contact';
        $path = $locale === 'en' ? '/en/contact/' : '/contact/';
        $back = $locale === 'en' ? 'Back to contact — email and phone' : 'Retour au contact — e-mail et téléphone';
        echo '<!doctype html><html lang="' . $locale . '"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">';
        echo '<title>' . $title . '</title><main><h1>' . $title . '</h1><p>' . htmlspecialchars($message, ENT_QUOTES, 'UTF-8') . '</p>';
        echo '<p><a href="' . $path . '">' . $back . '</a></p><p><a href="mailto:contact@kbarre.fr">contact@kbarre.fr</a></p></main></html>';
    }
}

