import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { journalEntries, journalPath, isJournalPublished } from './src/data/journal.ts';

const siteUrl = process.env.PUBLIC_SITE_URL ?? 'https://kbarre.fr';
const publicArticles = journalEntries.filter(isJournalPublished);
const publicBlogPaths = new Set(publicArticles.flatMap(entry => [journalPath(entry, 'fr'), journalPath(entry, 'en')]));
if (publicArticles.length) { publicBlogPaths.add('/blog/'); publicBlogPaths.add('/en/blog/'); }

export default defineConfig({
  site: siteUrl,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => {
    const path = new URL(page).pathname;
    if (path.startsWith('/lab') || path === '/merci/') return false;
    if (path.startsWith('/blog/') || path.startsWith('/en/blog/')) return publicBlogPaths.has(path);
    return true;
  } })],
  build: {
    inlineStylesheets: 'auto',
  },
});
