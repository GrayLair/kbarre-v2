<?php
declare(strict_types=1);

// Copy to config.php OUTSIDE the public webroot. Never commit real secrets.
return [
    'secret' => '', // At least 32 random bytes, encoded as 64 hex characters.
    'state_dir' => __DIR__ . '/state',
    'recipient' => 'contact@kbarre.fr',
    'sender' => 'contact@kbarre.fr',
    'challenge_ttl' => 1200,
    'pow_cost' => 5000,
    'pow_min_counter' => 500,
    'pow_max_counter' => 1000,
    'window' => 600,
    'challenge_limit' => 20,
    'submit_limit' => 5,
    // Conservative starting budgets, to calibrate on OVH before release.
    'global_challenge_limit' => 200,
    'global_submit_limit' => 100,
    'max_body_bytes' => 32768,
];

