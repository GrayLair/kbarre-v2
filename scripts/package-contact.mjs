import { cp, mkdir, readdir, readFile, writeFile, lstat } from 'node:fs/promises';
import { resolve, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const root = fileURLToPath(new URL('../', import.meta.url));
const sha = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim();
const dirty = execFileSync('git', ['status', '--porcelain', '--untracked-files=no'], { cwd: root, encoding: 'utf8' }).trim() !== '';
const folder = resolve(root, 'release', sha.slice(0, 12) + '-' + Date.now());
await mkdir(folder, { recursive: true });
await cp(resolve(root, 'dist'), resolve(folder, 'www'), { recursive: true, errorOnExist: true, force: false });
const app = resolve(folder, 'kbarre-contact');
await mkdir(app);
for (const name of ['bootstrap.php', 'src', 'bin', 'vendor', 'composer.json', 'composer.lock', 'config.example.php']) {
  await cp(resolve(root, 'server/contact', name), resolve(app, name), { recursive: true, errorOnExist: true, force: false });
}
const files = {};
async function inspect(directory, publicFiles = false) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    const info = await lstat(path);
    if (info.isSymbolicLink()) throw new Error('Symlinks must not be packaged');
    if (entry.isDirectory()) {
      if (publicFiles && ['vendor', 'state', 'kbarre-contact', '.git', 'node_modules'].includes(entry.name)) throw new Error('Private directory in public artifact');
      await inspect(path, publicFiles);
    } else {
      const name = relative(folder, path).replaceAll('\\', '/');
      if (publicFiles) {
        if (/^(?:config\.php|composer\.(?:json|lock)|\.env.*)$/i.test(entry.name) || /\.(?:sqlite|db)(?:-wal|-shm|-journal)?$/i.test(entry.name)) throw new Error('Private data in public artifact');
        if (extname(path) === '.php' && !['www/contact.php', 'www/contact-challenge.php', 'www/contact-runtime.php'].includes(name)) throw new Error('Unexpected PHP in public artifact');
      }
      files[name] = createHash('sha256').update(await readFile(path)).digest('hex');
    }
  }
}
await inspect(resolve(folder, 'www'), true);
await inspect(app);
for (const required of ['www/contact.php', 'www/contact-challenge.php', 'www/contact-runtime.php', 'kbarre-contact/vendor/autoload.php', 'kbarre-contact/bin/preflight.php']) {
  if (!files[required]) throw new Error('Missing runtime file: ' + required);
}
await writeFile(resolve(folder, 'manifest.json'), JSON.stringify({
  schema: 1, source_sha: sha, source_dirty: dirty,
  warning: 'Unconfigured artifact. Provision private config and validate OVH before deployment.',
  files,
}, null, 2) + '\n');
console.log(JSON.stringify({ artifact: relative(root, folder).replaceAll('\\', '/'), source_sha: sha, source_dirty: dirty,
  file_count: Object.keys(files).length, configured: false }));

