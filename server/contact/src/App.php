<?php
declare(strict_types=1);
namespace Kbarre\Contact;

final class App
{
    public readonly State $state;
    public readonly Proof $proof;
    private \Closure $send;
    private string $outcome = 'accepted';

    public function outcome(): string { return $this->outcome; }

    public function __construct(public readonly Config $config, ?callable $send = null)
    {
        $this->state = new State($config);
        $this->proof = new Proof($config, $this->state);
        // Tests inject an adapter in PHP code. No HTTP/env transport bypass exists.
        $this->send = $send === null ? self::mailAdapter($config) : \Closure::fromCallable($send);
    }

    public function challenge(string $ip, int $now): array
    {
        $this->state->limit('challenge', $ip, $now);
        return $this->proof->create($now);
    }

    public function submit(array $data, string $ip, int $now): string
    {
        $this->outcome = 'accepted';
        $this->state->limit('submit', $ip, $now);
        foreach ($data as $value) {
            if (!is_string($value) || !mb_check_encoding($value, 'UTF-8')) {
                throw new Failure(422, 'fields_invalid');
            }
        }
        $locale = ($data['locale'] ?? 'fr') === 'en' ? 'en' : 'fr';
        $location = $locale === 'en' ? '/en/thank-you/' : '/merci/';
        if (trim($data['website'] ?? '') !== '') {
            $this->outcome = 'honeypot';
            return $location; // Preserve the neutral honeypot response; never send mail.
        }
        $limits = ['name' => 200, 'company' => 200, 'email' => 254, 'phone' => 50,
            'request_type' => 100, 'budget' => 80, 'message' => 10000];
        $fields = [];
        foreach ($limits as $key => $limit) {
            $value = trim($data[$key] ?? '');
            if (mb_strlen($value, 'UTF-8') > $limit || str_contains($value, "\0")) {
                throw new Failure(422, 'fields_invalid');
            }
            $fields[$key] = $value;
        }
        $types = [
            'Formation IA', 'Automatisation / agents', 'Création musicale / média assistée par IA',
            'Pilotage de projet', 'Site Web premium', 'Communication numérique / réseaux sociaux',
            'Campagne d’acquisition / analytics', 'Configuration ERP / outils métier', 'Renfort / collaboration',
            'Recrutement', 'Autre', 'AI training', 'Automation / agents', 'AI-assisted music / media creation',
            'Digital project management', 'Website', 'Digital communication / social media',
            'Acquisition campaign / analytics', 'ERP / business tools configuration', 'Collaboration',
            'Recruitment', 'Other',
        ];
        $budgets = ['', 'Moins de 3 000 €', '3 000 — 10 000 €', '10 000 — 30 000 €', 'Plus de 30 000 €',
            'Under €3,000', '€3,000 — €10,000', '€10,000 — €30,000', 'Over €30,000'];
        if (mb_strlen($fields['name'], 'UTF-8') < 2 || mb_strlen($fields['message'], 'UTF-8') < 20
            || !filter_var($fields['email'], FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $fields['email'])
            || !in_array($fields['request_type'], $types, true) || !in_array($fields['budget'], $budgets, true)) {
            throw new Failure(422, 'fields_invalid');
        }
        $proof = $data['altcha'] ?? '';
        $this->proof->consume($proof, $now);
        try {
            $sent = ($this->send)($fields);
        } catch (\Throwable $error) {
            $sent = false;
        }
        if (!$sent) {
            throw new Failure(503, 'delivery_unavailable');
        }
        $this->outcome = 'mail_accepted';
        return $location;
    }

    private static function mailAdapter(Config $config): \Closure
    {
        return static function (array $fields) use ($config): bool {
            $lines = ['Nouvelle demande depuis kbarre.fr', ''];
            foreach ($fields as $name => $value) {
                $lines[] = $name . ' : ' . $value;
            }
            return @mail(
                $config->text('recipient'), 'Nouveau contact - kbarre.fr', implode("\r\n", $lines),
                implode("\r\n", [
                    'From: KBarre.fr <' . $config->text('sender') . '>',
                    'Reply-To: ' . $fields['email'],
                    'MIME-Version: 1.0', 'Content-Type: text/plain; charset=UTF-8',
                ]),
            );
        };
    }
}

