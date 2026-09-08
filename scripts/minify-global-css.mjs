import { readFile, writeFile } from 'node:fs/promises';
import { minify } from 'csso';

const source = new URL('../src/styles/global.css', import.meta.url);
const target = new URL('../src/styles/global.inline.css', import.meta.url);
const css = await readFile(source, 'utf8');

await writeFile(target, minify(css).css + '\n', 'utf8');
