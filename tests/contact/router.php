<?php
declare(strict_types=1);

// Local/CI test router only. Never packaged or included by production endpoints.
require dirname(__DIR__, 2) . '/server/contact/vendor/autoload.php';
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
if (in_array($path, ['/contact.php', '/contact-challenge.php', '/_test/mail-failure/contact.php'], true)) {
    $config = \Kbarre\Contact\Config::load((string) getenv('KBARRE_TEST_CONFIG'), $_SERVER['DOCUMENT_ROOT']);
    $app = new \Kbarre\Contact\App($config, static function (array $fields) use ($path): bool {
        if ($path === '/_test/mail-failure/contact.php') return false;
        file_put_contents(getenv('KBARRE_TEST_SENT_FILE'), "sent\n", FILE_APPEND | LOCK_EX);
        return true;
    });
    \Kbarre\Contact\Http::run($path === '/contact-challenge.php' ? 'challenge' : 'submit', $app);
    return true;
}
return false;
