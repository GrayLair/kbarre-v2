// Editorial envelope agreed in issue #21. Private evidence references never belong here.
export type ContentStatus = 'draft' | 'review' | 'publishable' | 'published' | 'archived';
export interface ContentDocument {
  id: string;
  kind: 'article' | 'methodology' | 'case-study' | 'capability';
  locale: 'fr' | 'en';
  translationKey: string;
  slug: string;
  title: string;
  summary: string;
  status: ContentStatus;
  seoTitle?: string;
  seoDescription: string;
  publishedAt?: string;
  updatedAt?: string;
  noindex: boolean;
}
