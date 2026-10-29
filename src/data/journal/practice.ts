import type { JournalEntry } from '../journal-types';

const src = (title: string, url: string, publisher: string) => ({ title, url, publisher, accessedAt: '2026-10-29' });

const dora = src('State of AI-assisted Software Development 2025', 'https://dora.dev/research/2025/dora-report/', 'DORA / Google Cloud');
const doraModel = src('DORA AI Capabilities Model', 'https://dora.dev/ai/capabilities-model/report/', 'DORA / Google Cloud');
const metr = src('Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity', 'https://metr.org/Early_2025_AI_Experienced_OS_Devs_Study-paper.pdf', 'METR');
const metrUpdate = src('We are Changing our Developer Productivity Experiment Design', 'https://metr.org/blog/2026-02-24-uplift-update/', 'METR');
const microsoftRct = src('The Effects of Generative AI on High-Skilled Work: Evidence from Three Field Experiments with Software Developers', 'https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/', 'Microsoft Research');
const githubProtection = src('About protected branches', 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches', 'GitHub Docs');
const githubOwners = src('About code owners', 'https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners', 'GitHub Docs');
const owaspAccess = src('Enforce Access Controls', 'https://devguide.owasp.org/en/04-design/02-web-app-checklist/07-access-controls/', 'OWASP Developer Guide');
const owaspAuth = src('Authorization Cheat Sheet', 'https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html', 'OWASP Cheat Sheet Series');
const googleLogs = src('Logs and datasets', 'https://ai.google.dev/gemini-api/docs/logs-datasets', 'Google AI for Developers');
const googleOptimization = src('Gemini API optimization and inference', 'https://ai.google.dev/gemini-api/docs/optimization', 'Google AI for Developers');
const openaiSkill = src('Skill Creator: Create or update a Codex skill', 'https://github.com/openai/skills/blob/main/skills/.system/skill-creator/SKILL.md', 'OpenAI');
const claudeSkill = src('Skill authoring best practices', 'https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices', 'Anthropic');
const skillSpec = src('Agent Skills specification', 'https://agentskills.io/specification', 'Agent Skills');
const mdnDynamic = src('Introduction to the server side', 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction', 'MDN');
const astroCms = src('Use a CMS with Astro', 'https://docs.astro.build/en/guides/cms/', 'Astro');
const astroCollections = src('Content collections', 'https://docs.astro.build/en/guides/content-collections/', 'Astro');
const goEffective = src('Effective Go', 'https://go.dev/doc/effective_go', 'The Go Project');
const rustUnsafeIntro = src('Unsafe Rust', 'https://doc.rust-lang.org/stable/book/ch20-01-unsafe-rust.html', 'The Rust Project');
const doraFeedback = src('Capabilities: Customer feedback', 'https://dora.dev/capabilities/customer-feedback/', 'DORA');
const msAbi = src('x64 Calling Convention', 'https://learn.microsoft.com/en-us/cpp/build/x64-calling-convention', 'Microsoft Learn');
const asmManual = src('Using as: The GNU Assembler', 'https://sourceware.org/binutils/docs/as.html', 'GNU Binutils');
const rustReference = src('The Rust Reference: behavior considered undefined', 'https://doc.rust-lang.org/reference/behavior-considered-undefined.html', 'The Rust Project');
const mdnClientServer = src('Client-server overview', 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview', 'MDN');
const owaspAuthTests = src('API Broken Function Level Authorization Testing Guide', 'https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/12-API_Testing/04-API_Broken_Function_Level_Authorization', 'OWASP');

export const practiceEntries: JournalEntry[] = [
  {
    id: 'craftsmanship-ai', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'craftsmanship-developpeur-a-l-ere-de-l-ia',
        title: 'Le craftsmanship change de terrain, pas de valeur',
        description: 'Avec l’IA, le savoir-faire du développeur s’exprime aussi dans les compétences, les cadres de travail et l’orchestration vérifiable.',
        category: 'Pratiques & équipes',
        introduction: 'L’IA peut produire du code, mais produire du code n’épuise pas le métier. Le craftsmanship reste visible dans la façon de comprendre un problème, de choisir une abstraction, de construire un environnement de travail fiable et de décider si le résultat mérite d’être livré. Une partie de ce savoir-faire se déplace vers les instructions réutilisables et l’orchestration des outils. Il ne devient pas moins technique : il s’exerce à un autre niveau.',
        sources: [dora, doraModel, metr, metrUpdate, microsoftRct, openaiSkill, claudeSkill, owaspAccess, githubProtection],
        sections: [
          { title: 'La vitesse de génération ne mesure pas la qualité du travail', sourceUrls: [metr.url, microsoftRct.url], paragraphs: [
            'Les résultats publiés ne décrivent pas un effet unique. Dans l’essai METR mené en 2025, seize développeurs expérimentés ont traité 246 tickets issus de projets open source qu’ils connaissaient déjà ; l’accès aux outils de l’époque a augmenté le temps de réalisation de 19 % en moyenne. Une autre étude, conduite dans trois entreprises auprès de 4 867 développeurs, rapporte une hausse de 26,08 % des tâches terminées avec un assistant de complétion. Les contextes, outils, tâches et mesures diffèrent : aucun de ces résultats ne constitue une prévision pour une équipe donnée.',
            'Le travail comprend aussi la compréhension du besoin, la revue, l’intégration, la maintenance et les arbitrages. Si l’on ne compte que les lignes générées ou les premières minutes, on peut mesurer l’activité de l’outil sans mesurer la valeur obtenue. Le premier geste de craft consiste donc à définir ce qu’un bon résultat signifie dans le contexte réel.'
          ] },
          { title: 'Forger des compétences réutilisables', sourceUrls: [openaiSkill.url, claudeSkill.url], paragraphs: [
            'Une compétence réutilisable peut encoder une procédure, un format de sortie, une connaissance métier ou une séquence d’outils. La construire demande de choisir un périmètre assez précis pour être déclenché au bon moment, de documenter les entrées attendues et de préciser les contrôles. Une consigne qui essaie de couvrir tous les cas finit souvent par être ambiguë et difficile à améliorer.',
            'Le travail artisanal ne consiste pas à écrire beaucoup d’instructions. Il consiste à retirer les règles génériques que le modèle connaît déjà, à conserver les décisions spécifiques à l’équipe et à éprouver la compétence sur des demandes réalistes. Une bonne version rend le résultat plus régulier tout en laissant visibles les cas où une personne doit décider.'
          ] },
          { title: 'Créer un cadre où l’agent peut réussir sans disposer de tout', sourceUrls: [doraModel.url, owaspAccess.url], paragraphs: [
            'Le cadre de travail comprend le contexte disponible, les outils, les permissions, les conventions du dépôt et les critères d’acceptation. Donner davantage d’accès n’est pas toujours une amélioration : pour une tâche documentaire, un agent peut ne pas avoir besoin d’écrire dans le système de production. Le principe du moindre privilège aide à limiter la portée d’une erreur et rend les responsabilités plus lisibles.',
            'Le modèle de capacités DORA invite à examiner des pratiques organisationnelles et techniques autour de l’usage de l’IA, plutôt qu’à isoler le choix d’un outil. Dans cette logique, l’ingénierie du contexte et de l’environnement devient une partie du travail de conception : une personne formule le mandat, borne les ressources et rend les vérifications accessibles.'
          ] },
          { title: 'Orchestrer plusieurs étapes et garder un fil vérifiable', sourceUrls: [dora.url, githubProtection.url], paragraphs: [
            'Une orchestration utile attribue une tâche délimitée à chaque étape : explorer, proposer, modifier, vérifier, puis résumer les écarts. Les dépendances et les transferts doivent être explicites. Une sortie intermédiaire qui précise les fichiers touchés, les hypothèses et les contrôles effectués facilite la revue et la reprise du travail.',
            'Dans un dépôt, les revues et contrôles de branche peuvent conserver un point de validation humain avant l’intégration. Ce n’est pas une formalité ajoutée après coup : c’est une partie du système qui rend l’automatisation compatible avec les responsabilités de l’équipe. L’agent peut préparer un changement ; l’équipe décide si la preuve est suffisante pour l’accepter.'
          ] },
          { title: 'Mesurer le craft par le résultat durable', paragraphs: [
            'Pour une amélioration répétitive, comparez quelques cas représentatifs avant et après : durée totale jusqu’à acceptation, corrections demandées, défauts échappés, coût d’exécution et facilité de maintenance. Gardez aussi des cas difficiles, car une moyenne flatteuse peut masquer un mode d’échec important. Les résultats doivent rester liés à un périmètre, une période et une version de l’outil.',
            'Le craftsmanship avec l’IA est donc moins une question de produire davantage qu’une capacité à améliorer le système de production lui-même. Le code reste une matière essentielle. Les compétences, les cadres et l’orchestration déterminent comment cette matière devient un livrable compréhensible, vérifié et maintenable.'
          ] },
        ],
        takeaway: 'Choisissez un flux récurrent, définissez son critère d’acceptation, puis améliorez la compétence, le contexte et les contrôles ensemble. Mesurez le délai jusqu’au résultat accepté, pas seulement la vitesse de génération.',
        service: { href: '/orchestration-agents-ia/', label: 'Découvrir l’orchestration d’agents IA' },
      },
      en: {
        slug: 'software-craftsmanship-in-the-age-of-ai',
        title: 'Craftsmanship moves to new ground',
        description: 'AI changes where software craft is exercised: reusable skills, working environments and verifiable orchestration matter alongside code.',
        category: 'Practice & teams',
        introduction: 'AI can produce code, but code production does not exhaust the work of software development. Craftsmanship still appears in how a problem is understood, an abstraction is chosen, a dependable working environment is built and a result is judged ready for delivery. Some of that expertise now goes into reusable instructions and tool orchestration. The work remains technical; it is exercised at another level.',
        sources: [dora, doraModel, metr, metrUpdate, microsoftRct, openaiSkill, claudeSkill, owaspAccess, githubProtection],
        sections: [
          { title: 'Generation speed is not a measure of useful work', sourceUrls: [metr.url, microsoftRct.url], paragraphs: [
            'Published results do not describe one universal effect. In METR’s 2025 trial, sixteen experienced developers completed 246 issues from open-source projects they already knew; access to the tools of that period increased completion time by an average of 19%. A separate study across three companies and 4,867 developers reported a 26.08% increase in completed tasks with an autocomplete assistant. The settings, tools, tasks and measures differ. Neither result predicts what a particular team will experience.',
            'Work also includes understanding the need, reviewing, integrating, maintaining and making trade-offs. Counting only generated lines or the first few minutes can measure tool activity without measuring value. The first act of craft is to define what a good outcome means in the actual context.'
          ] },
          { title: 'Forge reusable capabilities', sourceUrls: [openaiSkill.url, claudeSkill.url], paragraphs: [
            'A reusable capability can encode a procedure, output format, domain knowledge or sequence of tools. Building one means choosing a scope precise enough to activate at the right moment, documenting the expected inputs and specifying checks. Instructions that try to cover every case often become ambiguous and difficult to improve.',
            'Craft is not a matter of writing more instructions. It means removing generic rules the model already knows, retaining decisions specific to the team and trying the capability on realistic requests. A good version makes the outcome more consistent while keeping visible the cases that still need human judgment.'
          ] },
          { title: 'Design an environment where the agent has only what it needs', sourceUrls: [doraModel.url, owaspAccess.url], paragraphs: [
            'The working environment includes available context, tools, permissions, repository conventions and acceptance criteria. More access is not always better: a documentation task may not require write access to production systems. Least privilege limits the reach of mistakes and makes responsibilities clearer.',
            'DORA’s capabilities model examines organizational and technical practices around AI use instead of isolating the tool choice. In that view, engineering the context and environment is part of design: someone defines the mandate, bounds the resources and makes verification possible.'
          ] },
          { title: 'Orchestrate stages while keeping the work traceable', sourceUrls: [dora.url, githubProtection.url], paragraphs: [
            'A useful orchestration assigns a bounded task to each stage: explore, propose, edit, verify, then summarize differences. Dependencies and handoffs should be explicit. An intermediate result that names changed files, assumptions and completed checks makes review and continuation easier.',
            'In a repository, reviews and branch controls can preserve a human validation point before integration. This is part of the system that makes automation compatible with team responsibility. An agent can prepare a change; the team decides whether the evidence is sufficient to accept it.'
          ] },
          { title: 'Measure craft by durable outcomes', paragraphs: [
            'For a recurring improvement, compare representative cases before and after: total time to acceptance, requested corrections, escaped defects, execution cost and ease of maintenance. Keep difficult cases as well, because a flattering average can hide an important failure mode. Tie results to a scope, period and tool version.',
            'Software craft with AI is less about producing more than about improving the production system itself. Code remains essential material. Capabilities, environments and orchestration shape how that material becomes an understandable, verified and maintainable deliverable.'
          ] },
        ],
        takeaway: 'Choose a recurring workflow and define its acceptance criterion. Then improve the capability, context and checks together. Measure time to an accepted outcome, not generation speed alone.',
        service: { href: '/en/agent-orchestration/', label: 'Explore AI agent orchestration' },
      },
    },
  },
  {
    id: 'team-pocs', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'poc-ia-equipes-produit-commercial',
        title: 'Des POC utiles sans détourner les sprints de développement',
        description: 'Une frontière d’intégration claire permet au produit et au commerce d’explorer une idée sans transformer un prototype en dette de production.',
        category: 'Pratiques & équipes',
        introduction: 'Un prototype exploratoire est souvent plus utile lorsqu’il répond vite à une question de produit ou de vente : un utilisateur comprend-il le parcours ? Une donnée est-elle disponible ? Un scénario mérite-t-il d’être approfondi ? Le risque apparaît quand cette exploration entre directement dans le dépôt, les environnements ou les engagements de l’équipe de développement. La bonne organisation donne de l’autonomie aux métiers tout en gardant une frontière d’intégration explicite.',
        sources: [githubProtection, githubOwners, owaspAccess, owaspAuth, doraFeedback],
        sections: [
          { title: 'Commencer par la question, pas par le produit', sourceUrls: [doraFeedback.url], paragraphs: [
            'Un POC a une valeur lorsqu’il réduit une incertitude précise. Avant de construire, écrivez la question, le signal qui compterait comme réponse et la décision qui suivrait. Par exemple, une équipe commerciale peut simuler un parcours de qualification pour vérifier si les champs demandés sont compréhensibles. Ce test n’a pas besoin d’une connexion aux données clients réelles pour révéler un problème de formulation.',
            'Le périmètre doit aussi dire ce que le prototype ne prouve pas : disponibilité, sécurité, coûts à l’échelle, accessibilité ou intégration réelle. Cette précision protège la décision contre un enthousiasme excessif et évite de présenter une démonstration comme une promesse de livraison.'
          ] },
          { title: 'Préserver un bac à sable et des données adaptées', sourceUrls: [owaspAccess.url, owaspAuth.url], paragraphs: [
            'Séparez l’espace de démonstration des systèmes de production. Utilisez des données fictives ou explicitement autorisées, des comptes limités et des secrets distincts. Les recommandations OWASP insistent sur la vérification des autorisations et le principe du moindre privilège : chaque composant ne devrait disposer que des accès nécessaires à sa tâche.',
            'Si l’outil de prototypage accepte des consignes en langage naturel, indiquez aussi les limites sur les données qu’on peut y coller. Un POC commercial ne doit pas devenir une voie parallèle d’export de dossiers clients, de contrats ou d’informations internes. La politique doit être simple à suivre et connue avant que l’équipe commence.'
          ] },
          { title: 'Définir une frontière claire avec le code produit', sourceUrls: [githubProtection.url, githubOwners.url], paragraphs: [
            'Pour une exploration sans code, gardez les maquettes, scripts et notes dans un espace distinct du dépôt maintenu. Si le prototype nécessite du code, créez une branche ou un dépôt isolé, avec un propriétaire clairement identifié et une durée de vie limitée. Les protections de branche et les responsables de code peuvent ensuite aider à contrôler les changements qui rejoignent le logiciel partagé.',
            'Le passage vers le produit se fait par une demande structurée : question validée, parcours attendu, contraintes découvertes, données utilisées, dette connue et personne qui reprend le sujet. Les développeurs estiment alors le travail à partir d’un besoin mieux décrit au lieu d’hériter silencieusement d’un bricolage devenu critique.'
          ] },
          { title: 'Construire une petite boucle d’apprentissage', paragraphs: [
            'Un cycle court peut suivre quatre étapes : formuler l’hypothèse, réaliser une simulation, montrer le résultat aux personnes concernées, puis décider de poursuivre, modifier ou arrêter. La réponse n’a pas besoin d’être une métrique sophistiquée. Une observation cohérente de quelques utilisateurs peut suffire à invalider un parcours, à condition de ne pas la présenter comme une mesure représentative de tout le marché.',
            'Fixez dès le départ une date de revue et un responsable. Sans cela, les POC s’accumulent, les démonstrations deviennent des outils semi-officiels et les équipes ne savent plus quelle version reflète la décision actuelle. Un prototype sans décision de suite est un coût d’entretien en attente.'
          ] },
          { title: 'Protéger la capacité des équipes sans bloquer l’initiative', sourceUrls: [doraFeedback.url], paragraphs: [
            'Une frontière d’intégration fonctionne mieux quand les équipes produit, commerciales et techniques conviennent de créneaux de revue. Les développeurs n’ont pas à interrompre un sprint pour chaque idée, mais le résultat de l’exploration doit pouvoir être transmis à un moment prévu. Le but est de réduire les interruptions et les reprises, pas de créer une file d’attente opaque.',
            'Les prototypes les plus précieux sont ceux qui font gagner une décision : arrêter une idée fragile, préciser un besoin ou fournir un scénario que l’équipe peut estimer. Leur qualité se juge à cette décision et à la clarté du transfert, pas au degré de ressemblance avec une application finie.'
          ] },
        ],
        takeaway: 'Pour le prochain POC, écrivez la question testée, les données autorisées, la frontière avec la production, le propriétaire et la décision de sortie. Cela donne de l’autonomie aux métiers sans créer un engagement de livraison implicite.',
        service: { href: '/pilotage-projet-complexe/', label: 'Découvrir le pilotage de projets complexes' },
      },
      en: {
        slug: 'business-team-prototypes-without-disrupting-sprints',
        title: 'Useful prototypes without pulling developers off their sprint',
        description: 'A clear integration boundary lets product and sales explore an idea without turning a prototype into production debt.',
        category: 'Practice & teams',
        introduction: 'An exploratory prototype is often most useful when it quickly answers a product or sales question: does a user understand the journey, is a data point available, or is a scenario worth exploring further? Risk appears when that exploration enters the development team’s repository, environments or delivery commitments directly. A sound setup gives business teams room to explore while keeping the integration boundary explicit.',
        sources: [githubProtection, githubOwners, owaspAccess, owaspAuth, doraFeedback],
        sections: [
          { title: 'Start with the question, not the product', sourceUrls: [doraFeedback.url], paragraphs: [
            'A proof of concept has value when it reduces a specific uncertainty. Before building, write down the question, the signal that would count as an answer and the decision that follows. A sales team might simulate a qualification flow to see whether requested fields make sense. That test does not need a connection to real customer data to reveal confusing wording.',
            'The scope should also say what the prototype does not prove: availability, security, scaled costs, accessibility or a real integration. This protects the decision from overconfidence and prevents a demonstration from being presented as a delivery promise.'
          ] },
          { title: 'Use a sandbox and appropriate data', sourceUrls: [owaspAccess.url, owaspAuth.url], paragraphs: [
            'Keep the demonstration space separate from production systems. Use fictional or explicitly authorised data, limited accounts and separate secrets. OWASP guidance emphasises checking authorisation and applying least privilege: each component should have only the access required for its task.',
            'If the prototyping tool accepts natural-language instructions, also state what data must not be pasted into it. A sales prototype should not become a parallel route for exporting customer records, contracts or internal information. The rule needs to be simple and known before the team starts.'
          ] },
          { title: 'Set a clear boundary with product code', sourceUrls: [githubProtection.url, githubOwners.url], paragraphs: [
            'For an exploration without code, keep mock-ups, scripts and notes outside the maintained repository. If the prototype needs code, use an isolated branch or repository with a named owner and limited lifetime. Branch protections and code owners can help control changes that later join shared software.',
            'The handover to product should be a structured request: validated question, expected journey, discovered constraints, data used, known debt and the person taking ownership. Developers can estimate work from a better-described need instead of silently inheriting a prototype that has become critical.'
          ] },
          { title: 'Build a small learning loop', paragraphs: [
            'A short cycle can follow four steps: state the hypothesis, create a simulation, show it to relevant people, then decide to continue, change or stop. The response need not be a sophisticated metric. Consistent observations from a few users may be enough to disprove a flow, provided they are not presented as representative market evidence.',
            'Set a review date and an owner at the start. Otherwise prototypes accumulate, demonstrations become unofficial tools and teams lose track of which version reflects the current decision. A prototype without a next-step decision is maintenance cost waiting to happen.'
          ] },
          { title: 'Protect team capacity without blocking initiative', sourceUrls: [doraFeedback.url], paragraphs: [
            'An integration boundary works better when product, sales and engineering agree on review windows. Developers do not need to interrupt a sprint for every idea, but exploration results should be handed over at a planned point. The aim is to reduce interruptions and rework, not create an opaque queue.',
            'The most valuable prototypes are those that enable a decision: stop a weak idea, clarify a need or provide a scenario the team can estimate. Judge them by that decision and the clarity of the handover, not by how closely they resemble a finished application.'
          ] },
        ],
        takeaway: 'For the next prototype, record the question, allowed data, production boundary, owner and exit decision. This gives business teams room to explore without creating an implicit delivery commitment.',
        service: { href: '/en/project-leadership/', label: 'Explore complex project leadership' },
      },
    },
  },
  {
    id: 'ai-rd', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'r-et-d-ia-hypotheses-evaluations-couts',
        title: 'R&D avec l’IA : remplacer les intuitions par des expériences',
        description: 'Une R&D IA fiable relie hypothèse, jeu d’essai, évaluation, coût et reproductibilité avant d’étendre un prototype.',
        category: 'Pratiques & équipes',
        introduction: 'La recherche et développement autour de l’IA attire facilement les démonstrations spectaculaires. Pourtant, le progrès utile commence par une question plus modeste : quel comportement voulons-nous améliorer, et comment saurons-nous qu’il l’est ? Sans réponse, le choix d’un modèle ou d’un agent se transforme en succession de prototypes difficiles à comparer. Une démarche de R&D plus solide traite chaque essai comme une expérience traçable, avec un coût et un résultat observables.',
        sources: [googleLogs, googleOptimization, metr, microsoftRct],
        sections: [
          { title: 'Formuler une hypothèse opérationnelle', paragraphs: [
            'Une hypothèse relie une modification à un résultat attendu. « Un modèle plus récent sera meilleur » est trop vague. « Sur les demandes contenant une référence à plusieurs documents, cette stratégie doit réduire les erreurs de citation sans faire dépasser le budget de réponse » permet de décider quoi observer. La formulation donne aussi un critère d’arrêt si la piste n’apporte rien.',
            'Décrivez ensuite le périmètre : type de requête, population concernée, exigences de sûreté, langues, fréquence et système existant. L’objectif n’est pas de documenter chaque détail avant d’essayer. Il s’agit d’empêcher qu’un résultat local soit interprété comme une amélioration générale.'
          ] },
          { title: 'Construire un jeu d’évaluation représentatif et réutilisable', sourceUrls: [googleLogs.url], paragraphs: [
            'Gardez un ensemble de cas qui représentent l’usage visé, y compris les exceptions et les entrées difficiles. Les documentations de plateforme montrent comment transformer des journaux sélectionnés en jeux de données et en évaluations répétables. Les exemples retenus doivent être autorisés, nettoyés des informations sensibles et assez documentés pour comprendre pourquoi ils comptent.',
            'Séparez les exemples qui servent à concevoir une solution de ceux qui servent à la comparer, lorsque la taille du corpus le permet. Si les mêmes cas guident tous les ajustements, l’équipe peut finir par optimiser uniquement pour eux. Conservez quelques cas de contrôle non consultés pendant l’itération et ajoutez de nouveaux exemples lorsqu’un échec réel révèle un angle absent.'
          ] },
          { title: 'Évaluer le système, pas seulement la réponse séduisante', paragraphs: [
            'Les critères peuvent inclure exactitude, respect du format, qualité de récupération, taux d’escalade, délai, coût et facilité de vérification. Une note attribuée par un autre modèle peut aider à trier des sorties, mais ne remplace pas une référence fiable ni une revue humaine sur les erreurs à fort impact. Pour les sorties structurées, mesurez aussi si l’application peut les consommer sans correction manuelle.',
            'La qualité doit être lue par segment : une moyenne globale peut cacher un échec dans une langue, un type de client ou une famille de documents. Pour chaque indicateur, gardez sa définition, les cas comptés et les limites connues. Cela permet de discuter la décision à partir d’éléments concrets.'
          ] },
          { title: 'Rendre les essais comparables et reproductibles', sourceUrls: [googleOptimization.url, metr.url, microsoftRct.url], paragraphs: [
            'Enregistrez la version du modèle, les instructions, les paramètres, les outils appelés, les jeux de données et les changements de code. Les résultats de METR et des expériences Microsoft illustrent pourquoi le contexte et le protocole comptent : les études diffèrent dans leurs tâches et leur environnement, et leurs mesures de productivité ne se transfèrent pas automatiquement à un autre usage.',
            'Les sorties génératives peuvent varier entre deux appels. Répétez donc l’essai lorsque cette variation affecte la décision, et comparez des groupes de cas identiques. Une expérience n’est pas reproductible parce qu’un notebook existe : il faut pouvoir reconstruire ce qui a été exécuté, avec quelles entrées et quelle version.'
          ] },
          { title: 'Intégrer les coûts à la décision de R&D', sourceUrls: [googleOptimization.url], paragraphs: [
            'Calculez le coût complet d’un parcours : appels, tokens, cache ou stockage, outils, évaluations, revue humaine et traitement des erreurs. Les mécanismes d’optimisation, comme la mise en cache ou les traitements batch, ont des conditions d’usage spécifiques ; les économies annoncées ne valent pas pour tout trafic. Mesurez-les sur la charge que vous prévoyez réellement.',
            'Un résultat plus cher peut rester préférable s’il réduit un risque coûteux ou une reprise humaine importante. À l’inverse, une baisse de coût unitaire peut être annulée par des appels supplémentaires ou une validation plus longue. La décision doit comparer qualité acceptable, coût par tâche terminée et risque résiduel, pas le prix d’un seul appel.'
          ] },
        ],
        takeaway: 'Avant le prochain prototype, consignez une hypothèse, un jeu de cas, des critères de qualité et de coût, puis les versions exactes utilisées. Une expérience utile peut conclure que la piste ne mérite pas d’être poursuivie.',
        service: { href: '/ia-automatisation/', label: 'Voir les approches d’automatisation IA' },
      },
      en: {
        slug: 'ai-r-and-d-hypotheses-evaluations-costs',
        title: 'AI R&D: replace intuition with experiments',
        description: 'Reliable AI research and development connects a hypothesis, test set, evaluation, cost and reproducibility before a prototype scales.',
        category: 'Practice & teams',
        introduction: 'AI research and development can be drawn toward impressive demonstrations. Useful progress starts with a more modest question: which behaviour do we want to improve, and how will we know that it improved? Without an answer, selecting a model or agent becomes a succession of prototypes that are hard to compare. A stronger R&D process treats each trial as a traceable experiment with observable cost and outcomes.',
        sources: [googleLogs, googleOptimization, metr, microsoftRct],
        sections: [
          { title: 'Write an operational hypothesis', paragraphs: [
            'A hypothesis connects a change to an expected outcome. “A newer model will be better” is too vague. “For requests that refer to several documents, this strategy should reduce citation errors without exceeding the response budget” tells you what to observe. It also gives you a stopping criterion if the idea adds no value.',
            'Then describe the scope: request type, affected users, safety requirements, languages, frequency and existing system. The aim is not to document every detail before trying anything. It is to prevent a local result from being interpreted as a general improvement.'
          ] },
          { title: 'Build a representative and reusable evaluation set', sourceUrls: [googleLogs.url], paragraphs: [
            'Keep a set of cases that represents the intended use, including exceptions and difficult inputs. Platform documentation describes how selected logs can become datasets for repeatable evaluation. Examples must be authorised, cleaned of sensitive information and documented well enough to explain why they matter.',
            'Where the corpus allows, separate examples used to design a solution from those used to compare it. If the same cases guide every adjustment, a team can end up optimising only for those examples. Retain some control cases outside the iteration and add new examples when a real failure reveals a missing angle.'
          ] },
          { title: 'Evaluate the system, not just a persuasive answer', paragraphs: [
            'Criteria may include accuracy, format compliance, retrieval quality, escalation rate, latency, cost and ease of review. A score assigned by another model can help triage outputs, but it does not replace a reliable reference or human review of high-impact errors. For structured outputs, also measure whether the application can consume them without manual correction.',
            'Read quality by segment: an overall average can hide a failure in one language, customer type or document family. Keep each metric’s definition, counted cases and known limits. This makes decisions easier to discuss using concrete evidence.'
          ] },
          { title: 'Make trials comparable and reproducible', sourceUrls: [googleOptimization.url, metr.url, microsoftRct.url], paragraphs: [
            'Record model version, instructions, parameters, tool calls, datasets and code changes. METR’s and Microsoft’s experiments illustrate why setting and protocol matter: their tasks and environments differ, and their productivity measures do not transfer automatically to another use case.',
            'Generative outputs can vary between calls. Repeat a trial when that variation affects the decision, and compare identical groups of cases. An experiment is not reproducible merely because a notebook exists: someone should be able to reconstruct what ran, with which inputs and version.'
          ] },
          { title: 'Bring cost into the R&D decision', sourceUrls: [googleOptimization.url], paragraphs: [
            'Calculate the full cost of a workflow: calls, tokens, caching or storage, tools, evaluations, human review and error handling. Optimisation mechanisms such as caching or batch processing have specific conditions; advertised savings do not apply to every workload. Measure them against the traffic you actually expect.',
            'A more expensive result may still be preferable if it reduces costly risk or substantial human rework. Conversely, a lower unit price can be offset by more calls or longer review. Compare acceptable quality, cost per completed task and residual risk, not the price of one call.'
          ] },
        ],
        takeaway: 'Before the next prototype, record a hypothesis, test cases, quality and cost criteria, and exact versions. A useful experiment may conclude that an approach should not continue.',
        service: { href: '/en/ai-automation/', label: 'Explore AI automation approaches' },
      },
    },
  },
  {
    id: 'skill-design', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'concevoir-des-skills-ia-utiles-et-cibles',
        title: 'Concevoir un skill IA que l’on retrouve au bon moment',
        description: 'Un skill utile décrit un cas précis, se déclenche de façon prévisible et contient les seules règles que l’agent ne peut pas deviner.',
        category: 'Pratiques & équipes',
        introduction: 'Un skill réutilisable aide un agent à retrouver une méthode, une connaissance métier ou un format qui ne devrait pas être réexpliqué à chaque session. Mais ajouter un fichier d’instructions ne garantit ni son déclenchement ni la qualité du résultat. La conception demande de choisir un cas d’usage étroit, d’expliciter les signaux d’activation et de tester les situations où il doit rester inactif. Le bon skill économise des explications tout en réduisant les mauvaises surprises.',
        sources: [openaiSkill, claudeSkill, skillSpec],
        sections: [
          { title: 'Choisir un travail récurrent qui mérite une procédure', sourceUrls: [openaiSkill.url], paragraphs: [
            'Repérez une tâche qui revient, possède des décisions spécifiques ou comporte une suite d’étapes facile à oublier. Un skill n’apporte pas grand-chose s’il reformule simplement une compétence générale déjà attendue de l’agent. Il doit contenir ce qui change réellement sa décision : une convention interne, un schéma, un ordre de vérification ou une règle métier.',
            'Avant de rédiger, décrivez l’entrée, le résultat attendu et les cas qui sortent du périmètre. Si le travail dépend surtout d’une décision humaine ou varie fortement selon les dossiers, une courte liste de repères peut mieux convenir qu’une procédure rigide.'
          ] },
          { title: 'Écrire une description qui sélectionne les bonnes demandes', sourceUrls: [openaiSkill.url, claudeSkill.url], paragraphs: [
            'La description de déclenchement devrait nommer le travail couvert et les demandes typiques qui l’appellent. « Aide avec les projets » laisse l’agent deviner. « Prépare un compte rendu de réunion à partir de notes et d’une transcription, avec décisions, responsables et questions ouvertes » fournit des indices observables.',
            'Ajoutez une limite lorsque des demandes voisines risquent de déclencher le skill par erreur. Cette frontière doit être courte et précise : le skill organise la rédaction de comptes rendus, pas l’envoi des messages ni la prise de décisions à la place des personnes concernées.'
          ] },
          { title: 'Mettre dans le corps les règles non déductibles', paragraphs: [
            'Les instructions doivent expliquer les détails que l’agent ne peut pas inférer : nomenclature, structure attendue, source de vérité, validation requise et procédure en cas d’incertitude. Les conseils génériques comme « sois précis » coûtent des tokens sans ajouter de connaissance spécifique. Un exemple bref et représentatif peut éclairer une règle, à condition de ne pas devenir la seule forme que le skill sait traiter.',
            'Gardez le parcours principal lisible, puis placez les références volumineuses dans des fichiers complémentaires lorsque le format le permet. Des consignes trop longues ou contradictoires compliquent le respect du chemin essentiel. Les ressources jointes doivent être réellement utilisées et maintenues, pas ajoutées pour rendre le skill plus impressionnant. Une procédure de repli est particulièrement utile : elle indique quoi demander ou signaler lorsque les informations d’entrée manquent, au lieu d’encourager l’agent à combler le vide par une supposition.'
          ] },
          { title: 'Tester les déclenchements positifs et négatifs', sourceUrls: [claudeSkill.url], paragraphs: [
            'Préparez des requêtes qui devraient déclencher le skill, des formulations indirectes et des demandes proches qui devraient l’éviter. Vérifiez ensuite si l’agent choisit le bon outil, suit les étapes et produit le format attendu. Un test de contenu seul ne vérifie pas le déclenchement ; un test de déclenchement seul ne vérifie pas l’exécution.',
            'Conservez quelques cas de référence pour tester une modification de description ou de consigne. Si le skill se déclenche trop souvent, resserrez la description et donnez des exemples négatifs. S’il manque des tâches légitimes, ajoutez des synonymes réellement utilisés par l’équipe plutôt qu’un catalogue de mots-clés sans contexte.'
          ] },
          { title: 'Entretenir le skill comme un outil', paragraphs: [
            'Chaque correction humaine révèle peut-être une règle manquante, mais toutes les corrections ne méritent pas d’être transformées en instruction. Cherchez les erreurs répétées, évaluez leur impact et modifiez le skill si la règle se généralise. Gardez un responsable et une date de revue lorsque le métier, les outils ou les politiques évoluent.',
            'Enfin, mesurez l’utilité par la régularité, le temps de reprise et la clarté du résultat, pas par la longueur du fichier. Un skill étroit est plus facile à tester, à transmettre et à retirer lorsqu’il n’est plus pertinent.'
          ] },
        ],
        takeaway: 'Choisissez un usage fréquent, écrivez un déclencheur concret, ajoutez les décisions métier spécifiques puis testez aussi les demandes voisines qui ne devraient pas activer le skill.',
        service: { href: '/orchestration-agents-ia/', label: 'Découvrir l’orchestration d’agents IA' },
      },
      en: {
        slug: 'designing-useful-focused-ai-skills',
        title: 'Design an AI skill that appears at the right moment',
        description: 'A useful skill describes a specific task, activates predictably and contains only the rules an agent cannot infer.',
        category: 'Practice & teams',
        introduction: 'A reusable skill helps an agent find a method, domain knowledge or format that should not need repeating in every session. Adding an instruction file does not guarantee that it will activate or produce a good result. Design means choosing a focused use case, making activation signals explicit and testing situations where the skill should stay inactive. A good skill saves explanation while reducing surprises.',
        sources: [openaiSkill, claudeSkill, skillSpec],
        sections: [
          { title: 'Choose recurring work that deserves a procedure', sourceUrls: [openaiSkill.url], paragraphs: [
            'Look for a repeated task that involves specific decisions or a sequence of steps that is easy to forget. A skill adds little if it merely restates a general capability the agent is already expected to have. It should contain what actually changes the agent’s decisions: an internal convention, schema, review sequence or business rule.',
            'Before writing, describe the input, expected result and out-of-scope cases. If the work depends mostly on human judgment or varies widely by case, a short set of reference points may be more useful than a rigid procedure.'
          ] },
          { title: 'Write a description that selects the right requests', sourceUrls: [openaiSkill.url, claudeSkill.url], paragraphs: [
            'The activation description should name the work covered and the kinds of requests that should call it. “Help with projects” leaves the agent guessing. “Prepare meeting minutes from notes and a transcript, including decisions, owners and open questions” gives observable cues.',
            'Add a boundary when neighbouring requests could trigger the skill by mistake. Keep it short and precise: the skill structures meeting minutes; it does not send messages or make decisions on behalf of the people involved.'
          ] },
          { title: 'Put non-inferable rules in the instructions', paragraphs: [
            'Instructions should explain details an agent cannot infer: naming conventions, expected structure, source of truth, required validation and what to do when uncertain. Generic advice such as “be precise” costs tokens without adding specific knowledge. A brief representative example can clarify a rule, provided it does not become the only pattern the skill handles.',
            'Keep the main workflow easy to follow, then move large reference material into supporting files when the format allows it. Overly long or contradictory instructions make the essential path harder to follow. Attached resources should be used and maintained, not added for appearance.'
          ] },
          { title: 'Test positive and negative activation cases', sourceUrls: [claudeSkill.url], paragraphs: [
            'Prepare requests that should activate the skill, indirect phrasings and nearby requests that should not. Then check whether the agent selects the skill, follows the steps and produces the expected format. A content test alone does not check activation; an activation test alone does not check execution.',
            'Keep a few reference cases for testing changes to the description or instructions. If activation is too broad, narrow the description and add negative examples. If legitimate tasks are missed, add synonyms the team actually uses rather than an uncontextualised keyword list.'
          ] },
          { title: 'Maintain the skill as a tool', paragraphs: [
            'Each human correction may reveal a missing rule, but not every correction belongs in an instruction. Look for repeated errors, consider their impact and update the skill when a rule generalises. Assign an owner and review date when the domain, tools or policies change.',
            'Measure usefulness through consistency, rework time and clarity of the result, not file length. A focused skill is easier to test, hand over and retire when it is no longer relevant.'
          ] },
        ],
        takeaway: 'Choose a frequent use case, write a concrete activation description, add specific domain decisions and test nearby requests that should not activate the skill.',
        service: { href: '/en/agent-orchestration/', label: 'Explore AI agent orchestration' },
      },
    },
  },
  {
    id: 'ai-management', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'manager-equipes-developpement-avec-ia',
        title: 'Manager avec l’IA : écouter avant de prescrire',
        description: 'Accompagner l’IA dans une équipe suppose de comprendre les usages, les réserves et les changements de sens du travail.',
        category: 'Pratiques & équipes',
        introduction: 'L’adoption de l’IA dans une équipe ne se résume pas à distribuer un outil ni à demander un taux d’utilisation. Certaines personnes l’emploient déjà, d’autres y voient peu de valeur pour leurs tâches, et d’autres encore s’inquiètent de la qualité, de la confidentialité ou de l’évolution de leur métier. Un management utile traite ces situations comme des informations sur le travail réel, pas comme un défaut à corriger par injonction.',
        sources: [dora, doraModel, doraFeedback],
        sections: [
          { title: 'Observer la diversité des pratiques', sourceUrls: [dora.url, doraModel.url], paragraphs: [
            'L’adoption n’est pas un trait stable que l’on pourrait résumer en « enthousiastes » et « réfractaires ». Elle varie selon les tâches, les risques perçus et la possibilité de vérifier la sortie. Dans une même équipe, une personne peut utiliser l’IA pour produire des données de test, mais garder la conception d’une règle métier sous son contrôle ; une autre peut s’en servir pour explorer un dépôt tout en refusant d’y copier du code sans revue.',
            'Pour comprendre ces écarts, cartographiez quelques tâches du quotidien et demandez à chaque rôle ce qu’il essaie, ce qu’il évite et où il perd du temps. Ne supposez pas que l’absence d’usage traduit une faible adoption : le besoin peut être déjà couvert par un outil existant, ou la tâche peut coûter davantage à vérifier qu’à faire directement. Cette lecture situe la conversation dans le travail réel.'
          ] },
          { title: 'Prendre au sérieux le sens du travail', paragraphs: [
            'Pour certaines personnes, générer un premier jet est libérateur ; pour d’autres, la partie gratifiante du métier est précisément de concevoir et d’implémenter. Une inquiétude sur le sens du travail mérite une conversation concrète : quelles décisions souhaite-t-on continuer à prendre ? Quelles compétences faut-il pratiquer ? Qui assume les conséquences d’une modification proposée par un modèle ?',
            'Les équipes peuvent préserver des occasions d’apprentissage et de conception en adaptant les tâches confiées aux outils. On peut demander à l’assistant de proposer des alternatives, puis faire expliciter les compromis par la personne responsable ; réserver des exercices sans assistance pour apprendre une API ; ou documenter une règle de revue qui protège le jugement humain.'
          ] },
          { title: 'Établir des règles d’usage avec l’équipe', sourceUrls: [doraModel.url], paragraphs: [
            'Une politique utile répond à des situations opérationnelles : quelles données peuvent être saisies, quels résultats peuvent être réutilisés, quelles vérifications s’imposent et à qui demander conseil ? Elle doit inclure les raisons de ses limites et un chemin pour signaler qu’une règle empêche un travail légitime. Une consigne impraticable pousse les usages dans l’ombre.',
            'Les mêmes règles n’ont pas besoin de s’appliquer à chaque risque avec la même intensité. Une suggestion de nom de variable et un changement d’accès à des données sensibles demandent des contrôles différents. La responsabilité de la livraison reste attribuée à une personne ou à une équipe, même lorsque la production est partagée avec un assistant.'
          ] },
          { title: 'Tester un changement que l’équipe choisit', paragraphs: [
            'Au lieu de généraliser immédiatement, choisissez avec l’équipe un flux borné qui suscite un intérêt réel. Décrivez le résultat attendu, gardez un groupe de cas représentatifs et mesurez l’ensemble du parcours : attente, génération, revue, corrections et acceptation. Une comparaison honnête comprend les tâches que l’outil rend plus fluides et celles pour lesquelles il augmente la charge.',
            'Prévoyez un échange de retour après l’essai. Les obstacles peuvent venir des droits, de la documentation, des données absentes, d’un manque de formation ou d’une mauvaise adéquation entre outil et tâche. Corriger la cause est plus utile que répéter une demande d’adoption.'
          ] },
          { title: 'Suivre la qualité de l’organisation, pas seulement l’usage', sourceUrls: [dora.url, doraModel.url, doraFeedback.url], paragraphs: [
            'Un tableau de bord de management peut associer fréquence d’usage à des signaux de qualité, de délai, de stabilité, de satisfaction et de charge de revue. Une hausse de l’usage n’est pas une preuve de valeur, tout comme une adoption modeste ne signifie pas nécessairement un refus. Les pratiques organisationnelles et la capacité à livrer de façon fiable comptent aussi.',
            'Le rôle du manager est d’ouvrir un espace de discussion, de rendre les attentes claires et de traiter les effets observés. La confiance se construit lorsque les retours difficiles modifient réellement les outils, les règles ou le plan d’apprentissage.'
          ] },
        ],
        takeaway: 'Lancez une conversation sur les tâches et les effets concrets, puis choisissez un essai limité avec des critères de qualité et de charge. N’inférez pas les motivations d’une personne à partir d’un taux d’usage.',
        service: { href: '/pilotage-projet-complexe/', label: 'Découvrir le pilotage de projets complexes' },
      },
      en: {
        slug: 'managing-development-teams-with-ai',
        title: 'Managing AI adoption: listen before prescribing',
        description: 'Supporting AI in a team means understanding existing uses, reservations and changes to the meaning of work.',
        category: 'Practice & teams',
        introduction: 'AI adoption in a team is not a matter of distributing a tool and asking for an uptake rate. Some people already use it, others see little value for their tasks, and others are concerned about quality, confidentiality or how their work may change. Useful management treats these situations as information about real work, not as a failure to correct through mandates.',
        sources: [dora, doraModel, doraFeedback],
        sections: [
          { title: 'Observe differences in practice', sourceUrls: [dora.url, doraModel.url], paragraphs: [
            'Adoption is not a stable trait that divides a team into “enthusiasts” and “resisters”. It varies by task, perceived risk and how easily an output can be checked. In one team, someone might use AI to generate test data while keeping business-rule design under their control; another person may use it to explore a repository but avoid copying code without review.',
            'To understand these differences, map a few everyday tasks and ask each role what they try, avoid and find time-consuming. Do not assume non-use means low adoption: an existing tool may already handle the need, or review may take longer than doing the task directly. This brings the discussion back to actual work.'
          ] },
          { title: 'Take the meaning of work seriously', paragraphs: [
            'For some people, generating a first draft is liberating; for others, the rewarding part of the job is designing and implementing. Concern about the meaning of work deserves a concrete conversation: which decisions should people continue to make? Which skills need practice? Who is accountable for a change suggested by a model?',
            'Teams can preserve learning and design opportunities by adapting how tasks are assigned to tools. An assistant can propose alternatives while the responsible person explains trade-offs; some exercises can remain unaided for learning a new API; or review rules can protect human judgment.'
          ] },
          { title: 'Agree on rules of use with the team', sourceUrls: [doraModel.url], paragraphs: [
            'A useful policy answers operational questions: which data may be entered, which outputs can be reused, which checks are required and where to ask for help. It should explain the reasons for its limits and provide a way to flag when a rule blocks legitimate work. An impractical policy drives usage out of sight.',
            'The same controls do not need to apply to every risk with equal intensity. A variable-name suggestion and a change to access for sensitive data call for different checks. Delivery responsibility remains with an identifiable person or team even when an assistant contributes to production.'
          ] },
          { title: 'Test a change the team chooses', paragraphs: [
            'Instead of rolling out a broad mandate, choose a bounded workflow with genuine team interest. Describe the expected outcome, keep representative cases and measure the whole path: waiting, generation, review, corrections and acceptance. An honest comparison includes tasks the tool smooths and tasks for which it adds work.',
            'Schedule a feedback conversation after the trial. Obstacles may come from permissions, missing documentation or data, lack of training, or a mismatch between tool and task. Addressing the cause is more useful than repeating a request for adoption.'
          ] },
          { title: 'Track organisational quality, not usage alone', sourceUrls: [dora.url, doraModel.url, doraFeedback.url], paragraphs: [
            'A management view can combine usage frequency with signals for quality, lead time, stability, satisfaction and review load. Increased use is not proof of value, just as modest uptake does not necessarily mean resistance. Organisational practices and the ability to deliver reliably matter too.',
            'A manager’s role is to make room for discussion, clarify expectations and address observed effects. Trust grows when difficult feedback changes the tools, rules or learning plan.'
          ] },
        ],
        takeaway: 'Start a conversation about tasks and observed effects, then choose a limited trial with quality and workload criteria. Do not infer a person’s motives from an adoption rate.',
        service: { href: '/en/project-leadership/', label: 'Explore complex project leadership' },
      },
    },
  },
  {
    id: 'language-choice', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'choisir-langage-programmation-avec-ia',
        title: 'Quel langage choisir avec une IA qui sait coder ?',
        description: 'Le bon langage dépend toujours de l’écosystème, des contraintes d’exécution, des compétences et de la possibilité de vérifier le code généré.',
        category: 'Pratiques & équipes',
        introduction: 'Une IA compétente réduit le coût d’exploration d’un langage : elle peut expliquer une syntaxe, proposer un exemple ou aider à franchir un premier obstacle. Elle ne supprime pas les conséquences d’un choix d’écosystème. Les bibliothèques, l’équipe, l’exploitation, les contraintes de sécurité et la durée de maintenance pèsent davantage que la facilité d’obtenir une première réponse. Le langage reste une décision de système.',
        sources: [goEffective, rustReference, rustUnsafeIntro, msAbi],
        sections: [
          { title: 'Commencer par le système autour du langage', paragraphs: [
            'Listez les environnements ciblés, les bibliothèques disponibles, les interfaces à conserver, les personnes qui assureront le support et la façon dont le logiciel sera livré. Un choix qui s’intègre aux outils existants peut coûter moins cher à exploiter qu’une nouveauté séduisante mais isolée. Dans une entreprise, le vivier de compétences et la capacité à recruter comptent aussi.',
            'L’assistant peut faciliter une transition locale, mais il ne maintient pas automatiquement des dépendances, ne garantit pas la disponibilité d’un mainteneur et ne prend pas la responsabilité d’une migration. Une petite expérimentation avec des critères de sortie permet d’apprendre sans engager toute la plateforme.'
          ] },
          { title: 'Faire correspondre le modèle de programmation au problème', sourceUrls: [goEffective.url], paragraphs: [
            'Les langages expriment des compromis. Les conventions de Go, par exemple, mettent en avant des formes explicites d’erreur et des outils de concurrence propres à son environnement. Cela peut être commode pour certains services, sans rendre Go automatiquement préférable ailleurs. De même, un langage fortement orienté vers la sûreté mémoire peut limiter certaines classes de défauts dans les parties couvertes par ses garanties, tout en laissant des obligations dans les interfaces bas niveau.',
            'Demandez-vous si le domaine a besoin de calcul natif, d’un écosystème analytique, de bibliothèques métier, d’un runtime navigateur, de contraintes temps réel ou de contrôle de mémoire. Le meilleur choix se comprend à partir de ces exigences concrètes, pas d’un classement général produit par un modèle.'
          ] },
          { title: 'Choisir les surfaces que l’équipe peut vérifier', sourceUrls: [rustReference.url, msAbi.url], paragraphs: [
            'Un assistant peut générer du code plausible dans un langage inconnu, mais les erreurs de logique, d’interface et de sûreté restent à détecter. Les limites des garanties d’un langage importent : la documentation Rust rappelle que le code unsafe conserve des obligations strictes, et les interfaces binaires imposent des conventions précises sur les paramètres, registres et piles.',
            'Pour une zone critique, privilégiez le langage et les outils où l’équipe peut lire les changements, exploiter les analyseurs, écrire des tests pertinents et diagnostiquer la production. Une sortie IA n’est pas une preuve de correction. Si la revue dépend entièrement d’un expert rare, ce coût doit figurer dans la décision.'
          ] },
          { title: 'Évaluer au moyen d’une tranche réaliste', paragraphs: [
            'Un petit benchmark devrait contenir les mêmes tâches dans les options envisagées : une intégration réelle, un cas d’erreur, une mesure de performance pertinente, une revue et un chemin de déploiement. Notez le temps jusqu’à un résultat accepté, les bibliothèques trouvées, les corrections requises et les inconnues d’exploitation. Un exemple « hello world » mesure surtout la facilité de démarrage.',
            'Si plusieurs langages sont admissibles, choisissez celui qui réduit le coût total de maintenance et le risque de dépendance pour votre contexte. Il peut aussi être raisonnable d’accepter un second langage lorsqu’il répond à une contrainte forte et possède un propriétaire explicite. Fixez alors une règle de frontière : quels services peuvent l’utiliser, qui révise ses dépendances et à quel moment l’équipe réévalue cette exception.'
          ] },
          { title: 'Laisser l’IA aider, sans lui demander de trancher seule', paragraphs: [
            'Demandez au modèle de comparer quelques candidats selon vos critères et de proposer un prototype minimal. Exigez les sources de documentation utilisées, les hypothèses et les risques qu’il n’a pas pu vérifier. Puis confrontez cette analyse à un spécialiste du système et à une estimation de maintenance.',
            'L’IA rend l’expérimentation moins intimidante, mais elle ne transforme pas un langage en choix sans coût. Une bonne décision documente ce qu’elle optimise, les compromis acceptés et les conditions qui justifieraient une réévaluation.'
          ] },
        ],
        takeaway: 'Écrivez d’abord les contraintes d’exécution, l’écosystème, les compétences disponibles et le niveau de vérification requis. Comparez ensuite deux candidats sur une tranche proche du vrai travail.',
        service: { href: '/pilotage-projet-complexe/', label: 'Découvrir le pilotage de projets complexes' },
      },
      en: {
        slug: 'choosing-a-programming-language-with-ai',
        title: 'Which language should you choose when AI can code?',
        description: 'The right language still depends on its ecosystem, runtime constraints, team skills and the ability to verify generated code.',
        category: 'Practice & teams',
        introduction: 'A capable AI lowers the cost of exploring a language: it can explain syntax, suggest an example or help past an early obstacle. It does not remove the consequences of choosing an ecosystem. Libraries, team skills, operations, security constraints and maintenance life span matter more than how easily a first answer can be generated. A language remains a system decision.',
        sources: [goEffective, rustReference, rustUnsafeIntro, msAbi],
        sections: [
          { title: 'Start with the system around the language', paragraphs: [
            'List target environments, available libraries, interfaces to preserve, people who will support the software and how it will be delivered. A choice that fits existing tools may cost less to operate than an appealing novelty that stands alone. In a business, the talent pool and ability to hire matter too.',
            'An assistant may ease a local transition, but it does not automatically maintain dependencies, guarantee a maintainer or take responsibility for a migration. A small trial with exit criteria helps the team learn without committing an entire platform.'
          ] },
          { title: 'Match the programming model to the problem', sourceUrls: [goEffective.url], paragraphs: [
            'Languages express trade-offs. Go’s conventions, for example, emphasise explicit error handling and concurrency tools suited to its environment. That can be useful for some services without making Go automatically preferable elsewhere. Likewise, a language oriented toward memory safety can limit certain defect classes within its guarantees while leaving obligations at low-level boundaries.',
            'Ask whether the domain needs native computation, an analytics ecosystem, business libraries, a browser runtime, real-time constraints or memory control. The best choice follows from these requirements, not a general ranking generated by a model.'
          ] },
          { title: 'Choose surfaces the team can verify', sourceUrls: [rustReference.url, msAbi.url], paragraphs: [
            'An assistant can produce plausible code in an unfamiliar language, but logic, interface and safety errors still need detecting. Language guarantees have limits: the Rust documentation notes that unsafe code retains strict obligations, and binary interfaces impose precise conventions for parameters, registers and stack use.',
            'For a critical area, prefer a language and toolchain where the team can read changes, use analyzers, write meaningful tests and diagnose production. AI output is not proof of correctness. If review depends entirely on a scarce expert, include that cost in the decision.'
          ] },
          { title: 'Evaluate with a realistic slice', paragraphs: [
            'A small benchmark should include the same tasks for each candidate: a real integration, an error case, a relevant performance measure, review and a deployment path. Record time to an accepted result, libraries found, corrections required and operational unknowns. A “hello world” example mostly measures start-up ease.',
            'If several languages are viable, select the one that lowers total maintenance cost and dependency risk in your context. A second language can also be reasonable when it addresses a strong constraint and has a clear owner.'
          ] },
          { title: 'Let AI assist without asking it to decide alone', paragraphs: [
            'Ask a model to compare a few candidates against your criteria and propose a small prototype. Request documentation sources, assumptions and risks it could not verify. Then compare that analysis with a system specialist’s view and a maintenance estimate.',
            'AI makes experimentation less intimidating, but it does not make a language choice cost-free. A sound decision records what it optimises, which trade-offs it accepts and what conditions would justify revisiting it.'
          ] },
        ],
        takeaway: 'Write down runtime constraints, ecosystem, available skills and required verification first. Then compare two candidates on a slice close to the real work.',
        service: { href: '/en/project-leadership/', label: 'Explore complex project leadership' },
      },
    },
  },
  {
    id: 'assembly-ai', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'assembleur-ia-competences-systeme-toujours-necessaires',
        title: 'L’IA rend l’assembleur plus accessible, pas plus simple',
        description: 'L’assistant peut aider à explorer l’assembleur, mais ABI, mémoire, sécurité et mesure des performances restent des contraintes réelles.',
        category: 'Pratiques & équipes',
        introduction: 'L’assistance au code peut réduire le coût d’entrée dans un domaine peu familier, y compris l’assembleur. Un modèle peut expliquer une instruction, commenter un extrait ou proposer un squelette. Cela ne rend pas pour autant le code bas niveau interchangeable avec une fonction écrite dans un langage plus abstrait. La machine exécute des conventions précises, et les erreurs peuvent se propager au-delà de la ligne modifiée.',
        sources: [asmManual, msAbi, rustReference, rustUnsafeIntro],
        sections: [
          { title: 'Explorer les instructions avec un guide, pas un oracle', sourceUrls: [asmManual.url], paragraphs: [
            'Un assembleur traduit des instructions et des directives qui dépendent d’une architecture et d’une syntaxe. La documentation GNU précise que son manuel ne remplace pas l’apprentissage de l’architecture ou du jeu d’instructions ; les formes reconnues changent aussi selon la cible. Un assistant peut accélérer la recherche de vocabulaire, mais il faut connaître le processeur, l’assembleur et le format de sortie visés.',
            'Demandez une explication ligne par ligne ou une comparaison de variantes, puis vérifiez dans la documentation de l’architecture et dans la sortie désassemblée. Un exemple qui assemble sans erreur peut encore avoir une sémantique incorrecte ou ne pas respecter l’interface appelée.'
          ] },
          { title: 'Respecter l’ABI et le contrat entre fonctions', sourceUrls: [msAbi.url], paragraphs: [
            'L’interface binaire précise comment les arguments et valeurs de retour circulent, quels registres doivent être préservés, comment la pile est alignée et comment les exceptions peuvent remonter. Ces conventions varient selon l’architecture et la plateforme. La documentation Microsoft x64, par exemple, définit l’usage des registres, de la pile et des informations de déroulement pour cet ABI.',
            'Une fonction assembleur appelée depuis un autre langage doit respecter exactement le contrat concerné. Si l’agent mélange des conventions voisines ou oublie un registre non volatil, la panne peut apparaître plus tard, dans une autre fonction ou seulement sous certaines conditions. C’est un travail d’intégration autant que de génération d’instructions.'
          ] },
          { title: 'Garder la mémoire et la sûreté au centre', sourceUrls: [rustReference.url, rustUnsafeIntro.url], paragraphs: [
            'Le bas niveau expose directement des opérations que les abstractions ordinaires cachent. Dans Rust, les blocs unsafe n’annulent pas les exigences de sûreté : les obligations associées aux pointeurs, à l’aliasing et aux interfaces doivent toujours être tenues. Un code assembleur peut franchir ces barrières de langage, ce qui rend nécessaire une compréhension de l’état mémoire, des tailles, de l’alignement et du cycle de vie des ressources.',
            'L’assistant ne sait pas automatiquement quelles invariants le reste du programme attend. Documentez les préconditions, les effets et les propriétés que le code doit préserver. Gardez la surface assembleur aussi petite que possible et placez-la derrière une interface vérifiable lorsque l’architecture du projet le permet.'
          ] },
          { title: 'Mesurer avant d’optimiser', paragraphs: [
            'Le code assembleur n’est pas automatiquement plus rapide que le code compilé. Un compilateur optimise en fonction de son modèle global, et une séquence écrite à la main peut empêcher d’autres transformations ou augmenter la pression sur les registres. Avant de réécrire, profilez le parcours réel et identifiez un coût important reproductible.',
            'Comparez des implémentations équivalentes avec un protocole stable, le même matériel et des entrées représentatives. Vérifiez la correction, les effets de bord et les cas limites en plus du temps d’exécution. Si le gain disparaît dans l’application complète, la complexité supplémentaire est difficile à justifier.'
          ] },
          { title: 'Utiliser l’IA pour apprendre et relire', paragraphs: [
            'L’IA peut être utile comme tuteur : demander pourquoi une convention existe, obtenir un exemple d’appel minimal ou repérer les points à vérifier dans un extrait. Elle peut aussi servir de lecteur critique en listant des hypothèses implicites. Ces usages rendent la découverte plus accessible sans transférer la responsabilité de l’intégration.',
            'Pour une équipe sans expertise de l’architecture ciblée, une relecture par une personne compétente reste nécessaire avant une utilisation critique. Le bon résultat n’est pas le premier bloc d’instructions généré, mais un changement dont la correction, les interfaces et l’avantage mesuré sont compréhensibles. La revue devrait inclure les chemins d’erreur, les interruptions et les conventions de débogage : ce sont souvent ces détails d’intégration qui rendent une routine difficile à exploiter.'
          ] },
        ],
        takeaway: 'Avant d’accepter de l’assembleur généré, identifiez architecture, assembleur, ABI, invariants mémoire et référence de performance. Faites vérifier le contrat d’appel puis mesurez le gain dans le parcours réel.',
        service: { href: '/ia-automatisation/', label: 'Voir les approches d’automatisation IA' },
      },
      en: {
        slug: 'ai-makes-assembly-more-accessible-not-simple',
        title: 'AI makes assembly more accessible, not simpler',
        description: 'An assistant can help explore assembly, but ABI, memory, safety and performance measurement remain real constraints.',
        category: 'Practice & teams',
        introduction: 'Coding assistance can reduce the cost of entering an unfamiliar area, including assembly language. A model can explain an instruction, annotate a snippet or suggest a starting point. That does not make low-level code interchangeable with a function written in a higher-level language. The machine follows precise conventions, and errors can spread beyond the edited line.',
        sources: [asmManual, msAbi, rustReference, rustUnsafeIntro],
        sections: [
          { title: 'Explore instructions with a guide, not an oracle', sourceUrls: [asmManual.url], paragraphs: [
            'An assembler translates instructions and directives that depend on an architecture and syntax. GNU documentation says its manual does not replace learning the architecture or instruction set; recognised forms also vary by target. An assistant can speed up vocabulary searches, but you still need to know the processor, assembler and output format.',
            'Ask for a line-by-line explanation or a comparison of alternatives, then check the architecture documentation and disassembled output. Code that assembles without errors can still have the wrong semantics or violate the called interface.'
          ] },
          { title: 'Respect the ABI and the contract between functions', sourceUrls: [msAbi.url], paragraphs: [
            'The binary interface specifies how arguments and return values move, which registers must be preserved, how the stack is aligned and how exceptions can unwind. These conventions vary by architecture and platform. Microsoft’s x64 documentation, for example, defines register use, stack rules and unwind information for that ABI.',
            'An assembly function called from another language must follow the relevant contract exactly. If an agent mixes neighbouring conventions or omits a nonvolatile register, the failure may appear later in another function or only under certain conditions. This is integration work as much as instruction generation.'
          ] },
          { title: 'Keep memory and safety central', sourceUrls: [rustReference.url, rustUnsafeIntro.url], paragraphs: [
            'Low-level code directly exposes operations that ordinary abstractions hide. In Rust, unsafe blocks do not remove safety requirements: obligations around pointers, aliasing and interfaces still apply. Assembly can cross language-level safeguards, so the programmer needs to understand memory state, sizes, alignment and resource lifetimes.',
            'An assistant does not automatically know which invariants the rest of a program expects. Document preconditions, effects and properties the code must preserve. Keep the assembly surface as small as possible and place it behind a verifiable interface when the project architecture permits.'
          ] },
          { title: 'Measure before optimising', paragraphs: [
            'Assembly is not automatically faster than compiled code. A compiler optimises using its broader model, and a hand-written sequence can prevent other transformations or increase register pressure. Before rewriting, profile the real workflow and identify a significant, reproducible cost.',
            'Compare equivalent implementations with a stable protocol, the same hardware and representative inputs. Check correctness, side effects and edge cases as well as execution time. If the gain disappears in the full application, the additional complexity is hard to justify.'
          ] },
          { title: 'Use AI to learn and review', paragraphs: [
            'AI can work as a tutor: ask why a convention exists, request a minimal call example or list items to verify in a snippet. It can also serve as a critical reader by surfacing implicit assumptions. These uses make exploration more accessible without transferring responsibility for integration.',
            'For a team without expertise in the target architecture, a qualified review remains necessary before critical use. The goal is not the first generated block of instructions, but a change whose correctness, interfaces and measured benefit are understandable.'
          ] },
        ],
        takeaway: 'Before accepting generated assembly, identify the architecture, assembler, ABI, memory invariants and performance baseline. Review the calling contract, then measure the gain in the real workflow.',
        service: { href: '/en/ai-automation/', label: 'Explore AI automation approaches' },
      },
    },
  },
  {
    id: 'cms-static', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'cms-ou-site-statique-choisir-et-combiner',
        title: 'CMS ou site statique : choisir selon qui entretient le contenu',
        description: 'Le choix entre CMS et génération statique dépend des mises à jour, des contributeurs, des fonctionnalités dynamiques et du coût de maintenance.',
        category: 'Web & produits',
        introduction: 'CMS et site statique décrivent des parties différentes d’une solution. Un CMS organise la saisie, les rôles et les contenus ; un site statique décrit une façon de servir des pages préconstruites. Un CMS peut alimenter un site statique, un site dynamique peut contenir des pages mises en cache, et une application peut combiner plusieurs modèles. La décision utile porte sur les tâches réelles des éditeurs et des responsables techniques.',
        sources: [mdnDynamic, mdnClientServer, astroCms, astroCollections],
        sections: [
          { title: 'Distinguer le mode d’édition du mode de livraison', sourceUrls: [mdnDynamic.url, mdnClientServer.url], paragraphs: [
            'Un site statique sert des fichiers préconstruits. Un site dynamique peut composer une réponse à partir de données ou du contexte de la requête. Cela ne dit pas, à lui seul, comment le contenu a été rédigé. Un éditeur peut modifier des documents dans un CMS, puis déclencher une génération qui publie des pages statiques.',
            'Cette distinction aide à éviter le débat binaire « CMS ou statique ». La question est plutôt : où le contenu est-il édité, quand la page est-elle construite, et quelles fonctionnalités doivent répondre à chaque visite ? Le formulaire de contact, l’authentification ou la recherche peuvent être servis par des composants distincts du corpus éditorial.'
          ] },
          { title: 'Choisir le CMS si la collaboration éditoriale le justifie', sourceUrls: [astroCms.url], paragraphs: [
            'Un CMS apporte souvent une interface visuelle, des rôles, des champs structurés et un circuit de relecture. Ces fonctions deviennent utiles quand plusieurs personnes publient régulièrement, quand les contenus partagent un schéma précis ou quand une équipe doit corriger une page sans modifier le dépôt de code.',
            'Il faut alors compter les coûts du service, la gestion des accès, les mises à jour, les intégrations, les migrations et les procédures de sauvegarde. Le CMS peut simplifier la rédaction tout en ajoutant une dépendance opérationnelle ; la responsabilité de configurer les rôles et de maintenir la source de contenu ne disparaît pas.'
          ] },
          { title: 'Choisir la génération statique quand le contenu bouge peu', sourceUrls: [astroCollections.url, mdnClientServer.url], paragraphs: [
            'Pour des pages éditoriales mises à jour par petits lots, préconstruire le site peut rendre le déploiement et la livraison plus simples. Les collections de contenu d’Astro permettent de structurer les documents locaux et de les valider au build ; sa documentation présente aussi des sources CMS distantes et des chargements au moment de la génération ou à l’exécution.',
            'Le prix à payer peut se déplacer vers la chaîne de publication : modification par pull request, compréhension de Git, compilation, vérification des liens et déploiement. Si une seule personne sait publier, la solution peut devenir un goulot d’étranglement même si son hébergement est techniquement léger.'
          ] },
          { title: 'Envisager un hybride ou un CMS headless', sourceUrls: [astroCms.url, astroCollections.url], paragraphs: [
            'Un CMS headless sépare l’édition de la présentation : le CMS stocke les contenus, et l’application récupère les données pour les rendre. On peut ensuite générer les pages à chaque publication, récupérer certains éléments à la demande ou utiliser le CMS pour un sous-ensemble de pages. Cette souplesse permet d’aligner le mode de livraison sur la fréquence de changement.',
            'L’hybride ajoute cependant des contrats d’API, des webhooks, la gestion des échecs de synchronisation et deux lieux à documenter. Définissez quel système fait autorité, comment les prévisualisations fonctionnent et comment restaurer une version. Une architecture n’est « flexible » que si l’équipe peut comprendre et maintenir ses raccords.'
          ] },
          { title: 'Comparer le coût de vie du contenu', paragraphs: [
            'Pour décider, estimez la fréquence de mise à jour, le nombre de contributeurs, les droits éditoriaux, les fonctions dynamiques, le temps de publication et la charge de maintenance. Ajoutez les coûts de migration et de reprise si l’outil choisi change. Un petit site vitrine et un catalogue maintenu quotidiennement n’ont pas les mêmes contraintes.',
            'Testez le parcours complet avec une modification représentative : corriger une page, l’envoyer en revue, la prévisualiser et la publier. La solution qui paraît simple au développeur peut être difficile pour l’équipe qui entretient le contenu au quotidien. Demandez à un contributeur de réaliser ce parcours sans aide du concepteur, puis notez les étapes ambiguës. Ce test révèle souvent mieux les coûts réels qu’une démonstration commerciale.',
            'Prenons une page de campagne dont le tarif vient de changer : l’éditrice corrige le prix et la date, demande une revue, puis ouvre l’aperçu pour contrôler les liens, le mobile et la langue anglaise avant publication. Après validation, le CMS conserve une version ou le dépôt garde le commit publié. Si une coquille est repérée, l’équipe restaure la révision approuvée, reconstruit le site si nécessaire, puis vérifie que la page publique correspond. Selon l’outil, prévisualisation et retour arrière peuvent exiger une configuration dédiée : incluez-les dans le choix.'
          ] },
        ],
        takeaway: 'Décrivez les contributeurs, les mises à jour, la prévisualisation et les fonctions réellement dynamiques. Faites ensuite un essai de publication complet avant de choisir une architecture.',
        service: { href: '/sites-web-premium/', label: 'Parler d’une création ou refonte de site' },
      },
      en: {
        slug: 'cms-or-static-site-choose-and-combine',
        title: 'CMS or static site: choose for the people maintaining content',
        description: 'The choice depends on update frequency, contributors, dynamic features and the cost of maintenance.',
        category: 'Web & products',
        introduction: 'A CMS and a static site describe different parts of a solution. A CMS organises editing, roles and content; a static site describes one way to serve prebuilt pages. A CMS can feed a static site, a dynamic site can include cached pages, and an application can combine several models. A useful decision starts with the actual tasks of editors and technical owners.',
        sources: [mdnDynamic, mdnClientServer, astroCms, astroCollections],
        sections: [
          { title: 'Separate the editing model from delivery', sourceUrls: [mdnDynamic.url, mdnClientServer.url], paragraphs: [
            'A static site serves prebuilt files. A dynamic site can compose a response from data or request context. This alone does not explain how content was written. An editor might change documents in a CMS and trigger a build that publishes static pages.',
            'This distinction helps move beyond a binary “CMS or static” debate. Ask where content is edited, when a page is built and which features must respond to each visit. A contact form, authentication or search can be served by components separate from editorial content.'
          ] },
          { title: 'Choose a CMS when editorial collaboration needs it', sourceUrls: [astroCms.url], paragraphs: [
            'A CMS often provides a visual interface, roles, structured fields and a review workflow. These features become useful when several people publish regularly, content shares a defined schema or an editor needs to update a page without changing the code repository.',
            'Then account for service costs, access management, updates, integrations, migrations and backup procedures. The CMS may simplify writing while adding an operational dependency; responsibility for roles and the content source does not disappear.'
          ] },
          { title: 'Choose static generation when content changes less often', sourceUrls: [astroCollections.url, mdnClientServer.url], paragraphs: [
            'For editorial pages updated in small batches, prebuilding the site can simplify deployment and delivery. Astro content collections can structure local documents and validate them at build time; its documentation also describes remote CMS content and loading at build or runtime.',
            'The cost may shift to the publishing pipeline: pull requests, Git knowledge, compilation, link checks and deployment. If only one person knows how to publish, the process can become a bottleneck even when hosting itself is technically lightweight.'
          ] },
          { title: 'Consider a hybrid or headless CMS', sourceUrls: [astroCms.url, astroCollections.url], paragraphs: [
            'A headless CMS separates editing from presentation: the CMS stores content, and the application fetches it for rendering. Pages can then be built on publication, selected data can be fetched on demand, or a CMS can serve only some parts of the site. This flexibility aligns delivery with how often content changes.',
            'A hybrid adds API contracts, webhooks, sync failure handling and two systems to document. Define which system is authoritative, how previews work and how to restore a version. An architecture is only flexible if the team can understand and maintain its connections.'
          ] },
          { title: 'Compare the lifetime cost of content', paragraphs: [
            'To decide, estimate update frequency, contributor count, editorial permissions, dynamic features, publication time and maintenance load. Include migration and recovery costs if the chosen tool changes. A small brochure site and a catalogue updated daily do not share the same constraints.',
            'Test the complete publishing journey with a representative change: edit a page, send it for review, preview it and publish it. A solution that seems simple to a developer may be difficult for the team maintaining content every day.',
            'Consider a campaign page whose price has changed: the editor updates the price and date, requests review, then checks links, mobile layout and the English version in preview before publishing. After approval, the CMS retains a version or the repository keeps the deployed commit. If a typo appears, the team restores the approved revision, rebuilds the site if required and checks that the public page matches. Preview and rollback may need specific configuration in a given tool, so include them in the selection.'
          ] },
        ],
        takeaway: 'Describe contributors, update frequency, previews and genuinely dynamic features. Then complete a representative publishing workflow before selecting an architecture.',
        service: { href: '/en/premium-websites/', label: 'Discuss a website creation or redesign' },
      },
    },
  },
  {
    id: 'business-app-entry', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'application-metier-nouvelle-porte-entree',
        title: 'Une application métier peut devenir une nouvelle porte d’entrée',
        description: 'Une application métier apporte de la valeur lorsqu’elle simplifie un parcours réel, avec une identité, des intégrations et une responsabilité claires.',
        category: 'Web & produits',
        introduction: 'Une entreprise peut considérer son application comme une nouvelle façon d’entrer en relation avec ses clients, partenaires ou équipes. Cela ne garantit ni croissance ni fidélisation. Une application n’a de raison d’exister que si elle rend un travail récurrent plus facile, plus clair ou plus fiable que les parcours actuels. Avant de la construire, il faut préciser qui l’utilise, ce qu’elle permet de faire et qui sera responsable de ses accès et de ses évolutions.',
        sources: [mdnDynamic, mdnClientServer, owaspAccess, owaspAuthTests, doraFeedback],
        sections: [
          { title: 'Choisir un parcours à améliorer', sourceUrls: [doraFeedback.url], paragraphs: [
            'Une application devient pertinente lorsqu’un parcours fréquent est fragmenté : rechercher un dossier, transmettre des pièces, suivre une demande ou coordonner une validation. Cartographiez les étapes actuelles, les outils utilisés et les erreurs qui entraînent une reprise. Les retours des personnes concernées aident à distinguer une friction réelle d’une idée de fonctionnalité séduisante.',
            'Formulez la promesse en termes d’action que la personne peut accomplir. « Une app pour nos clients » ne précise pas le besoin. « Permettre à un partenaire de déposer une demande, consulter son état et fournir les éléments manquants » décrit un usage à étudier et une première version à cadrer.'
          ] },
          { title: 'Définir l’identité et les autorisations', sourceUrls: [owaspAccess.url, owaspAuthTests.url], paragraphs: [
            'L’application doit établir qui agit, pour quel compte ou organisation, et sur quelles ressources. L’authentification vérifie une identité ; l’autorisation décide ce que cette identité peut faire. OWASP recommande un refus par défaut, des contrôles cohérents côté serveur et des permissions limitées à ce qui est nécessaire.',
            'Décrivez les rôles et les relations métier avant de dessiner l’écran d’accueil : un contact peut-il voir tous les dossiers de son entreprise ou seulement ceux qu’il a déposés ? Peut-il modifier une demande après validation ? Ces règles influencent les données, les API, les journaux et les tests. Une interface qui masque un bouton ne suffit pas à protéger une action.'
          ] },
          { title: 'Cartographier les intégrations et la source de vérité', sourceUrls: [mdnDynamic.url, mdnClientServer.url], paragraphs: [
            'Un portail métier doit souvent lire ou mettre à jour des informations détenues par d’autres systèmes. Pour chaque donnée, désignez la source de vérité, la fréquence de synchronisation et le comportement si l’intégration échoue. Précisez aussi quelles opérations sont immédiates et lesquelles deviennent une demande à traiter par une personne.',
            'Il peut être préférable de commencer par consulter un statut plutôt que de permettre une modification directe. Les intégrations amènent des sujets de disponibilité, de droits, de journalisation et de gestion des doublons. Leur périmètre doit être réaliste dès le prototype, même si celui-ci utilise des données simulées.'
          ] },
          { title: 'Garder un chemin de service humain', paragraphs: [
            'Une application ne doit pas laisser une personne bloquée lorsqu’un dossier est incomplet, une identité ne peut être confirmée ou une opération nécessite une exception. Prévoyez une voie de contact ou d’escalade, un état compréhensible et une indication des prochaines étapes. Cette conception réduit le risque que le support doive reconstituer la situation à partir d’un message vague.',
            'L’interface doit aider les utilisateurs à faire le travail ; elle n’a pas à remplacer toutes les interactions existantes. Des notifications, des formulaires et un tableau de suivi peuvent suffire. La version la plus utile est parfois une petite amélioration d’un parcours existant plutôt qu’une application complète.'
          ] },
          { title: 'Tester la valeur et le coût d’exploitation', paragraphs: [
            'Choisissez un groupe pilote et un parcours avec un début et une fin observables. Mesurez la capacité à terminer la tâche, les erreurs, les demandes d’aide et le temps de traitement avant et après. Le résultat n’est pas une promesse de croissance : il indique si ce parcours précis s’améliore dans les conditions observées.',
            'Intégrez au coût la sécurité, la disponibilité, l’assistance, les mises à jour des systèmes connectés et l’évolution des règles métier. Une application est un produit à entretenir, pas seulement une interface à lancer. Identifiez le responsable métier et le responsable technique avant l’ouverture à un public plus large. Définissez également comment retirer un compte, exporter ou supprimer des données et communiquer une interruption. Ces opérations font partie de la vie du produit au même titre que son premier parcours.'
          ] },
        ],
        takeaway: 'Avant d’imaginer une application, cartographiez un parcours fréquent, les rôles, les systèmes concernés et le résultat vérifiable. Construisez la plus petite expérience qui permet d’évaluer son utilité et sa charge d’exploitation.',
        service: { href: '/sites-web-premium/', label: 'Parler d’une création ou refonte de site' },
      },
      en: {
        slug: 'business-application-as-a-new-entry-point',
        title: 'A business application can become a new entry point',
        description: 'An application is useful when it simplifies a real workflow with clear identity, integrations and ownership.',
        category: 'Web & products',
        introduction: 'A business may see an application as a new way to serve customers, partners or employees. That does not guarantee growth or retention. An application needs a reason to exist: making recurring work easier, clearer or more reliable than current journeys. Before building one, define who will use it, what they can do and who owns its access and future changes.',
        sources: [mdnDynamic, mdnClientServer, owaspAccess, owaspAuthTests, doraFeedback],
        sections: [
          { title: 'Choose a workflow to improve', sourceUrls: [doraFeedback.url], paragraphs: [
            'An application becomes relevant when a frequent workflow is fragmented: finding a case, submitting documents, tracking a request or coordinating approval. Map the current steps, tools and errors that cause rework. Feedback from affected people helps distinguish real friction from an appealing feature idea.',
            'Describe the promise as an action a person can complete. “An app for our customers” does not specify a need. “Let a partner submit a request, check its status and provide missing information” describes a use case to study and an initial scope to define.'
          ] },
          { title: 'Define identity and authorisation', sourceUrls: [owaspAccess.url, owaspAuthTests.url], paragraphs: [
            'The application must establish who is acting, on behalf of which account or organisation, and which resources they can access. Authentication verifies identity; authorisation determines what that identity can do. OWASP recommends default-deny decisions, consistent server-side checks and permissions limited to what is needed.',
            'Describe roles and business relationships before drawing the home screen: can a contact see every case for their company or only requests they submitted? Can they edit a request after approval? These rules affect data, APIs, logs and tests. Hiding a button in the interface does not secure an action.'
          ] },
          { title: 'Map integrations and sources of truth', sourceUrls: [mdnDynamic.url, mdnClientServer.url], paragraphs: [
            'A business portal often needs to read or update information held in other systems. For each data item, identify the source of truth, sync frequency and failure behaviour. Clarify which operations are immediate and which become a request for a person to process.',
            'It may be better to start by showing status rather than allowing direct changes. Integrations bring availability, access, logging and duplicate-handling concerns. Keep their scope realistic from the prototype onwards, even if the prototype uses simulated data.'
          ] },
          { title: 'Keep a path to human service', paragraphs: [
            'An application should not leave someone stuck when a case is incomplete, identity cannot be confirmed or an operation requires an exception. Provide a contact or escalation route, an understandable status and an indication of next steps. This reduces the chance that support must reconstruct a situation from a vague message.',
            'The interface should help users do the work; it does not have to replace every existing interaction. Notifications, forms and a tracking view may be enough. The most useful version may be a small improvement to an existing journey rather than a complete application.'
          ] },
          { title: 'Test value and operating cost', paragraphs: [
            'Choose a pilot group and a workflow with an observable start and finish. Measure task completion, errors, help requests and processing time before and after. The result is not a growth promise; it shows whether that specific workflow improved under the conditions observed.',
            'Include security, availability, support, connected-system updates and changing business rules in the cost. An application is a product to maintain, not just an interface to launch. Identify a business owner and technical owner before opening it to a wider audience.'
          ] },
        ],
        takeaway: 'Before planning an application, map a frequent workflow, roles, connected systems and a verifiable outcome. Build the smallest experiment that can assess its usefulness and operating cost.',
        service: { href: '/en/premium-websites/', label: 'Discuss a website creation or redesign' },
      },
    },
  },
];
