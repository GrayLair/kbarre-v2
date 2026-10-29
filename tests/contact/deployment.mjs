import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { cp, mkdir, mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve, dirname, basename } from 'node:path';
import { root, php } from './harness.mjs';

const directory = await mkdtemp(resolve(tmpdir(), 'kbarre-deploy-'));
try {
  const publicRoot = resolve(directory, 'www');
  const app = resolve(directory, 'kbarre-contact');
  await mkdir(publicRoot);
  await mkdir(app);
  for (const name of ['bootstrap.php', 'src', 'bin', 'vendor', 'config.example.php']) {
    await cp(resolve(root, 'server/contact', name), resolve(app, name), { recursive: true });
  }
  const init = execFileSync(php, [resolve(app, 'bin/init.php'), publicRoot], { encoding: 'utf8' });
  const configFile = resolve(app, 'config.php');
  const source = await readFile(configFile, 'utf8');
  const secret = source.match(/'secret' => '([a-f0-9]{64})'/)?.[1];
  assert.ok(secret && !init.includes(secret), 'init creates a secret without printing it');
  const second = spawnSync(php, [resolve(app, 'bin/init.php'), publicRoot], { encoding: 'utf8' });
  assert.equal(second.status, 1, 'initialization refuses an existing config');
  assert.equal(await readFile(configFile, 'utf8'), source, 'existing secret remains unchanged');
  const preflight = JSON.parse(execFileSync(php, [resolve(app, 'bin/preflight.php'), configFile, publicRoot], { encoding: 'utf8' }));
  assert.equal(preflight.ok, true);
  assert.equal(preflight.sqlite_lock_between_connections, true);
  assert.equal(preflight.release_ready, false, 'preflight does not claim hosting/mail/accessibility validation');
  execFileSync(php, [resolve(app, 'bin/maintain.php'), configFile, publicRoot]);
  const exposed = spawnSync(php, [resolve(app, 'bin/preflight.php'), configFile, directory], { encoding: 'utf8' });
  assert.equal(exposed.status, 1, 'preflight rejects an app placed inside the document root');
  console.log('Deployment CLI checks passed: exclusive secret creation, private paths, SQLite locking, cleanup, explicit remaining release gates.');
} finally {
  const target = resolve(directory);
  if (dirname(target) !== resolve(tmpdir()) || !basename(target).startsWith('kbarre-deploy-')) throw new Error('Unsafe cleanup target');
  await rm(target, { recursive: true, force: true, maxRetries: 3 });
}

