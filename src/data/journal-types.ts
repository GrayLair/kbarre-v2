import type { Locale } from './i18n';
import type { ContentStatus } from './content';

export interface JournalSource {
  title: string;
  url: string;
  publisher: string;
  accessedAt: string;
}

export interface JournalInspiration {
  title: string;
  url: string;
  publishedAt?: string;
}

export interface JournalSection {
  title: string;
  paragraphs: string[];
  checklist?: string[];
  sourceUrls?: string[];
}

export interface JournalCopy {
  slug: string;
  title: string;
  description: string;
  category: string;
  introduction: string;
  sections: JournalSection[];
  takeaway: string;
  service: { href: string; label: string };
  sources?: JournalSource[];
  inspiration?: JournalInspiration[];
}

export interface JournalEntry {
  id: string;
  preparedAt: string;
  publishedAt?: string;
  status: ContentStatus;
  copy: Record<Locale, JournalCopy>;
}
