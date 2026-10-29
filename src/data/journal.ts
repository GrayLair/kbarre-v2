import type { Locale } from './i18n';
import type { ContentDocument, ContentStatus } from './content';

export interface JournalCopy {
  slug: string;
  title: string;
  description: string;
  category: string;
  introduction: string;
  sections: { title: string; paragraphs: string[]; checklist?: string[] }[];
  takeaway: string;
  service: { href: string; label: string };
}

export interface JournalEntry {
  id: string;
  preparedAt: string;
  publishedAt?: string;
  status: ContentStatus;
  copy: Record<Locale, JournalCopy>;
}

// Public editorial copy only. Source inventories and private project details stay outside this repository.
export const journalEntries: JournalEntry[] = [
  {
    id: 'verify-delivery',
    preparedAt: '2026-10-29',
    status: 'review',
    copy: {
      fr: {
        slug: 'agents-ia-verifier-avant-de-livrer',
        title: 'Agents IA : que vérifier avant de livrer ?',
        description: 'Définir les critères d’acceptation, relire le travail produit et vérifier le livrable exact : une approche concrète de la qualité avec les agents IA.',
        category: 'IA & qualité',
        introduction: 'Dans ma pratique de projets assistés par IA, une question revient : quelle preuve permet de considérer ce travail comme utilisable ? Une réponse convaincante ou un fichier produit constitue un point de départ. L’acceptation demande un examen du résultat et de ses limites.',
        sections: [
          { title: 'Écrire ce qui doit être vrai à la fin', paragraphs: [
            'Avant de déléguer, je précise le résultat attendu et la manière de le vérifier. Pour une page Web, cela peut être un parcours de contact accessible sur mobile, une version anglaise cohérente ou des liens qui aboutissent à la bonne destination. Ces critères rendent la demande plus utile qu’une consigne générale comme « améliore cette page ».',
            'Le contrôle doit correspondre au besoin. Une relecture du texte répond à une question éditoriale ; une vérification dans le navigateur répond à une question d’usage. Les deux peuvent être nécessaires. Le simple fait qu’un outil ait terminé son exécution ne répond à aucune de ces questions à lui seul.',
          ] },
          { title: 'Donner un regard distinct à la vérification', paragraphs: [
            'La personne ou l’agent qui produit le travail dispose déjà de son interprétation du problème. Organiser une relecture distincte permet de confronter cette interprétation à la demande initiale, aux contraintes et aux effets sur le reste du projet.',
            'Je demande à la relecture de relever des écarts observables : un comportement manquant, une affirmation sans source, une dépendance oubliée. Cette séparation aide à détecter les angles morts ; elle conserve toute sa valeur lorsque le même humain reste responsable de l’arbitrage final.',
          ] },
          { title: 'Vérifier la version qui sera réellement utilisée', paragraphs: [
            'Un contrôle porte sur un état précis du livrable. Si le texte, le code ou une dépendance change ensuite, il faut déterminer si le résultat du contrôle couvre encore la version proposée. La preuve doit rester rattachée au travail effectivement présenté.',
            'Un contrôle automatisé encore en cours reste une attente. Un contrôle ciblé réussi confirme le périmètre qu’il examine. Présenter ces états avec précision permet au responsable du projet de décider avec les bonnes informations.',
          ], checklist: ['Quel critère le contrôle examine-t-il ?', 'Quelle version du livrable a été contrôlée ?', 'Quelles limites ou dépendances restent ouvertes ?', 'Qui accepte le résultat et décide de la suite ?'] },
          { title: 'Garder un niveau de contrôle proportionné', paragraphs: [
            'Une correction de formulation, une nouvelle intégration et une mise en production n’ont pas les mêmes conséquences. J’adapte l’effort de vérification à l’impact du changement, à sa réversibilité et aux personnes concernées.',
            'Le livrable utile comprend aussi un compte rendu clair : ce qui a changé, ce qui a été vérifié et ce qui reste à confirmer. Cette information facilite la transmission, les décisions et la maintenance après la livraison.',
          ] },
        ],
        takeaway: 'Pour votre prochain essai avec un agent, commencez par une tâche bornée et un critère d’acceptation observable. Convenez du contrôle et du responsable de l’acceptation avant de lancer la production.',
        service: { href: '/orchestration-agents-ia/', label: 'Voir mon approche de l’orchestration d’agents' },
      },
      en: {
        slug: 'ai-agents-verify-before-delivery',
        title: 'AI agents: what should you verify before delivery?',
        description: 'Acceptance criteria, independent review and checks against the actual deliverable: a practical approach to quality in AI-assisted projects.',
        category: 'AI & quality',
        introduction: 'In my AI-assisted project work, one question keeps coming back: what evidence makes this output usable? A convincing answer or a generated file starts the process. Acceptance requires examining the result and understanding its limits.',
        sections: [
          { title: 'Define the expected result first', paragraphs: [
            'Before delegating, I describe the outcome and how it can be checked. For a website, this might mean a usable mobile contact journey, a consistent English version or links reaching the intended destinations. These criteria make a request more useful than a broad instruction to improve a page.',
            'The check must answer the right question. Editorial review examines the copy; a browser check examines the experience. Both may be needed. A tool completing its execution does not establish either outcome on its own.',
          ] },
          { title: 'Give verification a separate perspective', paragraphs: [
            'The person or agent producing the work already has an interpretation of the problem. A separate review can compare that interpretation with the original request, constraints and effects on the rest of the project.',
            'I ask reviewers to identify observable gaps: missing behaviour, an unsupported claim or an overlooked dependency. A separate perspective helps uncover blind spots while an identifiable human remains responsible for final acceptance.',
          ] },
          { title: 'Check the version people will actually use', paragraphs: [
            'A check applies to a particular state of the deliverable. When the copy, code or a dependency changes afterwards, its coverage needs to be reconsidered. The evidence should remain attached to the work being presented.',
            'An automated check that is still running remains pending. A successful targeted check establishes its own scope. Clear reporting helps the project owner decide using accurate information.',
          ], checklist: ['Which criterion does this check examine?', 'Which version was checked?', 'What limits or dependencies remain open?', 'Who accepts the result and decides the next step?'] },
          { title: 'Match the review effort to the impact', paragraphs: [
            'A wording correction, a new integration and a production release have different consequences. I adjust verification to the impact, reversibility and people affected by the change.',
            'A useful delivery also includes a clear account of what changed, what was verified and what still needs confirmation. This supports decisions, handovers and future maintenance.',
          ] },
        ],
        takeaway: 'For your next agent-assisted task, choose a bounded scope and an observable acceptance criterion. Agree on the check and the person responsible for acceptance before production starts.',
        service: { href: '/en/agent-orchestration/', label: 'Explore my approach to agent orchestration' },
      },
    },
  },
  {
    id: 'project-continuity',
    preparedAt: '2026-10-29',
    status: 'review',
    copy: {
      fr: {
        slug: 'reprendre-un-projet-numerique',
        title: 'Reprendre un projet numérique sans repartir de zéro',
        description: 'Auditer l’existant, distinguer les faits des suppositions et documenter la prochaine action pour reprendre un projet avec un état fiable.',
        category: 'Pilotage de projet',
        introduction: 'Après une interruption ou un changement d’intervenant, un projet laisse souvent beaucoup de traces : documents, tickets, fichiers et échanges. Le premier travail consiste à comprendre lesquelles décrivent encore la situation actuelle. C’est ce qui permet de reprendre avec une direction claire.',
        sections: [
          { title: 'Partir de ce qui existe vraiment', paragraphs: [
            'Je commence par comparer le besoin, les livrables disponibles et les validations conservées. Un document peut décrire une intention jamais réalisée. Un fichier peut avoir été produit sans être utilisé. Une tâche clôturée peut encore dépendre d’un accord extérieur.',
            'Cette lecture aboutit à un état simple : ce qui existe, ce qui a été vérifié, ce qui manque et ce qui reste incertain. Les inconnues gardent leur place dans le suivi jusqu’à ce qu’une observation ou une décision permette de les résoudre.',
          ] },
          { title: 'Retrouver les décisions et les dépendances', paragraphs: [
            'Une ancienne décision reste utile lorsqu’on comprend sa raison et les contraintes qui l’ont motivée. Je conserve ce contexte dans une forme courte : choix retenu, raison, limite connue et éventuelle condition de réexamen.',
            'Je repère ensuite les dépendances : contenu attendu, accès nécessaire, validation métier ou intégration à terminer. On peut alors distinguer les sujets qui peuvent avancer en parallèle de ceux qui doivent attendre. Le planning retrouve un lien avec la situation réelle.',
          ] },
          { title: 'Écrire une prochaine action exécutable', paragraphs: [
            '« Continuer la refonte » laisse trop de décisions implicites. « Vérifier les destinations des anciennes pages avant de finaliser la navigation » donne un point de départ et un résultat observable. La précision réduit l’effort de compréhension pour la personne qui reprend.',
            'Une transmission utile tient dans quelques informations que l’on peut relire rapidement. Je préfère un point de reprise court et actuel à un historique exhaustif dont il faut reconstituer les conclusions.',
          ], checklist: ['Objectif et périmètre actuels.', 'Livrables disponibles et niveau de vérification.', 'Décisions prises et contraintes encore valables.', 'Dépendances ou questions ouvertes, avec leur responsable.', 'Prochaine action et critère permettant de la terminer.'] },
          { title: 'Entretenir la continuité pendant le travail', paragraphs: [
            'Le point de reprise évolue après une décision ou une vérification importante. Il peut vivre dans les outils déjà utilisés par l’équipe, près du travail concerné. Son utilité dépend de sa clarté et de sa fraîcheur.',
            'Cette discipline sert aussi dans un projet individuel : elle permet de quitter un sujet, d’en traiter un autre puis de retrouver le fil sans devoir relire tous les échanges. Pour une équipe, elle facilite les relais et rend les arbitrages plus compréhensibles.',
          ] },
        ],
        takeaway: 'Avant de relancer un projet interrompu, faites valider un état de reprise court. Il doit permettre à un nouvel intervenant de comprendre ce qui est fiable et de commencer une action précise.',
        service: { href: '/pilotage-projet-complexe/', label: 'Découvrir le pilotage par état vérifié' },
      },
      en: {
        slug: 'resume-a-digital-project',
        title: 'Resuming a digital project without starting over',
        description: 'Audit existing work, separate facts from assumptions and document the next action to resume a project from a reliable state.',
        category: 'Project management',
        introduction: 'After a pause or a change of contributor, a project often leaves many traces: documents, tickets, files and conversations. The first task is to identify which ones still describe the current situation. That creates a clear starting point for the work ahead.',
        sections: [
          { title: 'Start with what actually exists', paragraphs: [
            'I compare the current need with available deliverables and retained validations. A document may describe an intention that was never implemented. A file may have been produced without being used. A closed task may still depend on an external decision.',
            'The result is a simple view of what exists, what was checked, what is missing and what remains uncertain. Unknowns stay visible until an observation or decision resolves them.',
          ] },
          { title: 'Recover decisions and dependencies', paragraphs: [
            'A previous decision remains useful when its rationale and constraints are understood. I preserve that context briefly: the choice, its reason, known limits and any condition that would justify revisiting it.',
            'Next, I identify dependencies such as pending content, required access, business approval or unfinished integration. This shows which tasks can progress independently and which need to wait.',
          ] },
          { title: 'Write an actionable next step', paragraphs: [
            '“Continue the redesign” leaves too many decisions implicit. “Check where the old pages should lead before finalising navigation” gives the next contributor a starting point and an observable result.',
            'A useful handover contains a few details that are easy to review. I prefer a short, current continuation note to a complete history whose conclusions must be reconstructed.',
          ], checklist: ['Current objective and scope.', 'Available deliverables and their verification state.', 'Decisions and constraints that still apply.', 'Open dependencies or questions and their owners.', 'Next action and its completion criterion.'] },
          { title: 'Maintain continuity as the work progresses', paragraphs: [
            'The continuation note evolves after significant decisions and checks. It can live in the team’s existing tools, close to the work concerned. Its usefulness depends on clarity and freshness.',
            'This also helps with individual projects: you can leave a topic, address another and return without rereading every conversation. Within a team, it makes handovers and trade-offs easier to understand.',
          ] },
        ],
        takeaway: 'Before restarting a paused project, agree on a short recovery note. It should help a new contributor understand what is reliable and begin a specific action.',
        service: { href: '/en/project-leadership/', label: 'Explore project leadership through verified state' },
      },
    },
  },
  {
    id: 'website-redesign',
    preparedAt: '2026-10-29',
    status: 'review',
    copy: {
      fr: {
        slug: 'refonte-web-contenus-parcours-validation',
        title: 'Refonte Web : commencer par les contenus et les parcours',
        description: 'Une refonte relie inventaire des contenus, anciennes URLs, versions linguistiques et vérification mobile avant la mise en ligne.',
        category: 'Web & contenus',
        introduction: 'La refonte de mon propre site me sert de terrain concret pour relier positionnement, contenu, architecture et vérification. Le dessin des pages prend son sens lorsque je sais ce que le visiteur doit comprendre, trouver et pouvoir faire. Cette réflexion commence avec l’existant.',
        sections: [
          { title: 'Faire l’inventaire avant de réécrire', paragraphs: [
            'Je commence par les pages, les références, les contenus utiles et les anciennes adresses. Pour chaque élément, la question est pratique : faut-il le conserver, le réécrire, le regrouper ou le retirer ? Une ancienne page peut encore répondre à un besoin même si sa présentation a vieilli.',
            'Cet inventaire permet aussi de vérifier les affirmations : rôle réel sur une réalisation, droit de nommer un client, résultat effectivement mesuré. Une page convaincante repose sur des contributions que l’on peut expliquer. Les exemples sensibles demandent une formulation anonymisée ou restent hors du site.',
          ] },
          { title: 'Organiser les pages autour des questions du visiteur', paragraphs: [
            'Une page de service explique à qui l’accompagnement s’adresse, quel problème il traite et comment commencer. Une réalisation apporte du contexte sur une contribution. Un article développe une question précise et peut aider le lecteur à préparer son propre projet.',
            'Les liens entre ces contenus prolongent la lecture : depuis un article sur la reprise de projet vers l’approche de pilotage, ou depuis une présentation générale vers un cas concret. Le parcours de contact reste accessible lorsque la personne souhaite échanger.',
          ] },
          { title: 'Prévoir les langues et la continuité des adresses', paragraphs: [
            'Une version anglaise demande des titres, des liens et des textes cohérents dans la langue choisie. Le changement de langue doit conduire au contenu équivalent. Les adresses de référence et les informations destinées aux moteurs de recherche doivent suivre la même logique.',
            'Pour les anciennes URLs, je définis une destination pertinente lorsqu’un contenu se déplace. Les adresses sans équivalent demandent une décision explicite. Le traitement dépend de l’historique et de l’utilité du contenu ; une refonte ne permet pas, à elle seule, de promettre une évolution du trafic.',
          ] },
          { title: 'Relire le site comme un visiteur', paragraphs: [
            'Avant la mise en ligne, je parcours les pages sur petit et grand écran. Je vérifie la lisibilité, les titres, les liens, le changement de langue et l’accès au contact. Une construction technique réussie doit être complétée par cette lecture du résultat rendu.',
            'Je garde une liste courte des contrôles réalisés et des points encore ouverts. Elle aide à choisir ce qui peut être présenté, ce qui demande une correction et ce qui devra être observé après la mise en ligne.',
          ], checklist: ['Le visiteur comprend-il l’offre et le rôle tenu sur les réalisations ?', 'Les liens et anciennes adresses mènent-ils à une destination pertinente ?', 'Les versions linguistiques se correspondent-elles ?', 'Le contenu reste-t-il lisible et utilisable sur mobile ?', 'Les affirmations sont-elles étayées et publiables ?'] },
        ],
        takeaway: 'Pour cadrer une refonte, rassemblez d’abord vos contenus, vos anciennes URLs et les questions de vos visiteurs. Ce socle permet de décider de l’arborescence et des priorités de réalisation.',
        service: { href: '/sites-web-premium/', label: 'Parler d’une création ou refonte de site' },
      },
      en: {
        slug: 'website-redesign-content-journeys-validation',
        title: 'Website redesign: start with content and user journeys',
        description: 'Connect the content inventory, existing URLs, language versions and mobile checks before launching a redesigned website.',
        category: 'Web & content',
        introduction: 'Redesigning my own website gives me a practical setting for connecting positioning, content, architecture and verification. Page design becomes meaningful when I know what a visitor needs to understand, find and do. That work starts with the existing site.',
        sections: [
          { title: 'Take inventory before rewriting', paragraphs: [
            'I begin with pages, references, useful content and existing addresses. For each item, the decision is practical: keep, rewrite, combine or remove it. An old page may still meet a need even when its presentation has become dated.',
            'The inventory also provides an opportunity to check claims: the actual contribution to a project, permission to name a client and results that were measured. Sensitive examples need anonymised wording or remain outside the site.',
          ] },
          { title: 'Build pages around visitor questions', paragraphs: [
            'A service page explains who the work is for, which problem it addresses and how to start. A case study provides context about a contribution. An article explores a specific question and helps readers prepare their own projects.',
            'Links connect these purposes: from an article on project recovery to the delivery approach, or from an overview to a concrete example. Contact remains accessible whenever a reader wants to discuss their situation.',
          ] },
          { title: 'Plan language versions and URL continuity', paragraphs: [
            'An English version needs consistent titles, links and copy in that language. The language switch should reach equivalent content. Canonical addresses and search metadata should follow the same logic.',
            'When content moves, I identify a relevant destination for its previous address. URLs without an equivalent require an explicit decision. The treatment depends on history and usefulness; redesigning a website alone cannot establish a future traffic result.',
          ] },
          { title: 'Read the website as a visitor', paragraphs: [
            'Before launch, I browse the pages on small and large screens. I check readability, headings, links, language switching and access to contact. A successful technical build needs this additional examination of the rendered experience.',
            'I keep a short record of completed checks and open points. It helps decide what can be presented, what needs correction and what should be observed after launch.',
          ], checklist: ['Can visitors understand the offer and the contribution shown in each case study?', 'Do links and old addresses reach relevant destinations?', 'Do the language versions correspond?', 'Is the content readable and usable on mobile?', 'Are the claims supported and suitable for publication?'] },
        ],
        takeaway: 'To scope a redesign, first collect your content, existing URLs and visitor questions. This provides a basis for deciding the site structure and delivery priorities.',
        service: { href: '/en/premium-websites/', label: 'Discuss a website creation or redesign' },
      },
    },
  },
];

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
