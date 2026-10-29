import type { Locale } from './i18n';
import type { ContentDocument } from './content';
import type { JournalCopy, JournalEntry } from './journal-types';
import { existingEntries } from './journal/existing.ts';
import { practiceEntries } from './journal/practice.ts';
import { architectureEntries } from './journal/architecture.ts';
import { newsEntries } from './journal/news.ts';
import { inspirationByArticle } from './journal/inspiration.ts';

export type { JournalCopy, JournalEntry } from './journal-types';

const articles: JournalEntry[] = [
  ...practiceEntries, ...architectureEntries, ...newsEntries, ...existingEntries,
];

export const journalEntries: JournalEntry[] = articles.map(entry => {
  const inspiration = inspirationByArticle[entry.id];
  if (!inspiration) return entry;
  return {
    ...entry,
    copy: {
      fr: { ...entry.copy.fr, inspiration },
      en: { ...entry.copy.en, inspiration },
    },
  };
});


export const journalPath = (entry: JournalEntry, locale: Locale) =>
  `${locale === 'en' ? '/en' : ''}/blog/${entry.copy[locale].slug}/`;

export const isJournalPublished = (entry: JournalEntry) =>
  entry.status === 'published' && Boolean(entry.publishedAt);

export const journalDocuments = (entry: JournalEntry, locale: Locale): ContentDocument => ({
  id: `${entry.id}-${locale}`,
  kind: 'article',
  locale,
  translationKey: entry.id,
  slug: entry.copy[locale].slug,
  title: entry.copy[locale].title,
  summary: entry.copy[locale].description,
  status: entry.status,
  seoDescription: entry.copy[locale].description,
  publishedAt: entry.publishedAt,
  noindex: !isJournalPublished(entry),
});

export const visibleJournalEntries = journalEntries.filter(entry =>
  isJournalPublished(entry) || (import.meta.env?.CONTENT_PREVIEW === 'true' && entry.status === 'review'));

export const readingMinutes = (copy: JournalCopy) => {
  const text = [copy.introduction, copy.takeaway, ...copy.sections.flatMap(section =>
    [section.title, ...section.paragraphs, ...(section.checklist ?? [])])].join(' ');
  return Math.max(1, Math.ceil(text.trim().split(/\s+/u).length / 200));
};
