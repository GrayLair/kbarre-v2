<?php
declare(strict_types=1);

require __DIR__ . '/vendor/autoload.php';
\Kbarre\Contact\Config::requirePrivate(__DIR__, (string) ($_SERVER['DOCUMENT_ROOT'] ?? ''));
$configFile = getenv('KBARRE_CONTACT_CONFIG') ?: __DIR__ . '/config.php';
$config = \Kbarre\Contact\Config::load($configFile, (string) ($_SERVER['DOCUMENT_ROOT'] ?? ''));
return new \Kbarre\Contact\App($config);

