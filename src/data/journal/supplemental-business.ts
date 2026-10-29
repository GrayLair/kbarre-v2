import type { JournalEntry } from '../journal-types';

const oecdAdoption = { title: 'AI adoption by small and medium-sized enterprises', url: 'https://www.oecd.org/en/publications/ai-adoption-by-small-and-medium-sized-enterprises_426399c1-en.html', publisher: 'OECD' };
const oecdReadiness = { title: 'SME AI Readiness Tool', url: 'https://sme.oecd.ai/', publisher: 'OECD' };
const oecdEmpowering = { title: 'Empowering SMEs in the age of AI', url: 'https://www.oecd.org/en/publications/empowering-smes-in-the-age-of-ai_bf5a9816-en.html', publisher: 'OECD' };
const oecdWorkforce = { title: 'Generative AI and the SME Workforce', url: 'https://www.oecd.org/en/publications/generative-ai-and-the-sme-workforce_2d08b99d-en.html', publisher: 'OECD' };
const oecdUses = { title: 'How are SMEs using generative AI?', url: 'https://www.oecd.org/en/publications/generative-ai-and-the-sme-workforce_2d08b99d-en/full-report/component-4.html', publisher: 'OECD' };
const oecdSkills = { title: 'AI and skills: What we know so far', url: 'https://www.oecd.org/en/publications/ai-and-skills_f843b352-en/full-report.html', publisher: 'OECD' };
const oecdSkillsAcq = { title: 'Empowering SMEs in the age of AI: 2026 survey', url: 'https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/04/empowering-smes-in-the-age-of-ai_7f58652c/bf5a9816-en.pdf', publisher: 'OECD' };
const nistCore = { title: 'AI Risk Management Framework Core', url: 'https://airc.nist.gov/airmf-resources/airmf/5-sec-core/', publisher: 'NIST' };
const nistPdf = { title: 'Artificial Intelligence Risk Management Framework 1.0', url: 'https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf', publisher: 'NIST' };
const iloIndicators = { title: 'Workers’ exposure to AI: What indicators tell us—and what they don’t', url: 'https://www.ilo.org/publications/workers%E2%80%99-exposure-ai-what-indicators-tell-us-%E2%80%93-and-what-they-don%E2%80%99t', publisher: 'International Labour Organization' };
const iloUpdate = { title: 'Generative AI and jobs: A 2025 update', url: 'https://www.ilo.org/publications/generative-ai-and-jobs-2025-update', publisher: 'International Labour Organization' };
const auRoi = { title: 'Measure return on investment', url: 'https://www.ai.gov.au/planning-ai/prepare-your-business/identify-opportunities/measure-return-investment', publisher: 'National AI Centre, Australia' };
const ukStandard = { title: 'Project Delivery Functional Standard', url: 'https://www.gov.uk/government/publications/project-delivery-functional-standard', publisher: 'UK Government' };
const ukGuide = { title: 'Guidelines for Managing Projects', url: 'https://assets.publishing.service.gov.uk/media/5a790afced915d0422067576/10-1257-guidelines-for-managing-projects.pdf', publisher: 'UK Government' };
const msApprovals = { title: 'Get started with Power Automate approvals', url: 'https://learn.microsoft.com/en-us/power-automate/get-started-approvals', publisher: 'Microsoft Learn' };
const msAiApprovals = { title: 'FAQ for AI Approvals', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/faqs-ai-approvals', publisher: 'Microsoft Learn' };
const msHumanReview = { title: 'Use your prompt in Power Automate', url: 'https://learn.microsoft.com/en-us/ai-builder/use-a-custom-prompt-in-flow', publisher: 'Microsoft Learn' };
const msInstant = { title: 'Create instant flows in business process flows', url: 'https://learn.microsoft.com/en-us/power-automate/create-instant-flows', publisher: 'Microsoft Learn' };
const msProcesses = { title: 'Simplify business processes for frontline teams', url: 'https://learn.microsoft.com/en-us/microsoft-365/frontline/simplify-business-processes?view=o365-worldwide', publisher: 'Microsoft Learn' };
const ncsc = { title: 'Artificial intelligence guide for small businesses', url: 'https://www.ncsc.govt.nz/protect-your-organisation/ai-guide-for-small-businesses/', publisher: 'New Zealand National Cyber Security Centre' };

export const supplementalBusinessEntries: JournalEntry[] = [
  {
    id: 'ai-first-steps', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'ia-pme-premier-usage-deux-semaines', title: 'IA en PME : choisir un premier usage sans lancer un grand programme',
        description: 'Un diagnostic court et un essai de deux semaines aident à décider si un usage mérite une suite.', category: 'Entreprise & transformation',
        introduction: 'Quand une petite entreprise se demande par où commencer avec l’IA, la tentation est de comparer des outils ou de lancer un projet transversal. Une décision plus utile part d’un irritant quotidien observable : une tâche répétée, un délai qui s’allonge, des reprises fréquentes ou une information difficile à retrouver. Le premier objectif n’est pas de « faire de l’IA », mais de vérifier si une aide précise améliore un travail sans créer une charge ou un risque disproportionné. Les publications de l’OCDE relèvent des parcours d’adoption différents selon les ressources, compétences et fondations numériques des PME. Le diagnostic ci-dessous est une méthode proposée, pas un test officiel ni une garantie de résultat.',
        sources: [oecdAdoption, oecdReadiness, ncsc].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Partir d’un irritant qui se voit', sourceUrls: [oecdAdoption.url, oecdReadiness.url], paragraphs: [
            'Pendant cinq jours ouvrés, notez les moments où une personne recopie, cherche, reformule, classe ou attend une information. Pour chaque occurrence, consignez le déclencheur, le résultat attendu, le temps actif approximatif et la raison d’une reprise. Évitez le jugement vague « notre administration est lente » : écrivez plutôt « à la réception d’un formulaire, l’assistante vérifie quatre champs et demande les pièces manquantes ». Un problème décrit comme une séquence peut être observé et comparé.',
            'L’outil de préparation de l’OCDE pose des questions sur les fondations numériques, les compétences, les usages et les freins. On peut s’en inspirer pour établir un inventaire interne sans interpréter son profil comme une note. Une entreprise qui n’a pas accès à des données fiables ou à un responsable disponible peut d’abord améliorer ces bases au lieu d’ajouter un modèle.'
          ] },
          { title: 'Choisir une tâche bornée', paragraphs: [
            'Cherchez une unité qui commence et se termine : résumer un document public, préparer un brouillon à partir d’informations approuvées, extraire des champs à vérifier ou retrouver une procédure interne. Préférez un usage où l’humain peut comparer le résultat à une source. Écartez au premier essai les décisions qui touchent l’emploi, le crédit, la santé, la sécurité ou un engagement juridique. Le choix dépend de l’impact d’une erreur autant que de la fréquence.',
            'La tâche doit également être assez régulière pour permettre une comparaison, mais pas si critique que toute anomalie aurait une conséquence majeure. Si chaque dossier est exceptionnel, commencez plutôt par une recherche assistée sans décision automatique. Une demande de texte créatif ponctuelle n’a pas besoin d’être transformée en projet d’automatisation.'
          ] },
          { title: 'Écrire une fiche d’essai d’une page', sourceUrls: [ncsc.url], paragraphs: [
            'Définissez le public, les entrées autorisées, la sortie attendue, la personne qui vérifie, les exclusions et le moment où l’essai s’arrête. Ajoutez deux ou trois exemples acceptables et un exemple où le système doit signaler qu’il ne sait pas. Décrivez aussi où les données sont traitées et qui peut les consulter. Le guide du centre néo-zélandais de cybersécurité insiste notamment sur les fuites de données, la fiabilité et la manipulation des sorties : ce sont des questions de cadrage, pas des cases à cocher après coup.',
            'Prévoyez un mode manuel équivalent. Si le service tombe, si la réponse manque une pièce ou si l’utilisateur n’est pas sûr, la tâche doit pouvoir suivre son circuit actuel. Cette possibilité limite l’essai à une aide réversible au lieu de rendre l’équipe dépendante d’un résultat automatique.'
          ] },
          { title: 'Deux semaines pour apprendre, pas pour prouver une promesse', paragraphs: [
            'Exemple fictif : une entreprise de six personnes reçoit des demandes de devis par courriel. Durant la première semaine, elle compte 24 demandes, relève le temps de tri et note les informations manquantes. Pour la seconde, un outil approuvé propose un résumé et une liste de champs à vérifier ; une personne garde la décision de réponse. À la fin, l’équipe compare les omissions, le temps actif, les corrections et les cas envoyés à un humain. Les nombres décrivent cet exemple imaginé, ils ne constituent pas un résultat observé.',
            'Fixez le seuil d’arrêt avant de commencer : par exemple, une pièce confidentielle exposée, une erreur critique non détectée, ou une charge de vérification supérieure au gain potentiel. Un essai qui révèle que la règle existante suffit est utile. Il évite une intégration inutile et précise la prochaine amélioration.'
          ] },
          { title: 'Décider : poursuivre, corriger ou arrêter', paragraphs: [
            'À la revue, séparez trois questions : le résultat est-il suffisamment exact, le parcours est-il plus simple, et le coût de maintien est-il acceptable ? Les réponses peuvent diverger. Un brouillon plus rapide peut entraîner davantage de corrections ; une extraction fiable sur des documents homogènes peut échouer sur des scans. Indiquez le contexte testé et les limites plutôt que d’annoncer une amélioration générale.',
            'Si vous poursuivez, nommez une personne qui possède le processus, une autre qui gère l’outil si nécessaire, et une date de réexamen. Élargissez ensuite à un seul cas voisin. La première étape réussie est une décision éclairée, y compris le choix de ne pas déployer.'
          ] }
        ],
        takeaway: 'Choisissez un irritant observable, bornez un essai réversible de deux semaines, mesurez les corrections et prévoyez dès le départ le retour au processus manuel.',
        service: { href: '/ia-automatisation/', label: 'Cadrer un premier usage de l’IA' }
      },
      en: {
        slug: 'small-business-ai-first-use-two-weeks', title: 'AI in a small business: choose a first use without launching a major programme',
        description: 'A short diagnosis and a two-week trial can show whether a specific use deserves further work.', category: 'Business & transformation',
        introduction: 'When a small business asks where to begin with AI, it is tempting to compare tools or launch a company-wide project. A more useful decision starts with an observable source of friction: repeated work, a growing delay, frequent rework or information that is hard to find. The first goal is not to “do AI”; it is to check whether a specific aid improves a task without adding disproportionate work or risk. OECD publications describe different SME adoption paths shaped by resources, skills and digital foundations. The diagnosis below is a proposed method, not an official assessment or a promise of results.',
        sources: [oecdAdoption, oecdReadiness, ncsc].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Start with visible friction', sourceUrls: [oecdAdoption.url, oecdReadiness.url], paragraphs: [
            'For five working days, record moments when someone copies, searches, rewrites, classifies or waits for information. For each occurrence, note the trigger, expected result, approximate active time and reason for any rework. Avoid a vague judgement such as “our admin is slow”. Write instead: “when a form arrives, the assistant checks four fields and requests missing documents”. A problem described as a sequence can be observed and compared.',
            'The OECD readiness tool asks about digital foundations, skills, use cases and barriers. It can inspire an internal inventory without turning its profile into a score. A business without reliable data or an available owner may first need to improve those basics instead of adding a model.'
          ] },
          { title: 'Choose a bounded task', paragraphs: [
            'Look for a unit of work with a clear start and finish: summarising a public document, drafting from approved information, extracting fields for review or finding an internal procedure. Prefer a use where a person can compare the result with a source. Leave employment, credit, health, safety and legal commitments out of the first trial. Error impact matters as much as frequency.',
            'The task should recur often enough for comparison, but it should not be so critical that a single anomaly would have serious consequences. If every case is exceptional, start with assisted search rather than automated decisions. There is no need to turn an occasional creative request into an automation project.'
          ] },
          { title: 'Write a one-page trial brief', sourceUrls: [ncsc.url], paragraphs: [
            'Define the users, approved inputs, expected output, reviewer, exclusions and stopping point. Add two or three acceptable examples and one case where the system should say it is unsure. Record where data is processed and who can access it. New Zealand’s small-business cyber guide highlights data leakage, reliability and manipulation of outputs as practical concerns. These belong in scoping, not just in a post-launch checklist.',
            'Keep an equivalent manual route. If the service is unavailable, a field is missing or a user is unsure, the task should continue through its existing path. This keeps the trial reversible instead of making the team dependent on an automated result.'
          ] },
          { title: 'Use two weeks to learn, not to prove a promise', paragraphs: [
            'Hypothetical example: a six-person business receives quote requests by email. In week one, it counts 24 requests, estimates sorting time and records missing information. In week two, an approved tool proposes a summary and a list of fields to check; a person still decides how to respond. The team compares omissions, active time, corrections and cases sent to a person. Those invented figures describe the example only; they are not observed results.',
            'Set the stopping threshold before starting: perhaps a confidential document is exposed, a critical error goes undetected or review takes more effort than the possible benefit. A trial that shows an existing rule is enough is useful. It avoids an unnecessary integration and clarifies the next improvement.'
          ] },
          { title: 'Decide whether to continue, change or stop', paragraphs: [
            'At the review, separate three questions: is the result accurate enough, is the workflow easier, and is the cost of maintaining it acceptable? The answers may differ. A faster draft can require more corrections; reliable extraction from consistent documents may fail on scans. Describe the conditions tested and the limitations instead of claiming a general improvement.',
            'If you continue, name a process owner, an owner for the tool if needed and a review date. Then expand to one neighbouring case. An informed decision, including a decision not to deploy, is a successful first step.'
          ] }
        ],
        takeaway: 'Choose visible friction, scope a reversible two-week trial, measure corrections and plan the manual fallback from the start.',
        service: { href: '/en/ai-automation/', label: 'Scope a first AI use case' }
      }
    }
  },
  {
    id: 'workflow-before-model', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'strategie-ia-workflow-avant-modele', title: 'Votre stratégie IA commence souvent par un workflow bien défini',
        description: 'Cartographier une demande, ses décisions et ses sorties aide à choisir entre règle, outil et modèle.', category: 'Entreprise & transformation',
        introduction: 'Une entreprise peut avoir accès à un modèle performant sans savoir où l’intégrer. La difficulté vient souvent du parcours autour de la tâche : les informations arrivent sous plusieurs formes, une exception n’a pas de propriétaire ou une validation se fait par habitude. Choisir le modèle avant de décrire ce parcours revient à acheter une pièce avant de savoir quelle machine est en panne. L’analyse commence par la façon dont le travail entre, change de mains, reçoit une décision puis produit un résultat. Les rapports de l’OCDE distinguent l’usage d’outils prêt à l’emploi de leur intégration dans les opérations : adopter une interface ne transforme pas automatiquement le processus. La carte proposée ici est volontairement légère.',
        sources: [oecdAdoption, oecdUses, ukStandard].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Dessiner le parcours tel qu’il se passe', sourceUrls: [oecdUses.url, ukStandard.url], paragraphs: [
            'Prenez un dossier récent et retracez ce qui s’est réellement passé : qui l’a reçu, quelles informations manquaient, où elles ont été cherchées, qui a tranché et comment le résultat a été communiqué. Utilisez des verbes concrets et inscrivez les outils actuels. Une carte utile inclut les détours, les attentes et les reprises, même si personne ne les trouve élégants.',
            'Demandez à la personne qui exécute la tâche et à celle qui reçoit le résultat de relire la carte. La description officielle d’un processus et son usage réel diffèrent souvent. Le standard britannique de gestion de projet met l’accent sur la clarté des rôles et la vérification des résultats ; pour une PME, la même idée tient sur un tableau partagé sans adopter tout le cadre administratif.'
          ] },
          { title: 'Séparer les données, les règles et les jugements', sourceUrls: [oecdUses.url], paragraphs: [
            'Pour chaque étape, indiquez les entrées, la transformation, le résultat et la personne qui en est responsable. Marquez ce qui est mécanique, ce qui varie selon le contexte et ce qui exige un jugement. Une règle déterministe peut vérifier qu’un champ est rempli. Un outil classique peut déplacer un fichier ou envoyer un accusé de réception. Un modèle génératif peut aider à résumer un texte libre, mais ne devient pas pour autant la source de vérité.',
            'Ajoutez les exceptions : format illisible, information contradictoire, seuil dépassé, identité inconnue. Si une exception n’a ni propriétaire ni procédure, l’automatisation risque seulement de la cacher plus vite. L’OCDE note que les usages observés dans les PME restent souvent périphériques et que l’intégration dans les processus métier demeure inégale.'
          ] },
          { title: 'Localiser le point de décision', paragraphs: [
            'Une carte aide à trouver le véritable goulot. Le délai peut venir du manque de documents, d’une validation en attente ou d’une règle ambigüe, plutôt que de la rédaction. Avant d’ajouter de l’IA, demandez si une liste de contrôle, un formulaire plus clair ou une responsabilité attribuée résout le problème. La meilleure modification peut être organisationnelle.',
            'Si un modèle semble pertinent, reliez-le à une étape étroite et spécifiez ce qu’il ne décide pas. Par exemple, il peut extraire les coordonnées d’un message et proposer une catégorie ; une personne confirme les données, puis un système à règles applique le routage. Cette séparation rend les erreurs plus faciles à repérer.'
          ] },
          { title: 'Exemple de carte avant choix technique', paragraphs: [
            'Exemple fictif : une demande commerciale arrive dans une boîte partagée. Entrée : courriel et pièce jointe. Vérification : présence du nom, du service demandé et de l’échéance. Décision : demande complète ou à clarifier. Sortie : réponse d’accusé et tâche attribuée. La carte révèle que la difficulté principale est l’absence de définition commune de « complet ». L’équipe rédige d’abord trois critères et un message de clarification. Ensuite seulement, elle peut tester une extraction assistée sur des demandes sans données sensibles.',
            'Le résultat attendu du test est une liste de champs avec leur source dans le message, plus une mention « à vérifier » quand la preuve manque. Il n’est pas demandé au système de fixer le prix, de promettre une date ou d’engager l’entreprise. Ce résultat borné permet de comparer les erreurs de lecture sans brouiller les responsabilités commerciales.'
          ] },
          { title: 'Utiliser la carte comme contrat de changement', paragraphs: [
            'Une fois le flux décrit, associez à chaque étape modifiée une mesure pertinente : délai d’attente, reprise, précision ou clarté pour la personne suivante. Consignez aussi les données utilisées, les accès nécessaires, les limites et le scénario de retour arrière. Cela évite de confondre une démonstration réussie avec un processus durable.',
            'Relisez la carte après un petit essai. Si des exceptions nouvelles apparaissent, ajoutez-les avant d’élargir. Si personne ne peut expliquer qui accepte le résultat final, le workflow n’est pas encore prêt à être délégué à un outil. Définir le processus est déjà un gain de compréhension, même si le modèle choisi est finalement aucun modèle.'
          ] }
        ],
        takeaway: 'Tracez une transaction réelle de l’entrée à la sortie, rendez visibles décisions et exceptions, puis rattachez un outil à une seule étape définie.',
        service: { href: '/ia-automatisation/', label: 'Cartographier un processus métier' }
      },
      en: {
        slug: 'ai-strategy-workflow-before-model', title: 'Your AI strategy often starts with a well-defined workflow',
        description: 'Mapping a request, its decisions and its outputs helps you choose between a rule, a tool and a model.', category: 'Business & transformation',
        introduction: 'A business can have access to a capable model and still not know where to use it. The difficulty often lies in the workflow around the task: information arrives in different forms, no one owns an exception or an approval happens by habit. Choosing a model before describing that workflow is like buying a part before identifying the broken machine. Start with how work arrives, changes hands, receives a decision and produces an outcome. OECD reports distinguish the use of off-the-shelf tools from their integration into business operations: adopting an interface does not automatically transform a process. The map proposed here is deliberately lightweight.',
        sources: [oecdAdoption, oecdUses, ukStandard].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Draw the workflow as it actually happens', sourceUrls: [oecdUses.url, ukStandard.url], paragraphs: [
            'Take a recent case and trace what really happened: who received it, what information was missing, where it was found, who made a decision and how the result was communicated. Use concrete verbs and list the tools in use. A useful map includes detours, waits and rework even when nobody considers them elegant.',
            'Ask the person doing the task and the person receiving its result to review the map. The official description and actual practice often differ. The UK project delivery standard stresses clear roles and verified outcomes; for a small business, the same idea can fit on a shared board without adopting a full government framework.'
          ] },
          { title: 'Separate data, rules and judgement', sourceUrls: [oecdUses.url], paragraphs: [
            'For each step, record inputs, transformation, output and owner. Mark what is mechanical, what varies by context and what requires judgement. A deterministic rule can check that a field is present. A conventional tool can move a file or send an acknowledgement. A generative model may help summarise free text, but it does not become the source of truth.',
            'Add exceptions: unreadable format, contradictory information, exceeded threshold or unknown identity. If an exception has no owner or procedure, automation may only hide it faster. OECD notes that SME use cases are often peripheral and integration into business processes remains uneven.'
          ] },
          { title: 'Find the decision point', paragraphs: [
            'A map helps locate the real bottleneck. Delay may come from missing documents, an approval waiting in a queue or an ambiguous rule rather than writing. Before adding AI, ask whether a checklist, clearer form or assigned responsibility would solve the problem. The best change may be organisational.',
            'If a model seems useful, attach it to a narrow step and state what it does not decide. It could extract contact details from a message and suggest a category; a person confirms the data, then a rule-based system routes the work. This separation makes errors easier to find.'
          ] },
          { title: 'Example workflow map before choosing technology', paragraphs: [
            'Hypothetical example: a sales request arrives in a shared inbox. Input: email and attachment. Check: name, requested service and deadline are present. Decision: complete or needs clarification. Output: acknowledgement and assigned task. The map reveals that the main difficulty is no shared definition of “complete”. The team first writes three criteria and a clarification message. Only then does it test assisted extraction on requests without sensitive data.',
            'The expected test result is a list of fields with their source in the message and a “verify” note when evidence is missing. The system is not asked to set a price, promise a date or commit the company. This bounded output makes reading errors comparable without blurring sales responsibilities.'
          ] },
          { title: 'Use the map as a change contract', paragraphs: [
            'Once the flow is described, connect each changed step to a relevant measure: waiting time, rework, accuracy or clarity for the next person. Record data, access needs, limitations and a rollback path too. This avoids mistaking a successful demonstration for a sustainable process.',
            'Review the map after a small trial. If new exceptions appear, add them before expanding. If nobody can explain who accepts the final result, the workflow is not ready to delegate to a tool. Defining the process already improves understanding, even if the final choice is to use no model.'
          ] }
        ],
        takeaway: 'Trace a real transaction from input to outcome, expose decisions and exceptions, then attach a tool to one defined step.',
        service: { href: '/en/ai-automation/', label: 'Map a business workflow' }
      }
    }
  },
  {
    id: 'rules-or-generative', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'regles-automatisation-ou-ia-generative', title: 'Règles, automatisation ou IA générative : choisir étape par étape',
        description: 'Une décision en quatre questions aide à placer chaque étape entre règle, automatisation, génération et revue humaine.', category: 'Entreprise & transformation',
        introduction: 'Le mot « automatisation » désigne souvent des choses très différentes : un champ obligatoire, un transfert entre outils, un résumé de courriel ou une décision prise à partir d’un texte ambigu. Pourtant, ces étapes n’ont pas les mêmes besoins. Une règle explicite est plus simple à prévoir qu’une interprétation générative ; un modèle peut traiter une variété de formulations, mais son résultat doit rester vérifiable. Il ne s’agit pas de choisir une technologie pour toute l’entreprise. Il faut décomposer le travail et attribuer à chaque étape le mécanisme le plus prévisible qui convient. La documentation de Microsoft sur les approbations montre comment une automatisation peut attendre une réponse humaine. Le cadre du NIST rappelle aussi d’évaluer le contexte, les risques et les résultats dans le cycle de vie.',
        sources: [msApprovals, msAiApprovals, nistCore].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Question 1 : la règle est-elle explicite ?', sourceUrls: [nistCore.url], paragraphs: [
            'Si l’étape peut être décrite par une condition stable et observable, commencez par une règle. « Si la date est absente, demander une date » ou « si le total dépasse le seuil validé, envoyer pour approbation » sont des critères testables. Le responsable métier peut confirmer qu’ils reflètent la politique. Un modèle de langage ne devrait pas être chargé d’interpréter une règle claire simplement parce qu’il sait lire une phrase.',
            'Quand la règle change souvent, documentez sa version et la personne qui l’approuve. Si deux collègues appliquent des critères différents, résolvez cette différence avant de coder. L’IA ne peut pas rendre cohérente une politique qui n’a pas encore été décidée.'
          ] },
          { title: 'Question 2 : peut-on déplacer ou synchroniser sans interpréter ?', paragraphs: [
            'Un événement structuré peut souvent déclencher une action conventionnelle : créer une tâche lorsqu’un formulaire est soumis, envoyer une confirmation, copier un identifiant ou notifier un responsable. Ces opérations n’exigent pas de génération de texte. Elles demandent surtout des droits appropriés, une gestion des doublons et une trace permettant de savoir si l’action a eu lieu.',
            'Testez les échecs ordinaires : système indisponible, pièce absente, message reçu deux fois ou compte désactivé. Le parcours doit montrer à l’utilisateur ce qui a échoué et fournir une procédure de reprise. Une automatisation simple n’est pas sans risque, mais ses conditions sont généralement plus faciles à spécifier que celles d’un jugement ouvert.'
          ] },
          { title: 'Question 3 : faut-il interpréter un contenu variable ?', paragraphs: [
            'Un modèle génératif peut être utile pour classer un texte libre, produire un résumé ou extraire des éléments d’un document dont la forme varie. Gardez la sortie modeste : une proposition structurée, un passage cité comme preuve, ou un brouillon. Demandez une abstention lorsque la source est insuffisante. Vérifiez que le format est contrôlé par l’application et que l’utilisateur sait ce qu’il doit valider.',
            'Dans Power Automate, Microsoft documente une étape d’approbation qui peut attendre une réponse humaine après une sortie de prompt. Cette documentation illustre un motif de conception ; elle ne prouve pas que les classifications soient fiables dans d’autres outils ou pour votre corpus. Évaluez votre propre collection de cas.'
          ] },
          { title: 'Question 4 : que se passe-t-il si le résultat est faux ?', sourceUrls: [msAiApprovals.url, msApprovals.url], paragraphs: [
            'Estimez l’impact avant de décider du degré de contrôle. Un brouillon interne corrigible n’a pas le même effet qu’un paiement, un rejet de candidat, une suppression ou un engagement envoyé au client. Pour une conséquence importante, faites confirmer la décision par une personne autorisée, ou gardez l’étape entièrement déterministe. Les approbations peuvent être parallèles ou séquentielles selon le besoin ; leur ordre et les critères d’approbation doivent être explicites.',
            'Prévoyez l’escalade lorsque le score ou la preuve ne suffit pas. Un arrêt sûr n’est pas un échec : il empêche une incertitude technique de devenir une décision métier silencieuse. Journalisez l’entrée utile, le choix réalisé et la personne qui a validé, tout en limitant les données conservées.'
          ] },
          { title: 'Exemple fictif : demande de remboursement', paragraphs: [
            'Exemple fictif : une demande arrive avec un formulaire et un reçu. Une règle vérifie que le montant et l’identité sont présents. Un flux conventionnel associe le dossier au centre de coût. Un modèle peut proposer une catégorie à partir de la description et du justificatif ; il doit signaler toute donnée illisible. La personne responsable compare le reçu, la politique et la catégorie proposée, puis accepte ou renvoie le dossier. Si la dépense dépasse le plafond ou concerne une exception, le flux demande l’approbation du niveau suivant.',
            'Le résultat attendu est une trace claire des champs contrôlés, de la suggestion non contraignante, de la décision du valideur et des cas transférés. On ne demande pas au modèle d’approuver une dépense sur la seule base d’un texte plausible. Cette répartition rend la correction possible et permet de mesurer séparément les erreurs d’extraction, de routage et de jugement.'
          ] }
        ],
        takeaway: 'Décomposez le processus : règle pour les critères stables, automatisation pour les transferts, génération pour le contenu variable et personne responsable pour les décisions à impact.',
        service: { href: '/ia-automatisation/', label: 'Concevoir un flux automatisé contrôlable' }
      },
      en: {
        slug: 'rules-automation-or-generative-ai', title: 'Rules, automation or generative AI: choose one step at a time',
        description: 'Four questions help place each step between a rule, an automated action, generation and human review.', category: 'Business & transformation',
        introduction: 'The word “automation” can refer to very different things: a required field, a transfer between tools, an email summary or a decision based on ambiguous text. These steps do not have the same needs. An explicit rule is easier to predict than generative interpretation; a model can handle varied wording, but its output must remain verifiable. The goal is not to select one technology for the whole business. Break the work into steps and give each one the most predictable mechanism that fits. Microsoft’s approvals documentation shows how an automation can wait for a human response. NIST guidance also emphasises evaluating context, risks and outcomes throughout an AI system’s lifecycle.',
        sources: [msApprovals, msAiApprovals, nistCore].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Question 1: is the rule explicit?', sourceUrls: [nistCore.url], paragraphs: [
            'If a step can be described by a stable, observable condition, start with a rule. “If the date is missing, request one” or “if the total exceeds the approved threshold, send it for approval” are testable criteria. A business owner can confirm that they match policy. A language model should not be asked to interpret a clear rule simply because it can read a sentence.',
            'When a rule changes often, document its version and who approves it. If two colleagues apply different criteria, resolve that difference before coding. AI cannot make a policy consistent when it has not yet been decided.'
          ] },
          { title: 'Question 2: can data move without interpretation?', paragraphs: [
            'A structured event can often trigger a conventional action: create a task when a form is submitted, send confirmation, copy an identifier or notify an owner. These operations do not need generated text. They do need appropriate permissions, duplicate handling and a trace showing whether the action happened.',
            'Test ordinary failures: unavailable system, missing attachment, duplicate message or disabled account. The workflow should show users what failed and provide a recovery path. A simple automation is not risk-free, but its conditions are usually easier to specify than an open-ended judgement.'
          ] },
          { title: 'Question 3: must the system interpret variable content?', paragraphs: [
            'A generative model may help classify free text, summarise it or extract information from documents with varying layouts. Keep the output modest: a structured suggestion, an evidence passage or a draft. Ask it to abstain when the source is insufficient. Check that the application controls the format and that users know what they must review.',
            'Microsoft documents a Power Automate approval step that can wait for human review after a prompt output. That documentation illustrates a design pattern; it does not prove classification is reliable in another tool or on your own material. Evaluate your own cases.'
          ] },
          { title: 'Question 4: what happens if the result is wrong?', sourceUrls: [msAiApprovals.url, msApprovals.url], paragraphs: [
            'Estimate the impact before choosing the level of control. An editable internal draft differs from a payment, rejection of an applicant, deletion or customer commitment. For a consequential outcome, have an authorised person confirm the decision or keep the step fully deterministic. Approvals can be parallel or sequential; the order and criteria must be explicit.',
            'Provide escalation when confidence or evidence is insufficient. A safe stop is not a failure: it prevents technical uncertainty from becoming a silent business decision. Log the relevant input, action and approver while limiting retained data.'
          ] },
          { title: 'Hypothetical example: expense reimbursement', paragraphs: [
            'Hypothetical example: a claim arrives with a form and receipt. A rule checks that amount and identity are present. A conventional flow associates the case with a cost centre. A model may suggest a category from the description and receipt; it must flag unreadable data. The responsible person compares the receipt, policy and proposed category, then approves or returns the claim. If the expense exceeds the limit or is an exception, the flow requests approval from the next level.',
            'The expected result is a clear trace of checked fields, the non-binding suggestion, the reviewer’s decision and cases transferred for escalation. The model is not asked to approve an expense based only on plausible text. This separation allows correction and makes extraction, routing and judgement errors measurable on their own.'
          ] }
        ],
        takeaway: 'Break the process apart: use rules for stable criteria, automation for transfers, generation for variable content and an accountable person for consequential decisions.',
        service: { href: '/en/ai-automation/', label: 'Design a controllable workflow' }
      }
    }
  },
  {
    id: 'automation-priority-grid', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'grille-priorisation-taches-automatisables', title: 'Identifier les tâches automatisables avec une grille de priorisation',
        description: 'Une grille simple met en regard fréquence, variabilité, impact et capacité à détecter une erreur.', category: 'Entreprise & transformation',
        introduction: 'La tâche la plus visible n’est pas forcément celle qu’il faut automatiser en premier. Une opération fréquente peut aussi être très variable, risquée ou impossible à vérifier après coup. À l’inverse, une petite tâche répétitive avec un résultat contrôlable peut offrir un terrain d’apprentissage raisonnable. Cette grille éditoriale propose de noter quatre dimensions : fréquence, variabilité, impact d’une erreur et détectabilité. Elle ne prédit pas un gain, ne remplace pas une analyse de sécurité et ne donne pas un score universel. Elle sert à comparer des options avec les personnes qui connaissent réellement le travail. Les indices d’exposition à l’IA décrivent des tâches susceptibles d’être transformées, rappelle l’OIT, mais ne prédisent pas à eux seuls le résultat pour un poste ou une entreprise.',
        sources: [oecdUses, iloIndicators, nistCore].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Définir les quatre dimensions', sourceUrls: [iloIndicators.url], paragraphs: [
            'Fréquence : combien de fois la tâche se produit réellement dans une période choisie ? Variabilité : les entrées et exceptions restent-elles semblables ou changent-elles beaucoup ? Impact : que se passe-t-il si le résultat est faux, tardif ou incomplet ? Détectabilité : une personne peut-elle repérer l’erreur avant qu’elle affecte un client, un paiement ou une obligation ? Écrivez des descriptions et des exemples, pas seulement un chiffre.',
            'La fréquence aide à estimer l’importance opérationnelle, mais elle ne suffit pas. Les travaux de l’OIT analysent l’exposition tâche par tâche et insistent sur la différence entre potentiel technique et résultat d’emploi. Pour la priorisation locale, ajoutez vos propres risques et contraintes ; ne transposez pas une mesure d’occupation à votre liste de processus.'
          ] },
          { title: 'Établir une échelle explicable', sourceUrls: [nistCore.url], paragraphs: [
            'Vous pouvez utiliser une échelle de un à cinq, à condition de définir les ancrages. Par exemple, fréquence un signifie moins d’une fois par mois, cinq signifie plusieurs fois par jour. Pour la variabilité, un signifie presque toujours le même format et cinq signifie que chaque dossier diffère. Pour impact, l’échelle va d’une correction interne facile à une conséquence financière, juridique ou humaine importante. Pour détectabilité, un signifie preuve évidente et cinq signifie erreur difficile à remarquer.',
            'Le sens d’un score doit être visible : fréquence haute rend une tâche plus intéressante à étudier, tandis qu’impact et difficulté de détection élevés augmentent la prudence. Ne faites pas une somme qui compense mécaniquement un risque important par une fréquence élevée. Utilisez plutôt les dimensions comme filtres et discutez les divergences.'
          ] },
          { title: 'Classer et discuter les cas limites', paragraphs: [
            'Commencez par les tâches où le résultat peut être revu à faible coût et où l’erreur est repérable. Gardez une étape humaine lorsque l’issue peut être lourde. Certaines tâches sont bien adaptées à une automatisation classique par règles ; d’autres peuvent demander une aide générative pour classer ou résumer. Si la variabilité est haute, un processus d’entrée mieux conçu peut être nécessaire avant toute technologie.',
            'La grille peut aussi montrer une cause organisationnelle : trop de cas « urgents » signalent peut-être une capacité ou une politique à revoir. Ne transformez pas automatiquement une liste de tâches en dossier d’achat. Interrogez les personnes qui font le travail et celles affectées par le résultat.'
          ] },
          { title: 'Classement fictif à discuter en équipe', paragraphs: [
            'Exemple fictif, score de fréquence/variabilité/impact/détectabilité : classement d’un formulaire standard (5/1/2/1), résumé d’un long échange client avant relecture (3/3/2/2), attribution automatique d’un fournisseur après analyse d’un contrat (2/5/5/4). Le premier cas paraît plus facile à tester, le deuxième demande un contrôle des omissions, et le troisième est un mauvais candidat à une délégation sans expertise juridique et validation.',
            'Le résultat attendu de l’exercice n’est pas « le cas au total le plus élevé gagne ». L’équipe doit expliquer les scores, choisir un cas faible impact pour une expérience limitée, et noter les cas exclus. Les chiffres sont des hypothèses didactiques ; ils ne décrivent pas une entreprise réelle et n’indiquent aucun gain.'
          ] },
          { title: 'Ajouter les critères de capacité et de maintenance', paragraphs: [
            'Avant d’essayer, demandez si les données sont accessibles avec autorisation, si un responsable peut vérifier un échantillon, et qui corrigera le flux lorsqu’un formulaire ou une règle change. Le NIST recommande une gestion continue du contexte, des mesures et des réponses aux risques. Cette boucle est une ressource : si personne ne peut l’assurer, le projet doit rester manuel ou être reporté.',
            'Réévaluez la grille après un changement de volume, de clientèle ou de politique. Une tâche qui était contrôlable peut devenir plus sensible. Un tableau daté avec les raisons de sélection et les exclusions est plus utile qu’un score décoratif qui n’indique pas qui doit agir.'
          ] }
        ],
        takeaway: 'Utilisez fréquence pour repérer le potentiel, variabilité pour estimer l’effort et impact/détectabilité comme garde-fous ; discutez les notes au lieu de les additionner aveuglément.',
        service: { href: '/ia-automatisation/', label: 'Prioriser un processus à améliorer' }
      },
      en: {
        slug: 'prioritise-tasks-for-automation', title: 'Identify tasks for automation with a prioritisation grid',
        description: 'A simple grid compares frequency, variability, impact and how easily an error can be detected.', category: 'Business & transformation',
        introduction: 'The most visible task is not necessarily the one to automate first. A frequent operation may also be highly variable, risky or difficult to verify afterwards. A small repetitive task with a checkable result can instead provide a reasonable learning ground. This proposed editorial grid considers four dimensions: frequency, variability, error impact and detectability. It does not predict savings, replace a safety assessment or provide a universal score. It helps people familiar with the work compare options. ILO exposure indicators describe tasks that might be transformed, but do not by themselves predict outcomes for a role or business.',
        sources: [oecdUses, iloIndicators, nistCore].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Define the four dimensions', sourceUrls: [iloIndicators.url], paragraphs: [
            'Frequency: how often does the task actually happen in a chosen period? Variability: do inputs and exceptions stay similar or change significantly? Impact: what happens if the result is wrong, late or incomplete? Detectability: can a person spot an error before it affects a customer, payment or obligation? Write descriptions and examples, not just a number.',
            'Frequency helps estimate operational importance, but it is not enough. ILO research analyses exposure task by task and stresses the difference between technical potential and employment outcomes. For local prioritisation, add your own risks and constraints; do not transfer an occupational measure to your list of workflows.'
          ] },
          { title: 'Use an explainable scale', sourceUrls: [nistCore.url], paragraphs: [
            'You can use a one-to-five scale if you define its anchors. For example, frequency one could mean less than monthly, while five means several times a day. For variability, one could mean almost always the same format and five means every case differs. For impact, the scale might range from an easy internal correction to a significant financial, legal or human consequence. For detectability, one means obvious evidence and five means an error is hard to notice.',
            'Make the direction of each score visible: higher frequency makes a task more interesting to investigate, while high impact and low detectability call for caution. Do not let a sum mechanically offset an important risk with a high frequency. Use the dimensions as filters and discuss disagreements.'
          ] },
          { title: 'Rank options and discuss edge cases', paragraphs: [
            'Start with tasks whose results can be reviewed at low cost and whose errors are detectable. Keep a human step when the outcome could be consequential. Some tasks suit conventional rule-based automation; others may need generative help to classify or summarise. High variability may mean the intake process needs improvement before any technology is considered.',
            'The grid can reveal an organisational cause too: too many “urgent” cases may point to a capacity or policy issue. Do not automatically turn a task list into a purchasing plan. Speak with the people doing the work and those affected by its result.'
          ] },
          { title: 'A hypothetical ranking to discuss as a team', paragraphs: [
            'Hypothetical example, scored as frequency/variability/impact/detectability: sorting a standard form (5/1/2/1), summarising a long customer exchange for review (3/3/2/2), automatically assigning a supplier after contract analysis (2/5/5/4). The first looks easier to trial, the second needs checks for omissions, and the third is a poor candidate for delegation without legal expertise and approval.',
            'The expected result is not “the largest total wins”. The team should explain its scores, choose a low-impact case for a limited experiment and record exclusions. These figures are teaching assumptions; they describe no real business and indicate no savings.'
          ] },
          { title: 'Add capacity and maintenance criteria', paragraphs: [
            'Before a trial, ask whether data is available with permission, whether an owner can review a sample and who will repair the flow when a form or rule changes. NIST recommends continuous management of context, measurement and risk responses. This loop requires resources: if nobody can maintain it, keep the process manual or postpone the project.',
            'Revisit the grid when volume, customers or policy change. A task that was once easy to check can become more sensitive. A dated table with selection reasons and exclusions is more useful than a decorative score with no clear owner.'
          ] }
        ],
        takeaway: 'Use frequency to find potential, variability to estimate effort, and impact and detectability as safeguards. Discuss the scores instead of blindly adding them.',
        service: { href: '/en/ai-automation/', label: 'Prioritise a workflow to improve' }
      }
    }
  },
  {
    id: 'train-hire-or-partner', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'former-recruter-partenaire-projet-ia', title: 'Former, recruter ou se faire accompagner pour son projet IA ?',
        description: 'Le bon choix dépend des compétences à garder, de la charge récurrente et du transfert de responsabilité.', category: 'Entreprise & transformation',
        introduction: 'Une PME qui démarre un projet IA peut manquer de méthode, de compétences techniques ou simplement de temps pour encadrer un essai. La question n’est pas de choisir une solution universelle entre formation, recrutement et conseil. Il faut distinguer les compétences nécessaires une fois de celles qui reviendront chaque semaine, puis décider ce qui doit rester sous contrôle de l’entreprise. Les publications de l’OCDE sur les compétences soulignent que le besoin ne se limite pas au développement spécialisé : interpréter des données, comprendre les limites, juger la qualité et organiser le travail sont aussi importants. Le choix ci-dessous sert à préparer une décision d’équipe ; il ne remplace pas une analyse de poste, une sélection de fournisseur ou les obligations d’employeur.',
        sources: [oecdSkills, oecdSkillsAcq, oecdWorkforce].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Décrire les responsabilités à couvrir', sourceUrls: [oecdSkills.url], paragraphs: [
            'Listez les tâches concrètes : définir le problème métier, préparer des données autorisées, configurer un outil, intégrer un service, examiner les résultats, gérer les accès, former les utilisateurs et surveiller les incidents. Pour chacune, précisez le niveau de compétence requis et la fréquence. Une expertise avancée en modèle peut être ponctuelle ; la responsabilité de vérifier les sorties, elle, reste dans le flux.',
            'Identifiez les connaissances qui ne peuvent pas être externalisées : les règles métier, les exceptions acceptables, les données à protéger et l’autorité de décision. Même si un prestataire effectue la configuration, l’entreprise doit savoir quels résultats elle accepte et qui peut arrêter le système.'
          ] },
          { title: 'Former quand la compétence revient dans le travail', paragraphs: [
            'La formation est pertinente quand plusieurs personnes doivent effectuer une tâche récurrente : utiliser un outil approuvé, vérifier une réponse, reconnaître une donnée confidentielle ou escalader un doute. L’OCDE indique que les compétences utiles incluent aussi l’analyse et l’interprétation des données, le jugement et des aptitudes managériales. Une formation courte et pratique peut traiter un parcours précis sans faire croire que tout le monde doit devenir ingénieur IA.',
            'Vérifiez l’apprentissage par une tâche et non par la présence à une présentation. Demandez à la personne de traiter un cas inédit, de retrouver la source d’une affirmation, de repérer une limite et de choisir une escalade. La réussite à cet exercice n’autorise pas pour autant toutes les données ni tous les usages.'
          ] },
          { title: 'Recruter quand le besoin est durable et détenu en interne', paragraphs: [
            'Un recrutement peut être adapté lorsque la compétence devra être exercée régulièrement, que le contexte est spécifique à l’entreprise et qu’un parcours professionnel et un encadrement sont disponibles. Formulez le poste autour de livrables et des interfaces : qualité des données, intégration, évaluation, sécurité, documentation et accompagnement métier. Évitez de demander à une personne seule de porter stratégie, conformité, développement, support et formation sans mandat ni temps.',
            'Comptez le coût d’intégration, l’équipement, la formation continue et la relève en cas d’absence. Un spécialiste ne remplace pas un propriétaire métier ni une décision de direction sur le risque acceptable.'
          ] },
          { title: 'S’associer à un partenaire avec une sortie prévue', sourceUrls: [oecdSkillsAcq.url], paragraphs: [
            'Un partenaire peut accélérer un diagnostic, une intégration rare ou une revue indépendante quand le besoin est limité ou qu’un savoir-faire n’existe pas en interne. Le contrat doit définir l’objectif, les données accessibles, les critères d’acceptation, les responsabilités de sécurité, le support et les livrables transférables. Demandez une documentation exploitable, une démonstration de reprise et un plan de fin de mission.',
            'Ne confondez pas livraison et transfert. Si les procédures, secrets, identifiants ou règles de décision restent chez le prestataire, l’entreprise ne peut ni maintenir ni arrêter le service de façon autonome. Évitez de donner un accès plus large que nécessaire et prévoyez comment le révoquer.'
          ] },
          { title: 'Exemple fictif : combiner les trois options', paragraphs: [
            'Exemple fictif : une société de distribution souhaite résumer les retours clients. Elle forme deux personnes à l’usage approuvé et à la vérification des citations, garde un responsable métier pour la taxonomie, puis mandate une consultante pour intégrer un export de données pendant six semaines. Avant la fin, la consultante livre les schémas, tests, procédures d’accès et guide de reprise. L’équipe décide ensuite si le volume justifie un poste technique permanent.',
            'Le résultat attendu de cet exercice est une matrice « compétence / fréquence / propriétaire / mode d’acquisition / preuve de transfert ». Elle rend visibles les dépendances et fournit un critère de fin au partenaire. Les durées et la configuration sont inventées pour illustrer une décision, pas pour recommander un budget.'
          ] }
        ],
        takeaway: 'Formez sur les tâches récurrentes, recrutez pour une capacité durable à piloter, et mandatez un partenaire sur un périmètre avec transfert et sortie documentés.',
        service: { href: '/ia-automatisation/', label: 'Définir les compétences nécessaires au projet' }
      },
      en: {
        slug: 'train-hire-or-partner-for-ai', title: 'Train, hire or bring in a partner for an AI project?',
        description: 'The choice depends on which skills must stay inside, ongoing workload and transfer of responsibility.', category: 'Business & transformation',
        introduction: 'An SME starting an AI project may lack a method, technical skills or simply the time to oversee a trial. There is no universal answer between training, hiring and consultancy. First distinguish skills needed once from those that will recur every week, then decide what the business must keep under its control. OECD publications on skills stress that needs go beyond specialist development: interpreting data, understanding limitations, judging quality and organising work matter too. The choices below help prepare a team decision; they do not replace job analysis, vendor selection or employer obligations.',
        sources: [oecdSkills, oecdSkillsAcq, oecdWorkforce].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Describe the responsibilities to cover', sourceUrls: [oecdSkills.url], paragraphs: [
            'List concrete tasks: define the business problem, prepare authorised data, configure a tool, integrate a service, review results, manage access, train users and monitor incidents. For each, specify the required skill level and frequency. Advanced model expertise may be needed once; responsibility for checking outputs remains in the workflow.',
            'Identify knowledge that cannot be outsourced: business rules, acceptable exceptions, data to protect and decision authority. Even if a contractor configures the system, the business must know which outcomes it accepts and who can stop it.'
          ] },
          { title: 'Train when the skill recurs in daily work', paragraphs: [
            'Training makes sense when several people must perform a recurring task: use an approved tool, check an answer, recognise confidential data or escalate uncertainty. OECD identifies useful capabilities that also include data analysis and interpretation, judgement and management skills. A short practical session can teach one workflow without suggesting that everyone must become an AI engineer.',
            'Check learning through a task rather than attendance at a presentation. Ask someone to handle an unseen case, find the source of a claim, spot a limitation and choose an escalation. Passing this exercise still does not authorise every data type or use.'
          ] },
          { title: 'Hire when the need is lasting and owned internally', paragraphs: [
            'Hiring may fit when the skill will be used regularly, the context is specific to the company and there is a career path and management support. Frame the role around deliverables and interfaces: data quality, integration, evaluation, security, documentation and business enablement. Avoid asking one person to own strategy, compliance, development, support and training without a mandate or time.',
            'Include onboarding, equipment, continuing education and cover for absences. A specialist does not replace a business owner or leadership’s decision about acceptable risk.'
          ] },
          { title: 'Use a partner with a planned exit', sourceUrls: [oecdSkillsAcq.url], paragraphs: [
            'A partner can speed up diagnosis, a rare integration or independent review when the need is limited or expertise is not available internally. The agreement should define the objective, data access, acceptance criteria, security responsibilities, support and transferable deliverables. Request usable documentation, a recovery demonstration and a closeout plan.',
            'Do not confuse delivery with transfer. If procedures, secrets, credentials or decision rules remain with the vendor, the business cannot independently maintain or stop the service. Avoid broader access than necessary and plan how to revoke it.'
          ] },
          { title: 'Hypothetical example: combine all three options', paragraphs: [
            'Hypothetical example: a distribution company wants to summarise customer feedback. It trains two people in approved use and checking citations, keeps a business owner for the taxonomy, then hires a consultant for a six-week data export integration. Before the work ends, the consultant provides schemas, tests, access procedures and a recovery guide. The team then decides whether volume justifies a permanent technical role.',
            'The expected output is a matrix of “skill / frequency / owner / acquisition method / transfer evidence”. It exposes dependencies and sets an end condition for the partner. The duration and setup are invented to illustrate a decision, not to recommend a budget.'
          ] }
        ],
        takeaway: 'Train for recurring tasks, hire for a lasting internal capability and contract a partner for a bounded scope with documented transfer and exit.',
        service: { href: '/en/ai-automation/', label: 'Define the skills your project needs' }
      }
    }
  },
  {
    id: 'ai-project-failure', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'projet-ia-echec-malgre-bon-modele', title: 'Pourquoi un projet IA échoue malgré un bon modèle',
        description: 'Diagnostiquer données, propriété métier, intégration et critères avant de changer de modèle.', category: 'Entreprise & transformation',
        introduction: 'Un pilote peut produire des réponses impressionnantes lors d’une démonstration et rester inutilisé quelques semaines plus tard. L’équipe conclut parfois qu’il faut un modèle plus puissant, alors que le blocage vient du workflow, des données accessibles, du manque de propriétaire ou du coût de vérification. Le cadre de gestion des risques du NIST invite à cartographier le contexte, à mesurer le comportement réel et à gérer les limites tout au long du cycle. Les travaux de l’OCDE sur les PME signalent aussi des freins pratiques comme les compétences, le temps de maintenance et l’intégration. Ce diagnostic aide à distinguer une limite du modèle d’un problème de mise en œuvre ; il ne suppose pas que chaque projet doit être sauvé.',
        sources: [oecdAdoption, nistCore, oecdWorkforce].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Le pilote résout-il un problème réel ?', sourceUrls: [oecdAdoption.url], paragraphs: [
            'Reprenez le besoin initial et demandez à la personne qui fait le travail si le résultat facilite une étape réelle, au moment où elle en a besoin. Une démonstration peut répondre à une question artificielle, avoir des données soigneusement préparées ou laisser de côté les exceptions. Si l’équipe n’utilise pas le résultat dans son environnement quotidien, l’écart peut venir de l’intégration ou du parcours, pas de la capacité de génération.',
            'Vérifiez aussi que le problème vaut l’effort. Un outil séduisant n’est pas une raison suffisante pour maintenir une interface et des consignes. L’OCDE observe chez les PME des usages nombreux de solutions disponibles, mais des degrés d’intégration variables : l’essai et l’adoption dans un processus restent deux étapes différentes.'
          ] },
          { title: 'Les données de l’essai ressemblent-elles au travail ?', paragraphs: [
            'Comparez l’échantillon du pilote aux entrées de tous les jours : format, langue, pièces manquantes, qualité de scan, vocabulaire et cas atypiques. Établissez qui peut autoriser l’usage de ces données et quels champs doivent être masqués. Si les exemples ne couvrent que des cas simples, le taux de réussite de la démonstration n’explique pas la performance en production.',
            'Ajoutez quelques cas difficiles et interdits à l’évaluation. Notez les erreurs par type : source mal lue, contexte omis, format invalide ou action lancée à tort. Une catégorie d’erreur précise mène à une correction concrète ; « le modèle se trompe » ne fournit pas de plan.'
          ] },
          { title: 'Quelqu’un possède-t-il le processus ?', sourceUrls: [nistCore.url], paragraphs: [
            'Le projet a besoin d’une personne qui connaît le résultat acceptable et peut arbitrer les cas limites. Elle n’a pas forcément à coder. Elle doit cependant disposer du temps et de l’autorité pour modifier la procédure, former les collègues, remonter les problèmes et suspendre l’usage. Le NIST insiste sur les rôles, la communication et la gestion répétée des risques.',
            'Sans cette personne, le pilote reste un prototype détenu par son auteur. Si cet auteur change d’équipe, personne ne sait pourquoi certaines consignes existent ou quand elles ne s’appliquent plus. Documenter une relève et une date de revue est une partie du produit, pas une formalité.'
          ] },
          { title: 'L’intégration et le coût de contrôle sont-ils visibles ?', paragraphs: [
            'Listez les systèmes qui fournissent les données, reçoivent la sortie ou portent l’identité de l’utilisateur. Une preuve de concept manuelle peut cacher les doubles saisies, accès trop larges, délais d’approbation, indisponibilités et reprises. Mesurez aussi le temps humain consacré à vérifier, corriger et expliquer le résultat. Une réponse rapide n’économise pas de temps si elle crée un nouveau contrôle long.',
            'L’intégration n’exige pas toujours une API sophistiquée. Un export limité et vérifié peut suffire à évaluer une hypothèse. Mais ne confondez pas cet essai manuel avec une architecture d’exploitation durable : le processus doit avoir un propriétaire, un journal adapté et un chemin de secours.'
          ] },
          { title: 'Exemple fictif : un pilote de tri qui stagne', paragraphs: [
            'Exemple fictif : un outil classe les demandes de support en trois catégories, mais les agents ignorent ses suggestions. Le diagnostic montre que les noms de catégorie ne correspondent pas au vocabulaire du tableau de suivi, que la boîte partagée contient des messages hors périmètre et qu’aucune équipe n’a le rôle de corriger les cas ambigus. Changer de modèle avant de corriger ces trois points apporterait peu d’information.',
            'Le résultat attendu du diagnostic est une liste priorisée : renommer les catégories avec l’équipe, exclure certains messages, définir un transfert pour les cas incertains, puis tester sur un nouvel échantillon étiqueté. Si le comportement reste insuffisant après cette correction, l’équipe aura enfin une preuve plus précise d’une limite technique.'
          ] }
        ],
        takeaway: 'Avant de remplacer le modèle, vérifiez l’adéquation au travail, les données, la personne responsable, l’intégration et la charge de contrôle.',
        service: { href: '/ia-automatisation/', label: 'Diagnostiquer un pilote IA bloqué' }
      },
      en: {
        slug: 'why-ai-projects-fail-despite-good-models', title: 'Why an AI project can fail despite a good model',
        description: 'Diagnose data, business ownership, integration and criteria before switching models.', category: 'Business & transformation',
        introduction: 'A pilot can produce impressive answers in a demonstration and remain unused a few weeks later. The team may conclude that it needs a stronger model, while the blockage comes from the workflow, accessible data, lack of ownership or the cost of review. NIST’s AI risk framework encourages teams to map context, measure real behaviour and manage limitations throughout the lifecycle. OECD SME research also points to practical barriers such as skills, maintenance time and integration. This diagnosis helps distinguish a model limitation from an implementation problem; it does not assume every project should be rescued.',
        sources: [oecdAdoption, nistCore, oecdWorkforce].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Does the pilot address a real problem?', sourceUrls: [oecdAdoption.url], paragraphs: [
            'Return to the original need and ask the person doing the work whether the result helps with a real step at the moment it is needed. A demo may answer an artificial question, use carefully prepared data or leave exceptions aside. If people do not use the result in their daily environment, the gap may come from integration or workflow rather than generation capability.',
            'Check that the problem is worth the effort too. An appealing tool is not a sufficient reason to maintain an interface and instructions. OECD finds varied levels of integration among SMEs using readily available solutions: trial and adoption within a process are different steps.'
          ] },
          { title: 'Does trial data resemble the actual work?', paragraphs: [
            'Compare the pilot sample with everyday inputs: format, language, missing attachments, scan quality, vocabulary and edge cases. Establish who can authorise this data and which fields must be masked. If examples cover only easy cases, a demonstration success rate does not explain production performance.',
            'Add difficult and disallowed cases to the evaluation. Record errors by type: source misread, context omitted, invalid format or action triggered incorrectly. A specific error class leads to a practical correction; “the model gets it wrong” does not.'
          ] },
          { title: 'Does someone own the workflow?', sourceUrls: [nistCore.url], paragraphs: [
            'The project needs someone who knows the acceptable result and can decide edge cases. This person does not necessarily need to code. They do need time and authority to change the process, train colleagues, report problems and suspend use. NIST stresses clear roles, communication and recurring risk management.',
            'Without this person, the pilot remains a prototype owned by its creator. If that person changes teams, nobody knows why certain instructions exist or when they stop applying. Documenting succession and a review date is part of the product, not an administrative formality.'
          ] },
          { title: 'Are integration and review costs visible?', paragraphs: [
            'List systems that provide data, receive outputs or carry user identity. A manual proof of concept can hide duplicate entry, broad access, approval delays, outages and recovery. Also measure human time spent checking, correcting and explaining the result. A fast answer does not save time if it creates a lengthy new control step.',
            'Integration does not always require a sophisticated API. A limited, checked export may be enough to evaluate a hypothesis. But do not confuse that manual trial with a durable operating architecture: the process needs an owner, an appropriate log and a fallback.'
          ] },
          { title: 'Hypothetical example: a stalled triage pilot', paragraphs: [
            'Hypothetical example: a tool classifies support requests into three categories, but agents ignore its suggestions. Diagnosis shows that category names do not match the tracking board, the shared inbox contains out-of-scope messages and no team owns ambiguous cases. Switching models before fixing those three issues would provide little information.',
            'The expected output is a prioritised list: rename categories with the team, exclude certain messages, define an escalation for uncertain cases, then test a newly labelled sample. If performance remains insufficient after that correction, the team will have more precise evidence of a technical limitation.'
          ] }
        ],
        takeaway: 'Before replacing a model, check fit with the work, data, accountable owner, integration and review workload.',
        service: { href: '/en/ai-automation/', label: 'Diagnose a stalled AI pilot' }
      }
    }
  },
  {
    id: 'ai-roi-measurement', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'mesurer-roi-projet-ia-sans-double-compte', title: 'Mesurer le ROI d’un projet IA sans compter deux fois les gains',
        description: 'Une baseline, le coût complet et la capacité réellement réaffectée donnent une mesure plus honnête.', category: 'Entreprise & transformation',
        introduction: 'Le retour sur investissement d’un projet IA devient trompeur si chaque minute théoriquement gagnée est comptée comme une économie, puis de nouveau comme une hausse de capacité. Il faut distinguer le temps libéré d’une dépense réellement évitée et du travail supplémentaire qui a effectivement pu être réalisé. Le National AI Centre australien recommande de définir le problème et les signes de progrès avant l’investissement, puis d’inclure coûts directs, indirects et coûts d’opportunité. L’OCDE décrit des bénéfices déclarés par des PME, mais ces réponses ne mesurent pas le gain causal de chaque projet. Le calcul ci-dessous est un exemple fictif conçu pour montrer les catégories, pas une prévision à reprendre.',
        sources: [auRoi, oecdWorkforce, nistPdf].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Écrire la baseline avant le changement', sourceUrls: [auRoi.url], paragraphs: [
            'Décrivez la période et le processus de référence : nombre de dossiers, temps de traitement, taux de reprise, qualité attendue et personnes concernées. Mesurez une période représentative, pas seulement une journée particulièrement chargée. Notez les changements de volume, de saison, d’équipe ou de politique qui pourraient expliquer un écart indépendamment de l’outil.',
            'Choisissez l’unité qui compte pour l’entreprise. Si le problème est le retard client, le délai jusqu’à une réponse complète peut être plus important que le temps d’écriture. Si le problème est la qualité, les corrections et erreurs critiques sont centrales. Définissez la règle de mesure à l’avance afin de ne pas déplacer le but après avoir vu les résultats.'
          ] },
          { title: 'Compter le coût total plutôt que la licence seule', paragraphs: [
            'Incluez l’abonnement ou l’infrastructure, la configuration, le nettoyage des données, la sécurité, l’intégration, la formation, le contrôle humain, les incidents, la maintenance et le temps du responsable métier. Ajoutez le coût d’opportunité : le travail que l’équipe ne peut pas faire pendant qu’elle met en place le projet. Certains coûts sont ponctuels, d’autres récurrents ; séparez-les pour comprendre la durée nécessaire à un éventuel retour.',
            'Le guide australien distingue coûts directs et indirects, y compris la gouvernance et la supervision. Les omettre produit un résultat optimiste, mais inutilisable pour budgéter l’année suivante. Un petit projet avec peu de frais techniques peut néanmoins consommer beaucoup de temps d’expertise.'
          ] },
          { title: 'Séparer temps théorique et valeur réalisée', sourceUrls: [nistPdf.url], paragraphs: [
            'Supposons qu’une tâche passe de dix à six minutes. Les quatre minutes ne deviennent pas automatiquement une économie de salaire. Elles peuvent réduire une file d’attente, permettre davantage de dossiers, améliorer un contrôle ou rester dispersées entre d’autres activités. Pour valoriser une capacité, identifiez le travail précis qu’elle a rendu possible et vérifiez que ce travail a effectivement eu lieu.',
            'Évitez de valoriser la même capacité dans deux postes. Si un temps libéré entraîne moins d’heures supplémentaires, comptez cette économie observable. Si la personne utilise ce temps pour traiter plus de demandes, estimez la valeur selon la marge ou le service effectivement produit, sans ajouter une seconde fois l’ensemble des minutes économisées.'
          ] },
          { title: 'Exemple fictif de calcul transparent', paragraphs: [
            'Exemple fictif : l’équipe traite 300 documents par mois. La baseline est de huit minutes de tri par document, soit 40 heures mensuelles. Après un essai assisté, le temps moyen mesuré est de six minutes, soit dix heures théoriquement libérées. Le coût mensuel total proposé est de 420 € : outil 120 €, soutien/maintenance 180 €, et vérification supplémentaire estimée à 120 €. L’équipe réaffecte réellement six heures à la résolution de dossiers en attente, valorisées en interne à 30 €/heure : 180 € de capacité mobilisée.',
            'Dans cet exemple, les quatre heures restantes ne sont ni une économie de trésorerie ni une capacité prouvée. La capacité mobilisée est valorisée à 180 € contre 420 € de coût : le solde de cette valorisation est négatif. Ce calcul de capacité n’est pas un ROI de trésorerie, puisque les six heures ne correspondent pas ici à une dépense évitée ou à une recette supplémentaire mesurée. Qualité ou délai pourraient aussi compter, mais doivent être mesurés séparément. Tous les chiffres sont inventés.'
          ] },
          { title: 'Ajouter qualité, incertitude et coût d’arrêt', paragraphs: [
            'Mesurez les effets non financiers dans leurs propres termes : taux de reprise, complétude, satisfaction des utilisateurs ou délai d’attente. Ne les convertissez pas en euros sans méthode défendable. Le NIST rappelle que les mesures d’un système doivent être documentées avec leurs limites et leur incertitude. Comparez des périodes comparables et gardez les exceptions dans le résultat.',
            'Enfin, décidez à quelle date vous arrêterez ou réévaluerez. Une hausse de volume, un changement de licence ou un nouveau contrôle peut modifier le calcul. Un bon tableau indique qui vérifie les données et quelles hypothèses devront être recalculées, au lieu d’afficher un pourcentage de ROI sans contexte.'
          ] }
        ],
        takeaway: 'Mesurez une baseline, comptez les coûts ponctuels et récurrents, puis valorisez seulement les économies ou capacités effectivement réalisées sans double compte.',
        service: { href: '/ia-automatisation/', label: 'Établir les mesures d’un projet IA' }
      },
      en: {
        slug: 'measure-ai-project-roi-without-double-counting', title: 'Measure AI project ROI without counting benefits twice',
        description: 'A baseline, full costs and capacity actually redeployed provide a more honest measure.', category: 'Business & transformation',
        introduction: 'An AI project’s return on investment becomes misleading if every theoretically saved minute is counted as a cost saving and then again as added capacity. Distinguish time freed, expenditure actually avoided and additional work that was genuinely completed. Australia’s National AI Centre recommends defining the problem and signs of progress before investing, then including direct, indirect and opportunity costs. OECD reports SME benefits as respondents describe them, but those answers do not measure the causal gain of each project. The calculation below is a hypothetical example showing categories, not a forecast to reuse.',
        sources: [auRoi, oecdWorkforce, nistPdf].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Write the baseline before making a change', sourceUrls: [auRoi.url], paragraphs: [
            'Describe the reference period and process: case volume, processing time, rework rate, expected quality and people involved. Measure a representative period rather than one unusually busy day. Note changes in volume, season, staffing or policy that could explain a difference independently of the tool.',
            'Choose the unit that matters to the business. If the problem is customer delay, time to a complete response may matter more than drafting time. If quality is the concern, corrections and critical errors are central. Define the measurement rule in advance so the target does not move after results appear.'
          ] },
          { title: 'Count total cost, not only the licence', paragraphs: [
            'Include subscription or infrastructure, configuration, data preparation, security, integration, training, human review, incidents, maintenance and the business owner’s time. Add opportunity cost: work the team cannot do while setting up the project. Some costs happen once and others recur; separate them to understand how long a potential return might take.',
            'Australia’s guide distinguishes direct and indirect costs, including governance and oversight. Leaving these out creates an optimistic result that cannot support next year’s budget. A small project with little technical expense may still use significant expert time.'
          ] },
          { title: 'Separate theoretical time from realised value', sourceUrls: [nistPdf.url], paragraphs: [
            'Suppose a task falls from ten to six minutes. Those four minutes do not automatically become salary savings. They may reduce a queue, allow more cases, improve a control or be dispersed across other activities. To value capacity, identify the specific work it enabled and confirm that the work actually happened.',
            'Do not value the same capacity in two categories. If freed time reduces overtime, count that observable saving. If someone uses it to handle more requests, estimate the value from the margin or service actually produced, without adding the full saved minutes a second time.'
          ] },
          { title: 'A hypothetical transparent calculation', paragraphs: [
            'Hypothetical example: a team processes 300 documents a month. The baseline is eight minutes of sorting per document, or 40 hours monthly. After an assisted trial, average time measured is six minutes, theoretically freeing ten hours. Proposed total monthly cost is €420: €120 for the tool, €180 for support and maintenance, and an estimated €120 for extra review. The team actually redeploys six hours to resolve a backlog, valued internally at €30 per hour: €180 in used capacity.',
            'In this example, the other four hours are neither cash savings nor proven capacity. Used capacity is valued at €180 against €420 in cost, so this capacity valuation has a negative balance. It is not a cash-flow ROI: the six hours do not represent an avoided expense or measured additional revenue here. Quality or delay could also matter, but they should be measured separately. All figures are invented.'
          ] },
          { title: 'Add quality, uncertainty and the cost of stopping', paragraphs: [
            'Measure non-financial effects in their own terms: rework rate, completeness, user satisfaction or waiting time. Do not convert them to euros without a defensible method. NIST says system measurements should be documented with limitations and uncertainty. Compare similar periods and keep exceptions visible in the result.',
            'Finally, decide when to stop or review. Higher volume, a licence change or a new control may alter the calculation. A useful worksheet names who checks the data and which assumptions must be recalculated instead of displaying an unqualified ROI percentage.'
          ] }
        ],
        takeaway: 'Measure a baseline, count one-time and recurring costs, and value only savings or capacity actually realised without double counting.',
        service: { href: '/en/ai-automation/', label: 'Set measures for an AI project' }
      }
    }
  },
  {
    id: 'useful-project-documents', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'documents-projet-qui-changent-une-decision', title: 'Réunions et documents : garder ceux qui changent une décision',
        description: 'Un journal de décision, un compte rendu et un tableau de suivi ont chacun un usage précis.', category: 'Entreprise & transformation',
        introduction: 'Un dossier de projet peut accumuler des comptes rendus, présentations et tableaux sans aider l’équipe à choisir sa prochaine action. À l’inverse, une conversation peut produire une décision importante que personne ne sait retrouver deux semaines plus tard. La solution n’est pas de documenter chaque échange, mais de choisir un artefact par question : qu’a-t-on décidé et pourquoi, qui fait quoi avant quand, et où en est le travail ? Les standards de pilotage de projet du gouvernement britannique parlent de responsabilités, de contrôle et de documentation proportionnés. Pour une petite équipe, trois supports légers et liés suffisent souvent : journal de décision, compte rendu ciblé et tableau de suivi. Les obligations propres au secteur restent à vérifier séparément.',
        sources: [ukStandard, ukGuide, nistCore].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Le journal de décision répond au pourquoi', sourceUrls: [ukGuide.url], paragraphs: [
            'Une ligne de décision indique la question, les options examinées, la personne autorisée, la décision, sa date, les raisons et les conditions de réouverture. Elle préserve le contexte lorsque les participants changent ou que la contrainte évolue. Un simple verdict comme « utiliser l’outil B » ne permet pas de savoir si ce choix dépendait d’un prix, d’un accès aux données ou d’une échéance aujourd’hui dépassée.',
            'N’enregistrez pas chaque micro-choix technique. Le journal concerne les décisions qui changent le périmètre, le budget, les responsabilités, la date ou le niveau de risque. Il ne remplace ni un contrat, ni une autorisation légale, ni la politique de conservation documentaire.'
          ] },
          { title: 'Le compte rendu transforme la réunion en suite', sourceUrls: [ukStandard.url], paragraphs: [
            'Un compte rendu utile répond à trois questions : qu’a-t-on compris, quelles décisions ont été prises et quelles actions ont maintenant un propriétaire ? Gardez l’objectif de la réunion, les personnes présentes si cela est utile, les points non tranchés et les actions avec responsable et échéance. Si aucune décision ni action ne ressort, demandez-vous si la réunion était nécessaire.',
            'Envoyez le compte rendu rapidement et corrigez les faits contestés. Une synthèse générée automatiquement peut aider à produire un brouillon, mais les personnes présentes restent responsables de valider les décisions, les engagements et les noms. Les échanges sensibles ne doivent pas être transcrits dans un outil sans autorisation adaptée.'
          ] },
          { title: 'Le tableau de suivi répond à quoi maintenant ?', paragraphs: [
            'Le tableau de suivi montre les prochaines actions, leur état, leur propriétaire et les obstacles. Chaque ligne doit être formulée avec un verbe et un résultat observable : « confirmer les champs du formulaire », pas « formulaire ». Limitez les statuts au vocabulaire que l’équipe utilise réellement ; plus de colonnes ne donnent pas forcément une meilleure vision.',
            'Reliez une action à la décision qui l’autorise, si ce lien aide à comprendre le travail. Si le tableau devient un second compte rendu qu’il faut remplir à la main, simplifiez-le. Le suivi sert à révéler blocages et dépendances, pas à mesurer l’activité de chaque personne pour elle-même.'
          ] },
          { title: 'Un rituel bref qui garde les trois supports cohérents', paragraphs: [
            'Commencez le point d’équipe par les échéances proches et les blocages, examinez ensuite les décisions à prendre, puis attribuez les actions. À la fin, une personne vérifie que les décisions importantes sont au journal et que le tableau reflète les engagements. Un rituel hebdomadaire de quinze minutes peut suffire à une équipe réduite ; le bon rythme dépend de la vitesse des changements.',
            'Ne transformez pas chaque discussion en réunion formelle. Un message écrit peut suffire lorsque la question est simple et que les participants peuvent confirmer. Réservez la réunion aux arbitrages qui profitent d’une conversation et aux dépendances qui exigent plusieurs rôles.'
          ] },
          { title: 'Exemple fictif de décision et de suivi', paragraphs: [
            'Exemple fictif : l’équipe doit décider si un formulaire de demande sera obligatoire ou facultatif. Le journal indique les deux options, le coût du traitement incomplet et la décision de tester le formulaire obligatoire pour un seul type de demande pendant un mois. Le compte rendu précise qui informe le support et qui prépare le formulaire. Le tableau suit la configuration, la collecte des retours et la date de revue.',
            'Le résultat attendu est qu’un collègue absent à la réunion puisse retrouver la décision, comprendre sa durée limitée et voir les prochaines actions. Si l’essai crée une file d’attente ou empêche un cas légitime, le propriétaire sait quand rouvrir la décision. Les détails sont inventés pour illustrer le format, pas un retour d’expérience réel.'
          ] }
        ],
        takeaway: 'Gardez un support pour les décisions et leurs raisons, un compte rendu pour les engagements de réunion et un tableau pour le travail à venir.',
        service: { href: '/pilotage-projet-complexe/', label: 'Structurer le pilotage d’un projet' }
      },
      en: {
        slug: 'project-documents-that-change-decisions', title: 'Meetings and documents: keep the ones that change a decision',
        description: 'A decision log, meeting note and tracking board each serve a distinct purpose.', category: 'Business & transformation',
        introduction: 'A project folder can accumulate minutes, presentations and spreadsheets without helping the team choose its next action. Conversely, a conversation may produce an important decision that nobody can find two weeks later. The answer is not to document every exchange, but to choose an artefact for each question: what did we decide and why, who will do what by when, and where does the work stand? UK government project delivery standards discuss proportionate responsibilities, control and documentation. For a small team, three lightweight linked records often suffice: a decision log, focused meeting notes and a tracking board. Sector-specific obligations still require separate review.',
        sources: [ukStandard, ukGuide, nistCore].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'A decision log answers why', sourceUrls: [ukGuide.url], paragraphs: [
            'A decision entry records the question, options considered, authorised owner, decision, date, reasons and conditions for reopening it. It preserves context when participants change or constraints shift. A verdict such as “use tool B” does not show whether the choice depended on price, data access or a deadline that has since passed.',
            'Do not record every minor technical choice. The log is for decisions that change scope, budget, responsibility, timing or risk. It does not replace a contract, legal authorisation or records-retention policy.'
          ] },
          { title: 'Meeting notes turn discussion into follow-up', sourceUrls: [ukStandard.url], paragraphs: [
            'Useful notes answer three questions: what did we learn, which decisions were made and which actions now have an owner? Keep the meeting purpose, attendees if relevant, unresolved issues and actions with an owner and due date. If nothing is decided or assigned, ask whether a meeting was needed.',
            'Send notes promptly and correct disputed facts. An AI-generated summary can help create a draft, but participants remain responsible for validating decisions, commitments and names. Do not transcribe sensitive conversations into a tool without appropriate authorisation.'
          ] },
          { title: 'A tracking board answers what happens now', paragraphs: [
            'A tracking board shows next actions, status, owner and obstacles. Each item should use a verb and observable result: “confirm form fields”, not “form”. Limit statuses to vocabulary the team actually uses; more columns do not necessarily provide more visibility.',
            'Link an action to the decision that authorises it when that helps explain the work. If the board becomes a second set of minutes that people must fill manually, simplify it. Tracking should expose blockers and dependencies, not measure activity for its own sake.'
          ] },
          { title: 'A short ritual keeps the three records aligned', paragraphs: [
            'Start a team check-in with upcoming deadlines and blockers, then review decisions needed and assign actions. At the end, one person checks that important decisions are in the log and the board reflects commitments. A weekly fifteen-minute ritual may suit a small team; the right cadence depends on how quickly things change.',
            'Do not turn every conversation into a formal meeting. A written message may be enough for a simple question that participants can confirm. Save meetings for trade-offs that benefit from discussion and dependencies requiring several roles.'
          ] },
          { title: 'A hypothetical decision and follow-up', paragraphs: [
            'Hypothetical example: the team must decide whether a request form will be mandatory. The log lists both options, the cost of incomplete processing and a decision to test a required form for one request type for a month. The notes assign someone to tell support and someone else to prepare the form. The board tracks configuration, feedback and the review date.',
            'The expected result is that a colleague who missed the meeting can find the decision, understand its limited duration and see next actions. If the trial creates a queue or blocks a legitimate case, the owner knows when to reopen the decision. These details are invented to illustrate the format, not describe a real project.'
          ] }
        ],
        takeaway: 'Keep one record for decisions and reasons, one for meeting commitments and one for upcoming work.',
        service: { href: '/en/project-leadership/', label: 'Structure project governance' }
      }
    }
  },
  {
    id: 'ten-office-automations', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'dix-automatisations-bureau-points-controle', title: 'Dix tâches de bureau à automatiser, avec leurs points de contrôle',
        description: 'Dix idées simples avec leur validation, leur seuil d’escalade et les cas à garder hors automatisation.', category: 'Entreprise & transformation',
        introduction: 'Les tâches de bureau répétitives sont souvent de bons endroits pour examiner une automatisation, mais la répétition ne rend pas une opération sans risque. Une facture mal classée, un rendez-vous mal annoncé ou une réponse client envoyée trop tôt peut coûter du temps ou de la confiance. L’OCDE observe que les PME utilisent souvent l’IA pour des activités de soutien, tandis que Microsoft documente des flux qui peuvent attendre une approbation humaine. Voici dix pistes à évaluer dans votre propre environnement, pas dix promesses de gains. Pour chacune, gardez un propriétaire, un résultat vérifiable et un moyen de reprendre le travail à la main. Les exclusions proposées sont des garde-fous de départ, à adapter au secteur et aux obligations applicables.',
        sources: [msApprovals, msHumanReview, ncsc].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Réduire les transferts et recopies', sourceUrls: [msApprovals.url], paragraphs: [
            '1. Accusé de réception : déclencher une confirmation après réception d’un formulaire complet. Contrôle : ne confirmer que l’arrivée, pas l’acceptation de la demande. Exclure les cas urgents qui exigent une lecture immédiate.',
            '2. Création de tâches : transformer un formulaire interne en tâche attribuée avec échéance. Contrôle : vérifier que les champs obligatoires et le propriétaire existent. Escalader si l’identifiant de dossier ne correspond à aucun élément connu.',
            '3. Rappel de réunion : créer un rappel depuis un calendrier partagé. Contrôle : montrer le fuseau horaire et les participants avant d’envoyer. Exclure les invitations externes créées à partir d’un texte ambigu.'
          ] },
          { title: 'Préparer des documents sans engager l’entreprise', paragraphs: [
            '4. Brouillon de réponse fréquente : proposer une réponse à partir d’une base de procédures validée. Contrôle : un membre du support relit le texte et le lien cité. Escalader si la demande contient une plainte, un litige ou une exception.',
            '5. Résumé de réunion : transformer des notes autorisées en décisions et actions candidates. Contrôle : les participants vérifient noms, engagements et dates. Ne pas enregistrer ou traiter une conversation confidentielle sans autorisation.',
            '6. Préparation de compte rendu : placer les éléments validés dans un modèle récurrent. Contrôle : comparer la version finale au document source. Le flux ne doit pas inventer des décisions absentes des notes.'
          ] },
          { title: 'Trier et surveiller des éléments', paragraphs: [
            '7. Classement de demandes : suggérer une file ou une catégorie pour un message entrant. Contrôle : garder une file « à vérifier » et mesurer les erreurs de routage. Escalader lorsqu’aucune catégorie ne convient.',
            '8. Repérage de champs manquants : comparer un formulaire à une liste requise. Contrôle : signaler les champs à l’utilisateur sans déduire une donnée absente. Exclure les décisions d’éligibilité ou de refus.',
            '9. Suivi d’échéances : avertir le propriétaire avant une date due. Contrôle : afficher la source et la date utilisée. Prévoir un canal humain lorsque le calendrier ou la propriété est incertain.'
          ] },
          { title: 'Automatiser une étape d’approbation avec prudence', sourceUrls: [msApprovals.url, msHumanReview.url], paragraphs: [
            '10. Circuit d’approbation : envoyer une demande complète à la personne autorisée, puis enregistrer sa réponse. Microsoft décrit plusieurs modes d’approbation dans Power Automate ; le choix du produit ne supprime pas la nécessité de définir qui peut valider et selon quelle règle. Pour une étape générative, une revue humaine peut suivre le prompt avant toute action.',
            'Commencez avec un seul circuit à faible impact et un nombre limité de cas. Testez le rejet, l’absence de réponse, les doublons et l’indisponibilité du valideur. Une demande sensible ou une transaction irréversible ne doit pas être approuvée simplement parce que son texte semble conforme.'
          ] },
          { title: 'Faire une fiche de contrôle avant mise en service', paragraphs: [
            'Pour chaque piste retenue, notez le déclencheur, les données lues, l’action effectuée, la personne responsable, l’erreur possible et le chemin de reprise. Restreignez les accès aux seules données nécessaires. Le guide cyber pour petites entreprises souligne notamment les risques de fuite et de sortie manipulée ; les protections doivent couvrir les comptes et les connecteurs, pas seulement les instructions du modèle.',
            'Exemple fictif : une équipe automatise le rappel de factures en retard, mais ne change ni le montant ni le statut comptable. Le flux produit une liste à vérifier ; un employé approuve l’envoi. Si un litige est noté ou si le solde ne concorde pas, la demande part au responsable. Ce découpage rend l’essai révocable et évite de déléguer le jugement commercial.'
          ] }
        ],
        takeaway: 'Choisissez une seule tâche, écrivez son contrôle et son seuil d’escalade, puis éprouvez les cas d’échec avant tout déploiement.',
        service: { href: '/ia-automatisation/', label: 'Repérer des automatisations adaptées' }
      },
      en: {
        slug: 'ten-office-automations-with-checkpoints', title: 'Ten office tasks to automate, with checkpoints',
        description: 'Ten ideas with a review step, escalation threshold and cases to keep out of automation.', category: 'Business & transformation',
        introduction: 'Repetitive office work is often a useful place to explore automation, but repetition does not make an operation risk-free. A misclassified invoice, incorrect appointment notice or premature customer reply can cost time or trust. OECD finds that SMEs often use AI for support activities, while Microsoft documents flows that can wait for human approval. Here are ten ideas to assess in your own environment, not ten promises of savings. For each one, keep an owner, a verifiable result and a way to resume manually. The suggested exclusions are starting safeguards to adapt to your sector and applicable obligations.',
        sources: [msApprovals, msHumanReview, ncsc].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Reduce transfers and re-entry', sourceUrls: [msApprovals.url], paragraphs: [
            '1. Receipt acknowledgement: send confirmation when a complete form arrives. Checkpoint: confirm receipt, not acceptance. Exclude urgent cases that need immediate reading.',
            '2. Task creation: turn an internal form into an assigned task with a due date. Checkpoint: verify required fields and owner. Escalate if the case identifier matches no known record.',
            '3. Meeting reminder: create a reminder from a shared calendar. Checkpoint: show the time zone and attendees before sending. Exclude external invitations generated from ambiguous text.'
          ] },
          { title: 'Prepare documents without committing the business', paragraphs: [
            '4. Frequent reply draft: suggest an answer from an approved procedure library. Checkpoint: support staff review text and citations. Escalate complaints, disputes and exceptions.',
            '5. Meeting summary: turn authorised notes into candidate decisions and actions. Checkpoint: attendees verify names, commitments and dates. Do not record or process a confidential conversation without permission.',
            '6. Report preparation: place verified material into a recurring template. Checkpoint: compare the final version with its source. The flow must not invent decisions missing from the notes.'
          ] },
          { title: 'Sort and monitor items', paragraphs: [
            '7. Request triage: suggest a queue or category for an incoming message. Checkpoint: retain a “review” queue and measure routing errors. Escalate when no category fits.',
            '8. Missing-field detection: compare a form with a required list. Checkpoint: tell users what is missing without guessing absent data. Exclude eligibility or rejection decisions.',
            '9. Deadline tracking: alert the owner before a due date. Checkpoint: display the source and date used. Provide a human route when the calendar or ownership is uncertain.'
          ] },
          { title: 'Automate an approval step carefully', sourceUrls: [msApprovals.url, msHumanReview.url], paragraphs: [
            '10. Approval routing: send a complete request to an authorised person, then record their response. Microsoft documents several approval modes in Power Automate; choosing a product does not remove the need to define who may approve and by what rule. For a generative step, human review can follow the prompt before any action.',
            'Start with one low-impact route and a limited set of cases. Test rejection, no response, duplicates and an unavailable approver. A sensitive request or irreversible transaction should not be approved simply because its text looks compliant.'
          ] },
          { title: 'Create a control brief before launch', paragraphs: [
            'For every selected idea, record the trigger, data read, action taken, accountable owner, possible error and recovery path. Limit access to necessary data. The small-business cyber guide highlights leakage and manipulated output risks; protections should cover accounts and connectors, not only model instructions.',
            'Hypothetical example: a team automates reminders for overdue invoices but changes neither amount nor accounting status. The flow produces a review list; an employee approves sending. If a dispute is recorded or the balance does not match, it goes to an owner. This separation makes the trial reversible and avoids delegating commercial judgement.'
          ] }
        ],
        takeaway: 'Choose one task, write its checkpoint and escalation threshold, then test failure cases before deployment.',
        service: { href: '/en/ai-automation/', label: 'Find suitable automation candidates' }
      }
    }
  },
  {
    id: 'practical-ai-training', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'former-equipe-ia-exercices-pratiques', title: 'Former une équipe à l’IA avec des exercices de travail réels',
        description: 'Une séance pratique relie un outil autorisé à une tâche, une vérification et un apprentissage observable.', category: 'Entreprise & transformation',
        introduction: 'Une formation à l’IA peut être inspirante et ne rien changer aux pratiques du lendemain si elle reste une démonstration de fonctions ou une collection de prompts. Pour transférer un apprentissage, partez d’une tâche que les participants connaissent, fixez les limites de données et demandez-leur de vérifier une sortie. L’OCDE relève que les compétences liées à l’IA ne se limitent pas au code et que les PME combinent différentes manières d’apprendre. Le cadre du NIST rappelle que la compétence des personnes et les responsabilités doivent être prises en compte dans la gestion des risques. La séance ci-dessous est une proposition de 90 minutes avec un document fictif et non confidentiel. Elle enseigne un geste de vérification ; elle n’accorde pas automatiquement l’autorisation d’utiliser tout outil avec toutes les données.',
        sources: [oecdSkills, oecdWorkforce, nistCore].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Fixer un objectif que l’on peut observer', sourceUrls: [oecdSkills.url], paragraphs: [
            'Choisissez une tâche à faible impact et un comportement attendu : produire un brouillon à partir d’une source autorisée, repérer les informations manquantes, ou comparer une réponse avec une politique. Évitez les objectifs vagues comme « devenir expert en IA ». À la fin, chaque personne doit pouvoir montrer ce qu’elle sait faire, quand elle s’arrête et à qui elle demande de l’aide.',
            'Avant la séance, expliquez les outils permis, les données interdites, les attentes de confidentialité et la marche à suivre lorsqu’une sortie paraît incertaine. Une formation ne peut pas remplacer les règles de sécurité, la configuration des accès ou le jugement métier.'
          ] },
          { title: 'Exercice fictif : préparer une réponse documentée', paragraphs: [
            'Distribuez un document fictif de deux pages sur les modalités d’une réservation, avec une date, une limite de remboursement et une exception explicitement décrites. Les participants demandent à l’outil de préparer une réponse à un client fictif. Ils doivent citer la phrase qui soutient chaque affirmation, marquer les informations absentes et ne pas inventer une exception. Aucun vrai nom, prix ou dossier d’entreprise n’est utilisé.',
            'Le résultat attendu est un brouillon court, accompagné de ses sources et d’une liste de points à vérifier. L’exercice est réussi si la personne distingue ce que dit le document, ce qu’elle en déduit et ce qu’elle ne peut pas promettre. La qualité du prompt compte moins que la discipline de contrôle.'
          ] },
          { title: 'Organiser une séance en cinq temps', paragraphs: [
            'Proposition de déroulé : dix minutes pour présenter la tâche et les limites ; quinze minutes pour que chaque personne réalise le travail sans IA ; vingt minutes pour une tentative avec outil ; vingt minutes pour vérifier en binôme les preuves et les omissions ; puis vingt-cinq minutes de retour collectif sur erreurs, usages utiles et questions ouvertes. Ce temps réparti est une suggestion, pas une durée validée scientifiquement.',
            'Faire d’abord un essai sans l’outil donne un point de comparaison sur la méthode et met en évidence les connaissances métier. Le travail en binôme aide à identifier les divergences d’interprétation, mais ne constitue pas une approbation automatique. Un responsable reste désigné pour répondre aux questions de politique ou d’escalade.'
          ] },
          { title: 'Mesurer le transfert une semaine plus tard', sourceUrls: [oecdWorkforce.url, nistCore.url], paragraphs: [
            'Évaluez une tâche similaire mais jamais vue pendant la formation. Observez si le participant choisit une entrée autorisée, identifie les affirmations à sourcer, corrige une erreur plausible et refuse de conclure lorsque l’information manque. Demandez-lui également d’expliquer la limite à un collègue. Ce contrôle mesure des gestes précis ; il ne prétend pas établir une compétence générale en IA.',
            'Une semaine après, demandez si la méthode a été utilisée, quelle étape est restée difficile et si une procédure doit être clarifiée. Le retour sert à ajuster le support ou la règle. Si personne ne peut consacrer du temps à cette revue, une formation ponctuelle ne garantit pas que le comportement reste appliqué.'
          ] },
          { title: 'Adapter la séance aux rôles et aux risques', paragraphs: [
            'Les personnes qui rédigent, vérifient, gèrent les données et autorisent les actions n’ont pas exactement le même exercice. Un vendeur peut apprendre à vérifier un brouillon d’email ; un comptable peut pratiquer la détection d’un champ manquant sans déléguer une écriture comptable ; un responsable doit savoir interrompre un flux et faire remonter un incident. La matière doit correspondre à la décision que le rôle peut réellement prendre.',
            'L’OCDE souligne l’importance des compétences d’analyse, d’interprétation et de formation continue ; le NIST traite la responsabilité et les compétences comme des éléments de gouvernance. Pour une équipe, le plus utile est souvent une série de petits exercices liés aux tâches, avec un propriétaire et une mise à jour lorsque les outils ou procédures changent.'
          ] }
        ],
        takeaway: 'Entraînez une tâche réelle avec des données fictives ou autorisées, exigez la vérification de la source et observez le transfert une semaine après.',
        service: { href: '/ia-automatisation/', label: 'Préparer une formation IA adaptée au travail' }
      },
      en: {
        slug: 'practical-ai-training-with-work-exercises', title: 'Train a team in AI with practical work exercises',
        description: 'A hands-on session connects an approved tool to a task, a review step and observable learning.', category: 'Business & transformation',
        introduction: 'An AI training session can be inspiring yet change nothing the next day if it remains a feature demonstration or a collection of prompts. To transfer learning, start with a task participants know, set data boundaries and ask them to verify an output. OECD finds that AI-related skills extend beyond coding and that SMEs combine different ways to learn. NIST guidance says people’s competencies and responsibilities belong in risk management. The session below is a proposed 90-minute exercise using a fictional, non-confidential document. It teaches a verification habit; it does not automatically authorise every tool or data type.',
        sources: [oecdSkills, oecdWorkforce, nistCore].map(s => ({ ...s, accessedAt: '2026-10-29' })),
        sections: [
          { title: 'Set an observable learning goal', sourceUrls: [oecdSkills.url], paragraphs: [
            'Choose a low-impact task and expected behaviour: draft from an authorised source, spot missing information or compare an answer with a policy. Avoid vague goals such as “become an AI expert”. By the end, each person should be able to demonstrate what they can do, when to stop and whom to ask for help.',
            'Before the session, explain permitted tools, prohibited data, confidentiality expectations and what to do when an output is uncertain. Training cannot replace security rules, access configuration or business judgement.'
          ] },
          { title: 'Hypothetical exercise: prepare a sourced reply', paragraphs: [
            'Give participants a fictional two-page document about booking terms, with a date, refund limit and clearly described exception. Ask them to use a tool to draft a reply to a fictional customer. They must cite the sentence supporting each claim, mark missing information and avoid inventing an exception. Use no real names, prices or company cases.',
            'The expected result is a short draft with its sources and a list of items to verify. The exercise succeeds if a person can separate what the document says, what they infer and what they cannot promise. Prompt quality matters less than the review discipline.'
          ] },
          { title: 'Structure the session in five parts', paragraphs: [
            'Suggested agenda: ten minutes to introduce task and limits; fifteen minutes for each person to do it without AI; twenty minutes for a tool-assisted attempt; twenty minutes for pairs to check evidence and omissions; then twenty-five minutes to discuss errors, useful cases and open questions. This timing is a proposal, not a scientifically validated duration.',
            'Starting without the tool provides a comparison and surfaces domain knowledge. Pair review helps identify differences in interpretation, but it is not automatic approval. Assign an owner to answer policy or escalation questions.'
          ] },
          { title: 'Check transfer one week later', sourceUrls: [oecdWorkforce.url, nistCore.url], paragraphs: [
            'Assess a similar task that participants have not seen before. Observe whether they choose an authorised input, identify claims needing sources, correct a plausible error and avoid concluding when information is missing. Ask them to explain a limitation to a colleague. This checks specific behaviours; it does not claim to establish general AI expertise.',
            'A week later, ask whether the method was used, which step remained difficult and whether a procedure needs clarification. Use the feedback to update the guide or rule. If nobody can spend time on this review, a one-off session cannot guarantee the behaviour will continue.'
          ] },
          { title: 'Adapt the exercise to roles and risks', paragraphs: [
            'People who draft, review, manage data and authorise actions need different exercises. A salesperson may practise checking an email draft; an accountant may practise spotting a missing field without delegating a ledger entry; a manager should know how to stop a flow and report an incident. Content should match the decision each role can actually make.',
            'OECD highlights analytical, interpretive and continuing-learning skills; NIST treats responsibility and competence as governance concerns. For a team, a series of small task-based exercises with an owner is often more useful than a large generic presentation, especially when tools and procedures change.'
          ] }
        ],
        takeaway: 'Practise a real task with fictional or authorised data, require source checking and observe transfer a week later.',
        service: { href: '/en/ai-automation/', label: 'Plan practical AI training for work' }
      }
    }
  }
];
