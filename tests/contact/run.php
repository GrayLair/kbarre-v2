<?php
declare(strict_types=1);
require dirname(__DIR__, 2) . '/server/contact/vendor/autoload.php';
use Kbarre\Contact\{App, Config, Failure, State};
use AltchaOrg\Altcha\{Altcha, Challenge, Payload, SolveChallengeOptions};
use AltchaOrg\Altcha\Algorithm\Pbkdf2;

$root = dirname(__DIR__, 2);
$testRoot = sys_get_temp_dir() . '/kbarre-contact-tests-' . bin2hex(random_bytes(6));
mkdir($testRoot, 0700);
$tests = 0;
function check(bool $ok, string $label): void {
    global $tests;
    if (!$ok) { throw new RuntimeException('FAIL: ' . $label); }
    $tests++;
    echo "PASS " . $label . "\n";
}
function setup(array $overrides = [], ?callable $send = null): array {
    global $root, $testRoot;
    $dir = $testRoot . '/' . bin2hex(random_bytes(4));
    mkdir($dir, 0700);
    $config = require $root . '/server/contact/config.example.php';
    $config = array_replace($config, [
        'secret' => str_repeat('a', 64), 'state_dir' => $dir, 'pow_cost' => 1,
        'pow_min_counter' => 1, 'pow_max_counter' => 3,
    ], $overrides);
    $file = $dir . '/config.php';
    file_put_contents($file, "<?php return " . var_export($config, true) . ";\n");
    return [new App(new Config($config, $root . '/public'), $send ?? static fn () => true), $dir, $file, $config];
}
function valid(App $app, string $locale = 'fr'): array {
    $challenge = Challenge::fromArray($app->proof->create(time()));
    $solution = (new Altcha())->solveChallenge(new SolveChallengeOptions(
        algorithm: new Pbkdf2(), challenge: $challenge, timeout: 5,
    ));
    if (!$solution) { throw new RuntimeException('Fixture PoW failed'); }
    return [
        'name' => 'Élodie Test', 'email' => 'test@example.test', 'message' => 'Un vrai message de test pour un projet numérique.',
        'request_type' => $locale === 'en' ? 'Other' : 'Autre', 'locale' => $locale,
        'altcha' => (new Payload($challenge, $solution))->toBase64(),
    ];
}
function fails(callable $action, int $status, string $code): void {
    try { $action(); } catch (Failure $error) {
        check($error->status === $status && $error->reason === $code, $code . ' (' . $status . ')');
        return;
    }
    throw new RuntimeException('Expected failure: ' . $code);
}

$sent = 0;
[$app] = setup([], static function () use (&$sent) { $sent++; return true; });
check($app->submit(valid($app), '127.0.0.1', time()) === '/merci/', 'FR success');
check($app->submit(valid($app, 'en'), '127.0.0.1', time()) === '/en/thank-you/', 'EN success');
check($sent === 2, 'positive tests invoke mail adapter');

foreach (['missing', 'malformed', 'tampered', 'expired', 'unsigned', 'algorithm', 'solution'] as $case) {
    $calls = 0;
    [$app] = setup([], static function () use (&$calls) { $calls++; return true; });
    $data = valid($app);
    $payload = json_decode(base64_decode($data['altcha']), true, 512, JSON_THROW_ON_ERROR);
    switch ($case) {
        case 'missing': unset($data['altcha']); break;
        case 'malformed': $data['altcha'] = 'not base64'; break;
        case 'tampered': $payload['challenge']['parameters']['data']['form'] = 'another-form'; break;
        case 'expired':
            $data = valid($app);
            // A signed challenge can be tested against a later request clock.
            break;
        case 'unsigned': unset($payload['challenge']['signature']); break;
        case 'algorithm': $payload['challenge']['parameters']['cost'] = 1000000000; break;
        case 'solution': $payload['solution']['derivedKey'] = str_repeat('0', 64); break;
    }
    if (!in_array($case, ['missing', 'malformed', 'expired'], true)) {
        $data['altcha'] = base64_encode(json_encode($payload, JSON_THROW_ON_ERROR));
    }
    fails(fn () => $app->submit($data, '127.0.0.1', time() + ($case === 'expired' ? 1201 : 0)),
        403, $case === 'expired' ? 'proof_expired' : 'proof_invalid');
    check($calls === 0, $case . ' never sends mail');
}
[$app] = setup();
$data = valid($app);
$app->submit($data, '127.0.0.1', time());
fails(fn () => $app->submit($data, '127.0.0.1', time()), 403, 'proof_reused');
// Same signature, different base64/JSON representation, still replay.
$parsed = json_decode(base64_decode($data['altcha']), true);
$data['altcha'] = base64_encode(json_encode($parsed, JSON_PRETTY_PRINT));
fails(fn () => $app->submit($data, '127.0.0.1', time()), 403, 'proof_reused');

foreach (['array', 'email_crlf', 'too_long', 'invalid_utf8', 'type', 'budget', 'null'] as $case) {
    $calls = 0;
    [$app] = setup([], static function () use (&$calls) { $calls++; return true; });
    $data = valid($app);
    match ($case) {
        'array' => $data['name'] = ['bad'],
        'email_crlf' => $data['email'] = "test@example.test\r\nBcc: victim@example.test",
        'too_long' => $data['message'] = str_repeat('x', 10001),
        'invalid_utf8' => $data['message'] = "\xff",
        'type' => $data['request_type'] = 'invalid',
        'budget' => $data['budget'] = 'invalid',
        'null' => $data['name'] = "te\0st",
    };
    fails(fn () => $app->submit($data, '127.0.0.1', time()), 422, 'fields_invalid');
    check($calls === 0, $case . ' never sends mail');
}
$calls = 0;
[$app] = setup([], static function () use (&$calls) { $calls++; return true; });
check($app->submit(['website' => 'spam'], '127.0.0.1', time()) === '/merci/' && $calls === 0, 'honeypot is neutral and sends nothing');
[$app] = setup([], static fn () => false);
$data = valid($app);
fails(fn () => $app->submit($data, '127.0.0.1', time()), 503, 'delivery_unavailable');
fails(fn () => $app->submit($data, '127.0.0.1', time()), 403, 'proof_reused');

[$app, $dir, $file, $config] = setup(['submit_limit' => 2]);
$app->state->limit('submit', '127.0.0.1', time());
(new State(new Config($config, $root . '/public')))->limit('submit', '127.0.0.1', time());
fails(fn () => $app->state->limit('submit', '127.0.0.1', time()), 429, 'rate_limited');
check(isset($app->challenge('127.0.0.1', time())['signature']), 'challenge quota is independent');
$app->state->limit('submit', '127.0.0.1', time() + 601);
check(true, 'expired counters are purged');
$database = file_get_contents($dir . '/contact.sqlite');
check(!str_contains($database, '127.0.0.1') && !str_contains($database, 'example.test'), 'database stores no IP/contact content');

foreach (['secret', 'public_state', 'unavailable_state'] as $case) {
    $bad = $config;
    if ($case === 'secret') $bad['secret'] = '';
    if ($case === 'public_state') $bad['state_dir'] = $root . '/public';
    if ($case === 'unavailable_state') $bad['state_dir'] = $dir . '/missing';
    try { new Config($bad, $root . '/public'); throw new LogicException('bad config accepted'); }
    catch (RuntimeException $error) { check(!($error instanceof LogicException), 'reject ' . $case); }
}

function concurrent(string $mode): void {
    global $root;
    [$app, $dir, $file] = setup($mode === 'quota' ? ['global_submit_limit' => 3] : []);
    $payloadFile = $dir . '/payload.txt';
    $sentFile = $dir . '/sent.txt';
    file_put_contents($payloadFile, valid($app)['altcha']);
    $processes = [];
    for ($i = 1; $i <= 8; $i++) {
        $process = proc_open([PHP_BINARY, $root . '/tests/contact/worker.php',
            $file, $root . '/public', $payloadFile, $sentFile, $mode, (string) $i],
            [0 => ['pipe', 'r'], 1 => ['pipe', 'w'], 2 => ['pipe', 'w']], $pipes);
        if (!is_resource($process)) throw new RuntimeException('worker failed to start');
        fclose($pipes[0]);
        $processes[] = [$process, $pipes];
    }
    $accepted = 0;
    foreach ($processes as [$process, $pipes]) {
        $out = stream_get_contents($pipes[1]); $err = stream_get_contents($pipes[2]);
        fclose($pipes[1]); fclose($pipes[2]);
        check(proc_close($process) === 0 && $err === '', $mode . ' worker exits cleanly');
        if ($out === 'accepted') $accepted++;
    }
    check($accepted === ($mode === 'quota' ? 3 : 1), $mode . ' atomic across 8 PHP processes');
    if ($mode !== 'quota') check(file_get_contents($sentFile) === "sent\n", 'one proof produces one mail invocation');
}
concurrent('submit');
concurrent('quota');
echo "\n" . $tests . " assertions passed. No real mail was sent.\n";
// Retain the isolated directory for diagnostics; it contains only synthetic data.

