<?php
declare(strict_types=1);
namespace Kbarre\Contact;

use AltchaOrg\Altcha\{Altcha, CreateChallengeOptions, Payload, VerifySolutionOptions};
use AltchaOrg\Altcha\Algorithm\Pbkdf2;

final class Proof
{
    private Altcha $altcha;

    public function __construct(private readonly Config $config, private readonly State $state)
    {
        $this->altcha = new Altcha(
            hmacSignatureSecret: $config->key('challenge-signature'),
            hmacKeySignatureSecret: $config->key('solution-signature'),
        );
    }

    public function create(int $now): array
    {
        return $this->altcha->createChallenge(new CreateChallengeOptions(
            algorithm: new Pbkdf2(),
            cost: $this->config->int('pow_cost'),
            counter: random_int($this->config->int('pow_min_counter'), $this->config->int('pow_max_counter')),
            expiresAt: $now + $this->config->int('challenge_ttl'),
            data: ['form' => 'kbarre-contact'],
        ))->toArray();
    }

    public function consume(string $encoded, int $now): void
    {
        if ($encoded === '' || strlen($encoded) > 8192) {
            throw new Failure(403, 'proof_invalid');
        }
        try {
            $payload = Payload::fromBase64($encoded);
            $params = $payload->challenge->parameters;
            if ($params->algorithm !== 'PBKDF2/SHA-256' || $params->cost !== $this->config->int('pow_cost')
                || $params->keyLength !== 32 || !$params->keySignature || $params->data !== ['form' => 'kbarre-contact']
                || !is_int($params->expiresAt) || $params->expiresAt > $now + $this->config->int('challenge_ttl')) {
                throw new \InvalidArgumentException('unexpected_parameters');
            }
            // Mandatory keySignature keeps verification on the constant-cost HMAC path.
            $verified = $this->altcha->verifySolution(new VerifySolutionOptions(
                algorithm: new Pbkdf2(), payload: $payload,
            ));
        } catch (\Throwable $error) {
            throw new Failure(403, 'proof_invalid');
        }
        if ($params->expiresAt <= $now || $verified->expired) {
            throw new Failure(403, 'proof_expired');
        }
        if (!$verified->verified) {
            throw new Failure(403, 'proof_invalid');
        }
        $id = hash('sha256', (string) $payload->challenge->signature);
        if (!$this->state->consume($id, $params->expiresAt, $now)) {
            throw new Failure(403, 'proof_reused');
        }
    }
}

