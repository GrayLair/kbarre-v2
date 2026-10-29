<?php
declare(strict_types=1);
require dirname(__DIR__, 2) . '/server/contact/vendor/autoload.php';
use Kbarre\Contact\{App, Config, Failure};

[$script, $configFile, $publicRoot, $payloadFile, $sentFile, $mode, $index] = $argv;
$app = new App(Config::load($configFile, $publicRoot), static function (array $fields) use ($sentFile): bool {
    file_put_contents($sentFile, "sent\n", FILE_APPEND | LOCK_EX);
    return true;
});
try {
    if ($mode === 'quota') {
        $app->state->limit('submit', '127.0.0.' . $index, time());
    } else {
        $app->submit([
            'name' => 'Test person', 'email' => 'person@example.test', 'request_type' => 'Other',
            'message' => 'A legitimate test message for the contact endpoint.',
            'altcha' => file_get_contents($payloadFile), 'locale' => 'en',
        ], '127.0.0.' . $index, time());
    }
    echo 'accepted';
} catch (Failure $error) {
    echo $error->reason;
}

