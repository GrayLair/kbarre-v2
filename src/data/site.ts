export const site = {
  name: "Ꝃ'Barré",
  person: 'Kévin Barré',
  url: import.meta.env.PUBLIC_SITE_URL ?? 'https://kbarre.fr',
  email: 'contact@kbarre.fr',
  phoneDisplay: '07 69 79 94 23',
  phoneHref: '+33769799423',
  linkedin: 'https://www.linkedin.com/in/k%C3%A9vin-barr%C3%A9-324610148/',
  location: 'Nantes · France · À distance',
  description:
    "Professionnel indépendant du numérique à Nantes : création média assistée par IA, sites Web, formation IA et pilotage de projet, sur site ou à distance.",
};

export const navigation = [
  { href: '/ia-automatisation/', label: 'IA & automatisation' },
  { href: '/creation-media-ia/', label: 'Création média' },
  { href: '/pilotage-digital/', label: 'Pilotage de projet' },
  { href: '/sites-web-premium/', label: 'Sites Web' },
  { href: '/realisations/', label: 'Réalisations' },
  { href: '/blog/', label: 'Blog' },
];

export const navigationEn = [
  { href: '/en/ai-automation/', label: 'AI & automation' },
  { href: '/en/media-creation-ai/', label: 'Media creation' },
  { href: '/en/digital-project-management/', label: 'Project management' },
  { href: '/en/premium-websites/', label: 'Websites' },
  { href: '/en/work/', label: 'Work' },
  { href: '/en/blog/', label: 'Blog' },
];

export const capabilities = [
  {
    number: '01',
    title: 'Former à l’IA utile',
    text: 'Des formations concrètes, adaptées aux métiers, pour passer de la curiosité aux usages maîtrisés.',
    href: '/ia-automatisation/#formation',
    icon: '/images/kit/code-mark.svg',
  },
  {
    number: '02',
    title: 'Orchestrer les bons outils',
    text: 'Des workflows, agents et automatisations pensés pour les équipes, les contraintes et les résultats attendus.',
    href: '/ia-automatisation/#orchestration',
    icon: '/images/kit/interface-map.svg',
  },
  {
    number: '03',
    title: 'Faire aboutir les projets',
    text: 'Cadrage, coordination, intégration Web et accompagnement à l’adoption — du besoin à la mise en pratique.',
    href: '/pilotage-digital/',
    icon: '/images/kit/arrow-progress.svg',
  },
];

export const method = [
  {
    number: '01',
    title: 'Comprendre',
    text: 'Clarifier le besoin, les personnes concernées, le contexte et les critères de réussite.',
  },
  {
    number: '02',
    title: 'Structurer',
    text: 'Tracer une voie réaliste : priorités, outils, planning, rôles et livrables.',
  },
  {
    number: '03',
    title: 'Orchestrer',
    text: 'Faire avancer les bonnes personnes au bon rythme, sans perdre l’objectif de vue.',
  },
  {
    number: '04',
    title: 'Ancrer',
    text: 'Transmettre, documenter et mesurer pour que la solution vive après le projet.',
  },
];
