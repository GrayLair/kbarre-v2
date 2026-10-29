import type { JournalEntry } from '../journal-types';

const accessedAt = '2026-10-29';

export const architectureEntries: JournalEntry[] = [
  {
    id: 'api-subscription', preparedAt: accessedAt, status: 'review',
    copy: {
      fr: {
        slug: 'api-ou-abonnement-ia-quel-modele-economique',
        title: 'API ou abonnement IA : comparer le coût réel d’un usage',
        description: 'Abonnement et API répondent à des usages différents. Comparez coût, intégration, contrôle et responsabilité avant de choisir.',
        category: 'Architecture & coûts',
        sources: [
          { title: 'Crédits API pour les abonnés ChatGPT', url: 'https://developers.openai.com/api/docs/guides/chatgpt-api-credits', publisher: 'OpenAI', accessedAt },
          { title: 'Tarifs de l’API OpenAI', url: 'https://developers.openai.com/api/docs/pricing', publisher: 'OpenAI', accessedAt },
          { title: 'Offres Claude', url: 'https://www.anthropic.com/pricing', publisher: 'Anthropic', accessedAt },
        ],
        introduction: 'Une équipe compare parfois le prix mensuel d’un assistant IA avec une facture API et conclut qu’une option est forcément moins chère. La comparaison mélange pourtant deux produits et deux façons de travailler. Pour décider, partez de la tâche : aide individuelle dans une interface, ou fonctionnalité intégrée dans un service que votre organisation exploite.',
        sections: [
          { title: 'Séparer l’accès à un produit du coût d’un service', paragraphs: [
            'Un abonnement donne accès à des fonctions définies par un fournisseur dans une application, avec ses limites et règles d’usage. Une API permet à un logiciel ou à une équipe de construire ses propres appels à un modèle ; la consommation, les options, le stockage éventuel et les outils sont alors facturés selon les conditions de cette API.',
            'Les offres évoluent et peuvent proposer des crédits ou avantages ciblés. Il faut vérifier l’éligibilité, l’activation, l’expiration et le périmètre de ces crédits dans les conditions actuelles. Un avantage documenté pour une offre donnée ne transforme pas tous les abonnements en portefeuille API.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/chatgpt-api-credits', 'https://www.anthropic.com/pricing'] },
          { title: 'Comparer un parcours de travail complet', paragraphs: [
            'Pour un usage personnel occasionnel, une interface payante peut éviter de construire et maintenir une intégration. Pour une fonction destinée à des clients ou collègues, l’API apporte un point d’intégration programmable ; elle implique aussi l’authentification, la gestion des erreurs, la mesure de consommation et le support du produit.',
            'Un exemple de calcul doit rester un scénario, pas un prix annoncé : multipliez vos volumes observés par les tarifs du modèle et des outils consultés le jour de l’étude, puis ajoutez les essais, sorties longues, relances, stockage et temps humain. Le résultat dépend du comportement réel de l’application.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/pricing'] },
          { title: 'Inclure la propriété et l’exploitation', paragraphs: [
            'Avec une interface, l’utilisateur travaille dans l’environnement du fournisseur. Avec une API intégrée, votre équipe définit l’expérience et doit clarifier qui possède le code, les données métier, les prompts, les journaux et les règles de conservation. Ces responsabilités restent à cadrer même si un prestataire construit la première version.',
            'Les droits, limites de débit, rétention, sécurité et conditions de traitement varient selon le service et le contrat. Une facture estimée ne remplace donc pas l’examen des conditions applicables à votre organisation et à vos données.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/pricing', 'https://developers.openai.com/api/docs/guides/chatgpt-api-credits'] },
          { title: 'Faire un essai borné avant de généraliser', paragraphs: [
            'Choisissez un cas d’usage, un volume représentatif et un critère d’acceptation. Mesurez le coût par résultat utilisable, le délai, les reprises et l’effort de revue. Si une interface suffit, le coût de l’API n’apporte peut-être pas de valeur. Si l’intégration automatise une étape répétée, estimez aussi son coût de maintenance.',
            'Recommencez le calcul lorsque le modèle, le volume, les tarifs ou les règles changent. Les prix publics sont des instantanés ; ce sont les conditions consultées au moment de la décision et les journaux de votre usage qui fondent le budget.',
          ], checklist: ['S’agit-il d’un outil pour une personne ou d’une fonction intégrée ?', 'Quels usages et volumes sont réellement prévus ?', 'Qui exploite l’intégration et répond des données ?', 'Quels coûts de reprise, outils et contrôle humain entrent dans le scénario ?'], sourceUrls: ['https://developers.openai.com/api/docs/pricing'] },
          { title: 'Construire un cas de comparaison concret', paragraphs: [
            'Imaginez une équipe qui rédige et vérifie dix réponses internes par jour. Avec un assistant en interface, estimez le temps gagné, le nombre de sièges et les limites d’usage. Avec une API, mesurez les tokens d’entrée et de sortie, les appels supplémentaires et le temps nécessaire à l’intégration. Gardez le même échantillon de demandes et la même définition d’une réponse acceptable pour comparer les deux parcours.',
            'Si le modèle API renvoie une réponse que l’équipe doit systématiquement réécrire, le coût apparent par appel masque une partie importante du coût. À l’inverse, une interface peut être moins adaptée si les réponses doivent être insérées dans un système métier ou exécutées sans intervention manuelle. Ce sont des hypothèses à vérifier dans le pilote, pas des avantages garantis par une catégorie de produit.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/pricing', 'https://www.anthropic.com/pricing'] },
          { title: 'Prévoir le passage du pilote à la durée', paragraphs: [
            'Le pilote révèle le coût opérationnel qui manque souvent au premier calcul : surveillance des erreurs, mises à jour des instructions, demandes d’assistance, changement de fournisseur ou reprise manuelle quand le service est indisponible. Documentez qui porte chacune de ces tâches et combien de temps elles prennent.',
            'Un abonnement peut être un bon choix provisoire pour apprendre quelles tâches valent la peine d’être automatisées. Une API peut aussi rester un petit service spécialisé. Le choix peut évoluer : définissez dès le départ les observations qui déclencheront une nouvelle comparaison, sans promettre une migration automatique vers l’option supposée la moins chère.',
          ] },
        ],
        takeaway: 'Avant de comparer une mensualité et une API, décrivez le parcours attendu, chiffrez un scénario observé et attribuez l’exploitation. Le bon choix est celui qui couvre le besoin complet avec des responsabilités explicites.',
        service: { href: '/ia-automatisation/', label: 'Découvrir l’automatisation par l’IA' },
      },
      en: {
        slug: 'ai-api-or-subscription-real-cost',
        title: 'AI API or subscription: compare the real cost of use',
        description: 'Subscriptions and APIs serve different needs. Compare cost, integration, control and ownership before choosing.',
        category: 'Architecture & costs',
        sources: [
          { title: 'API credits for ChatGPT subscribers', url: 'https://developers.openai.com/api/docs/guides/chatgpt-api-credits', publisher: 'OpenAI', accessedAt },
          { title: 'OpenAI API pricing', url: 'https://developers.openai.com/api/docs/pricing', publisher: 'OpenAI', accessedAt },
          { title: 'Claude plans', url: 'https://www.anthropic.com/pricing', publisher: 'Anthropic', accessedAt },
        ],
        introduction: 'A team may compare an AI assistant’s monthly subscription with an API bill and conclude that one must be cheaper. That comparison mixes two products and two ways of working. Start with the task: individual help in an interface, or a feature integrated into a service your organisation operates.',
        sections: [
          { title: 'Separate product access from service consumption', paragraphs: [
            'A subscription provides access to features defined by a supplier inside an application, subject to its limits and usage rules. An API lets a software product or team make programmable model calls; consumption, options, any storage and tools then follow that API’s terms and billing.',
            'Plans change and may offer specific credits or benefits. Check current eligibility, activation, expiry and scope in the applicable terms. A benefit documented for one plan does not turn every subscription into an API wallet.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/chatgpt-api-credits', 'https://www.anthropic.com/pricing'] },
          { title: 'Compare the whole workflow', paragraphs: [
            'For occasional personal use, a paid interface may avoid building and maintaining an integration. For a feature used by customers or colleagues, an API offers a programmable integration point; it also brings authentication, error handling, usage measurement and product support.',
            'Keep a cost calculation clearly hypothetical: multiply observed volumes by the model and tool rates checked on the study date, then include retries, long outputs, storage and human time. The result depends on how the application behaves in practice.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/pricing'] },
          { title: 'Include ownership and operations', paragraphs: [
            'With an interface, users work inside the provider’s environment. With an API feature, your team shapes the experience and should clarify who owns the code, business data, prompts, logs and retention rules. Those responsibilities still need an owner when a contractor builds the first version.',
            'Rights, rate limits, retention, security and data terms vary by service and contract. An estimated bill cannot replace checking the terms that apply to your organisation and its data.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/pricing', 'https://developers.openai.com/api/docs/guides/chatgpt-api-credits'] },
          { title: 'Run a bounded trial before scaling', paragraphs: [
            'Choose one use case, a representative volume and an acceptance criterion. Measure cost per usable result, time, retries and review effort. If an interface is sufficient, API spend may add no value. If integration automates a repeated step, estimate its maintenance too.',
            'Revisit the calculation when the model, volume, rates or rules change. Public prices are snapshots; the terms checked at decision time and your usage records are the basis for a budget.',
          ], checklist: ['Is this a personal tool or an integrated feature?', 'What use and volume are actually expected?', 'Who operates the integration and is accountable for its data?', 'Which retries, tools and human checks belong in the scenario?'], sourceUrls: ['https://developers.openai.com/api/docs/pricing'] },
          { title: 'Build a concrete comparison case', paragraphs: [
            'Imagine a team drafting and checking ten internal replies each day. For an interface, estimate time saved, seats and usage limits. For an API, measure input and output tokens, additional calls and the time needed to build the integration. Compare both workflows using the same sample requests and the same definition of an acceptable answer.',
            'If the API model returns content that people must routinely rewrite, cost per call hides a significant part of the expense. An interface may be less suitable when answers must enter a business system or run without manual intervention. These are hypotheses to test in a pilot, not benefits guaranteed by a product category.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/pricing', 'https://www.anthropic.com/pricing'] },
          { title: 'Plan for ongoing operation', paragraphs: [
            'A pilot reveals operating costs that the first estimate often misses: monitoring errors, updating instructions, support requests, changing providers or handling work manually during an outage. Document who owns each task and how much time it takes.',
            'A subscription can be a useful way to learn which tasks deserve automation. An API can also remain a small, specialised service. The choice can evolve: define which observations should trigger another comparison instead of assuming one option will always be cheapest.',
          ] },
        ],
        takeaway: 'Before comparing a monthly fee with an API, describe the intended workflow, cost a scenario based on observed use and assign operational ownership. Choose the option that covers the full need with clear responsibilities.',
        service: { href: '/en/ai-automation/', label: 'Explore AI automation' },
      },
    },
  },
  {
    id: 'context-caching', preparedAt: accessedAt, status: 'review',
    copy: {
      fr: {
        slug: 'context-caching-prefixe-memoire-ou-rag',
        title: 'Context caching : préfixe réutilisé, mémoire ou RAG ?',
        description: 'Comprendre le cache de préfixe, la mémoire applicative et le RAG pour réduire les traitements sans confondre leurs rôles.',
        category: 'Architecture & coûts',
        sources: [
          { title: 'Mise en cache des prompts', url: 'https://developers.openai.com/api/docs/guides/prompt-caching', publisher: 'OpenAI', accessedAt },
          { title: 'Mise en cache des prompts', url: 'https://platform.claude.com/docs/en/build-with-claude/prompt-caching', publisher: 'Anthropic', accessedAt },
          { title: 'Mise en cache du contexte', url: 'https://ai.google.dev/gemini-api/docs/generate-content/caching', publisher: 'Google AI for Developers', accessedAt },
          { title: 'Rétention nulle des données dans Gemini Developer API', url: 'https://ai.google.dev/gemini-api/docs/zdr', publisher: 'Google AI for Developers', accessedAt },
        ],
        introduction: 'Une facture d’inférence élevée pousse souvent à « mettre le contexte en cache ». Cette expression recouvre plusieurs mécanismes. Un cache de préfixe réutilise une partie identique d’une requête ; une mémoire conserve des informations utiles à une application ; un système RAG sélectionne des documents pour une question. Leurs bénéfices, coûts et règles de conservation ne sont pas interchangeables.',
        sections: [
          { title: 'Savoir quelle répétition on veut éviter', paragraphs: [
            'Le cache de prompt vise des requêtes dont le début rendu reste identique : instructions, définitions d’outils et références stables, par exemple. Si l’application insère une date ou un identifiant avant ce bloc, le préfixe commun peut disparaître. Il faut observer les jetons lus et écrits dans les réponses plutôt que déduire un succès de la seule configuration.',
            'Le mécanisme n’empêche pas le modèle de traiter les nouveaux éléments ni de produire une nouvelle réponse. Il ne remplace pas non plus une base documentaire où les contenus peuvent être retrouvés, versionnés ou retirés.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/prompt-caching'] },
          { title: 'Comparer les règles fournisseur par fournisseur', paragraphs: [
            'Les modalités diffèrent : seuil minimal de tokens, préfixe à faire correspondre, durée de vie, cache implicite ou objet explicite, et facturation des écritures ou du stockage. OpenAI décrit des tarifs et durées variables selon les modèles ; Anthropic documente des points de cache et une facturation selon durée ; Google distingue cache implicite et cache explicite avec TTL.',
            'Une réduction sur les jetons relus ne suffit pas à conclure que le coût total baisse. Incluez l’écriture, le stockage éventuel, les appels manqués, les jetons suffixes, la sortie et les outils. Les tarifs et la disponibilité changent : relevez modèle, unité, devise, date et source dans votre propre calcul.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/prompt-caching', 'https://platform.claude.com/docs/en/build-with-claude/prompt-caching', 'https://ai.google.dev/gemini-api/docs/generate-content/caching'] },
          { title: 'Ne pas appeler cela une mémoire', paragraphs: [
            'La mémoire applicative est une décision de produit : quelles informations retenir, à quelle fin, pendant combien de temps, et comment l’utilisateur les corrige ou les supprime. Un cache fournisseur accélère potentiellement un préfixe technique ; il ne choisit pas quelles préférences ou faits doivent guider une conversation future.',
            'Le RAG répond à une autre question : quels passages d’une collection documentaire sont pertinents pour cette demande ? Il faut maintenir les documents, l’index, les filtres d’accès et les citations. Un cache peut réduire le coût d’un bloc de contexte stable, mais ne décide pas quels documents sont les bons.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/prompt-caching', 'https://ai.google.dev/gemini-api/docs/generate-content/caching'] },
          { title: 'Mesurer et vérifier les données conservées', paragraphs: [
            'Construisez une comparaison sur des requêtes représentatives : volume total, taux de réutilisation observé, jetons écrits et relus, délai, coût total et erreurs de réponse. Une suite stable de consignes peut convenir au cache ; un suffixe qui varie à chaque requête peut ne pas l’amortir.',
            'Avant d’y placer du contenu sensible, vérifiez le contrat, les règles de rétention et les options réellement applicables au compte et au modèle. Une politique de rétention n’est pas une promesse abstraite : elle doit être évaluée avec les contrôles et exceptions du fournisseur. Google précise notamment les conditions propres à son option de rétention nulle et au cache explicite.',
          ], checklist: ['Quelle répétition est identique dans les requêtes réelles ?', 'Quels coûts d’écriture, stockage et cache manqué entrent au calcul ?', 'Le besoin est-il plutôt une mémoire modifiable ou une recherche documentaire ?', 'Quelles données transitent et combien de temps sont-elles conservées ?'], sourceUrls: ['https://developers.openai.com/api/docs/guides/prompt-caching', 'https://ai.google.dev/gemini-api/docs/zdr'] },
          { title: 'Traiter le cache comme une optimisation mesurée', paragraphs: [
            'Prenons un assistant interne qui reçoit toujours le même règlement et une question différente à chaque tour. Placer le règlement dans la partie stable peut créer une occasion de réutilisation ; ajouter un horodatage ou réordonner les définitions d’outils au début peut casser cette continuité. La bonne forme dépend toutefois du modèle, de l’API et de ses règles de cache, qu’il faut confirmer dans la documentation et mesurer sur les appels réellement envoyés.',
            'Comparez deux parcours sur le même lot : sans cache, puis avec cache. Relevez le nombre d’entrées, la proportion de tokens lus depuis le cache, le coût de création ou d’écriture, les expirations et la latence. Si les économies viennent seulement d’un taux de remise théorique sans fréquence de répétition suffisante, le mécanisme peut ajouter de la complexité sans retour observable.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/prompt-caching', 'https://platform.claude.com/docs/en/build-with-claude/prompt-caching', 'https://ai.google.dev/gemini-api/docs/generate-content/caching'] },
          { title: 'Faire évoluer les contenus sans perdre la maîtrise', paragraphs: [
            'Une mise à jour du règlement, des outils ou des consignes peut modifier le préfixe et rendre un cache ancien inutilisable. Le fonctionnement doit donc rester correct lorsque le cache expire, manque ou est renouvelé. Le cache est une optimisation ; il ne doit pas porter seul la vérité métier ni rendre une réponse impossible à expliquer.',
            'Tenez un inventaire minimal : contenu stable, propriétaire, version, fréquence de mise à jour, sensibilité, durée configurée et métriques de réutilisation. Si le contexte inclut des données personnelles ou confidentielles, vérifiez leur traitement pour le compte, le modèle et la fonctionnalité concernés au lieu d’extrapoler depuis une mention générale de sécurité.',
          ] },
        ],
        takeaway: 'Avant d’ajouter un cache, nommez la répétition visée et mesurez les lectures, écritures, latences et coûts sur un échantillon réel. Choisissez séparément la mémoire ou le RAG si le besoin porte sur la sélection et la gestion de connaissances.',
        service: { href: '/orchestration-agents-ia/', label: 'Découvrir l’orchestration d’agents IA' },
      },
      en: {
        slug: 'context-caching-prefix-memory-or-rag',
        title: 'Context caching: reusable prefix, memory or RAG?',
        description: 'Understand prefix caching, application memory and RAG to reduce processing without confusing their roles.',
        category: 'Architecture & costs',
        sources: [
          { title: 'Prompt caching', url: 'https://developers.openai.com/api/docs/guides/prompt-caching', publisher: 'OpenAI', accessedAt },
          { title: 'Prompt caching', url: 'https://platform.claude.com/docs/en/build-with-claude/prompt-caching', publisher: 'Anthropic', accessedAt },
          { title: 'Context caching', url: 'https://ai.google.dev/gemini-api/docs/generate-content/caching', publisher: 'Google AI for Developers', accessedAt },
          { title: 'Zero data retention in the Gemini Developer API', url: 'https://ai.google.dev/gemini-api/docs/zdr', publisher: 'Google AI for Developers', accessedAt },
        ],
        introduction: 'A high inference bill often leads to the suggestion to “cache the context”. That phrase covers several mechanisms. Prefix caching reuses an identical part of a request; memory keeps information useful to an application; a RAG system selects documents for a question. Their benefits, costs and retention rules are different.',
        sections: [
          { title: 'Identify the repetition you want to avoid', paragraphs: [
            'Prompt caching targets requests whose rendered beginning stays the same: stable instructions, tool definitions and reference material, for example. If the application inserts a date or identifier before that block, the shared prefix may disappear. Inspect reported tokens read and written instead of assuming a configuration change worked.',
            'Caching does not remove the need to process new material or generate a new answer. Nor does it replace a document store where content can be found, versioned or removed.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/prompt-caching'] },
          { title: 'Compare each provider’s rules', paragraphs: [
            'Mechanics vary: minimum token thresholds, matching prefixes, retention periods, implicit caching or explicit cache objects, and charges for writes or storage. OpenAI documents model-dependent rates and lifetimes; Anthropic documents cache breakpoints and duration-based billing; Google distinguishes implicit and explicit caching with a TTL.',
            'A discount on read tokens does not establish a lower total cost. Include writes, storage where applicable, misses, suffix tokens, output and tools. Rates and availability change, so record the model, unit, currency, date and source in your own calculation.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/prompt-caching', 'https://platform.claude.com/docs/en/build-with-claude/prompt-caching', 'https://ai.google.dev/gemini-api/docs/generate-content/caching'] },
          { title: 'Do not mistake a cache for memory', paragraphs: [
            'Application memory is a product decision: which information to retain, for what purpose, for how long, and how users can correct or delete it. A provider cache may speed up a technical prefix; it does not choose which preferences or facts should guide a future conversation.',
            'RAG answers a different question: which passages from a document collection are relevant to this request? It requires document maintenance, indexing, access filters and citations. A cache may reduce the cost of a stable context block, but it cannot decide which documents are relevant.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/prompt-caching', 'https://ai.google.dev/gemini-api/docs/generate-content/caching'] },
          { title: 'Measure outcomes and review retention', paragraphs: [
            'Compare representative requests: total volume, observed reuse, tokens written and read, latency, total cost and answer errors. Stable shared instructions may suit a cache; a suffix that changes every time may not repay the write.',
            'Before placing sensitive content in a cache, check the contract, retention rules and options that actually apply to your account and model. A retention policy must be assessed with the provider’s controls and exceptions. Google, for example, documents conditions specific to its zero-retention option and explicit caching.',
          ], checklist: ['Which repeated content is identical in real requests?', 'Which write, storage and cache-miss costs belong in the calculation?', 'Does the need call for editable memory or document retrieval?', 'What data is sent, and how long is it retained?'], sourceUrls: ['https://developers.openai.com/api/docs/guides/prompt-caching', 'https://ai.google.dev/gemini-api/docs/zdr'] },
          { title: 'Treat caching as a measured optimisation', paragraphs: [
            'Consider an internal assistant that receives the same policy on every turn and a different question each time. Placing the policy in the stable part may allow reuse; adding a timestamp or reordering tool definitions at the beginning may break that continuity. The right structure depends on the model, API and cache rules, which should be checked in documentation and measured against requests actually sent.',
            'Compare two workflows on the same sample: first without caching, then with it. Record request counts, the share of tokens read from cache, creation or write costs, expirations and latency. A theoretical discount without enough repeated traffic may add complexity without an observable return.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/prompt-caching', 'https://platform.claude.com/docs/en/build-with-claude/prompt-caching', 'https://ai.google.dev/gemini-api/docs/generate-content/caching'] },
          { title: 'Change content without losing control', paragraphs: [
            'An update to a policy, tool or instruction can change the prefix and make an old cache unusable. The workflow must still be correct when a cache expires, misses or is refreshed. Caching is an optimisation; it should not be the sole keeper of business truth or make an answer impossible to explain.',
            'Keep a short inventory: stable content, owner, version, update frequency, sensitivity, configured lifetime and reuse metrics. If context contains personal or confidential data, verify its handling for the specific account, model and feature rather than extrapolating from a general security statement.',
          ] },
        ],
        takeaway: 'Before adding a cache, identify the repetition and measure reads, writes, latency and cost on real samples. Choose memory or RAG separately when the need is knowledge selection and management.',
        service: { href: '/en/agent-orchestration/', label: 'Explore AI agent orchestration' },
      },
    },
  },
  {
    id: 'model-routing', preparedAt: accessedAt, status: 'review',
    copy: {
      fr: {
        slug: 'router-les-modeles-selon-les-taches',
        title: 'Router les modèles selon la tâche, pas selon une étiquette',
        description: 'Comparer des modèles sur vos tâches, puis router selon qualité, latence, coût et possibilité de reprise.',
        category: 'Architecture & coûts',
        sources: [
          { title: 'Choisir un modèle', url: 'https://developers.openai.com/api/docs/guides/model-selection', publisher: 'OpenAI', accessedAt },
          { title: 'Catalogue des modèles Claude', url: 'https://platform.claude.com/docs/en/about-claude/models/overview', publisher: 'Anthropic', accessedAt },
          { title: 'Modèles Gemini', url: 'https://ai.google.dev/gemini-api/docs/models', publisher: 'Google AI for Developers', accessedAt },
          { title: 'Bonnes pratiques d’évaluation', url: 'https://developers.openai.com/api/docs/guides/evaluation-best-practices', publisher: 'OpenAI', accessedAt },
        ],
        introduction: 'Un routeur de modèles semble offrir une réponse simple à une question compliquée : confier chaque demande au modèle qui convient. Mais la catégorie « rapide », « puissant » ou « économique » ne prouve pas qu’un modèle réussit votre tâche. La décision utile s’appuie sur un échantillon représentatif, des critères explicites et une règle de recours lorsqu’un premier essai échoue.',
        sections: [
          { title: 'Classer les tâches avant de classer les modèles', paragraphs: [
            'Séparez les demandes simples et bien cadrées des cas ambigus, sensibles ou à fort impact. Une extraction de champs avec format imposé ne pose pas les mêmes exigences qu’une analyse où plusieurs documents se contredisent. Certaines tâches exigent des outils, une grande fenêtre de contexte ou un langage précis ; d’autres se jugent surtout sur le délai et la régularité.',
            'Cette taxonomie doit refléter les entrées reçues en production, y compris les fautes, dossiers incomplets et exceptions. Un routeur optimisé sur une démonstration très propre risque de prendre de mauvaises décisions sur les cas habituels.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/model-selection', 'https://platform.claude.com/docs/en/about-claude/models/overview'] },
          { title: 'Tester des candidats sur le même jeu de cas', paragraphs: [
            'Constituez un petit jeu représentatif et notez à l’avance ce qu’est une réponse acceptable : exactitude, complétude, format, citations requises, refus approprié et besoin de correction humaine. Faites passer les mêmes cas aux modèles candidats avec les mêmes outils et consignes lorsque la comparaison le permet.',
            'Ajoutez des cas difficiles et des demandes atypiques, pas uniquement la moyenne attendue. Une moyenne peut masquer un échec rare mais coûteux. Gardez les résultats par sous-groupe afin d’identifier où un modèle demande une solution ou une validation différente.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/evaluation-best-practices', 'https://developers.openai.com/api/docs/guides/model-selection'] },
          { title: 'Optimiser la qualité au coût du parcours', paragraphs: [
            'Le prix par token n’est qu’une variable. Le modèle peut générer des réponses plus longues, appeler un outil, nécessiter une seconde tentative ou demander davantage de correction. Mesurez le coût et le délai jusqu’au résultat accepté, avec tous les appels du parcours et la revue humaine.',
            'La documentation fournisseur aide à repérer les capacités, versions et tarifs disponibles ; elle ne constitue pas un classement universel. Les fiches modèles changent : consignez les identifiants exacts, les paramètres et la date des essais pour rendre la comparaison reproductible.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/model-selection', 'https://ai.google.dev/gemini-api/docs/models'] },
          { title: 'Concevoir un routage prudent', paragraphs: [
            'Commencez par une règle lisible : un modèle adapté aux tâches fréquentes, puis une escalade pour une incertitude observable, un format invalide ou un score de contrôle insuffisant. Si le second passage ne corrige pas le problème, orientez vers une personne plutôt que de boucler les appels sans borne.',
            'La règle doit pouvoir expliquer après coup pourquoi une requête a suivi cette route. Évitez de router les données vers un fournisseur dont les conditions ne conviennent pas à ce dossier, et prévoyez un comportement clair en cas de panne ou de dépassement de délai.',
          ], checklist: ['Quelles classes de demande existent réellement ?', 'Quel seuil déclenche une escalade ?', 'Le coût inclut-il reprises, outils et revue ?', 'Quel humain tranche lorsque les contrôles restent insuffisants ?'], sourceUrls: ['https://developers.openai.com/api/docs/guides/evaluation-best-practices'] },
          { title: 'Surveiller les changements et réévaluer', paragraphs: [
            'Les modèles, versions, limites et tarifs évoluent. Suivez des indicateurs par type de tâche : taux d’acceptation, corrections, délai, erreurs de routage et coût complet. Une hausse d’un score global ne suffit pas si un groupe d’utilisateurs se dégrade.',
            'Lors d’un changement de version ou de fournisseur, rejouez le jeu d’évaluation avant de déplacer le trafic. Un essai contrôlé et réversible permet de comparer les résultats tout en gardant une solution de retour.',
            'Conservez aussi des exemples d’erreurs rencontrées en production, après retrait des données personnelles inutiles. Leur ajout raisonné au jeu de contrôle transforme un incident isolé en question vérifiable pour le prochain changement. Indiquez qui valide l’ajout et comment éviter qu’un cas de réglage réapparaisse dans le jeu réservé à la mesure finale.',
            'Un changement de volume peut aussi modifier le profil économique sans affecter la qualité : une règle autrefois exécutée quelques fois par semaine peut devenir un parcours fréquent. Réévaluez les seuils de routage lorsque la charge évolue, et examinez si les mêmes cas restent dans la classe de tâche prévue.',
            'Partagez les critères avec les personnes qui relisent les réponses. Un vocabulaire commun sur les erreurs évite de confondre une préférence de style et une défaillance qui bloque réellement l’usage.',
          ] },
        ],
        takeaway: 'Un bon routeur vient après une mesure métier. Établissez des critères de réussite et de repli, puis comparez le coût, la latence et le taux d’acceptation du parcours entier sur des demandes représentatives.',
        service: { href: '/orchestration-agents-ia/', label: 'Découvrir l’orchestration d’agents IA' },
      },
      en: {
        slug: 'route-models-by-task',
        title: 'Route models by task, not by label',
        description: 'Compare models on your work, then route by quality, latency, cost and recovery options.',
        category: 'Architecture & costs',
        sources: [
          { title: 'Model selection', url: 'https://developers.openai.com/api/docs/guides/model-selection', publisher: 'OpenAI', accessedAt },
          { title: 'Claude models overview', url: 'https://platform.claude.com/docs/en/about-claude/models/overview', publisher: 'Anthropic', accessedAt },
          { title: 'Gemini models', url: 'https://ai.google.dev/gemini-api/docs/models', publisher: 'Google AI for Developers', accessedAt },
          { title: 'Evaluation best practices', url: 'https://developers.openai.com/api/docs/guides/evaluation-best-practices', publisher: 'OpenAI', accessedAt },
        ],
        introduction: 'A model router seems to offer a simple answer to a complicated question: send each request to the model that fits. Yet labels such as “fast”, “capable” or “economical” do not prove that a model succeeds at your task. A useful decision depends on representative samples, explicit criteria and a fallback when the first attempt fails.',
        sections: [
          { title: 'Classify tasks before models', paragraphs: [
            'Separate simple, well-specified requests from ambiguous, sensitive or high-impact work. Extracting fields into a fixed format differs from analysing documents that disagree. Some tasks require tools, a larger context window or a specific language; others depend mainly on speed and consistency.',
            'Reflect production inputs in the task categories, including typos, incomplete records and exceptions. A router tuned on a polished demonstration may make poor choices on ordinary requests.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/model-selection', 'https://platform.claude.com/docs/en/about-claude/models/overview'] },
          { title: 'Test candidates on the same cases', paragraphs: [
            'Create a representative sample and define an acceptable answer in advance: accuracy, completeness, format, required citations, appropriate refusal and need for human correction. Run the same cases through candidate models with the same tools and instructions where comparison allows.',
            'Include difficult and unusual requests, not only the expected average. A mean score can conceal a rare but costly failure. Keep results by subgroup to identify where a model needs a different solution or review.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/evaluation-best-practices', 'https://developers.openai.com/api/docs/guides/model-selection'] },
          { title: 'Optimise the workflow’s quality-adjusted cost', paragraphs: [
            'Price per token is only one variable. A model may generate longer answers, call a tool, need another attempt or require more correction. Measure cost and time through an accepted result, including every call in the workflow and human review.',
            'Provider documentation helps identify available capabilities, versions and rates; it is not a universal ranking. Model pages change, so record exact identifiers, settings and test dates to make a comparison repeatable.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/model-selection', 'https://ai.google.dev/gemini-api/docs/models'] },
          { title: 'Design a cautious routing rule', paragraphs: [
            'Start with a readable rule: a model suited to common tasks, then escalation when an observable uncertainty, invalid format or insufficient check score appears. If a second pass does not resolve the issue, send it to a person instead of looping without a limit.',
            'The rule should explain why a request took a particular route. Do not send data to a provider whose terms do not suit that case, and define behaviour for outages or timeouts.',
          ], checklist: ['Which request classes actually occur?', 'What threshold triggers escalation?', 'Does cost include retries, tools and review?', 'Who decides when checks remain inconclusive?'], sourceUrls: ['https://developers.openai.com/api/docs/guides/evaluation-best-practices'] },
          { title: 'Monitor changes and re-evaluate', paragraphs: [
            'Models, versions, limits and rates change. Track acceptance, corrections, time, routing errors and full cost by task type. A higher overall score is not enough if one user group gets worse results.',
            'When changing versions or providers, rerun the evaluation set before shifting traffic. A controlled, reversible trial lets you compare outcomes while retaining a way back.',
            'Traffic mix can change the economics even when quality stays stable: a task once seen a few times a week may become common. Revisit routing thresholds as load changes and check whether those requests still belong in the category you designed.',
            'Share the criteria with the people reviewing answers. A common vocabulary for failures helps separate a style preference from a defect that actually blocks use.',
          ] },
        ],
        takeaway: 'Build a router after measuring the work. Set success and fallback criteria, then compare end-to-end cost, latency and acceptance on representative requests.',
        service: { href: '/en/agent-orchestration/', label: 'Explore AI agent orchestration' },
      },
    },
  },
  {
    id: 'rag-knowledge', preparedAt: accessedAt, status: 'review',
    copy: {
      fr: {
        slug: 'rag-connaissances-metier-prompt-fine-tuning',
        title: 'Connaissances métier : prompt, RAG ou fine-tuning ?',
        description: 'Choisir entre contexte, recherche documentaire et ajustement du modèle selon la nature et la mise à jour des connaissances.',
        category: 'Architecture & coûts',
        sources: [
          { title: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks', url: 'https://arxiv.org/abs/2005.11401', publisher: 'arXiv / NeurIPS', accessedAt },
          { title: 'File search', url: 'https://developers.openai.com/api/docs/guides/tools-file-search', publisher: 'OpenAI', accessedAt },
          { title: 'Model optimization', url: 'https://developers.openai.com/api/docs/guides/model-optimization', publisher: 'OpenAI', accessedAt },
        ],
        introduction: 'Quand un assistant doit répondre avec le vocabulaire, les règles ou les documents d’une organisation, trois idées reviennent : ajouter l’information au prompt, rechercher des passages pertinents avec du RAG, ou ajuster le modèle. Elles ne résolvent pas le même problème. Le bon choix dépend de la fréquence de mise à jour, du besoin de justifier une réponse et du comportement que l’on veut apprendre.',
        sections: [
          { title: 'Utiliser le prompt pour un contexte court et stable', paragraphs: [
            'Un prompt peut contenir les règles principales, un petit glossaire ou quelques exemples à suivre. Cette méthode est facile à comprendre et à modifier, tant que le contenu reste assez court et identique d’un appel à l’autre. Elle convient souvent à un prototype ou à un ensemble de consignes limité.',
            'Quand le corpus grossit ou change souvent, recopier tout le contenu devient difficile à maintenir et à contrôler. Il faut éviter les versions contradictoires et préciser ce qui prévaut si les consignes ou documents se contredisent.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/model-optimization'] },
          { title: 'Choisir le RAG pour retrouver des sources à jour', paragraphs: [
            'Le RAG associe un modèle à une recherche dans des données externes. Un système prépare les documents, retrouve des passages pour la question puis les inclut dans le contexte transmis au modèle. L’approche permet de modifier la collection sans réentraîner le modèle et peut soutenir des réponses liées à des documents identifiables.',
            'Cette architecture n’est pas une garantie de vérité. Un mauvais découpage, un index incomplet, une requête ambiguë ou des droits d’accès mal appliqués peuvent fournir les mauvais passages. Il faut évaluer la recherche et la rédaction séparément, conserver la provenance et vérifier que les références citées soutiennent réellement la réponse.',
          ], sourceUrls: ['https://arxiv.org/abs/2005.11401', 'https://developers.openai.com/api/docs/guides/tools-file-search'] },
          { title: 'Réserver le fine-tuning au comportement', paragraphs: [
            'L’ajustement peut aider un modèle à reproduire un format, un style ou une tâche répétée à partir d’exemples préparés. Il n’est pas une base documentaire consultable à la demande. Une règle qui change ou un fait à jour se maintient souvent mieux dans une source explicite que dans des poids dont la mise à jour exige une nouvelle préparation et une nouvelle évaluation.',
            'Avant de choisir cette voie, vérifiez que l’évaluation montre un écart de comportement que les instructions et les outils ne corrigent pas. La documentation de la plateforme présente l’optimisation comme une boucle combinant mesure, prompt, données et ajustement selon les besoins, plutôt qu’une étape obligatoire.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/model-optimization'] },
          { title: 'Écrire une matrice de décision', paragraphs: [
            'Pour une règle de conformité d’entreprise actualisée chaque trimestre, une source contrôlée avec recherche, version et date peut être plus facile à auditer. Pour un ton rédactionnel à appliquer sur des demandes variées, des exemples de consigne ou un essai d’ajustement peuvent être plus pertinents. Pour une définition courte et immuable, le prompt peut suffire.',
            'Ces exemples ne dispensent pas du test. Constituez quelques questions connues, des cas où l’information manque, des documents contradictoires et des utilisateurs aux droits différents. Vérifiez si le système trouve la bonne source, répond avec les bonnes limites et s’abstient quand il n’a pas de preuve.',
          ], checklist: ['Le contenu change-t-il souvent ?', 'Faut-il retrouver la source et sa version ?', 'Cherche-t-on à changer le style ou à injecter des faits ?', 'Les permissions s’appliquent-elles aussi aux passages récupérés ?'], sourceUrls: ['https://arxiv.org/abs/2005.11401', 'https://developers.openai.com/api/docs/guides/tools-file-search'] },
          { title: 'Maintenir le dispositif dans le temps', paragraphs: [
            'Un RAG requiert une personne responsable des documents, des suppressions, des permissions et de la qualité de l’index. Un prompt demande une revue lorsque la règle évolue. Un modèle ajusté réclame une gouvernance des jeux d’exemples, des versions et des évaluations de non-régression.',
            'Quelle que soit la méthode, prévoyez le cas où aucune information utile n’est trouvée. Une réponse honnête signalant une lacune ou demandant un document manque parfois une apparence d’autonomie, mais elle évite de transformer une absence de preuve en fait inventé.',
            'Définissez enfin une mesure de fraîcheur : combien de temps après une modification métier la nouvelle règle doit-elle devenir disponible ? Cette exigence peut orienter le choix de stockage, le calendrier d’indexation et les tests de retrait d’un document. La réponse doit être vérifiée de bout en bout plutôt que déduite du simple fait que le fichier a été téléversé.',
          ] },
        ],
        takeaway: 'Choisissez le prompt pour un contexte bref, le RAG pour rechercher des sources maintenues, et le fine-tuning lorsque les essais montrent un besoin de comportement appris. Évaluez la provenance et les cas sans réponse avant l’usage réel.',
        service: { href: '/ia-automatisation/', label: 'Découvrir l’automatisation par l’IA' },
      },
      en: {
        slug: 'business-knowledge-prompt-rag-fine-tuning',
        title: 'Business knowledge: prompt, RAG or fine-tuning?',
        description: 'Choose context, document retrieval or model adaptation based on how knowledge changes and how answers must be supported.',
        category: 'Architecture & costs',
        sources: [
          { title: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks', url: 'https://arxiv.org/abs/2005.11401', publisher: 'arXiv / NeurIPS', accessedAt },
          { title: 'File search', url: 'https://developers.openai.com/api/docs/guides/tools-file-search', publisher: 'OpenAI', accessedAt },
          { title: 'Model optimization', url: 'https://developers.openai.com/api/docs/guides/model-optimization', publisher: 'OpenAI', accessedAt },
        ],
        introduction: 'When an assistant needs an organisation’s vocabulary, rules or documents, three ideas often come up: put the information in a prompt, retrieve relevant passages with RAG, or adapt the model. They solve different problems. The choice depends on update frequency, the need to justify an answer and the behaviour you want to teach.',
        sections: [
          { title: 'Use a prompt for short, stable context', paragraphs: [
            'A prompt can contain core rules, a small glossary or a few examples. It is easy to understand and change while the content remains short and consistent across calls. It often works for a prototype or a limited set of instructions.',
            'As a corpus grows or changes often, copying everything becomes difficult to maintain and control. Avoid contradictory versions and make clear what takes precedence when instructions and documents disagree.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/model-optimization'] },
          { title: 'Choose RAG to retrieve maintained sources', paragraphs: [
            'RAG connects a model to search over external data. A system prepares documents, retrieves passages for the question and places them in the model’s context. The collection can change without retraining and can support answers tied to identifiable documents.',
            'This architecture does not guarantee truth. Poor chunking, an incomplete index, an ambiguous query or broken access rules can return the wrong passages. Evaluate retrieval and answer writing separately, keep provenance and check that citations actually support the response.',
          ], sourceUrls: ['https://arxiv.org/abs/2005.11401', 'https://developers.openai.com/api/docs/guides/tools-file-search'] },
          { title: 'Reserve fine-tuning for behaviour', paragraphs: [
            'Adaptation can help a model reproduce a format, style or repeated task from prepared examples. It is not a document store that can be queried on demand. A changing rule or current fact is often easier to maintain in an explicit source than in weights that require new preparation and evaluation to update.',
            'Before choosing this path, confirm through evaluation that there is a behavioural gap instructions and tools do not solve. Platform guidance presents optimisation as a loop of measurement, prompting, data and adaptation where needed, rather than a mandatory step.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/model-optimization'] },
          { title: 'Write a decision matrix', paragraphs: [
            'For a business compliance rule updated every quarter, a controlled source with search, version and date may be easier to audit. For a writing style applied to varied requests, examples in instructions or an adaptation trial may fit better. A short, stable definition may need only a prompt.',
            'These examples still need testing. Build questions with known answers, missing information, conflicting documents and users with different permissions. Check whether the system retrieves the right source, states appropriate limits and abstains when evidence is missing.',
          ], checklist: ['How often does the content change?', 'Must the source and its version be recoverable?', 'Are you changing style or supplying facts?', 'Do permissions also apply to retrieved passages?'], sourceUrls: ['https://arxiv.org/abs/2005.11401', 'https://developers.openai.com/api/docs/guides/tools-file-search'] },
          { title: 'Maintain the approach over time', paragraphs: [
            'RAG needs an owner for documents, deletion, permissions and index quality. Prompts need review as rules change. Adapted models need governance for examples, versions and regression evaluations.',
            'Whichever method you choose, plan for cases where no useful information is found. An honest gap or request for a missing document may look less autonomous, but it avoids turning a lack of evidence into an invented fact.',
            'Also set a freshness requirement: how soon after a business change must the new rule become available? That can shape storage, indexing cadence and document-removal tests. Verify the complete path instead of assuming that an uploaded file is immediately usable.',
          ] },
        ],
        takeaway: 'Use prompts for brief context, RAG for maintained sources, and fine-tuning when tests show a need for learned behaviour. Evaluate provenance and no-answer cases before real use.',
        service: { href: '/en/ai-automation/', label: 'Explore AI automation' },
      },
    },
  },
  {
    id: 'benchmark-selection', preparedAt: accessedAt, status: 'review',
    copy: {
      fr: {
        slug: 'choisir-et-construire-benchmark-ia',
        title: 'Benchmark IA : ce qu’il mesure et ce qu’il ne prouve pas',
        description: 'Lire un classement de modèles avec recul et concevoir une évaluation liée à vos décisions métier.',
        category: 'IA & qualité',
        sources: [
          { title: 'Bonnes pratiques d’évaluation', url: 'https://developers.openai.com/api/docs/guides/evaluation-best-practices', publisher: 'OpenAI', accessedAt },
          { title: 'Working with evals', url: 'https://developers.openai.com/api/docs/guides/evals', publisher: 'OpenAI', accessedAt },
          { title: 'HELM: Holistic Evaluation of Language Models', url: 'https://arxiv.org/abs/2211.09110', publisher: 'arXiv / Stanford CRFM', accessedAt },
          { title: 'RULER: What’s the Real Context Size of Your Long-Context Language Models?', url: 'https://arxiv.org/abs/2404.06654', publisher: 'arXiv', accessedAt },
        ],
        introduction: 'Un score publié peut aider à repérer des candidats, mais il ne répond pas automatiquement à la question « ce modèle convient-il à notre travail ? ». Chaque benchmark définit un jeu de tâches, des conditions, une métrique et une date. La décision opérationnelle demande de connaître cette portée, puis de mesurer le comportement sur les demandes que votre équipe doit réellement traiter.',
        sections: [
          { title: 'Lire le protocole avant le résultat', paragraphs: [
            'Demandez ce que contient le jeu d’évaluation, comment les réponses sont notées, quelles versions ont été testées et si l’évaluation concerne un modèle seul ou un système avec outils. Deux scores portant un nom proche peuvent provenir de protocoles différents. Une moyenne agrégée cache aussi les tâches où le résultat est bon ou faible.',
            'Un benchmark utile est une observation sous des conditions déclarées, pas une garantie de performance future ni une mesure directe de valeur économique. Les travaux d’évaluation holistique soulignent l’intérêt de couvrir plusieurs scénarios et métriques ; cela ne supprime pas les limites de représentativité de chaque scénario.',
          ], sourceUrls: ['https://arxiv.org/abs/2211.09110'] },
          { title: 'Traduire le besoin en cas testables', paragraphs: [
            'Pour un assistant de support, la tâche peut être de classer correctement une demande, citer la procédure en vigueur, signaler une information manquante et éviter une promesse non autorisée. Décrivez des critères observables avant de comparer les modèles. « Réponse de qualité » est trop vague pour décider si une version peut être utilisée.',
            'Incluez des exemples fréquents, des formulations inhabituelles, des cas ambigus et des situations où la bonne réponse est de demander une précision ou de s’abstenir. Séparez un jeu de conception, utilisé pour améliorer le prompt, d’un jeu de contrôle qui aide à juger si l’amélioration tient sur des cas non utilisés pour cette mise au point.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/evals', 'https://developers.openai.com/api/docs/guides/evaluation-best-practices'] },
          { title: 'Associer une métrique à une décision', paragraphs: [
            'Une correspondance exacte convient à certains champs structurés mais ne mesure pas la justesse d’une explication. Une note automatique peut trier des réponses, mais doit être confrontée à des annotations humaines et à des exemples d’erreur. Les jugements humains apportent du contexte, avec un coût, une variabilité et un besoin de consignes partagées.',
            'Utilisez plusieurs mesures lorsque le risque l’exige : exactitude, complétude, citations, taux de refus appropriés, temps de traitement et proportion de réponses nécessitant une correction. Définissez un seuil de passage lié à l’impact ; une moyenne ne devrait pas compenser une erreur critique.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/evaluation-best-practices'] },
          { title: 'Contrôler la couverture et les biais du test', paragraphs: [
            'Un petit jeu est utile pour démarrer, mais chaque réponse doit être examinée : données périmées, variantes linguistiques oubliées, cas trop faciles ou exemples qui révèlent directement la réponse. Ne dupliquez pas les mêmes documents et formulations entre entraînement, réglage et contrôle sans comprendre ce que cela permet de conclure.',
            'Faites un tableau par segment métier, langue, niveau de risque et type d’entrée. Une baisse concentrée dans un segment peut être invisible dans le score total. Les benchmarks de contexte, par exemple, montrent pourquoi un test élémentaire de récupération d’un fait ne suffit pas à démontrer une compréhension robuste d’un dossier long.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/evals', 'https://arxiv.org/abs/2404.06654'] },
          { title: 'Transformer les résultats en règle de livraison', paragraphs: [
            'Notez le modèle et sa version, le prompt, les outils, les paramètres, la date et les données testées. Si un de ces éléments change, relancez les contrôles pertinents. Une amélioration doit être considérée au niveau du système complet : une réponse meilleure peut demander plus de temps, un appel d’outil ou une revue plus lourde.',
            'Terminez par une décision explicite : accepter pour un usage borné, corriger puis recommencer, demander une validation humaine ou ne pas déployer. Le benchmark éclaire cette décision ; il ne porte pas la responsabilité de l’organisation qui choisit.',
            'Si une équipe demande un seuil unique, documentez les arbitrages qui le composent. Un résultat moyen, un minimum obligatoire sur les cas critiques et un budget plafond répondent à des questions distinctes. Les rendre visibles évite qu’un score soit interprété comme une autorisation générale pour tous les usages.',
          ], checklist: ['Quel comportement est mesuré et quelle décision en dépend ?', 'Quelles entrées et versions ont été testées ?', 'Quels cas critiques et segments restent sous-représentés ?', 'Qui examine les erreurs avant le changement de périmètre ?'], sourceUrls: ['https://developers.openai.com/api/docs/guides/evaluation-best-practices'] },
        ],
        takeaway: 'Un benchmark externe sert à présélectionner ; une évaluation interne vérifie votre système sur vos tâches, avec des critères reliés à une décision réelle et une personne responsable de la revue.',
        service: { href: '/pilotage-projet-complexe/', label: 'Découvrir le pilotage de projet complexe' },
      },
      en: {
        slug: 'choose-and-build-an-ai-benchmark',
        title: 'AI benchmarks: what they measure and what they do not prove',
        description: 'Read model rankings critically and design an evaluation linked to your business decisions.',
        category: 'AI & quality',
        sources: [
          { title: 'Evaluation best practices', url: 'https://developers.openai.com/api/docs/guides/evaluation-best-practices', publisher: 'OpenAI', accessedAt },
          { title: 'Working with evals', url: 'https://developers.openai.com/api/docs/guides/evals', publisher: 'OpenAI', accessedAt },
          { title: 'HELM: Holistic Evaluation of Language Models', url: 'https://arxiv.org/abs/2211.09110', publisher: 'arXiv / Stanford CRFM', accessedAt },
          { title: 'RULER: What’s the Real Context Size of Your Long-Context Language Models?', url: 'https://arxiv.org/abs/2404.06654', publisher: 'arXiv', accessedAt },
        ],
        introduction: 'A published score can help identify candidates, but it does not automatically answer “does this model fit our work?” Every benchmark defines a task set, conditions, metric and date. An operational decision requires understanding that scope, then measuring behaviour on the requests your team actually handles.',
        sections: [
          { title: 'Read the protocol before the result', paragraphs: [
            'Ask what the test set contains, how answers are scored, which versions were evaluated and whether the test covers a model alone or a tool-using system. Similar benchmark names can refer to different protocols. An aggregate average also hides the tasks where a result is strong or weak.',
            'A benchmark is an observation under stated conditions, not a guarantee of future performance or a direct measure of business value. Holistic evaluation research shows why multiple scenarios and metrics matter; it does not remove each scenario’s limits as a proxy for your work.',
          ], sourceUrls: ['https://arxiv.org/abs/2211.09110'] },
          { title: 'Turn the need into testable cases', paragraphs: [
            'For a support assistant, the task might be to classify a request, cite the current procedure, flag missing information and avoid an unauthorised promise. Define observable criteria before comparing models. “A good answer” is too vague to decide whether a version is ready for use.',
            'Include common examples, unusual wording, ambiguity, and cases where the right move is to ask a question or abstain. Separate a development set used to improve the prompt from a holdout set that helps determine whether the improvement generalises beyond those tuning examples.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/evals', 'https://developers.openai.com/api/docs/guides/evaluation-best-practices'] },
          { title: 'Match metrics to the decision', paragraphs: [
            'Exact matching fits some structured fields but does not measure whether an explanation is correct. An automated score can sort answers, but should be checked against human labels and concrete failure examples. Human judgement adds context, along with cost, variability and the need for shared instructions.',
            'Use several measures where risk demands it: accuracy, completeness, citations, appropriate refusal, handling time and the share needing correction. Set a pass threshold linked to impact; a high average should not offset a critical failure.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/evaluation-best-practices'] },
          { title: 'Check test coverage and bias', paragraphs: [
            'A small test set is a useful start, but inspect each answer for stale facts, missing language variants, overly easy cases or examples that reveal the answer. Do not reuse the same documents and phrasing across training, tuning and holdout sets without considering what the result can establish.',
            'Break results down by business segment, language, risk and input type. A decline concentrated in one segment may disappear in the aggregate. Long-context research, for example, shows why retrieving one simple fact is not enough to demonstrate robust understanding of a long case file.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/evals', 'https://arxiv.org/abs/2404.06654'] },
          { title: 'Turn results into a delivery rule', paragraphs: [
            'Record the model and version, prompt, tools, settings, date and tested data. If one changes, rerun relevant checks. Assess improvements across the complete system: a better answer may require more time, a tool call or additional review.',
            'End with an explicit decision: accept for a bounded use, revise and retest, require human approval, or do not deploy. The benchmark informs that decision; it does not take responsibility for the organisation making it.',
          ], checklist: ['Which behaviour is measured and what decision depends on it?', 'Which inputs and versions were tested?', 'Which critical cases or user groups are underrepresented?', 'Who reviews failures before the scope changes?'], sourceUrls: ['https://developers.openai.com/api/docs/guides/evaluation-best-practices'] },
        ],
        takeaway: 'Use external benchmarks to shortlist. Use internal evaluation to check your system on your tasks, with criteria tied to a real decision and an accountable reviewer.',
        service: { href: '/en/project-leadership/', label: 'Explore complex project leadership' },
      },
    },
  },
  {
    id: 'long-context', preparedAt: accessedAt, status: 'review',
    copy: {
      fr: {
        slug: 'long-contexte-mesurer-utilisation',
        title: 'Long contexte : mesurer l’usage, pas seulement la capacité annoncée',
        description: 'Une fenêtre étendue ne garantit pas que le modèle retrouve et combine les bons éléments d’un dossier.',
        category: 'IA & qualité',
        sources: [
          { title: 'Lost in the Middle: How Language Models Use Long Contexts', url: 'https://arxiv.org/abs/2307.03172', publisher: 'arXiv / TACL', accessedAt },
          { title: 'RULER: What’s the Real Context Size of Your Long-Context Language Models?', url: 'https://arxiv.org/abs/2404.06654', publisher: 'arXiv', accessedAt },
          { title: 'Modèles', url: 'https://developers.openai.com/api/docs/models', publisher: 'OpenAI', accessedAt },
        ],
        introduction: 'Les fenêtres de contexte plus grandes permettent de fournir davantage de texte à certains modèles. La capacité annoncée répond à une question de limite d’entrée ; elle ne démontre pas à elle seule qu’un modèle utilise efficacement chaque élément, qu’il repère la bonne version d’une règle ou qu’il combine plusieurs preuves. Il faut mesurer la tâche, et pas seulement la longueur autorisée.',
        sections: [
          { title: 'Distinguer capacité et qualité de lecture', paragraphs: [
            'Une fenêtre maximale décrit un plafond technique sous des conditions données. La qualité dépend aussi du modèle, du format, de l’ordre des éléments, des distractions et du type de raisonnement demandé. Une question de recherche dans un contrat long exige autre chose qu’une extraction d’un identifiant placé au milieu d’un texte.',
            'L’étude « Lost in the Middle » a observé, sur les modèles et tâches évalués, une baisse de performance lorsque l’information pertinente se trouvait au milieu du contexte par rapport aux positions du début ou de la fin. Ce résultat motive des tests de position ; il ne prouve pas que chaque modèle actuel présente le même profil.',
          ], sourceUrls: ['https://arxiv.org/abs/2307.03172'] },
          { title: 'Créer un test qui ressemble à votre dossier', paragraphs: [
            'Prenez des dossiers anonymisés ou synthétiques proches du travail réel : plusieurs pièces, dates, termes métier, contradictions, annexes longues et informations sans rapport. Posez des questions dont la réponse dépend d’une ou plusieurs pièces. Déplacez les preuves dans différentes positions et demandez les références utilisées.',
            'Un simple test « retrouver une phrase » est utile mais limité. RULER propose des tâches plus variées que la recherche d’un fait unique, notamment des rapprochements, agrégations et chaînes de récupération. Pour votre cas, ajoutez des questions où le modèle doit comparer des versions ou expliquer qu’une preuve manque.',
          ], sourceUrls: ['https://arxiv.org/abs/2404.06654'] },
          { title: 'Comparer le dossier complet à une recherche ciblée', paragraphs: [
            'L’envoi de tout un corpus peut simplifier une première maquette mais augmente la quantité d’information à traiter. Une récupération de passages peut réduire le contexte et rendre les sources visibles, tout en introduisant des risques de recherche manquée ou de sélection incorrecte. Comparez les deux méthodes sur les mêmes questions et documents.',
            'Mesurez exactitude, citations valides, informations oubliées, contradictions, latence et coût total. Si une réponse semble correcte, vérifiez-la aussi sur les passages d’origine. Un score de réussite sans inspection des sources peut masquer une bonne réponse obtenue par hasard ou à partir d’une hypothèse connue.',
          ], sourceUrls: ['https://arxiv.org/abs/2307.03172', 'https://arxiv.org/abs/2404.06654'] },
          { title: 'Contrôler les versions et les informations parasites', paragraphs: [
            'Un dossier plus long contient souvent plusieurs révisions d’une même consigne. Identifiez quelle version fait foi, fournissez une structure ou une chronologie explicite et demandez au système de signaler les contradictions plutôt que d’en choisir silencieusement une. Retirez ce qui n’est pas nécessaire lorsque cela réduit l’ambiguïté ou l’exposition de données.',
            'Des éléments hors sujet peuvent aussi orienter la réponse ou détourner l’attention. Testez l’ajout de documents distrayants, de termes proches et d’exemples qui contredisent l’attente. La robustesse du parcours importe davantage qu’une démonstration réussie sur un contexte propre.',
          ], checklist: ['La capacité annoncée s’applique-t-elle au modèle et à l’API retenus ?', 'Les preuves sont-elles testées à plusieurs positions ?', 'Les citations correspondent-elles aux sources réelles ?', 'Comment le système traite-t-il les versions et contradictions ?'], sourceUrls: ['https://developers.openai.com/api/docs/models', 'https://arxiv.org/abs/2404.06654'] },
          { title: 'Utiliser le contexte long quand il apporte une valeur', paragraphs: [
            'Un contexte étendu est pertinent si le travail requiert réellement de garder plusieurs pièces en vue. Pour une question étroite dans une grande base, une recherche ciblée ou un index peut fournir un meilleur compromis entre contrôle, coût et facilité de mise à jour. Ces stratégies peuvent aussi se compléter : retrouver les passages, puis joindre un résumé ou le dossier utile.',
            'Testez sur des cas représentatifs avant d’en faire une capacité promise dans un service. Consignez les limites connues et une route de recours pour les dossiers ambigus ou incomplets. La taille d’une fenêtre ne remplace ni la revue, ni une politique d’accès, ni l’acceptation métier.',
            'Quand le dossier se renouvelle, rejouez quelques cas après chaque changement de structure ou de modèle. Cela permet de repérer les dégradations liées à un ordre différent, à une annexe ajoutée ou à un format de document mal converti.',
            'Demandez à la personne qui connaît le dossier de vérifier les réponses : la justesse dépend parfois d’une convention ou d’une chronologie que le test automatique ne représente pas.',
          ] },
        ],
        takeaway: 'Traitez la taille de contexte comme une limite d’entrée, puis mesurez récupération, synthèse et citations sur des dossiers réalistes avec les preuves placées à différents endroits.',
        service: { href: '/orchestration-agents-ia/', label: 'Découvrir l’orchestration d’agents IA' },
      },
      en: {
        slug: 'long-context-measure-actual-use',
        title: 'Long context: measure use, not just the advertised limit',
        description: 'A larger window does not guarantee a model will retrieve and combine the right details from a case file.',
        category: 'AI & quality',
        sources: [
          { title: 'Lost in the Middle: How Language Models Use Long Contexts', url: 'https://arxiv.org/abs/2307.03172', publisher: 'arXiv / TACL', accessedAt },
          { title: 'RULER: What’s the Real Context Size of Your Long-Context Language Models?', url: 'https://arxiv.org/abs/2404.06654', publisher: 'arXiv', accessedAt },
          { title: 'Models', url: 'https://developers.openai.com/api/docs/models', publisher: 'OpenAI', accessedAt },
        ],
        introduction: 'Larger context windows allow some models to receive more text. An advertised limit answers a question about input capacity; it does not prove that a model uses every detail effectively, finds the right version of a policy or combines several pieces of evidence. Measure the task, not only the allowed length.',
        sections: [
          { title: 'Separate capacity from reading quality', paragraphs: [
            'A maximum window describes a technical ceiling under stated conditions. Quality also depends on the model, format, position, distraction and reasoning required. Finding a point in a long contract differs from extracting an identifier placed midway through text.',
            'The “Lost in the Middle” study observed, on the models and tasks it evaluated, lower performance when relevant information appeared in the middle of context than near the beginning or end. This motivates position tests; it does not establish that every current model has the same profile.',
          ], sourceUrls: ['https://arxiv.org/abs/2307.03172'] },
          { title: 'Build tests that resemble your case files', paragraphs: [
            'Use anonymised or synthetic files resembling real work: multiple documents, dates, domain terms, contradictions, long appendices and irrelevant information. Ask questions whose answers depend on one or more documents. Move evidence to different positions and request supporting references.',
            'A simple “find a sentence” test is useful but limited. RULER includes more varied tasks than locating one fact, including tracing, aggregation and multi-step retrieval. For your use case, add questions that compare versions or require the model to identify missing evidence.',
          ], sourceUrls: ['https://arxiv.org/abs/2404.06654'] },
          { title: 'Compare full context with targeted retrieval', paragraphs: [
            'Sending an entire corpus can simplify an early prototype but increases the amount of information to process. Retrieving passages can reduce context and expose sources, while introducing the risk of missed or incorrect retrieval. Compare both methods on the same questions and documents.',
            'Measure accuracy, valid citations, missed information, contradictions, latency and total cost. If an answer looks correct, check it against the original passages too. A success score without source inspection can hide a lucky answer or an unsupported assumption.',
          ], sourceUrls: ['https://arxiv.org/abs/2307.03172', 'https://arxiv.org/abs/2404.06654'] },
          { title: 'Control versions and distracting information', paragraphs: [
            'Long files often contain revisions of the same instruction. Identify the authoritative version, provide a structure or timeline and ask the system to surface contradictions rather than silently choose one. Remove unnecessary material when it reduces ambiguity or data exposure.',
            'Irrelevant passages can also misdirect attention. Test with distracting documents, similar terms and examples that contradict an expected answer. A robust workflow matters more than a successful demonstration on a clean context.',
          ], checklist: ['Does the advertised capacity apply to the selected model and API?', 'Are evidence positions tested in multiple places?', 'Do citations match the actual sources?', 'How does the system handle versions and contradictions?'], sourceUrls: ['https://developers.openai.com/api/docs/models', 'https://arxiv.org/abs/2404.06654'] },
          { title: 'Use long context where it adds value', paragraphs: [
            'A large context is relevant when the work truly requires several documents to remain in view. For a narrow question over a large collection, targeted retrieval may offer a better balance of control, cost and updateability. The approaches can also work together: retrieve passages, then include a summary or the relevant file.',
            'Test representative cases before promising this capability in a service. Record known limits and a fallback for ambiguous or incomplete files. Window size does not replace review, access controls or business acceptance.',
            'When the case file changes, rerun a few examples after a model or structure update. This can reveal regressions caused by reordered material, a new appendix or a document format that was converted poorly.',
          ] },
        ],
        takeaway: 'Treat context size as an input limit, then measure retrieval, synthesis and citations on realistic files with evidence in different positions.',
        service: { href: '/en/agent-orchestration/', label: 'Explore AI agent orchestration' },
      },
    },
  },
  {
    id: 'agent-unit-economics', preparedAt: accessedAt, status: 'review',
    copy: {
      fr: {
        slug: 'cout-unitaire-resultat-accepte-agent-ia',
        title: 'Coût unitaire d’un agent : compter le résultat accepté',
        description: 'Calculer un coût par résultat utilisable en incluant appels, outils, reprises, contrôle humain et erreurs.',
        category: 'Architecture & coûts',
        sources: [
          { title: 'Observabilité et usage', url: 'https://developers.openai.com/api/docs/guides/agents-api/observability', publisher: 'OpenAI', accessedAt },
          { title: 'Traçage', url: 'https://developers.openai.com/api/docs/guides/agents-api/tracing', publisher: 'OpenAI', accessedAt },
          { title: 'Tarifs de l’API OpenAI', url: 'https://developers.openai.com/api/docs/pricing', publisher: 'OpenAI', accessedAt },
          { title: 'Évaluer les workflows d’agents', url: 'https://developers.openai.com/api/docs/guides/agent-evals', publisher: 'OpenAI', accessedAt },
        ],
        introduction: 'Un agent peut mobiliser plusieurs appels de modèle, des recherches, des outils, un environnement d’exécution et parfois des agents secondaires avant de produire un livrable. Une facture par appel ne dit donc pas combien coûte un résultat que l’équipe accepte. Pour gérer le budget, il faut relier les dépenses à une unité utile et inclure les échecs et les contrôles.',
        sections: [
          { title: 'Définir l’unité de résultat', paragraphs: [
            'Choisissez une sortie que le métier peut accepter ou refuser : ticket traité correctement, dossier préparé avec preuves, ou tâche terminée selon une liste de critères. « Une exécution » n’est pas une unité économique satisfaisante si plusieurs exécutions sont nécessaires avant d’obtenir quelque chose d’utilisable.',
            'Notez le volume de résultats acceptés sur une période et le nombre d’échecs, d’abandons et de corrections. La définition doit rester constante lorsque vous comparez un agent à un processus manuel ou à une version précédente.',
          ] },
          { title: 'Additionner tous les postes consommés', paragraphs: [
            'Incluez les entrées et sorties de chaque appel, le raisonnement facturé selon le modèle, les lectures ou écritures de cache, les appels d’outils facturés, les environnements de calcul, les services tiers et les agents secondaires. Un agent peut consommer ces ressources en plusieurs étapes, y compris lorsqu’il finit par échouer.',
            'Les données d’observabilité peuvent aider à relier appels, durée, outils et délégations. Elles ne sont pas toujours finales ou complètes : vérifiez les limites de comptabilisation et rapprochez-les des factures. Ne supposez pas que les jetons mis en cache sont gratuits, ni qu’un outil est inclus dans le tarif du modèle.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/agents-api/observability', 'https://developers.openai.com/api/docs/pricing'] },
          { title: 'Compter reprises, revue et correction', paragraphs: [
            'Tracez les relances après erreur, les boucles qui n’aboutissent pas, les appels déclenchés inutilement et le temps humain passé à corriger ou valider le résultat. Une exécution réussie techniquement peut demander une reprise éditoriale ou une vérification métier ; son coût total doit couvrir ce temps.',
            'Comparez avec le processus remplacé à qualité équivalente. Si la tâche manuelle nécessitait déjà une relecture, comptez-la aussi dans le scénario de référence. La comparaison doit reconnaître les différences de délai, de risque, de capacité et de responsabilité plutôt que réduire la décision à une facture API.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/agents-api/tracing', 'https://developers.openai.com/api/docs/guides/agent-evals'] },
          { title: 'Illustrer le calcul sans inventer de gain', paragraphs: [
            'Supposons un pilote qui traite cent demandes. Vous observez que certaines sont acceptées sans correction, d’autres demandent une relance et un groupe doit revenir à un opérateur. Multipliez les ressources mesurées pour l’ensemble des appels par les tarifs consultés à la date de l’étude, ajoutez le temps de revue et divisez par le nombre de demandes réellement acceptées. Le résultat est propre à ce pilote.',
            'Ce calcul ne prouve pas que l’agent fait économiser de l’argent. Il révèle les variables à surveiller et permet de comparer un autre modèle ou une autre règle sur un échantillon similaire. Présentez les hypothèses et la période afin qu’un lecteur puisse refaire le calcul.',
          ], checklist: ['Qu’est-ce qu’un résultat accepté ?', 'Tous les appels, outils et reprises sont-ils comptés ?', 'Combien de minutes humaines reste-t-il par résultat ?', 'Les journaux d’usage se réconcilient-ils avec la facture ?'], sourceUrls: ['https://developers.openai.com/api/docs/guides/agents-api/observability', 'https://developers.openai.com/api/docs/guides/agent-evals'] },
          { title: 'Optimiser sans dégrader le service', paragraphs: [
            'Une réduction de coût peut être obtenue en raccourcissant les consignes, en limitant les actions disponibles, en améliorant une étape de recherche ou en changeant de modèle. Après chaque modification, gardez les mêmes cas d’évaluation et vérifiez qualité, sécurité, délai et coût. Une route moins chère mais plus souvent corrigée peut revenir plus cher.',
            'Définissez un plafond d’appels, des conditions d’arrêt et un circuit humain lorsque l’incertitude persiste. Surveillez les résultats par type de tâche afin qu’une économie moyenne ne masque pas la dégradation d’un cas important.',
            'Précisez aussi la période de calcul et ce qui est exclu : mise en place initiale, astreinte, taxes ou coûts partagés. Deux équipes peuvent annoncer un coût par résultat différent tout en observant le même système, simplement parce qu’elles ne divisent pas par le même nombre de résultats acceptés ou n’incluent pas les mêmes charges.',
            'Un indicateur synthétique doit rester accompagné de quelques exemples de traces, afin que l’équipe comprenne les causes d’une évolution au lieu de seulement voir le chiffre monter ou baisser.',
          ] },
        ],
        takeaway: 'Suivez le coût par résultat accepté, pas uniquement le coût d’une exécution. Associez traces, critères de qualité et temps humain afin de rendre les arbitrages de capacité et de dépense vérifiables.',
        service: { href: '/orchestration-agents-ia/', label: 'Découvrir l’orchestration d’agents IA' },
      },
      en: {
        slug: 'agent-cost-per-accepted-result',
        title: 'Agent unit economics: count the accepted result',
        description: 'Calculate cost per usable result, including calls, tools, retries, human review and failures.',
        category: 'Architecture & costs',
        sources: [
          { title: 'Observability and usage', url: 'https://developers.openai.com/api/docs/guides/agents-api/observability', publisher: 'OpenAI', accessedAt },
          { title: 'Tracing', url: 'https://developers.openai.com/api/docs/guides/agents-api/tracing', publisher: 'OpenAI', accessedAt },
          { title: 'OpenAI API pricing', url: 'https://developers.openai.com/api/docs/pricing', publisher: 'OpenAI', accessedAt },
          { title: 'Evaluate agent workflows', url: 'https://developers.openai.com/api/docs/guides/agent-evals', publisher: 'OpenAI', accessedAt },
        ],
        introduction: 'An agent may make several model calls, search, use tools, run code and involve subagents before producing a deliverable. A per-call bill therefore does not tell you what an outcome the team accepts costs. Budgeting requires linking spend to a useful unit and counting failures and checks.',
        sections: [
          { title: 'Define the outcome unit', paragraphs: [
            'Choose something the business can accept or reject: a correctly handled ticket, a case file prepared with evidence, or a task completed against defined criteria. “One run” is a poor economic unit when several runs are needed to produce usable work.',
            'Record accepted outcomes over a period alongside failures, abandoned tasks and corrections. Keep the definition consistent when comparing an agent with manual work or an earlier version.',
          ] },
          { title: 'Add every resource consumed', paragraphs: [
            'Include input and output for each call, model-billed reasoning, cache reads or writes, charged tool calls, compute environments, third-party services and subagents. An agent may use these resources across multiple steps, including when it ultimately fails.',
            'Observability data can connect calls, duration, tools and delegation. It may not be final or complete: check accounting limits and reconcile it with invoices. Do not assume cached tokens are free or that a tool is included in model pricing.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/agents-api/observability', 'https://developers.openai.com/api/docs/pricing'] },
          { title: 'Count retries, review and correction', paragraphs: [
            'Track retries after errors, loops that do not finish, unnecessary tool calls and the time people spend correcting or approving the result. A technically successful run may still need editorial or business review; total cost should include that time.',
            'Compare against the process being replaced at equivalent quality. If manual work already required review, include it in the baseline too. The comparison should account for time, risk, capacity and responsibility instead of reducing the decision to an API invoice.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/agents-api/tracing', 'https://developers.openai.com/api/docs/guides/agent-evals'] },
          { title: 'Show the calculation without inventing gains', paragraphs: [
            'Suppose a pilot handles one hundred requests. Some are accepted without correction, others need another attempt and a group must return to an operator. Multiply measured resources across all calls by rates checked on the study date, add review time and divide by requests actually accepted. That result belongs to this pilot.',
            'It does not prove that the agent saves money. It reveals variables to monitor and allows a different model or routing rule to be compared on a similar sample. State assumptions and the period so readers can reproduce the calculation.',
          ], checklist: ['What counts as an accepted result?', 'Are all calls, tools and retries included?', 'How many human minutes remain per outcome?', 'Do usage records reconcile with the bill?'], sourceUrls: ['https://developers.openai.com/api/docs/guides/agents-api/observability', 'https://developers.openai.com/api/docs/guides/agent-evals'] },
          { title: 'Optimise without degrading the service', paragraphs: [
            'Cost may fall by shortening instructions, limiting actions, improving retrieval or changing models. After each change, use the same evaluation cases to check quality, safety, time and spend. A cheaper route that needs more correction may cost more overall.',
            'Set call limits, stopping conditions and a human route when uncertainty remains. Track outcomes by task type so an average saving does not hide a decline on an important case.',
            'State the measurement period and exclusions too: initial setup, on-call support, taxes or shared infrastructure. Two teams can report different unit costs for the same system because they count accepted outcomes differently or include different operating costs.',
          ] },
        ],
        takeaway: 'Track cost per accepted result rather than cost per run. Combine traces, quality criteria and human time to make capacity and spending decisions verifiable.',
        service: { href: '/en/agent-orchestration/', label: 'Explore AI agent orchestration' },
      },
    },
  },
  {
    id: 'local-open-models', preparedAt: accessedAt, status: 'review',
    copy: {
      fr: {
        slug: 'modeles-locaux-poids-ouverts-ou-heberges',
        title: 'Modèles locaux ou hébergés : choisir avec leurs contraintes',
        description: 'Comparer contrôle des données, licence, matériel, qualité, maintenance et coût entre modèles locaux et hébergés.',
        category: 'Architecture & coûts',
        sources: [
          { title: 'Utiliser des modèles IA localement', url: 'https://huggingface.co/docs/hub/local-apps', publisher: 'Hugging Face', accessedAt },
          { title: 'Politique de confidentialité', url: 'https://ollama.com/privacy', publisher: 'Ollama', accessedAt },
          { title: 'Licence communautaire Llama 3.3', url: 'https://dev.meta.ai/llama/llama3_3/license', publisher: 'Meta', accessedAt },
          { title: 'Guide GPU', url: 'https://docs.ollama.com/gpu', publisher: 'Ollama', accessedAt },
          { title: 'Tarifs de l’API OpenAI', url: 'https://developers.openai.com/api/docs/pricing', publisher: 'OpenAI', accessedAt },
        ],
        introduction: 'Exécuter un modèle sur une machine sous son contrôle peut limiter certains transferts vers un service distant et rendre les essais plus autonomes. Cela ne signifie pas automatiquement « gratuit », « privé par défaut » ou « sans contrainte ». Il faut distinguer les poids accessibles, le lieu d’exécution, la licence du modèle et les obligations de l’application qui l’utilise.',
        sections: [
          { title: 'Comprendre ce que signifie « ouvert »', paragraphs: [
            'Une disponibilité de poids permet de télécharger ou d’exécuter certains artefacts du modèle, mais les droits associés se lisent dans la licence propre à la version. Les conditions peuvent traiter l’usage commercial, la redistribution, les obligations d’attribution ou des seuils et restrictions particuliers. Meta publie par exemple une licence communautaire dédiée à Llama 3.3 : il faut consulter son texte et la version réellement utilisée.',
            'Ne déduisez pas la licence d’un article, d’un dépôt tiers ou d’un format de fichier. Conservez l’identifiant, la provenance, la licence et les dépendances pour chaque poids ou adaptation déployée, puis demandez un examen adapté si le cas d’usage est commercial ou réglementé.',
          ], sourceUrls: ['https://dev.meta.ai/llama/llama3_3/license'] },
          { title: 'Évaluer le contrôle réel des données', paragraphs: [
            'En exécution locale, les requêtes peuvent rester sur la machine si le produit et sa configuration ne les transmettent pas. Vérifiez toutefois les téléchargements, mises à jour, télémétrie, journaux, extensions, sauvegardes et appels aux outils externes. Le chemin complet des données comprend plus que le seul moteur de génération.',
            'Une offre d’un fournisseur peut distinguer ses modes locaux et cloud. La politique publiée par Ollama décrit ces deux cas séparément ; ce type de déclaration ne vaut que pour le produit concerné. Dans une architecture d’entreprise, testez le trafic réseau et documentez où les entrées, sorties et traces sont conservées.',
          ], sourceUrls: ['https://ollama.com/privacy', 'https://huggingface.co/docs/hub/local-apps'] },
          { title: 'Mesurer matériel, capacité et maintenance', paragraphs: [
            'La machine devient une partie de l’infrastructure : mémoire disponible, accélérateur, stockage, capacité simultanée et performances dépendent du modèle et de sa quantification. Une configuration peut fonctionner sur un ordinateur de développeur tout en étant trop lente ou instable pour plusieurs personnes. Consultez les exigences du runtime, puis mesurez sur le matériel destiné au service.',
            'Ajoutez les mises à jour, correctifs, sauvegardes, surveillance, gestion des accès, continuité et support aux coûts. L’absence d’une facture par token ne signifie pas l’absence de coût ; le matériel et les heures d’exploitation ont eux aussi une valeur.',
          ], sourceUrls: ['https://huggingface.co/docs/hub/local-apps', 'https://docs.ollama.com/gpu'] },
          { title: 'Comparer avec un service hébergé sur le même travail', paragraphs: [
            'Créez un ensemble de demandes représentatives et mesurez exactitude, qualité en français, latence, débit et corrections. Comparez le modèle local à un service hébergé avec les mêmes critères, tout en vérifiant les politiques de données des deux options. Une préférence pour le local ne prouve pas que la réponse convient au besoin.',
            'Le coût du local comprend matériel, consommation électrique, amortissement, maintenance et disponibilité. Le service hébergé dépend du volume, des tarifs applicables, des options et des besoins de réseau. Établissez des scénarios à partir de votre charge plutôt qu’une affirmation générale sur l’option la moins chère.',
          ], checklist: ['Les poids et leur licence sont-ils clairement identifiés ?', 'Les données restent-elles réellement sur le périmètre attendu ?', 'Le matériel supporte-t-il la charge et le nombre d’utilisateurs ?', 'Quel coût complet et quel niveau de qualité observe-t-on ?'], sourceUrls: ['https://huggingface.co/docs/hub/local-apps', 'https://ollama.com/privacy', 'https://developers.openai.com/api/docs/pricing'] },
          { title: 'Choisir un périmètre prudent', paragraphs: [
            'Un modèle local peut convenir à un assistant hors ligne, une expérimentation avec des documents peu sensibles ou un environnement où le contrôle d’exécution est une exigence. Il peut aussi échouer lorsque la tâche demande une capacité absente, un support opérationnel ou une montée en charge qui excède le matériel disponible.',
            'Commencez par un cas borné, gardez une revue humaine et une solution de secours. Notez les limites connues et les conditions qui déclencheraient un réexamen : évolution de la licence, changement de version, manque de performance ou nouvelle règle de confidentialité.',
            'Prévoyez un inventaire de versions et un processus de mise à jour pour éviter qu’une ancienne copie de modèle reste utilisée après une correction de sécurité ou un retrait de licence. Une image installée sur plusieurs machines doit pouvoir être remplacée de façon traçable.',
          ] },
        ],
        takeaway: 'Décidez sur quatre preuves : licence exacte, flux de données observé, qualité sur vos tâches et coût d’exploitation complet. Local, poids ouverts et hébergement distant décrivent des choix différents qui peuvent aussi se combiner.',
        service: { href: '/ia-automatisation/', label: 'Découvrir l’automatisation par l’IA' },
      },
      en: {
        slug: 'local-open-weight-or-hosted-models',
        title: 'Local or hosted models: choose with their constraints in view',
        description: 'Compare data control, licensing, hardware, quality, maintenance and cost across local and hosted models.',
        category: 'Architecture & costs',
        sources: [
          { title: 'Use AI models locally', url: 'https://huggingface.co/docs/hub/local-apps', publisher: 'Hugging Face', accessedAt },
          { title: 'Privacy policy', url: 'https://ollama.com/privacy', publisher: 'Ollama', accessedAt },
          { title: 'Llama 3.3 Community License Agreement', url: 'https://dev.meta.ai/llama/llama3_3/license', publisher: 'Meta', accessedAt },
          { title: 'GPU guide', url: 'https://docs.ollama.com/gpu', publisher: 'Ollama', accessedAt },
          { title: 'OpenAI API pricing', url: 'https://developers.openai.com/api/docs/pricing', publisher: 'OpenAI', accessedAt },
        ],
        introduction: 'Running a model on a machine you control can limit some transfers to a remote service and make experiments more self-contained. It does not automatically mean “free”, “private by default” or “unrestricted”. Distinguish available weights, execution location, model licence and obligations for the application using it.',
        sections: [
          { title: 'Understand what “open” means', paragraphs: [
            'Available weights let you download or run certain model artefacts, but usage rights are set by the licence for that version. Terms may address commercial use, redistribution, attribution or specific thresholds and restrictions. Meta, for example, publishes a Community License for Llama 3.3; read its text and identify the version in use.',
            'Do not infer licence terms from an article, third-party repository or file format. Keep the identifier, provenance, licence and dependencies for every deployed weight or adaptation, and arrange an appropriate review for commercial or regulated use.',
          ], sourceUrls: ['https://dev.meta.ai/llama/llama3_3/license'] },
          { title: 'Assess actual data control', paragraphs: [
            'With local execution, requests can remain on the machine if the product and configuration do not transmit them. Still check downloads, updates, telemetry, logs, extensions, backups and calls to external tools. The full data path includes more than the generation engine.',
            'A supplier may distinguish local and cloud modes. Ollama’s published policy describes those cases separately; such a statement applies to that product. In an enterprise design, inspect network traffic and document where inputs, outputs and traces are retained.',
          ], sourceUrls: ['https://ollama.com/privacy', 'https://huggingface.co/docs/hub/local-apps'] },
          { title: 'Measure hardware, capacity and maintenance', paragraphs: [
            'The machine becomes part of the infrastructure: available memory, accelerator, storage, concurrency and performance depend on the model and quantisation. A setup that runs on a developer’s computer may be too slow or unstable for several users. Check runtime requirements, then measure on the hardware intended for service.',
            'Add updates, patches, backups, monitoring, access management, continuity and support to the cost. No per-token invoice does not mean no cost; hardware and operating hours have value too.',
          ], sourceUrls: ['https://huggingface.co/docs/hub/local-apps', 'https://docs.ollama.com/gpu'] },
          { title: 'Compare with a hosted service on the same work', paragraphs: [
            'Build a representative set of requests and measure accuracy, French-language quality, latency, throughput and corrections. Compare local and hosted candidates using the same criteria while checking both data policies. A preference for local execution does not prove that its answers fit the task.',
            'Local cost includes hardware, power, depreciation, maintenance and availability. Hosted service cost depends on volume, applicable rates, options and network needs. Build scenarios from your workload instead of making a general claim about which is cheaper.',
          ], checklist: ['Are the exact weights and licence known?', 'Does data actually stay within the intended boundary?', 'Can the hardware support the load and number of users?', 'What full cost and task quality do you observe?'], sourceUrls: ['https://huggingface.co/docs/hub/local-apps', 'https://ollama.com/privacy', 'https://developers.openai.com/api/docs/pricing'] },
          { title: 'Choose a cautious scope', paragraphs: [
            'A local model may suit an offline assistant, an experiment with low-sensitivity files or a setting where execution control is required. It may also fail when a task needs a capability it lacks, operational support or scale beyond the available hardware.',
            'Start with a bounded case, keep human review and a fallback. Record known limits and what would trigger a new review: a licence change, model update, performance gap or revised privacy requirement.',
            'Maintain a version inventory and update process so an old model copy is not left in service after a security correction or licence change. A model image installed on several machines should be replaceable in a traceable way.',
          ] },
        ],
        takeaway: 'Decide using four pieces of evidence: exact licence, observed data flows, quality on your tasks and complete operating cost. Local, open weights and remote hosting are different choices that can also be combined.',
        service: { href: '/en/ai-automation/', label: 'Explore AI automation' },
      },
    },
  },
  {
    id: 'mcp-integration', preparedAt: accessedAt, status: 'review',
    copy: {
      fr: {
        slug: 'integration-mcp-outils-autorisation-confiance',
        title: 'Intégrer MCP : connecter un outil ne lui donne pas votre confiance',
        description: 'MCP standardise une interface de connexion ; l’application doit toujours définir accès, consentement, permissions et contrôles.',
        category: 'Architecture & sécurité',
        sources: [
          { title: 'Spécification Model Context Protocol', url: 'https://modelcontextprotocol.io/specification/2025-06-18', publisher: 'Model Context Protocol', accessedAt },
          { title: 'Outils', url: 'https://modelcontextprotocol.io/specification/2025-06-18/server/tools', publisher: 'Model Context Protocol', accessedAt },
          { title: 'Autorisation', url: 'https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization', publisher: 'Model Context Protocol', accessedAt },
        ],
        introduction: 'MCP fournit un protocole commun pour connecter des applications IA à des sources et outils externes. Cette compatibilité facilite l’intégration et la découverte des fonctions disponibles. Elle ne décide pas qui peut invoquer chaque action, si la demande est légitime ni si le résultat du serveur est fiable. Ces garanties restent des décisions d’architecture et d’exploitation.',
        sections: [
          { title: 'Comprendre ce que le protocole standardise', paragraphs: [
            'La spécification définit des messages et capacités permettant notamment à un serveur d’exposer des outils que le client peut découvrir et invoquer. Un outil peut rechercher des données, appeler une API, mettre à jour un dossier ou déclencher une opération. Le protocole clarifie la forme des échanges ; le sens et l’impact de l’action restent propres au service raccordé.',
            'Une intégration qui fonctionne confirme que deux composants communiquent selon une interface. Elle ne constitue pas une certification de sécurité, une revue du code du serveur ou une preuve que ses descriptions sont complètes et honnêtes.',
          ], sourceUrls: ['https://modelcontextprotocol.io/specification/2025-06-18', 'https://modelcontextprotocol.io/specification/2025-06-18/server/tools'] },
          { title: 'Séparer identité, autorisation et confirmation', paragraphs: [
            'La spécification MCP décrit l’autorisation comme une capacité optionnelle au niveau du transport pour les implémentations HTTP qui la prennent en charge. Le branchement d’un serveur ne prouve donc pas qu’un contrôle d’accès est actif. Vérifiez qui s’authentifie, pour quelle ressource, avec quels droits et quelle validation de jeton.',
            'Même avec une authentification, limitez les outils et permissions au besoin minimal. Distinguez la lecture d’une donnée de sa modification ou de l’envoi d’un message. Pour une opération sensible, demandez une confirmation explicite et présentez à la personne l’action et les données concernées avant l’exécution.',
          ], sourceUrls: ['https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization', 'https://modelcontextprotocol.io/specification/2025-06-18/server/tools'] },
          { title: 'Traiter les outils comme une frontière de confiance', paragraphs: [
            'Un outil peut avoir accès à un compte, des documents, des systèmes internes ou au réseau. Examinez son éditeur, le code ou le service qu’il appelle, ses dépendances, ses mises à jour et les données transmises. Les noms et descriptions annoncés au modèle aident au choix d’une action mais n’établissent pas qu’elle est inoffensive.',
            'Les contenus récupérés peuvent inclure des instructions malveillantes ou trompeuses. Le modèle ne doit pas transformer automatiquement un texte lu en ordre d’action. Encadrez les entrées, validez les paramètres côté serveur, séparez les secrets et les données, et autorisez uniquement les destinations réseau nécessaires.',
          ], sourceUrls: ['https://modelcontextprotocol.io/specification/2025-06-18/server/tools', 'https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization'] },
          { title: 'Essayer d’abord le chemin le moins risqué', paragraphs: [
            'Commencez avec une fonction en lecture seule sur des données de test, puis inspectez les demandes, réponses, erreurs et journaux. Vérifiez les limites de débit, le traitement des paramètres invalides, les erreurs de connexion et la manière dont l’application explique à l’utilisateur qu’un outil a été appelé.',
            'Lorsque l’usage est compris, activez une opération d’écriture limitée et réversible avant les actions externes ou irréversibles. La spécification recommande une interaction humaine permettant de refuser les appels d’outils ; organisez une expérience qui rend les outils exposés et leurs effets compréhensibles.',
          ], checklist: ['Quel serveur et quelle version sont réellement raccordés ?', 'Quelles permissions et quels identifiants sont transmis ?', 'Quels appels exigent l’accord d’une personne ?', 'Comment inspecter et retirer l’accès en cas de problème ?'], sourceUrls: ['https://modelcontextprotocol.io/specification/2025-06-18/server/tools'] },
          { title: 'Prévoir le cycle de vie de l’intégration', paragraphs: [
            'Gardez un inventaire des serveurs, outils disponibles, responsables, accès et environnements. Quand une mise à jour ajoute ou modifie un outil, traitez-la comme un changement de périmètre : relisez les descriptions, permissions et contrôles avant de l’exposer au modèle.',
            'Le protocole réduit les interfaces à intégrer au cas par cas, mais ne retire pas les tâches d’administration : surveiller les appels, gérer les incidents, révoquer des droits et réévaluer le fournisseur. Conservez une voie manuelle ou une procédure dégradée lorsque le serveur n’est pas disponible.',
            'Révisez aussi les journaux : ils doivent permettre d’établir quel outil a été appelé, par quel parcours et avec quel résultat, sans stocker plus de contenu sensible qu’il n’en faut. Définissez une durée de conservation et les personnes autorisées à consulter ces traces avant d’ouvrir l’intégration à l’ensemble de l’équipe.',
            'Un connecteur peut aussi changer de comportement à la suite d’une mise à jour indépendante de votre application. Épinglez ou contrôlez les versions lorsque c’est possible et faites une revue des effets avant de rétablir une action d’écriture après une évolution.',
          ] },
        ],
        takeaway: 'MCP facilite la connexion, tandis que l’application garde la responsabilité de l’identité, des autorisations et du consentement. Commencez en lecture seule, réduisez les droits et demandez une validation humaine pour les effets sensibles.',
        service: { href: '/orchestration-agents-ia/', label: 'Découvrir l’orchestration d’agents IA' },
      },
      en: {
        slug: 'mcp-tools-connection-is-not-trust',
        title: 'MCP integration: connecting a tool does not make it trusted',
        description: 'MCP standardises an integration interface; the application still defines access, consent, permissions and controls.',
        category: 'Architecture & security',
        sources: [
          { title: 'Model Context Protocol specification', url: 'https://modelcontextprotocol.io/specification/2025-06-18', publisher: 'Model Context Protocol', accessedAt },
          { title: 'Tools', url: 'https://modelcontextprotocol.io/specification/2025-06-18/server/tools', publisher: 'Model Context Protocol', accessedAt },
          { title: 'Authorization', url: 'https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization', publisher: 'Model Context Protocol', accessedAt },
        ],
        introduction: 'MCP provides a shared protocol for connecting AI applications to external data sources and tools. Compatibility can simplify integration and discovery of available functions. It does not decide who may invoke each action, whether a request is legitimate or whether a server’s result is trustworthy. Those guarantees remain architecture and operational decisions.',
        sections: [
          { title: 'Understand what the protocol standardises', paragraphs: [
            'The specification defines messages and capabilities that let a server expose tools for a client to discover and invoke. A tool may search data, call an API, update a record or trigger an operation. The protocol clarifies the shape of the exchange; the meaning and impact of the action belong to the connected service.',
            'A working integration confirms that two components communicate through an interface. It is not a security certification, a review of the server’s code or proof that its descriptions are complete and honest.',
          ], sourceUrls: ['https://modelcontextprotocol.io/specification/2025-06-18', 'https://modelcontextprotocol.io/specification/2025-06-18/server/tools'] },
          { title: 'Separate identity, authorisation and confirmation', paragraphs: [
            'The MCP specification describes authorisation as an optional transport-level capability for HTTP implementations that support it. Connecting a server therefore does not prove access controls are active. Check who authenticates, for which resource, with what rights and how tokens are validated.',
            'Even with authentication, limit tools and permissions to what the task needs. Distinguish reading data from changing it or sending a message. For sensitive operations, require explicit confirmation and show the person what action and data are involved before execution.',
          ], sourceUrls: ['https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization', 'https://modelcontextprotocol.io/specification/2025-06-18/server/tools'] },
          { title: 'Treat tools as a trust boundary', paragraphs: [
            'A tool may access an account, documents, internal systems or the network. Review its publisher, code or connected service, dependencies, updates and data flows. Names and descriptions help a model choose an action; they do not establish that it is harmless.',
            'Retrieved content may include malicious or misleading instructions. The model should not automatically turn text it reads into an order to act. Bound inputs, validate parameters on the server, separate secrets from data and allow only necessary network destinations.',
          ], sourceUrls: ['https://modelcontextprotocol.io/specification/2025-06-18/server/tools', 'https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization'] },
          { title: 'Start with the least risky path', paragraphs: [
            'Begin with a read-only function and test data, then inspect requests, responses, errors and logs. Check rate limits, invalid parameters, connection failures and how the application tells users that a tool was called.',
            'After the workflow is understood, enable a limited and reversible write before external or irreversible actions. The specification recommends human interaction with the ability to deny tool calls; design an experience that makes exposed tools and their effects understandable.',
          ], checklist: ['Which server and version are connected?', 'What permissions and credentials are sent?', 'Which calls require human approval?', 'How can access be inspected and revoked?'], sourceUrls: ['https://modelcontextprotocol.io/specification/2025-06-18/server/tools'] },
          { title: 'Plan for the integration lifecycle', paragraphs: [
            'Keep an inventory of servers, available tools, owners, access and environments. When an update adds or changes a tool, treat it as a scope change: review descriptions, permissions and controls before exposing it to a model.',
            'The protocol reduces the need for one-off interfaces, but it does not remove administration: monitor calls, handle incidents, revoke rights and reassess providers. Keep a manual route or degraded procedure when a server is unavailable.',
            'A connector may also change independently of your application. Pin or inspect versions where practical, and review effects before restoring a write action after an update.',
          ] },
        ],
        takeaway: 'MCP helps connect tools; the application remains responsible for identity, authorisation and consent. Start read-only, limit permissions and require human approval for sensitive effects.',
        service: { href: '/en/agent-orchestration/', label: 'Explore AI agent orchestration' },
      },
    },
  },
];
