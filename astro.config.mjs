import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const siteUrl = process.env.PUBLIC_SITE_URL ?? 'https://kbarre.fr';

export default defineConfig({
  site: siteUrl,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/lab') && new URL(page).pathname !== '/merci' })],
  build: {
    inlineStylesheets: 'auto',
  },
});
