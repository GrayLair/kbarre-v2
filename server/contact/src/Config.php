<?php
declare(strict_types=1);
namespace Kbarre\Contact;

final class Config
{
    public function __construct(public readonly array $values, string $documentRoot)
    {
        if (PHP_VERSION_ID < 80100 || !extension_loaded('pdo_sqlite') || !extension_loaded('mbstring')) {
            throw new \RuntimeException('runtime_unavailable');
        }
        if (!is_string($values['secret'] ?? null) || !preg_match('/\A[a-f0-9]{64}\z/i', $values['secret'])) {
            throw new \RuntimeException('secret_unavailable');
        }
        foreach (['recipient', 'sender'] as $key) {
            if (!is_string($values[$key] ?? null) || !filter_var($values[$key], FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $values[$key])) {
                throw new \RuntimeException('mail_config_invalid');
            }
        }
        foreach (['challenge_ttl', 'pow_cost', 'pow_min_counter', 'pow_max_counter', 'window', 'challenge_limit',
            'submit_limit', 'global_challenge_limit', 'global_submit_limit', 'max_body_bytes'] as $key) {
            if (!is_int($values[$key] ?? null) || $values[$key] < 1) {
                throw new \RuntimeException('limits_invalid');
            }
        }
        if ($values['challenge_ttl'] > 3600 || $values['window'] > 3600 || $values['pow_cost'] > 100000
            || $values['pow_max_counter'] > 100000 || $values['pow_min_counter'] > $values['pow_max_counter']
            || $values['max_body_bytes'] > 32768) {
            throw new \RuntimeException('limits_invalid');
        }
        $stateDir = $values['state_dir'] ?? '';
        if (!is_string($stateDir) || $stateDir === '' || !is_dir($stateDir) || !is_writable($stateDir)) {
            throw new \RuntimeException('storage_unavailable');
        }
        self::requirePrivate($stateDir, $documentRoot);
    }

    public static function load(string $file, string $documentRoot): self
    {
        self::requirePrivate($file, $documentRoot);
        $values = require $file;
        if (!is_array($values)) {
            throw new \RuntimeException('config_invalid');
        }
        return new self($values, $documentRoot);
    }

    public static function requirePrivate(string $path, string $documentRoot): void
    {
        $real = realpath($path);
        $public = realpath($documentRoot);
        if ($real === false || $public === false) {
            throw new \RuntimeException('private_path_missing');
        }
        $real = strtolower(str_replace('\\', '/', $real));
        $public = rtrim(strtolower(str_replace('\\', '/', $public)), '/');
        if ($real === $public || str_starts_with($real, $public . '/')) {
            throw new \RuntimeException('private_path_exposed');
        }
    }

    public function int(string $name): int { return $this->values[$name]; }
    public function text(string $name): string { return $this->values[$name]; }
    public function key(string $context): string { return hash_hmac('sha256', $context, $this->text('secret')); }
}

