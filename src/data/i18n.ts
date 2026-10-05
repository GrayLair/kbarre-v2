export type Locale = 'fr' | 'en';

const englishPaths: Record<string, string> = {
  '/': '/en',
  '/ia-automatisation': '/en/ai-automation',
  '/orchestration-agents-ia': '/en/agent-orchestration',
  '/creation-media-ia': '/en/media-creation-ai',
  '/pilotage-digital': '/en/digital-project-management',
  '/pilotage-projet-complexe': '/en/project-leadership',
  '/sites-web-premium': '/en/premium-websites',
  '/realisations': '/en/work',
  '/realisations/romy-paris': '/en/work/romy-paris',
  '/realisations/turgis-capital': '/en/work/turgis-capital',
  '/realisations/kbarre-v2': '/en/work/kbarre-v2',
  '/realisations/orchestration-multi-agents-rd': '/en/work/multi-agent-orchestration-rd',
  '/profil': '/en/profile',
  '/contact': '/en/contact',
  '/consultant-digital-nantes': '/en/digital-consultant-nantes',
  '/merci': '/en/thank-you',
  '/mentions-legales': '/en/legal-notice',
  '/confidentialite': '/en/privacy',
};

const frenchPaths = Object.fromEntries(
  Object.entries(englishPaths).map(([frenchPath, englishPath]) => [englishPath, frenchPath]),
);

const normalize = (path: string) => {
  const cleaned = path.replace(/\/$/, '');
  return cleaned || '/';
};

const withTrailingSlash = (path: string) => path === '/' ? '/' : path.replace(/\/$/, '') + '/';

export const toEnglishPath = (path: string) => withTrailingSlash(englishPaths[normalize(path)] ?? '/en');
export const toFrenchPath = (path: string) => withTrailingSlash(frenchPaths[normalize(path)] ?? '/');
