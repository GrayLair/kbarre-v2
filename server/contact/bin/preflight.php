<?php
declare(strict_types=1);
if (PHP_SAPI !== 'cli' || count($argv) !== 3) {
    fwrite(STDERR, "Usage: php bin/preflight.php /private/config.php /public/www\n"); exit(1);
}
require dirname(__DIR__) . '/vendor/autoload.php';
use Kbarre\Contact\{Config, State, Proof};
try {
    Config::requirePrivate(dirname(__DIR__), $argv[2]);
    $config = Config::load($argv[1], $argv[2]);
    $state = new State($config);
    $proof = new Proof($config, $state);
    $start = microtime(true); $challenge = $proof->create(time());
    $probe = $config->text('state_dir') . '/probe-' . bin2hex(random_bytes(8)) . '.sqlite';
    $a = new PDO('sqlite:' . $probe, null, null, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    $a->exec('CREATE TABLE probe (id INTEGER PRIMARY KEY)');
    $a->exec('BEGIN IMMEDIATE');
    $b = new PDO('sqlite:' . $probe, null, null, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    $b->exec('PRAGMA busy_timeout=100');
    $locked = false;
    try { $b->exec('BEGIN IMMEDIATE'); $b->exec('ROLLBACK'); }
    catch (PDOException $error) { $locked = (int) ($error->errorInfo[1] ?? 0) === 5; }
    $a->exec('ROLLBACK'); $a = null; $b = null;
    unlink($probe);
    if (!$locked) throw new RuntimeException('locking_not_confirmed');
    echo json_encode([
        'ok' => true, 'php' => PHP_VERSION, 'pdo_sqlite' => true, 'mbstring' => true,
        'private_storage' => true, 'challenge_created' => isset($challenge['signature']),
        'sqlite_lock_between_connections' => $locked,
        'probe_ms' => round((microtime(true) - $start) * 1000, 2),
        'release_ready' => false,
        'remaining' => ['multi_process_host_check', 'real_mail_reception', 'proxy_and_budgets', 'mobile_and_screen_reader', 'scheduled_cleanup'],
    ], JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR) . "\n";
} catch (Throwable $error) {
    fwrite(STDERR, "Contact preflight failed: runtime, private config/storage, locking or dependencies unavailable.\n");
    exit(1);
}

