import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';
import { readFile, rename } from 'node:fs/promises';
import { solveChallenge, pbkdf2 } from 'altcha/lib';
import { harness, fields, post, php, bufferedFetch as fetch } from './harness.mjs';

let checks = 0;
function check(value, label) { assert.ok(value, label); checks++; console.log('PASS ' + label); }
async function payload(server) {
  const response = await fetch(server.base + '/contact-challenge.php');
  assert.equal(response.status, 200);
  const challenge = await response.json();
  const solution = await solveChallenge({ challenge, deriveKey: pbkdf2.deriveKey, timeout: 5000 });
  assert.ok(solution);
  return Buffer.from(JSON.stringify({ challenge, solution })).toString('base64');
}
const app = await harness({ pow_cost: 1, pow_min_counter: 1, pow_max_counter: 3 });
try {
  let response = await fetch(app.base + '/contact.php');
  check(response.status === 405 && response.headers.get('allow') === 'POST', 'direct GET rejected');
  response = await fetch(app.base + '/contact-challenge.php', { method: 'POST' });
  check(response.status === 405 && response.headers.get('allow') === 'GET', 'challenge POST rejected');
  response = await fetch(app.base + '/contact-challenge.php');
  const first = await response.json();
  check(response.headers.get('cache-control').includes('no-store'), 'challenges never cached');
  const second = await (await fetch(app.base + '/contact-challenge.php')).json();
  check(first.parameters.nonce !== second.parameters.nonce, 'fresh challenge per request');

  response = await post(app, fields());
  check(response.status === 403 && (await response.json()).code === 'proof_invalid', 'direct POST cannot bypass proof');
  response = await post(app, fields(), { json: false });
  const html = await response.text();
  check(response.status === 403 && html.includes('lang="en"') && html.includes('/en/contact/'), 'HTML fallback is localized');
  response = await post(app, { ...fields(), 'name[]': 'array' });
  check(response.status === 422, 'array input rejected');
  response = await post(app, { ...fields(), email: 'a@example.test\r\nBcc: victim@example.test' });
  check(response.status === 422, 'header injection rejected');
  response = await post(app, { ...fields(), message: 'x'.repeat(33000) });
  check(response.status === 413, 'oversized raw body rejected');
  response = await fetch(app.base + '/contact.php', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: '{}' });
  check(response.status === 415, 'unsupported content type rejected');
  check(await app.sent() === 0, 'all negative requests sent no mail');

  const proof = await payload(app);
  response = await post(app, { ...fields(), altcha: proof });
  check(response.status === 200 && (await response.json()).redirect === '/en/thank-you/', 'JS library proof accepted by PHP');
  check(await app.sent() === 1, 'one positive request reaches test transport');
  response = await post(app, { ...fields(), altcha: proof });
  check(response.status === 403 && (await response.json()).code === 'proof_reused' && await app.sent() === 1, 'HTTP replay sends no second message');
  response = await post(app, { ...fields('fr'), altcha: await payload(app) }, { json: false });
  check(response.status === 303 && response.headers.get('location') === '/merci/', 'non-JSON success uses 303');

  const failingProof = await payload(app);
  response = await post(app, { ...fields(), altcha: failingProof }, { path: '/_test/mail-failure/contact.php' });
  check(response.status === 503 && (await response.json()).code === 'delivery_unavailable', 'mail failure is explicit');
  response = await post(app, { ...fields(), altcha: failingProof });
  check(response.status === 403 && (await response.json()).code === 'proof_reused', 'failed delivery still consumes proof');

  // A real SQLite write lock forces the backend storage-failure path.
  const lock = spawn(php, ['-r', '$db = new PDO("sqlite:" . $argv[1]); $db->exec("BEGIN IMMEDIATE"); echo "locked\\n"; flush(); sleep(4); $db->exec("ROLLBACK");', resolve(app.directory, 'contact.sqlite')], { windowsHide: true });
  await new Promise((done, reject) => { lock.stdout.once('data', done); lock.once('error', reject); });
  response = await fetch(app.base + '/contact-challenge.php');
  check(response.status === 503 && (await response.json()).code === 'service_unavailable', 'locked storage fails closed');
  if (lock.exitCode === null) await new Promise(done => lock.once('exit', done));
  check(!app.logs().includes('synthetic@example.test') && !app.logs().includes(fields().message), 'request logs omit contact contents');
} finally { await app.stop(); }

const limited = await harness({ submit_limit: 2, challenge_limit: 1 });
try {
  await post(limited, fields()); await post(limited, fields());
  const response = await post(limited, fields(), { headers: { Accept: 'application/json', 'X-Forwarded-For': '198.51.100.42' } });
  check(response.status === 429 && Number(response.headers.get('retry-after')) > 0, 'spoofed proxy header does not bypass quota');
  check((await fetch(limited.base + '/contact-challenge.php')).status === 200, 'challenge quota separate from POST quota');
  check((await fetch(limited.base + '/contact-challenge.php')).status === 429, 'challenge endpoint independently throttled');
} finally { await limited.stop(); }

// Real production loader; negative requests only, so mail() is never reached.
const production = await harness({}, true);
try {
  check((await post(production, fields())).status === 403, 'actual public loader enforces proof');
  const response = await fetch(production.base + '/contact-runtime.php');
  check(response.status === 404, 'shared loader cannot be invoked directly');
  const privateResponse = await fetch(production.base + '/kbarre-contact/config.php');
  const privateValues = JSON.parse(await readFile(resolve(production.directory, 'config.json'), 'utf8'));
  // The PHP dev server may return the public index for unknown paths; assert
  // non-disclosure instead of treating that fallback as private-file access.
  check(!(await privateResponse.text()).includes(privateValues.secret), 'private config secret is not HTTP-accessible');
  await rename(production.configFile, production.configFile + '.absent');
  const missing = await post(production, fields());
  const missingBody = await missing.text();
  check(missing.status === 503 && !missingBody.includes(production.directory), 'missing config fails closed without leaking its path');
} finally { await production.stop(); }

console.log(checks + ' HTTP assertions passed. No real mail sent.');

