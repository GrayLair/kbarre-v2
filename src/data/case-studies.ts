export type CaseStudyLocale = 'fr' | 'en';
export type CaseStudyDisclosure = 'named-public' | 'self-public' | 'internal-anonymized';

export interface CaseStudyCopy {
  eyebrow: string;
  title: string;
  summary: string;
  contextTitle: string;
  context: string;
  contributionTitle: string;
  contributionIntro: string;
  contribution: string[];
  outcomesTitle: string;
  outcomes: string[];
  limitsTitle: string;
  limits: string;
  backLabel: string;
}

export interface CaseStudy {
  id: string;
  frSlug: string;
  enSlug: string;
  disclosure: CaseStudyDisclosure;
  category: Record<CaseStudyLocale, string>;
  role: Record<CaseStudyLocale, string>;
  image: {
    src: string;
    srcset: string;
    width: number;
    height: number;
    alt: Record<CaseStudyLocale, string>;
  };
  copy: Record<CaseStudyLocale, CaseStudyCopy>;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'romy-paris',
    frSlug: 'romy-paris',
    enSlug: 'romy-paris',
    disclosure: 'named-public',
    category: { fr: 'Beauté · E-commerce', en: 'Beauty · E-commerce' },
    role: { fr: 'Contribution Web · intégration e-commerce', en: 'Web contribution · e-commerce integration' },
    image: {
      src: '/images/optimized/romy-paris-768.webp',
      srcset: '/images/optimized/romy-paris-480.webp 480w, /images/optimized/romy-paris-640.webp 640w, /images/optimized/romy-paris-768.webp 768w',
      width: 768,
      height: 790,
      alt: { fr: 'Aperçu du projet e-commerce Romy Paris', en: 'Preview of the Romy Paris e-commerce project' },
    },
    copy: {
      fr: {
        eyebrow: 'Étude de cas · Romy Paris',
        title: 'Contribuer à une expérience e-commerce de marque.',
        summary: 'Une référence beauté et e-commerce où ma contribution est documentée côté Web et technique. Cette fiche distingue volontairement mon intervention du reste du travail réalisé sur la marque.',
        contextTitle: 'Le contexte',
        context: 'Un projet e-commerce de marque croise contenu, expérience d’achat et contraintes techniques. La référence est publique depuis plusieurs années ; les éléments de travail conservés permettent d’attester une intervention Web sans attribuer à une seule personne l’ensemble de la conception ou des résultats commerciaux.',
        contributionTitle: 'Ma contribution',
        contributionIntro: 'Le périmètre publiable reste volontairement précis et limité.',
        contribution: [
          'Interventions Web et techniques autour du site e-commerce.',
          'Suivi de demandes et d’évolutions liées au fonctionnement du site.',
          'Contribution dans un environnement où contenu, expérience Web et contraintes e-commerce doivent rester cohérents.',
        ],
        outcomesTitle: 'Ce que ce projet démontre',
        outcomes: [
          'Une expérience concrète d’intervention sur un site e-commerce de marque.',
          'La capacité à travailler dans un projet où plusieurs métiers contribuent au résultat final.',
          'Une pratique d’attribution prudente : contribution documentée, sans revendiquer la direction globale ni un résultat commercial non mesuré.',
        ],
        limitsTitle: 'Limite de preuve',
        limits: 'Aucune métrique de conversion, de chiffre d’affaires ou de performance n’est publiée ici. La fiche ne revendique pas non plus la conception exclusive de l’expérience ou de l’identité de marque.',
        backLabel: 'Retour aux réalisations',
      },
      en: {
        eyebrow: 'Case study · Romy Paris',
        title: 'Contributing to a branded e-commerce experience.',
        summary: 'A beauty and e-commerce reference where my contribution is documented on the web and technical side. This page deliberately separates my work from the wider work delivered for the brand.',
        contextTitle: 'Context',
        context: 'A branded e-commerce project combines content, shopping experience and technical constraints. The reference has been public for years; retained project evidence supports a web contribution without attributing the entire design or commercial result to one person.',
        contributionTitle: 'My contribution',
        contributionIntro: 'The publishable scope is intentionally precise and limited.',
        contribution: [
          'Web and technical interventions around the e-commerce site.',
          'Follow-up on requests and changes related to the site’s operation.',
          'Contribution in an environment where content, web experience and e-commerce constraints need to remain coherent.',
        ],
        outcomesTitle: 'What this demonstrates',
        outcomes: [
          'Hands-on experience contributing to a branded e-commerce website.',
          'The ability to work inside a project where several disciplines shape the final result.',
          'Careful attribution: documented contribution without claiming overall creative ownership or an unmeasured commercial result.',
        ],
        limitsTitle: 'Evidence boundary',
        limits: 'No conversion, revenue or performance metric is published here. This case study does not claim exclusive ownership of the experience or brand identity.',
        backLabel: 'Back to selected work',
      },
    },
  },
  {
    id: 'turgis-capital',
    frSlug: 'turgis-capital',
    enSlug: 'turgis-capital',
    disclosure: 'named-public',
    category: { fr: 'Finance · Présence Web', en: 'Finance · Web presence' },
    role: { fr: 'Pilotage Web · coordination technique', en: 'Web project management · technical coordination' },
    image: {
      src: '/images/optimized/turgis-capital-768.webp',
      srcset: '/images/optimized/turgis-capital-480.webp 480w, /images/optimized/turgis-capital-640.webp 640w, /images/optimized/turgis-capital-768.webp 768w',
      width: 768,
      height: 1058,
      alt: { fr: 'Aperçu du site Turgis Capital', en: 'Preview of the Turgis Capital website' },
    },
    copy: {
      fr: {
        eyebrow: 'Étude de cas · Turgis Capital',
        title: 'Tenir ensemble suivi projet et continuité Web.',
        summary: 'Dans un contexte financier, les demandes de contenu, le suivi client et les sujets techniques se croisent. Ma contribution documentée porte sur le pilotage de sujets Web et leur traduction en actions techniques suivies.',
        contextTitle: 'Le contexte',
        context: 'Une présence Web professionnelle doit rester exploitable dans la durée, y compris lorsque les demandes passent par plusieurs interlocuteurs et touchent à la fois au contenu, au fonctionnement du site et à sa continuité technique.',
        contributionTitle: 'Ma contribution',
        contributionIntro: 'Les archives de travail permettent d’étayer un rôle de suivi et de coordination Web sans exposer les détails techniques ou d’accès.',
        contribution: [
          'Suivi de demandes liées au site et à sa présence en ligne.',
          'Coordination et traitement de sujets techniques autour du Web.',
          'Lien entre besoin formulé, action à mener et continuité du suivi.',
        ],
        outcomesTitle: 'Ce que ce projet démontre',
        outcomes: [
          'Un rôle de pont entre demande client, pilotage et exécution technique.',
          'La capacité à garder des sujets Web lisibles lorsqu’ils mêlent maintenance, évolution et coordination.',
          'Une contribution suivie dans un secteur où la prudence sur les informations publiées est particulièrement importante.',
        ],
        limitsTitle: 'Limite de preuve',
        limits: 'Aucune donnée financière, infrastructure sensible, accès technique ou métrique de performance n’est publiée. La fiche reste au niveau de la contribution Web et du pilotage.',
        backLabel: 'Retour aux réalisations',
      },
      en: {
        eyebrow: 'Case study · Turgis Capital',
        title: 'Keeping project follow-up and web continuity connected.',
        summary: 'In a financial context, content requests, client follow-up and technical work intersect. My documented contribution covers web project follow-up and translating those needs into tracked technical actions.',
        contextTitle: 'Context',
        context: 'A professional web presence needs to remain usable over time, including when requests involve several people and span content, site operation and technical continuity.',
        contributionTitle: 'My contribution',
        contributionIntro: 'Retained work evidence supports a web follow-up and coordination role without exposing technical access or infrastructure details.',
        contribution: [
          'Follow-up on requests related to the website and online presence.',
          'Coordination and handling of technical web topics.',
          'Connecting a stated need with the action required and its follow-through.',
        ],
        outcomesTitle: 'What this demonstrates',
        outcomes: [
          'A bridge role between client requests, project management and technical execution.',
          'The ability to keep web work readable when maintenance, change and coordination overlap.',
          'A sustained contribution in a sector where public disclosure needs particular care.',
        ],
        limitsTitle: 'Evidence boundary',
        limits: 'No financial data, sensitive infrastructure, access detail or performance metric is published. The case stays at the level of web contribution and project management.',
        backLabel: 'Back to selected work',
      },
    },
  },
  {
    id: 'kbarre-v2',
    frSlug: 'kbarre-v2',
    enSlug: 'kbarre-v2',
    disclosure: 'self-public',
    category: { fr: 'Produit interne · Refonte Web', en: 'Internal product · Website rebuild' },
    role: { fr: 'Produit · architecture · développement · pilotage', en: 'Product · architecture · development · project leadership' },
    image: {
      src: '/images/optimized/kevin-home-development-960.webp',
      srcset: '/images/optimized/kevin-home-development-480.webp 480w, /images/optimized/kevin-home-development-640.webp 640w, /images/optimized/kevin-home-development-960.webp 960w',
      width: 960,
      height: 1200,
      alt: { fr: 'Kévin Barré travaillant sur le site KBarre', en: 'Kévin Barré working on the KBarre website' },
    },
    copy: {
      fr: {
        eyebrow: 'Étude de cas · KBarre v2',
        title: 'Reprendre un site compromis sans repartir à l’aveugle.',
        summary: 'Mon propre site était devenu à la fois un héritage WordPress ancien et un sujet de reprise SEO après compromission. La refonte sert de cas réel pour appliquer audit, architecture, contenu bilingue et livraison progressive.',
        contextTitle: 'Le contexte',
        context: 'L’ancien site WordPress accumulait dette technique, contenu daté et pollution d’indexation issue d’une compromission. L’objectif n’était pas seulement de refaire une interface, mais de reconstruire une base maîtrisable sans perdre la continuité des URLs, du contenu utile et du référencement.',
        contributionTitle: 'Ma contribution',
        contributionIntro: 'Le projet est entièrement sous ma responsabilité, ce qui permet d’en documenter le périmètre avec plus de précision.',
        contribution: [
          'Audit de l’existant, des routes historiques et des risques de reprise.',
          'Reconstruction du front en Astro avec une architecture statique et maintenable.',
          'Refonte de l’architecture éditoriale FR/EN et ajout de règles de publication NDA-safe.',
          'Organisation d’une roadmap de contenu, SEO, qualité et publication avant les optimisations finales.',
        ],
        outcomesTitle: 'État obtenu',
        outcomes: [
          'Une base Astro bilingue en production locale, avec des routes et contenus désormais explicitement structurés.',
          'Une séparation plus claire entre contenu public, preuves privées et claims publiables.',
          'Un cadre de reprise SEO et de migration qui conserve l’historique utile au lieu de masquer l’ancien site.',
        ],
        limitsTitle: 'Ce qui reste en cours',
        limits: 'Le travail SEO de récupération et les optimisations de performance approfondies ne sont pas présentés comme terminés. Cette fiche documente l’état réellement obtenu, pas la fin supposée de la roadmap.',
        backLabel: 'Retour aux réalisations',
      },
      en: {
        eyebrow: 'Case study · KBarre v2',
        title: 'Recovering a compromised website without rebuilding blindly.',
        summary: 'My own website had become both an ageing WordPress legacy and an SEO recovery problem after compromise. The rebuild is a real case for applying audit, architecture, bilingual content and progressive delivery.',
        contextTitle: 'Context',
        context: 'The previous WordPress site accumulated technical debt, outdated content and index pollution after a compromise. The goal was not simply to redesign the interface, but to rebuild a manageable base without losing useful URL, content and search continuity.',
        contributionTitle: 'My contribution',
        contributionIntro: 'The project is entirely under my ownership, which makes it possible to document the scope more precisely.',
        contribution: [
          'Audit of the existing site, historical routes and recovery risks.',
          'Rebuilding the front end in Astro with a static, maintainable architecture.',
          'Restructuring bilingual FR/EN content and adding NDA-safe publication rules.',
          'Organising a content, SEO, quality and publication roadmap before final optimisation work.',
        ],
        outcomesTitle: 'Current outcome',
        outcomes: [
          'A bilingual Astro base running locally with routes and content now explicitly structured.',
          'A clearer separation between public content, private evidence and publishable claims.',
          'An SEO-recovery and migration frame that preserves useful history instead of hiding the legacy site.',
        ],
        limitsTitle: 'What remains in progress',
        limits: 'SEO recovery work and deeper performance optimisation are not presented as complete. This case documents the state actually reached, not the assumed end of the roadmap.',
        backLabel: 'Back to selected work',
      },
    },
  },
  {
    id: 'multi-agent-rd',
    frSlug: 'orchestration-multi-agents-rd',
    enSlug: 'multi-agent-orchestration-rd',
    disclosure: 'internal-anonymized',
    category: { fr: 'R&D interne · IA', en: 'Internal R&D · AI' },
    role: { fr: 'Conception · orchestration · validation', en: 'Design · orchestration · validation' },
    image: {
      src: '/images/optimized/ia-code-960.webp',
      srcset: '/images/optimized/ia-code-480.webp 480w, /images/optimized/ia-code-960.webp 960w',
      width: 960,
      height: 644,
      alt: { fr: 'Visualisation abstraite associée à un projet interne d’orchestration IA', en: 'Abstract visual associated with an internal AI orchestration project' },
    },
    copy: {
      fr: {
        eyebrow: 'Étude de cas · R&D interne',
        title: 'Distribuer l’exécution sans distribuer la responsabilité.',
        summary: 'Un projet interne de R&D m’a servi à éprouver une orchestration de plusieurs agents spécialisés sous autorité humaine. Le cas public reste volontairement abstrait : il montre les responsabilités et les validations, pas l’architecture privée.',
        contextTitle: 'Le contexte',
        context: 'Dès qu’un projet mélange recherche, production, contrôle et reprise, un seul fil de conversation devient vite un mauvais endroit pour porter tous les rôles. L’enjeu est alors d’organiser plusieurs contextes de travail sans rendre la responsabilité diffuse.',
        contributionTitle: 'Ce que j’ai conçu',
        contributionIntro: 'La description reste au niveau des principes publiables validés par la matrice de preuve privée.',
        contribution: [
          'Des rôles spécialisés et bornés plutôt qu’un agent généraliste chargé de tout.',
          'Du travail parallèle uniquement lorsque les dépendances permettent une vraie indépendance.',
          'Une séparation explicite entre production, vérification et acceptation.',
          'Une autorité humaine conservée sur les objectifs, arbitrages, exceptions et décisions finales.',
        ],
        outcomesTitle: 'Ce que cette R&D démontre',
        outcomes: [
          'La capacité à penser l’IA comme un système de livraison, pas comme une suite de prompts isolés.',
          'Une pratique de coordination où le résultat généré reste distinct de son niveau de validation.',
          'Un cadre réutilisable pour raisonner sur les rôles, dépendances et points de contrôle d’un travail agentique.',
        ],
        limitsTitle: 'Ce qui reste privé',
        limits: 'Aucun identifiant, prompt, règle de coordination privée, architecture d’exécution, topologie interne ou métrique de productivité n’est publié. Le cas ne revendique pas non plus une autonomie totale des agents.',
        backLabel: 'Retour aux réalisations',
      },
      en: {
        eyebrow: 'Case study · Internal R&D',
        title: 'Distribute execution without distributing accountability.',
        summary: 'An internal R&D project let me test the orchestration of several specialised agents under human authority. The public case remains intentionally abstract: it shows responsibilities and validation boundaries, not the private architecture.',
        contextTitle: 'Context',
        context: 'When a project combines research, production, review and recovery, a single conversation quickly becomes a poor place to carry every role. The challenge becomes organising several working contexts without making accountability diffuse.',
        contributionTitle: 'What I designed',
        contributionIntro: 'The description stays at the level of principles approved for publication by the private evidence matrix.',
        contribution: [
          'Specialised bounded roles instead of one general-purpose agent carrying every concern.',
          'Parallel work only where dependencies allow genuine independence.',
          'Explicit separation between generation, verification and acceptance.',
          'Human authority retained over objectives, trade-offs, exceptions and final decisions.',
        ],
        outcomesTitle: 'What this R&D demonstrates',
        outcomes: [
          'The ability to think about AI as a delivery system rather than a sequence of isolated prompts.',
          'A coordination practice where generated output remains distinct from its validation state.',
          'A reusable frame for reasoning about roles, dependencies and control points in agentic work.',
        ],
        limitsTitle: 'What remains private',
        limits: 'No identifier, prompt, private coordination rule, execution architecture, internal topology or productivity metric is published. The case also does not claim full agent autonomy.',
        backLabel: 'Back to selected work',
      },
    },
  },
];

export const portfolioReferences = [
  {
    id: 'virginia-immobilier',
    name: 'Virginia Immobilier',
    category: { fr: 'Immobilier', en: 'Real estate' },
    role: { fr: 'Contribution Web · projet numérique', en: 'Web contribution · digital project' },
    text: {
      fr: 'Une référence immobilière conservée comme exemple de contribution Web. Le niveau de preuve actuel ne justifie pas une fiche détaillée ni un résultat attribué.',
      en: 'A real-estate reference kept as an example of web contribution. Current evidence does not justify a detailed case study or an attributed outcome.',
    },
    image: '/images/projects/virginia-immobilier.webp',
    width: 768,
    height: 902,
    detailId: null,
  },
  {
    id: 'romy-paris',
    name: 'Romy Paris',
    category: { fr: 'Beauté', en: 'Beauty' },
    role: { fr: 'E-commerce · contribution Web', en: 'E-commerce · web contribution' },
    text: {
      fr: 'Une référence e-commerce beauté avec une contribution Web et technique documentée.',
      en: 'A beauty e-commerce reference with documented web and technical contribution.',
    },
    image: '/images/projects/romy-paris.webp',
    width: 768,
    height: 790,
    detailId: 'romy-paris',
  },
  {
    id: 'oxygene-consulting',
    name: 'Oxygène Consulting',
    category: { fr: 'Conseil', en: 'Consulting' },
    role: { fr: 'Référence Web', en: 'Web reference' },
    text: {
      fr: 'Une référence publique dans le conseil. Elle reste volontairement présentée sans claim détaillé tant que les éléments de rôle ne sont pas assez documentés.',
      en: 'A public consulting reference, intentionally presented without a detailed role claim until stronger supporting evidence is reviewed.',
    },
    image: '/images/projects/oxygene-consulting.webp',
    width: 1024,
    height: 862,
    detailId: null,
  },
  {
    id: 'genicado',
    name: 'Genicado',
    category: { fr: 'E-commerce', en: 'E-commerce' },
    role: { fr: 'Référence Web', en: 'Web reference' },
    text: {
      fr: 'Une référence e-commerce publique. La fiche reste limitée au visuel et au contexte tant qu’aucune preuve plus forte n’a été revue.',
      en: 'A public e-commerce reference. It remains limited to visual/context information until stronger evidence has been reviewed.',
    },
    image: '/images/projects/genicado.webp',
    width: 768,
    height: 970,
    detailId: null,
  },
  {
    id: 'turgis-capital',
    name: 'Turgis Capital',
    category: { fr: 'Finance', en: 'Finance' },
    role: { fr: 'Pilotage Web · coordination technique', en: 'Web project management · technical coordination' },
    text: {
      fr: 'Une présence Web dans la finance avec un rôle de suivi et de coordination technique documenté.',
      en: 'A financial-sector web presence with documented project follow-up and technical coordination.',
    },
    image: '/images/projects/turgis-capital.webp',
    width: 768,
    height: 1058,
    detailId: 'turgis-capital',
  },
] as const;

export const getCaseStudyById = (id: string) => caseStudies.find((study) => study.id === id);
export const getCaseStudyBySlug = (locale: CaseStudyLocale, slug: string) =>
  caseStudies.find((study) => (locale === 'fr' ? study.frSlug : study.enSlug) === slug);
export const caseStudyPath = (locale: CaseStudyLocale, study: CaseStudy) =>
  locale === 'fr' ? `/realisations/${study.frSlug}/` : `/en/work/${study.enSlug}/`;
