<?php
declare(strict_types=1);

// CLI only. No secret values, IPs or contact contents are printed.
if (PHP_SAPI !== 'cli' || count($argv) !== 3) {
    fwrite(STDERR, "Usage: php scripts/contact-preflight.php /private/kbarre-contact/config.php /public/www\n");
    exit(1);
}
try {
    require dirname(__DIR__) . '/server/contact/vendor/autoload.php';
    $config = \Kbarre\Contact\Config::load($argv[1], $argv[2]);
    \Kbarre\Contact\Config::requirePrivate(dirname(__DIR__) . '/server/contact', $argv[2]);
    $state = new \Kbarre\Contact\State($config);
    $proof = new \Kbarre\Contact\Proof($config, $state);
    $start = microtime(true);
    $challenge = $proof->create(time());
    echo json_encode([
        'ok' => true, 'php' => PHP_VERSION,
        'pdo_sqlite' => extension_loaded('pdo_sqlite'),
        'mbstring' => extension_loaded('mbstring'),
        'private_storage' => true, 'challenge_created' => isset($challenge['signature']),
        'challenge_ms' => round((microtime(true) - $start) * 1000, 2),
    ], JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR) . "\n";
} catch (Throwable $error) {
    fwrite(STDERR, "Contact preflight failed: runtime, private config/storage or dependencies unavailable.\n");
    exit(1);
}

