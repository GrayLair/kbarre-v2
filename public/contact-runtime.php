<?php
declare(strict_types=1);

// Shared loader. Direct HTTP access is not an API endpoint.
if (!isset($contactAction) || !in_array($contactAction, ['challenge', 'submit'], true)) {
    http_response_code(404);
    exit;
}
header('Cache-Control: no-store, max-age=0');
header('X-Content-Type-Options: nosniff');
ini_set('display_errors', '0');
try {
    $bootstrap = getenv('KBARRE_CONTACT_BOOTSTRAP') ?: dirname(__DIR__) . '/kbarre-contact/bootstrap.php';
    if (!is_file($bootstrap) || !is_readable($bootstrap)) {
        throw new RuntimeException('bootstrap_unavailable');
    }
    $app = require $bootstrap;
    \Kbarre\Contact\Http::run($contactAction, $app);
} catch (Throwable $error) {
    // Even a missing dependency/config must fail closed without disclosing paths.
    http_response_code(503);
    error_log('{"event":"contact","status":503,"reason":"bootstrap_unavailable"}');
    if ($contactAction === 'challenge' || str_contains(strtolower((string) ($_SERVER['HTTP_ACCEPT'] ?? '')), 'application/json')) {
        header('Content-Type: application/json; charset=UTF-8');
        echo '{"ok":false,"code":"service_unavailable"}';
    } else {
        header('Content-Type: text/html; charset=UTF-8');
        echo '<!doctype html><html lang="fr"><meta charset="utf-8"><title>Contact</title><main><h1>Contact</h1>';
        echo '<p>Envoi indisponible / Sending unavailable.</p><p><a href="/contact/">Contact FR</a> · <a href="/en/contact/">Contact EN</a> · <a href="mailto:contact@kbarre.fr">E-mail</a></p></main></html>';
    }
}

