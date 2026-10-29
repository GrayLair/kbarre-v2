<?php
declare(strict_types=1);
if (PHP_SAPI !== 'cli' || count($argv) !== 2) {
    fwrite(STDERR, "Usage: php bin/init.php /absolute/document-root\n"); exit(1);
}
require dirname(__DIR__) . '/vendor/autoload.php';
umask(0077);
use Kbarre\Contact\Config;
try {
    $app = dirname(__DIR__);
    Config::requirePrivate($app, $argv[1]);
    $config = require $app . '/config.example.php';
    $config['secret'] = bin2hex(random_bytes(32));
    $config['state_dir'] = dirname($app) . '/contact-state';
    if (!is_dir($config['state_dir']) && !mkdir($config['state_dir'], 0700)) {
        throw new RuntimeException('state_directory_unavailable');
    }
    new Config($config, $argv[1]);
    // Exclusive creation: never overwrite an existing deployment secret.
    $handle = @fopen($app . '/config.php', 'x');
    if ($handle === false) throw new RuntimeException('config_exists_or_unwritable');
    $source = "<?php\ndeclare(strict_types=1);\nreturn " . var_export($config, true) . ";\n";
    $written = fwrite($handle, $source); fclose($handle);
    @chmod($app . '/config.php', 0600);
    if ($written !== strlen($source)) throw new RuntimeException('incomplete_config');
    echo "Private config initialized. Secret not printed. Run preflight before enabling sending.\n";
} catch (Throwable $error) {
    fwrite(STDERR, "Initialization failed. Check private paths, permissions, runtime and existing config.\n");
    exit(1);
}

