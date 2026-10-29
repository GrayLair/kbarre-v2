<?php
declare(strict_types=1);
namespace Kbarre\Contact;

final class State
{
    private \PDO $db;

    public function __construct(private readonly Config $config)
    {
        $file = $config->text('state_dir') . '/contact.sqlite';
        if (is_link($file)) {
            throw new \RuntimeException('database_symlink');
        }
        $this->db = new \PDO('sqlite:' . $file, null, null, [
            \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
        ]);
        @chmod($file, 0600);
        $this->db->exec('PRAGMA busy_timeout=2000');
        $this->db->exec('CREATE TABLE IF NOT EXISTS counters (id TEXT PRIMARY KEY, hits INTEGER NOT NULL, expires INTEGER NOT NULL)');
        $this->db->exec('CREATE TABLE IF NOT EXISTS used_proofs (id TEXT PRIMARY KEY, expires INTEGER NOT NULL)');
    }

    private function transaction(callable $operation): mixed
    {
        $this->db->exec('BEGIN IMMEDIATE');
        try {
            $result = $operation();
            $this->db->exec('COMMIT');
            return $result;
        } catch (\Throwable $error) {
            $this->db->exec('ROLLBACK');
            throw $error;
        }
    }

    private function purge(int $now): void
    {
        foreach (['counters', 'used_proofs'] as $table) {
            $stmt = $this->db->prepare("DELETE FROM $table WHERE expires <= ?");
            $stmt->execute([$now]);
        }
    }

    public function limit(string $scope, string $ip, int $now): void
    {
        if (!in_array($scope, ['challenge', 'submit'], true) || !filter_var($ip, FILTER_VALIDATE_IP)) {
            throw new \RuntimeException('client_address_unavailable');
        }
        // Normalize IPv6 spellings; never persist a raw client address.
        $ip = bin2hex(inet_pton($ip));
        $identity = hash_hmac('sha256', $scope . ':' . gmdate('Y-m-d', $now) . ':' . $ip, $this->config->key('quota'));
        $retry = $this->transaction(function () use ($scope, $identity, $now): int {
            $this->purge($now);
            $entries = [
                [$scope . ':global', $this->config->int('global_' . $scope . '_limit')],
                [$scope . ':' . $identity, $this->config->int($scope . '_limit')],
            ];
            foreach ($entries as [$id, $limit]) {
                $get = $this->db->prepare('SELECT hits, expires FROM counters WHERE id = ?');
                $get->execute([$id]);
                $row = $get->fetch(\PDO::FETCH_ASSOC);
                if ($row && $row['hits'] >= $limit) {
                    return max(1, (int) $row['expires'] - $now);
                }
            }
            $put = $this->db->prepare('INSERT INTO counters(id,hits,expires) VALUES (?,1,?) ON CONFLICT(id) DO UPDATE SET hits=hits+1');
            foreach ($entries as [$id]) {
                $put->execute([$id, $now + $this->config->int('window')]);
            }
            return 0;
        });
        if ($retry > 0) {
            throw new Failure(429, 'rate_limited', $retry);
        }
    }

    public function consume(string $id, int $expires, int $now): bool
    {
        return $this->transaction(function () use ($id, $expires, $now): bool {
            $this->purge($now);
            $stmt = $this->db->prepare('INSERT OR IGNORE INTO used_proofs(id,expires) VALUES (?,?)');
            $stmt->execute([$id, $expires]);
            return $stmt->rowCount() === 1;
        });
    }
}

