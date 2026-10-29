<?php
declare(strict_types=1);
if (PHP_SAPI !== 'cli' || count($argv) !== 3) {
    fwrite(STDERR, "Usage: php bin/maintain.php /private/config.php /public/www\n"); exit(1);
}
require dirname(__DIR__) . '/vendor/autoload.php';
try {
    $config = \Kbarre\Contact\Config::load($argv[1], $argv[2]);
    (new \Kbarre\Contact\State($config))->purgeExpired(time());
    echo "Expired contact counters and proofs purged.\n";
} catch (Throwable $error) {
    fwrite(STDERR, "Contact cleanup failed. Check runtime, private config and storage.\n"); exit(1);
}

