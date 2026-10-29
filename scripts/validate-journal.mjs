import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { journalEntries, journalPath, readingMinutes } from '../src/data/journal.ts';

const existingIds = new Set(['verify-delivery', 'project-continuity', 'website-redesign']);
const requiredSubjects = [
  'craftsmanship-ai', 'team-pocs', 'ai-rd', 'skill-design', 'api-subscription', 'context-caching',
  'language-choice', 'assembly-ai', 'ai-management', 'cms-static', 'business-app-entry', 'china-ai-market-correction',
];
const wordCount = copy => [copy.introduction, copy.takeaway, ...copy.sections.flatMap(section =>
  [...section.paragraphs, ...(section.checklist ?? [])])].join(' ').trim().split(/\s+/u).length;
const https = value => {
  const url = new URL(value);
  assert.equal(url.protocol, 'https:', `Source URL must use HTTPS: ${value}`);
};

assert.equal(journalEntries.length, 30, 'The target is 30 distinct articles, not 30 translations');
assert.equal(new Set(journalEntries.map(entry => entry.id)).size, journalEntries.length, 'Article IDs must be unique');
for (const id of requiredSubjects) assert(journalEntries.some(entry => entry.id === id), `Missing requested subject: ${id}`);
const paths = new Set();
const report = [];
for (const entry of journalEntries) {
  assert(['draft', 'review', 'publishable', 'published', 'archived'].includes(entry.status), `Unknown publication state: ${entry.id}`);
  if (entry.status === 'published') {
    assert.match(entry.publishedAt ?? '', /^\d{4}-\d{2}-\d{2}$/, `A published article needs a real publication date: ${entry.id}`);
    const date = new Date(`${entry.publishedAt}T00:00:00Z`);
    assert(Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === entry.publishedAt, `Invalid publication date: ${entry.id}`);
  } else if (entry.status !== 'archived') {
    assert.equal(entry.publishedAt, undefined, `Unpublished content must not claim a publication date: ${entry.id}`);
  }
  const row = { id: entry.id, status: entry.status, locales: {} };
  for (const locale of ['fr', 'en']) {
    const copy = entry.copy[locale];
    assert(copy && copy.title && copy.introduction && copy.description && copy.takeaway, `Incomplete ${locale} copy: ${entry.id}`);
    assert.match(copy.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `Invalid slug: ${entry.id}/${locale}`);
    const path = journalPath(entry, locale);
    assert(!paths.has(path), `Duplicate route: ${path}`);
    paths.add(path);
    assert(copy.sections.length >= 4, `Article needs developed sections: ${entry.id}/${locale}`);
    assert(copy.sections.every(section => section.title && section.paragraphs.length && section.paragraphs.every(Boolean)), `Empty section: ${entry.id}/${locale}`);
    assert(copy.service.href.startsWith(locale === 'en' ? '/en/' : '/') && copy.service.label, `Missing service link: ${entry.id}/${locale}`);
    const count = wordCount(copy);
    if (!existingIds.has(entry.id)) {
      assert(count >= (locale === 'fr' ? 600 : 500), `Article too short: ${entry.id}/${locale}, ${count} words`);
      assert((copy.sources?.length ?? 0) >= 2, `Missing factual sources: ${entry.id}/${locale}`);
    }
    const urls = new Set();
    for (const source of copy.sources ?? []) {
      https(source.url);
      assert(source.title && source.publisher && source.accessedAt, `Incomplete reference: ${entry.id}/${locale}`);
      assert(!urls.has(source.url), `Duplicate source: ${entry.id}/${locale}: ${source.url}`);
      urls.add(source.url);
    }
    for (const section of copy.sections) {
      for (const sourceUrl of section.sourceUrls ?? []) assert(urls.has(sourceUrl), `Unresolved source citation: ${entry.id}/${locale}: ${sourceUrl}`);
    }
    for (const video of copy.inspiration ?? []) {
      https(video.url);
      assert(video.title, `Missing inspiration title: ${entry.id}/${locale}`);
    }
    row.locales[locale] = { title: copy.title, path, words: count, minutes: readingMinutes(copy), sources: urls.size, inspirations: copy.inspiration?.length ?? 0 };
  }
  report.push(row);
}
assert.equal(paths.size, journalEntries.length * 2, 'Every article needs its own French and English route');
await mkdir('.qa-artifacts', { recursive: true });
await writeFile('.qa-artifacts/journal-validation.json', JSON.stringify({ articles: report.length, routes: paths.size, report }, null, 2) + '\n');
console.log(`PASS: ${report.length} articles, ${paths.size} locale routes, complete references and source anchors.`);
console.table(report.map(row => ({ id: row.id, fr: row.locales.fr.words, en: row.locales.en.words, sources: row.locales.fr.sources })));
