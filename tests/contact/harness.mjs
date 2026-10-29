import { spawn, execFileSync } from 'node:child_process';
import { mkdtemp, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'node:net';
import { randomBytes } from 'node:crypto';

export const root = fileURLToPath(new URL('../../', import.meta.url));
export const php = process.env.PHP_BINARY || 'php';

// Drain local HTTP bodies before closing the test server. Node 24.20's bundled
// undici can assert when a PHP connection closes with an unread paused body.
export async function bufferedFetch(url, options) {
  const response = await fetch(url, options);
  const body = await response.arrayBuffer();
  return new Response(body, { status: response.status, headers: response.headers });
}

export async function harness(overrides = {}, production = false) {
  const directory = await mkdtemp(resolve(tmpdir(), 'kbarre-http-'));
  const defaults = JSON.parse(execFileSync(php, ['-r', 'echo json_encode(require $argv[1]);', resolve(root, 'server/contact/config.example.php')], { encoding: 'utf8' }));
  const config = { ...defaults, secret: randomBytes(32).toString('hex'), state_dir: directory,
    challenge_limit: 1000, submit_limit: 1000, global_challenge_limit: 2000, global_submit_limit: 2000, ...overrides };
  await writeFile(resolve(directory, 'config.json'), JSON.stringify(config));
  const configFile = resolve(directory, 'config.php');
  await writeFile(configFile, "<?php return json_decode(file_get_contents(__DIR__ . '/config.json'), true, 512, JSON_THROW_ON_ERROR);");
  const sentFile = resolve(directory, 'sent.txt');
  const listener = createServer();
  const port = await new Promise((done, reject) => {
    listener.once('error', reject);
    listener.listen(0, '127.0.0.1', () => done(listener.address().port));
  });
  await new Promise(done => listener.close(done));
  const args = ['-S', '127.0.0.1:' + port, '-t', 'dist'];
  if (!production) args.push('tests/contact/router.php');
  const child = spawn(php, args, {
    cwd: root, windowsHide: true,
    env: { ...process.env, KBARRE_TEST_CONFIG: configFile, KBARRE_TEST_SENT_FILE: sentFile,
      KBARRE_CONTACT_BOOTSTRAP: resolve(root, 'server/contact/bootstrap.php'),
      KBARRE_CONTACT_CONFIG: configFile },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  let logs = '';
  child.stdout.on('data', b => { logs += b; });
  child.stderr.on('data', b => { logs += b; });
  const base = 'http://127.0.0.1:' + port;
  try {
    let started = false;
    for (let i = 0; i < 100; i++) {
      if (child.exitCode !== null) throw new Error('PHP server exited');
      try {
        const response = await fetch(base + '/contact/');
        await response.arrayBuffer();
        if (response.ok) { started = true; break; }
      } catch {}
      await new Promise(done => setTimeout(done, 50));
    }
    if (!started) throw new Error('PHP server startup timed out');
  } catch (error) {
    child.kill();
    throw error;
  }
  return {
    base, directory, configFile, child,
    async sent() {
      try { return (await readFile(sentFile, 'utf8')).trim().split('\n').filter(Boolean).length; }
      catch (error) { if (error.code === 'ENOENT') return 0; throw error; }
    },
    logs: () => logs,
    async stop() {
      await new Promise(done => {
        if (child.exitCode !== null) return done();
        child.once('exit', done); child.kill();
      });
      const target = resolve(directory);
      if (dirname(target) !== resolve(tmpdir()) || !basename(target).startsWith('kbarre-http-')) {
        throw new Error('Refusing cleanup outside the test temporary directory');
      }
      await rm(target, { recursive: true, force: true, maxRetries: 3 });
    },
  };
}

export function fields(locale = 'en') {
  return { name: 'Élodie synthetic test', email: 'synthetic@example.test',
    message: 'A synthetic legitimate project request, kept only inside this test.',
    request_type: locale === 'en' ? 'Other' : 'Autre', locale };
}

export async function post(server, data, { path = '/contact.php', json = true, ...options } = {}) {
  return bufferedFetch(server.base + path, {
    method: 'POST', body: new URLSearchParams(data),
    headers: json ? { Accept: 'application/json' } : {},
    redirect: 'manual', ...options,
  });
}

