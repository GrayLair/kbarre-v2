import type { JournalEntry } from '../journal-types';

// The articles below use current research as a starting point, then focus on
// decisions a small product or engineering team can make and verify.
export const newsEntries: JournalEntry[] = [
  {
    id: 'automated-research', preparedAt: '2026-10-29', status: 'review',
    copy: {
      fr: {
        sources: [
      { title: 'AutoResearchBench: Benchmarking AI Agents on Complex Scientific Literature Discovery', url: 'https://arxiv.org/abs/2604.25256', publisher: 'arXiv', accessedAt: '2026-10-29' },
      { title: 'Recursive self-improvement of AI research agents', url: 'https://arxiv.org/abs/2609.26457', publisher: 'arXiv', accessedAt: '2026-10-29' },
        ],
        inspiration: [{ title: 'Opus 5.5: How Close Are We to Automated AI Research?', url: 'https://www.youtube.com/watch?v=R9momwXV9w4', publishedAt: '2026-09-24' }],
        slug: 'recherche-automatisee-ce-que-les-tests-prouvent', title: 'Recherche automatisée : ce que les tests prouvent vraiment',
        description: 'Les agents peuvent accélérer certaines étapes de recherche. Voici comment distinguer une démonstration d’un résultat scientifique vérifié.',
        category: 'Veille & enjeux',
        introduction: 'L’idée d’une IA qui mène seule des recherches promet un gain de temps considérable. Mais « faire de la recherche » recouvre des tâches différentes : trouver des sources, proposer une hypothèse, écrire du code, lancer une expérience et établir que le résultat est juste. Un agent peut bien réussir une étape sans avoir validé l’ensemble de la démarche.',
        sections: [
          { title: 'Décomposer le travail scientifique', paragraphs: [
            'Un processus de recherche contient des étapes observables et des jugements difficiles à automatiser. Un agent peut rechercher des articles, résumer un corpus ou produire un script. Il faut ensuite vérifier que les sources sont pertinentes, que l’expérience mesure bien l’hypothèse et que les résultats sont reproductibles. La production d’un texte au ton scientifique ne constitue pas cette vérification.',
            'AutoResearchBench, un préprint diffusé en 2026 mesure la découverte de littérature scientifique complexe. Sur cette évaluation, les meilleurs systèmes rapportent 9,39 % d’exactitude sur la tâche Deep Research, qui consiste à retrouver un article cible, et 9,31 % d’IoU sur Wide Research, qui mesure la collecte complète d’un ensemble d’articles. Cela illustre un écart entre la fluidité d’une réponse et la capacité à couvrir précisément un domaine. Le chiffre décrit ce benchmark, ses tâches et ses modèles testés ; il ne mesure pas toute la recherche scientifique.',
          ], sourceUrls: ['https://arxiv.org/abs/2604.25256'] },
          { title: 'Séparer vitesse et validité', paragraphs: [
            'Une automatisation peut faire gagner du temps sur le tri, les premières pistes ou la préparation d’un test. Le résultat n’est utile que si l’équipe peut retracer les données, les choix et les transformations qui y ont mené. Une citation inventée, une source périphérique ou une expérience non contrôlée peut donner une réponse convaincante mais fragile.',
            'Pour un prototype, on peut demander à l’agent de formuler une hypothèse, de proposer une expérience discriminante et d’indiquer ce qui pourrait invalider son idée. La personne responsable choisit ensuite les critères, vérifie les sources originales et inspecte les résultats. L’agent élargit l’espace des pistes ; il ne décide pas de leur valeur probante.',
          ] },
          { title: 'Mesurer le gain de recherche', paragraphs: [
            'Le bon indicateur n’est pas le nombre de pages produites. Mesurez le temps jusqu’à une décision vérifiable, le taux de références correctes, les expériences qui répondent à la question et le nombre de corrections humaines nécessaires. Comparez avec votre méthode habituelle sur quelques sujets semblables. Conservez les cas d’échec au lieu de ne montrer que la meilleure sortie.',
            'Les résultats d’un agent peuvent dépendre du modèle, des outils, du corpus et de la formulation de la tâche. Une mise à jour peut modifier la qualité. Gardez un jeu d’essais interne composé de questions réelles, de critères explicites et d’exemples où l’équipe connaît déjà la réponse ou la méthode de vérification.',
          ], checklist: ['Quelle décision ou hypothèse doit être éclairée ?', 'Quelles sources originales soutiennent chaque conclusion ?', 'Quel test indépendant pourrait réfuter le résultat ?', 'Qui valide les données et assume la conclusion ?'] },
          { title: 'Commencer dans un périmètre limité', paragraphs: [
            'Choisissez une tâche fréquente, réversible et à faible risque : comparer des options techniques, repérer des changements documentaires ou préparer une première synthèse. Définissez les sources acceptables, le format des preuves et le seuil qui impose une revue experte. N’autorisez pas l’agent à transformer seul une piste en décision engageant l’entreprise.',
            'Si les contrôles montrent un gain stable, étendez progressivement le périmètre. Si la qualité varie, la bonne action peut être de réduire les sources, préciser le protocole ou garder une étape humaine. Une recherche assistée réussie est un processus traçable qui améliore le jugement de l’équipe, pas une promesse d’autonomie générale.',
            'Il est également utile de distinguer la recherche exploratoire de la recherche qui soutient une décision. Au début, l’agent peut fournir plusieurs pistes concurrentes et expliciter les désaccords entre sources. À mesure que l’équipe s’approche d’une conclusion, le protocole doit devenir plus strict : source primaire, date, méthode et incertitude visible. Cette progression évite de traiter la première réponse comme une synthèse déjà stabilisée.',
            'Dans votre compte rendu, indiquez la question posée, les documents effectivement lus, les éléments écartés et les étapes de validation. Une autre personne doit pouvoir retrouver les principales preuves sans recommencer une exploration opaque. Ce format transforme l’assistance en une méthode transmissible et aide à repérer les changements de source ou de contexte qui invalideraient une conclusion.',
          ] },
        ],
        takeaway: 'Pour votre prochain essai, mesurez le délai jusqu’à une conclusion vérifiable et contrôlez les sources originales. Une sortie bien rédigée est un point de départ, pas une preuve.',
        service: { href: '/ia-automatisation/', label: 'Découvrir l’automatisation IA' },
      },
      en: {
        sources: [
      { title: 'AutoResearchBench: Benchmarking AI Agents on Complex Scientific Literature Discovery', url: 'https://arxiv.org/abs/2604.25256', publisher: 'arXiv', accessedAt: '2026-10-29' },
      { title: 'Recursive self-improvement of AI research agents', url: 'https://arxiv.org/abs/2609.26457', publisher: 'arXiv', accessedAt: '2026-10-29' },
        ],
        inspiration: [{ title: 'Opus 5.5: How Close Are We to Automated AI Research?', url: 'https://www.youtube.com/watch?v=R9momwXV9w4', publishedAt: '2026-09-24' }],
        slug: 'automated-research-what-tests-establish', title: 'Automated research: what do the tests actually establish?',
        description: 'AI agents can speed up parts of research. Learn to distinguish a convincing demonstration from a verified scientific result.',
        category: 'News & implications',
        introduction: 'The idea of AI conducting research on its own promises a major time saving. But research includes different tasks: finding sources, proposing a hypothesis, writing code, running an experiment and establishing that the result is correct. An agent can perform one step well without validating the whole process.',
        sections: [
          { title: 'Break research into its steps', paragraphs: [
            'Research combines observable steps with judgments that are harder to automate. An agent can search papers, summarise a collection or produce a script. Someone still needs to check that the sources are relevant, the experiment tests the hypothesis and the results can be reproduced. Scientific-sounding prose does not provide that verification.',
            'AutoResearchBench, a 2026 preprint benchmark measures scientific-literature discovery. The strongest systems score 9.39% accuracy on Deep Research, which requires finding a target paper, and 9.31% IoU on Wide Research, which measures comprehensive collection of a qualifying paper set. This illustrates the gap between a fluent answer and precise coverage of a field. The number describes this benchmark, its tasks and tested models; it does not measure all scientific research.',
          ], sourceUrls: ['https://arxiv.org/abs/2604.25256'] },
          { title: 'Separate speed from validity', paragraphs: [
            'Automation may save time on triage, early leads or test preparation. The result is useful only if a team can trace the data, choices and transformations behind it. A fabricated citation, peripheral source or uncontrolled experiment can produce a convincing but fragile answer.',
            'For a prototype, ask an agent to state a hypothesis, propose a discriminating experiment and identify what could falsify its idea. The responsible person then chooses the criteria, checks original sources and inspects the results. The agent expands the set of leads; it does not decide their evidential value.',
          ] },
          { title: 'Measure the research benefit', paragraphs: [
            'The right metric is not the number of pages produced. Measure time to a verifiable decision, correct-reference rate, experiments that answer the question and the number of human corrections needed. Compare the process with your usual method on several similar tasks. Keep failures in the record instead of showing only the best output.',
            'Agent results depend on the model, tools, corpus and task wording. An update may change quality. Maintain an internal test set with real questions, explicit criteria and examples where the team already knows the answer or verification method.',
          ], checklist: ['Which decision or hypothesis needs evidence?', 'Which original sources support each conclusion?', 'What independent test could disprove the result?', 'Who validates the data and owns the conclusion?'] },
          { title: 'Start within a bounded scope', paragraphs: [
            'Choose a frequent, reversible, low-risk task: compare technical options, identify document changes or prepare an initial synthesis. Define acceptable sources, the evidence format and when expert review is required. Do not let the agent turn a lead into a consequential business decision on its own.',
            'If checks show a consistent benefit, expand gradually. If quality varies, the right response may be to narrow the sources, clarify the protocol or keep a human step. Successful AI-assisted research is a traceable process that improves team judgment, not a promise of general autonomy.',
            'It also helps to separate exploratory research from research that supports a decision. Early on, an agent can provide competing leads and explain disagreements between sources. As the team approaches a conclusion, the protocol should become stricter: primary source, date, method and visible uncertainty. This progression prevents the first answer from being mistaken for a settled synthesis.',
          ] },
        ],
        takeaway: 'In your next trial, measure time to a verifiable conclusion and check the original sources. A polished output is a starting point, not proof.',
        service: { href: '/en/ai-automation/', label: 'Explore AI automation' },
      },
    },
  },
  {
    id: 'recursive-improvement', preparedAt: '2026-10-29', status: 'review',
    copy: {
      fr: {
        sources: [
      { title: 'Recursive self-improvement of AI research agents', url: 'https://arxiv.org/abs/2609.26457', publisher: 'arXiv', accessedAt: '2026-10-29' },
      { title: 'AutoResearchBench: Benchmarking AI Agents on Complex Scientific Literature Discovery', url: 'https://arxiv.org/abs/2604.25256', publisher: 'arXiv', accessedAt: '2026-10-29' },
        ],
        inspiration: [{ title: 'Opus 5.5: How Close Are We to Automated AI Research?', url: 'https://www.youtube.com/watch?v=R9momwXV9w4', publishedAt: '2026-09-24' }],
        slug: 'amelioration-recursive-ia-mesurer-les-progres', title: 'Amélioration récursive de l’IA : mesurer les progrès sans confondre les boucles',
        description: 'Une IA peut optimiser son pipeline sans devenir plus capable en général. Distinguez automatisation, gain mesuré et amélioration validée.', category: 'Veille & enjeux',
        introduction: 'L’expression « amélioration récursive » évoque une intelligence qui se perfectionnerait elle-même sans limite. Dans les systèmes réels, elle peut désigner une boucle plus modeste : un modèle propose du code, un autre le teste, puis une métrique sélectionne une variante. Le point crucial est de savoir ce qui s’améliore exactement et sur quelles tâches.',
        sections: [
          { title: 'Nommer la boucle observée', paragraphs: [
            'Une boucle d’optimisation peut améliorer le temps d’exécution, le coût d’inférence, la qualité d’un prompt ou le taux de réussite sur un jeu de tests. Ce sont des objectifs différents. Une meilleure performance sur le test utilisé pour sélectionner les variantes ne prouve pas que le système a acquis une capacité générale nouvelle.',
            'Un préprint de recherche de septembre 2026 étudie des agents de recherche qui modifient leurs méthodes afin d’améliorer leur efficacité. Le résultat est intéressant parce qu’il mesure une boucle expérimentale précise et affirme un transfert à des tâches non rencontrées pendant l’optimisation. Il reste à lire comme une preuve dans le cadre, les données et les métriques de cette étude, pas comme la démonstration d’une auto-amélioration illimitée.',
          ], sourceUrls: ['https://arxiv.org/abs/2609.26457'] },
          { title: 'Éviter la fuite du jeu de test', paragraphs: [
            'Si un agent voit les questions d’évaluation ou reçoit des retours répétés sur elles, la mesure finit par récompenser l’adaptation au test. Gardez un jeu de validation séparé et une sélection finale tenue à l’écart. Une équipe peut également réserver quelques tâches inédites, conçues après le cycle d’optimisation.',
            'Comparez la version améliorée à une référence fixe sur des tâches identiques, avec les mêmes outils, budgets et règles. Répétez les essais lorsque les sorties sont variables. Notez les erreurs, les coûts et le temps humain ; un score supérieur qui exige beaucoup plus de calcul peut ne pas améliorer le résultat opérationnel.',
          ] },
          { title: 'Mesurer les effets de bout en bout', paragraphs: [
            'Une petite amélioration locale peut créer une régression ailleurs : un agent plus rapide peut fournir des sources moins fiables, ou un prompt plus strict réduire les faux positifs tout en manquant des cas utiles. Mesurez la qualité sur le flux entier, y compris les contrôles et reprises humaines. Le critère doit correspondre au travail réel.',
            'La chaîne possède aussi des dépendances : modèle, outils, données, testeur et critères de sélection. Si elle choisit automatiquement son propre objectif et juge seule sa réussite, une métrique proxy peut dériver sans que le processus le révèle. Conservez un point de contrôle indépendant avant toute généralisation.',
          ], checklist: ['Quelle propriété change réellement ?', 'Les tâches de validation sont-elles séparées ?', 'Quels coûts et régressions sont mesurés ?', 'Une personne indépendante peut-elle reproduire le gain ?'] },
          { title: 'Organiser une expérimentation utile', paragraphs: [
            'Pour une PME, l’intérêt immédiat est souvent l’optimisation contrôlée d’une tâche étroite, non une boucle sans supervision. Définissez une mesure métier, un plafond de coût et une condition d’arrêt. Versionnez le système, les données et les prompts pour pouvoir comparer proprement les itérations.',
            'Accordez à la boucle un accès limité : un dépôt de test, des données synthétiques ou un environnement sans effets sur la production. Faites vérifier toute modification qui affecte l’accès, la sécurité ou la qualité. Le progrès devient crédible quand il est reproductible, utile sur des cas nouveaux et associé à ses limites.',
            'Une boucle peut aussi optimiser le mauvais objectif avec une grande régularité. Si le système est récompensé pour terminer vite, il peut omettre les vérifications coûteuses ; s’il maximise un score de conformité, il peut apprendre à contourner les exemples connus. Révisez les objectifs avec les personnes qui utilisent le résultat et cherchez des mesures secondaires capables de révéler ces effets indésirables.',
            'Il est aussi utile de comparer le gain à une version sans boucle et à une méthode plus simple, comme une règle déterministe ou une meilleure organisation des données. Si l’approche la plus élaborée ne fait pas mieux sur vos tâches, vous aurez appris à ne pas ajouter de complexité inutile. Conservez cette comparaison dans le dossier de décision.',
            'Exemple hypothétique : un agent propose une modification qui fait passer un assistant de code de 72 à 88 % sur les tests internes. Une revue montre que ces tests figuraient déjà dans le contexte de génération. L’équipe exécute ensuite un jeu de tâches tenu à l’écart : le score retombe à 71 %. La décision raisonnable est de rejeter le gain annoncé et de revoir le protocole avant tout déploiement.',
          ] },
        ],
        takeaway: 'Avant de parler d’IA qui s’améliore elle-même, écrivez la métrique, le jeu de test indépendant et le coût total. Le nom de la boucle ne remplace pas cette preuve.',
        service: { href: '/orchestration-agents-ia/', label: 'Découvrir l’orchestration d’agents' },
      },
      en: {
        sources: [
      { title: 'Recursive self-improvement of AI research agents', url: 'https://arxiv.org/abs/2609.26457', publisher: 'arXiv', accessedAt: '2026-10-29' },
      { title: 'AutoResearchBench: Benchmarking AI Agents on Complex Scientific Literature Discovery', url: 'https://arxiv.org/abs/2604.25256', publisher: 'arXiv', accessedAt: '2026-10-29' },
        ],
        inspiration: [{ title: 'Opus 5.5: How Close Are We to Automated AI Research?', url: 'https://www.youtube.com/watch?v=R9momwXV9w4', publishedAt: '2026-09-24' }],
        slug: 'recursive-ai-improvement-measuring-progress', title: 'Recursive AI improvement: measure progress without conflating loops',
        description: 'AI can optimise a pipeline without becoming generally more capable. Separate automation, measured gains and validated improvement.', category: 'News & implications',
        introduction: '“Recursive improvement” can suggest an intelligence endlessly making itself better. In real systems, it may describe a narrower loop: one model proposes code, another tests it, and a metric selects a variant. The key question is what improves, and on which tasks.',
        sections: [
          { title: 'Name the loop you observed', paragraphs: [
            'An optimisation loop may improve runtime, inference cost, prompt quality or success on a test set. These are different goals. Better performance on the test used to select variants does not prove that the system gained a new general capability.',
            'A September 2026 research preprint studies research agents that modify their methods to improve efficiency. It is interesting because it measures a specific experimental loop and reports transfer to tasks unseen during optimisation. Read it as evidence within that study’s setup, data and metrics, not as proof of unlimited self-improvement.',
          ], sourceUrls: ['https://arxiv.org/abs/2609.26457'] },
          { title: 'Prevent test-set leakage', paragraphs: [
            'If an agent sees evaluation questions or receives repeated feedback on them, the measure can reward test adaptation. Keep a separate validation set and a final selection set that stays untouched. A team can also reserve new tasks created after the optimisation cycle.',
            'Compare the improved version with a fixed baseline on identical tasks, tools, budgets and rules. Repeat variable trials. Record errors, costs and human time: a higher score that requires much more compute may not improve the operational outcome.',
          ] },
          { title: 'Measure end-to-end effects', paragraphs: [
            'A local gain can cause a regression elsewhere: a faster agent may provide less reliable sources, or a stricter prompt may reduce false positives while missing useful cases. Measure the full workflow, including human review and rework. The criterion should match the real job.',
            'The loop also depends on its model, tools, data, tester and selection criteria. If it chooses its own objective and judges its own success, a proxy metric can drift without the process detecting it. Keep an independent checkpoint before generalising the result.',
          ], checklist: ['Which property actually changed?', 'Are validation tasks kept separate?', 'Which costs and regressions are measured?', 'Can an independent person reproduce the gain?'] },
          { title: 'Design a useful experiment', paragraphs: [
            'For a small business, the immediate value is often controlled optimisation of a narrow task, not an unsupervised loop. Define a business measure, cost ceiling and stop condition. Version the system, data and prompts so iterations can be compared fairly.',
            'Give the loop limited access: a test repository, synthetic data or an environment with no production effects. Review changes affecting access, security or quality. Progress becomes credible when it is reproducible, useful on new cases and reported with its limits.',
            'A loop can also optimise the wrong objective very consistently. If the system is rewarded for finishing quickly, it may skip costly checks; if it maximises a compliance score, it may learn to game known examples. Review objectives with the people who use the result and add secondary measures that can reveal these unwanted effects.',
            'Hypothetical example: an agent proposes a change that raises a coding assistant from 72% to 88% on internal tests. Review finds those tests were already in its generation context. The team then runs a held-out task set and gets 71%. The sensible decision is to reject the claimed gain and revise the protocol before any deployment.',
          ] },
        ],
        takeaway: 'Before claiming that AI improves itself, write down the metric, independent test set and total cost. The name of the loop is not evidence.',
        service: { href: '/en/agent-orchestration/', label: 'Explore agent orchestration' },
      },
    },
  },
  {
    id: 'agent-security', preparedAt: '2026-10-29', status: 'review',
    copy: {
      fr: {
        sources: [
      { title: 'Mitigating the risk of prompt injections in browser use', url: 'https://www.anthropic.com/research/prompt-injection-defenses', publisher: 'Anthropic', accessedAt: '2026-10-29' },
      { title: 'Building agents', url: 'https://developers.openai.com/tracks/building-agents', publisher: 'OpenAI', accessedAt: '2026-10-29' },
        ],
        slug: 'securiser-agents-ia-contenu-non-fiable', title: 'Sécuriser un agent IA face au contenu non fiable', description: 'Protégez les agents qui lisent et agissent : séparez instructions, données et permissions, puis ajoutez des points de contrôle.', category: 'Veille & enjeux',
        introduction: 'Un agent connecté à un navigateur, une boîte mail ou un outil métier reçoit des contenus qui ne viennent pas tous de son utilisateur. Une page peut contenir des instructions malveillantes destinées à détourner sa tâche. Cette injection indirecte transforme le contenu consulté en risque d’action : fuite de données, clic ou modification non souhaités.',
        sections: [
          { title: 'Traiter les pages comme des entrées hostiles', paragraphs: [
            'Une consigne cachée dans une page ou un document ne devient pas légitime parce que l’agent la lit. Le système doit distinguer les instructions définies par l’application et les textes récupérés pour accomplir la tâche. Cette frontière est difficile à faire respecter uniquement par une phrase dans le prompt : les modèles interprètent le langage et les contenus peuvent être ambigus.',
            'Anthropic décrit le risque des injections dans le navigateur comme non résolu. Dans ses évaluations publiées, le taux d’attaque réussie dépend du modèle, de l’environnement et du protocole adversarial. Un pourcentage observé dans ce dispositif n’est pas une garantie pour votre navigateur, vos pages ou vos comptes. La conclusion opérationnelle est de conserver des barrières qui limitent l’impact d’une erreur.',
          ], sourceUrls: ['https://www.anthropic.com/research/prompt-injection-defenses'] },
          { title: 'Réduire les permissions au strict nécessaire', paragraphs: [
            'Donnez à l’agent l’accès à la seule ressource utile, avec les droits minimums. Une lecture de calendrier ne justifie pas la permission d’envoyer des messages. Une recherche de facture ne doit pas autoriser un paiement. Séparez les identifiants de test et de production et limitez la durée des sessions.',
            'Pour les actions sensibles, demandez une validation explicite et montrez le destinataire, le contenu ou la valeur avant exécution. Les outils doivent appliquer les règles côté application : une consigne injectée ne devrait pas pouvoir contourner une permission qu’elle ne possède pas.',
          ] },
          { title: 'Concevoir des étapes vérifiables', paragraphs: [
            'Privilégiez un flux où l’agent propose d’abord, puis une personne accepte l’effet externe. Journalisez la demande, les outils invoqués, les éléments consultés et les changements réalisés. Gardez les traces proportionnées et protégées, car elles peuvent contenir des informations sensibles.',
            'Testez les cas réalistes : instruction malveillante dans une page, pièce jointe inattendue, mauvais destinataire, contenu contradictoire ou session expirée. Vérifiez aussi le comportement de refus et le retour arrière. La sécurité dépend des outils et des intégrations autant que du modèle.',
            'Exemple hypothétique : un agent de comptabilité lit une facture envoyée par courriel. Le message contient une instruction cachée demandant d’exporter la boîte de réception. Comme l’agent n’a qu’un droit de lecture sur le dossier de factures et aucun outil d’envoi, il ne peut pas transmettre les messages ; il signale une consigne hors tâche et demande une revue. La barrière de permission limite ici les conséquences d’une injection.',
          ], checklist: ['Quelles entrées sont considérées comme non fiables ?', 'Quels outils peuvent modifier ou transmettre des données ?', 'Quelles actions demandent une confirmation humaine ?', 'Peut-on interrompre et auditer une exécution ?'] },
          { title: 'Déployer par étapes', paragraphs: [
            'Commencez en lecture seule ou sur un environnement de test. Mesurez les erreurs et les demandes de validation avant d’autoriser une action réelle. Étendez l’accès seulement lorsque les scénarios d’abus sont testés et que les responsabilités sont claires.',
            'Une protection solide ne promet pas qu’un agent ne sera jamais trompé. Elle réduit les permissions, rend les actions visibles et limite les conséquences lorsqu’une défense échoue. Réexaminez les contrôles quand les outils, modèles ou processus changent.',
            'Préparez aussi une réponse à l’incident : retirer les jetons d’accès, interrompre les sessions et informer le responsable des données. Une trace d’exécution facilite l’analyse, mais elle ne doit pas devenir une copie illimitée des messages et documents consultés. Conservez les éléments strictement nécessaires, protégez leur accès et définissez qui peut examiner un incident.',
            'Précisez enfin la responsabilité en cas d’action non souhaitée. L’équipe doit savoir qui peut désactiver l’intégration, contacter le fournisseur, prévenir les personnes concernées et décider d’une reprise. Ces consignes courtes rendent les contrôles opérationnels au moment où ils sont nécessaires, au lieu de rester une politique séparée du travail quotidien.',
          ] },
        ],
        takeaway: 'Avant de connecter un agent à un outil métier, listez ses droits et séparez lecture, préparation et exécution. Demandez confirmation pour les effets externes.',
        service: { href: '/orchestration-agents-ia/', label: 'Découvrir l’orchestration d’agents' },
      },
      en: {
        sources: [
      { title: 'Mitigating the risk of prompt injections in browser use', url: 'https://www.anthropic.com/research/prompt-injection-defenses', publisher: 'Anthropic', accessedAt: '2026-10-29' },
      { title: 'Building agents', url: 'https://developers.openai.com/tracks/building-agents', publisher: 'OpenAI', accessedAt: '2026-10-29' },
        ],
        slug: 'secure-ai-agents-untrusted-content', title: 'Securing AI agents against untrusted content', description: 'Protect agents that read and act: separate instructions, data and permissions, then add checkpoints.', category: 'News & implications',
        introduction: 'An agent connected to a browser, inbox or business tool receives content from sources other than its user. A page may contain malicious instructions intended to hijack its task. This indirect prompt injection turns viewed content into an action risk: data leakage, an unwanted click or an unintended change.',
        sections: [
          { title: 'Treat pages as untrusted input', paragraphs: [
            'A hidden instruction in a page or document does not become legitimate because an agent reads it. The system must distinguish application instructions from retrieved text. Enforcing this boundary with a sentence in the prompt alone is difficult: models interpret language and content can be ambiguous.',
            'Anthropic describes browser prompt injection as unresolved. In its published evaluations, attack success depends on the model, environment and adversarial protocol. A percentage observed in that setup is not a guarantee for your browser, pages or accounts. The practical conclusion is to retain barriers that limit the impact of an error.',
          ], sourceUrls: ['https://www.anthropic.com/research/prompt-injection-defenses'] },
          { title: 'Limit permissions to what is needed', paragraphs: [
            'Give the agent access only to the useful resource and the minimum rights. Calendar reading does not justify permission to send messages. Finding an invoice should not authorise payment. Separate test and production credentials and limit session duration.',
            'For sensitive actions, require explicit approval and show the recipient, content or value before execution. Tools should enforce rules in the application: injected text should not bypass a permission it does not have.',
          ] },
          { title: 'Design verifiable steps', paragraphs: [
            'Prefer a flow where the agent proposes an action and a person approves the external effect. Log the request, tools called, sources consulted and changes made. Keep records proportionate and protected because they may contain sensitive information.',
            'Test realistic cases: malicious instructions on a page, an unexpected attachment, wrong recipient, conflicting content or expired session. Check refusal and rollback behaviour too. Security depends on tools and integrations as much as on the model.',
            'Hypothetical example: an accounting agent reads an emailed invoice. The message contains a hidden instruction to export the inbox. Because the agent has read-only access to the invoice folder and no sending tool, it cannot forward messages; it flags an out-of-scope instruction for review. The permission boundary limits the impact of the injection in this case.',
          ], checklist: ['Which inputs are treated as untrusted?', 'Which tools can change or transmit data?', 'Which actions require human approval?', 'Can a run be interrupted and audited?'] },
          { title: 'Deploy in stages', paragraphs: [
            'Start in read-only mode or a test environment. Measure errors and approval requests before permitting real actions. Expand access only after abuse scenarios are tested and responsibilities are clear.',
            'Strong protection does not promise that an agent will never be deceived. It reduces permissions, makes actions visible and limits consequences when a defence fails. Revisit controls when tools, models or processes change.',
            'Prepare an incident response too: revoke access tokens, stop sessions and notify the data owner. An execution record helps investigation, but it should not become an unlimited copy of messages and documents. Retain only what is necessary, protect access and define who may review an incident.',
            'Also define responsibility for an unwanted action. The team should know who can disable the integration, contact the provider, notify affected people and decide how to resume. Short instructions make controls usable when needed instead of leaving them as a policy detached from daily work.',
          ] },
        ],
        takeaway: 'Before connecting an agent to a business tool, list its rights and separate reading, preparation and execution. Require approval for external effects.',
        service: { href: '/en/agent-orchestration/', label: 'Explore agent orchestration' },
      },
    },
  },
  {
    id: 'computer-use', preparedAt: '2026-10-29', status: 'review',
    copy: {
      fr: {
        sources: [
      { title: 'Computer use', url: 'https://developers.openai.com/api/docs/guides/agents-api/tools/computer-use', publisher: 'OpenAI', accessedAt: '2026-10-29' },
      { title: 'Mitigating the risk of prompt injections in browser use', url: 'https://www.anthropic.com/research/prompt-injection-defenses', publisher: 'Anthropic', accessedAt: '2026-10-29' },
        ],
        slug: 'agents-ordinateur-fiabilite-et-points-de-controle', title: 'Agents qui utilisent un ordinateur : où placer les contrôles ?', description: 'Les agents navigateur et bureau peuvent accomplir des séquences d’actions. Structurez leur usage autour d’étapes observables et réversibles.', category: 'Veille & enjeux',
        introduction: 'Un agent qui clique dans une interface peut relier plusieurs étapes d’un travail : ouvrir un dossier, retrouver une donnée, remplir un formulaire et préparer une réponse. Cette capacité rend l’automatisation accessible aux outils sans API. Elle ajoute aussi une dépendance à l’état visuel, aux changements d’interface et à la bonne interprétation de chaque écran.',
        sections: [
          { title: 'Une capture d’écran n’est pas une preuve', paragraphs: [
            'L’agent observe un écran et choisit une action, puis reçoit un nouvel état. Un bouton peut se déplacer, une fenêtre modale masquer une partie de la page ou un chargement être incomplet. Même si l’action a été envoyée, il faut vérifier que le résultat attendu a eu lieu. Les guides de mise en œuvre décrivent d’ailleurs une boucle d’observation, d’action et de vérification, pas une macro infaillible.',
            'La fiabilité dépend du navigateur, des permissions, de la latence et des données présentes. Un enchaînement qui fonctionne dans une démonstration peut échouer après une mise à jour. Le bon niveau de confiance se mesure sur les variantes que votre équipe rencontre réellement, notamment les exceptions et les écrans d’erreur.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/agents-api/tools/computer-use'] },
          { title: 'Choisir les bons points de contrôle', paragraphs: [
            'Découpez le travail en étapes où un résultat peut être constaté : dossier ouvert, montant retrouvé, formulaire rempli, brouillon préparé. Vérifiez les éléments critiques avant de continuer. Pour les actions difficiles à annuler, arrêtez-vous avant envoi, suppression ou paiement et demandez une confirmation.',
            'Préférez une API structurée lorsqu’elle existe et que son intégration est raisonnable. L’interface graphique reste utile pour les systèmes hérités ou les tâches où aucune API n’est disponible. Un hybride peut laisser l’agent naviguer et lire, puis confier l’écriture à une opération contrôlée.',
          ] },
          { title: 'Séparer préparation et effet externe', paragraphs: [
            'Un agent peut préparer un formulaire sans le soumettre. Une personne peut revoir les champs, le destinataire et le document joint avant d’autoriser l’action. Cette séparation permet de gagner du temps sur la saisie et la recherche tout en gardant le contrôle du résultat qui engage l’organisation.',
            'Les contenus affichés à l’écran restent des entrées non fiables. Une page ou un message peut inclure des instructions destinées à détourner l’agent. Combinez permissions réduites, domaines autorisés, données de test et confirmation humaine. Gardez une trace des actions et un moyen d’interrompre la session.',
            'Exemple hypothétique : un agent prépare une mise à jour de commande dans un portail fournisseur. Un chargement tardif décale le bouton et l’écran affiche un autre compte. Le contrôle avant validation compare le numéro client et le montant au dossier source ; ils ne correspondent pas, donc l’agent s’arrête sans soumettre. La preuve utile est l’écart visible entre les champs attendus et affichés, pas le clic simulé.',
          ], checklist: ['Quel résultat observable termine chaque étape ?', 'Quelles actions sont réversibles ?', 'Quand l’agent doit-il s’arrêter pour validation ?', 'Comment détecter une interface qui a changé ?'] },
          { title: 'Piloter avec un petit jeu de tâches', paragraphs: [
            'Établissez un ensemble de cas représentatifs et rejouez-les après une modification de modèle ou d’interface. Mesurez les tâches terminées sans reprise, les erreurs détectées avant action, le temps gagné et les interventions nécessaires. Une tâche aboutie avec beaucoup de corrections peut être moins intéressante qu’une tâche plus courte mais stable.',
            'Déployez d’abord sur un compte de test et un périmètre à faible impact. Définissez un responsable, des critères d’arrêt et la procédure de reprise manuelle. Étendez l’autonomie seulement lorsque l’équipe sait expliquer ce que l’agent a fait et corriger les erreurs sans perte de contrôle.',
            'Un système fiable doit également communiquer son état : tâche terminée, bloquée, en attente d’autorisation ou partiellement effectuée. Cette distinction empêche une équipe de prendre une action préparée pour une action confirmée. Conservez un identifiant de tâche ou un résumé exploitable pour qu’une personne puisse reprendre le travail sans relancer toute la séquence ni répéter un effet déjà produit.',
            'Documentez les préconditions, par exemple le compte attendu, les données disponibles et la version de l’interface. Si une précondition manque, l’agent doit s’arrêter avec une explication plutôt que poursuivre sur une hypothèse. Cette discipline facilite aussi la comparaison entre une exécution automatisée et la procédure manuelle de secours.',
          ] },
        ],
        takeaway: 'Pour automatiser une tâche d’interface, identifiez les étapes observables et placez une approbation avant l’action irréversible. Suivez les exceptions avec autant d’attention que la réussite.',
        service: { href: '/orchestration-agents-ia/', label: 'Découvrir l’orchestration d’agents' },
      },
      en: {
        sources: [
      { title: 'Computer use', url: 'https://developers.openai.com/api/docs/guides/agents-api/tools/computer-use', publisher: 'OpenAI', accessedAt: '2026-10-29' },
      { title: 'Mitigating the risk of prompt injections in browser use', url: 'https://www.anthropic.com/research/prompt-injection-defenses', publisher: 'Anthropic', accessedAt: '2026-10-29' },
        ],
        slug: 'computer-use-agents-reliability-checkpoints', title: 'Computer-use agents: where should checkpoints go?', description: 'Browser and desktop agents can complete action sequences. Structure their use around observable and reversible steps.', category: 'News & implications',
        introduction: 'An agent that clicks through an interface can connect several steps of a task: open a record, find data, fill a form and prepare a reply. This makes automation possible even for tools without an API. It also makes the workflow depend on visual state, interface changes and correct interpretation of each screen.',
        sections: [
          { title: 'A screenshot is not proof of success', paragraphs: [
            'The agent observes a screen and chooses an action, then receives a new state. A button may move, a modal may cover part of the page or a load may be incomplete. Even if an action was sent, check whether the expected result happened. Implementation guides describe a loop of observation, action and verification, not an infallible macro.',
            'Reliability depends on the browser, permissions, latency and data. A sequence that works in a demonstration may fail after an update. Measure confidence on the variations your team actually encounters, including exceptions and error screens.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/agents-api/tools/computer-use'] },
          { title: 'Choose the right checkpoints', paragraphs: [
            'Divide work into steps with observable results: record opened, amount found, form filled, draft prepared. Check critical details before continuing. For actions that are hard to undo, stop before sending, deleting or paying and ask for approval.',
            'Prefer a structured API when one exists and is practical to integrate. A graphical interface remains useful for legacy systems or tasks without an API. A hybrid can let the agent navigate and read, then pass writing to a controlled operation.',
          ] },
          { title: 'Separate preparation from external effects', paragraphs: [
            'An agent can prepare a form without submitting it. A person can review fields, recipient and attachment before authorising the action. This saves time on data entry and retrieval while retaining control over the result that commits the organisation.',
            'On-screen content remains untrusted input. A page or message can include instructions intended to divert the agent. Combine limited permissions, approved domains, test data and human approval. Keep an action record and a way to stop the session.',
            'Hypothetical example: an agent prepares an order update in a supplier portal. A delayed load shifts the button and the screen shows another account. Before submission, a checkpoint compares the customer number and amount with the source record; they do not match, so the agent stops without submitting. The useful evidence is the mismatch in displayed fields, not the simulated click.',
          ], checklist: ['What observable result completes each step?', 'Which actions are reversible?', 'When must the agent stop for approval?', 'How will an interface change be detected?'] },
          { title: 'Pilot with a small task set', paragraphs: [
            'Create representative cases and replay them after model or interface changes. Measure tasks completed without rework, errors caught before action, time saved and interventions required. A completed task with extensive correction may be less valuable than a shorter but stable one.',
            'Start with a test account and low-impact scope. Define an owner, stop criteria and manual recovery process. Expand autonomy only when the team can explain what the agent did and correct errors without losing control.',
            'A reliable system should also communicate its state: completed, blocked, awaiting approval or partly done. This prevents a team from treating a prepared action as a confirmed one. Keep a task identifier or useful summary so a person can resume without rerunning the whole sequence or repeating an effect that already occurred.',
          ] },
        ],
        takeaway: 'When automating an interface task, identify observable steps and require approval before irreversible actions. Track exceptions as carefully as successful runs.',
        service: { href: '/en/agent-orchestration/', label: 'Explore agent orchestration' },
      },
    },
  },
  {
    id: 'multimodal-workflows', preparedAt: '2026-10-29', status: 'review',
    copy: {
      fr: {
        sources: [
      { title: 'Realtime API', url: 'https://developers.openai.com/api/docs/guides/realtime', publisher: 'OpenAI', accessedAt: '2026-10-29' },
      { title: 'Audio and speech', url: 'https://developers.openai.com/api/docs/guides/audio', publisher: 'OpenAI', accessedAt: '2026-10-29' },
        ],
        slug: 'flux-de-travail-ia-voix-image-video', title: 'Voix, images et vidéo : élargir les entrées de l’IA sans perdre le contrôle', description: 'La multimodalité aide à traiter des contenus métier variés. Définissez ce qui est capturé, vérifié, conservé et transmis.', category: 'Veille & enjeux',
        introduction: 'Un travail réel ne commence pas toujours par un paragraphe écrit. Il peut prendre la forme d’un appel, d’une photo, d’une capture d’écran ou d’une vidéo de démonstration. Les modèles multimodaux permettent de traiter plusieurs de ces formats dans un même processus. Leur intérêt dépend de la qualité des entrées et du soin apporté à la confidentialité et à la validation.',
        sections: [
          { title: 'Partir du besoin et du format', paragraphs: [
            'La voix peut faciliter la saisie sur le terrain ou rendre un service plus accessible. Une image peut documenter un défaut ou une configuration. Une vidéo peut montrer une séquence qu’un texte décrit mal. Mais le format ne résout pas la question métier : il faut définir l’information utile, le contexte et la décision que la sortie doit soutenir.',
            'Les interfaces audio en temps réel combinent perception, génération de parole et échanges à faible latence. Une transcription ou un résumé reste une interprétation probabiliste, surtout avec du bruit, des accents, plusieurs interlocuteurs ou des termes spécialisés. Faites valider les éléments qui déclenchent une action ou une décision importante.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/realtime'] },
          { title: 'Concevoir pour la confidentialité', paragraphs: [
            'Un enregistrement peut contenir des données personnelles, des voix de personnes présentes sans être destinataires du service, ou des informations commerciales. Informez les personnes concernées, minimisez la capture et définissez une durée de conservation. Vérifiez où les données sont traitées et quelles règles s’appliquent au fournisseur choisi.',
            'Évitez de collecter « au cas où ». Recadrez une image pour supprimer des informations inutiles, désactivez l’enregistrement continu si le besoin est ponctuel et séparez les identifiants des transcriptions. Une bonne UX explique quand le micro ou la caméra est actif et comment corriger ou supprimer le contenu.',
          ] },
          { title: 'Prévoir la revue et l’accessibilité', paragraphs: [
            'Une transcription peut aider une personne à relire un échange ou utiliser un service sans écouter l’audio. Proposez des contrôles de lecture, des sous-titres et une façon simple de corriger un nom ou un chiffre. Pour une image, demandez à l’utilisateur de confirmer les caractéristiques extraites au lieu de masquer l’incertitude.',
            'Les sorties multimodales doivent avoir des critères propres à chaque média. Vérifiez la fidélité des champs extraits, les omissions et la façon dont les erreurs sont signalées. Ne transformez pas une estimation visuelle ou une phrase reconnue en fait confirmé sans contrôle adapté.',
            'Exemple hypothétique : une technicienne dicte un numéro de série dans un atelier bruyant et joint une photo de l’étiquette. La transcription confond « B8 » et « 88 », tandis que la photo est nette. Le système affiche le champ incertain et demande confirmation avant de créer la fiche d’intervention. L’équipe évite une mauvaise pièce commandée et conserve une trace de la correction humaine.',
          ], checklist: ['Quel média est nécessaire à la tâche ?', 'Les personnes savent-elles quand elles sont enregistrées ?', 'Quelles données sont conservées et combien de temps ?', 'Comment l’utilisateur peut-il corriger la sortie ?'] },
          { title: 'Éprouver le flux avant de l’étendre', paragraphs: [
            'Créez un lot de cas avec des conditions réalistes : bruit, mauvaise lumière, accent, contenu incomplet et demande hors périmètre. Mesurez le taux d’erreur par type, pas seulement la moyenne. Un résumé fluide ne révèle pas toujours une omission critique.',
            'Lancez avec une tâche précise et un canal de recours humain. Comparez le bénéfice avec une entrée textuelle ou un processus existant. La multimodalité crée de la valeur quand elle réduit une friction sans rendre opaque ce que le système a capté, retenu ou déduit.',
            'Prévoyez une solution de remplacement lorsque la capture échoue ou n’est pas souhaitée. La personne peut alors envoyer un texte, sélectionner une autre méthode ou demander un échange humain. Cette option est importante pour l’accessibilité, mais aussi pour les lieux bruyants, les connexions limitées et les situations où un enregistrement créerait un risque disproportionné.',
            'Pour les équipes, un court guide peut préciser le type de contenu attendu, les formats acceptés et les limites connues de la reconnaissance. Il réduit les entrées inutilisables et aide à expliquer pourquoi une confirmation est demandée. Révisez ce guide lorsque les usages évoluent ou lorsqu’un nouveau type de média est introduit.',
          ] },
        ],
        takeaway: 'Avant d’ajouter micro, caméra ou vidéo, définissez les données strictement nécessaires, leur conservation et le contrôle de la sortie. Testez les erreurs dans des conditions réelles.',
        service: { href: '/ia-automatisation/', label: 'Découvrir l’automatisation IA' },
      },
      en: {
        sources: [
      { title: 'Realtime API', url: 'https://developers.openai.com/api/docs/guides/realtime', publisher: 'OpenAI', accessedAt: '2026-10-29' },
      { title: 'Audio and speech', url: 'https://developers.openai.com/api/docs/guides/audio', publisher: 'OpenAI', accessedAt: '2026-10-29' },
        ],
        slug: 'multimodal-ai-voice-image-video-workflows', title: 'Voice, images and video: broaden AI inputs without losing control', description: 'Multimodal AI can process varied business content. Define what is captured, checked, retained and shared.', category: 'News & implications',
        introduction: 'Real work does not always begin with a written paragraph. It may start with a call, photo, screenshot or demonstration video. Multimodal models can process several of these formats in one workflow. Their value depends on input quality and careful handling of privacy and verification.',
        sections: [
          { title: 'Start with the task and format', paragraphs: [
            'Voice can make field data entry easier or improve accessibility. An image can document a fault or configuration. A video can show a sequence that is hard to describe in text. But the format does not solve the business question: define the useful information, context and decision the output should support.',
            'Real-time audio interfaces combine perception, speech generation and low-latency exchange. A transcript or summary remains a probabilistic interpretation, especially with noise, accents, multiple speakers or specialist terms. Review details that trigger an important action or decision.',
          ], sourceUrls: ['https://developers.openai.com/api/docs/guides/realtime'] },
          { title: 'Design for privacy', paragraphs: [
            'A recording may contain personal data, voices of people who are not service users or commercial information. Inform affected people, minimise capture and define retention. Check where data is processed and which provider rules apply.',
            'Avoid collecting information “just in case”. Crop an image to remove irrelevant details, disable continuous recording when the need is occasional and separate identifiers from transcripts. Good UX makes microphone or camera activity clear and explains how to correct or delete content.',
          ] },
          { title: 'Plan for review and accessibility', paragraphs: [
            'A transcript can help someone review a conversation or use a service without listening to audio. Provide playback controls, captions and an easy way to correct a name or number. For an image, ask the user to confirm extracted attributes rather than hiding uncertainty.',
            'Multimodal outputs need media-specific criteria. Check extraction fidelity, omissions and how errors are reported. Do not treat a visual estimate or recognised phrase as a confirmed fact without an appropriate check.',
            'Hypothetical example: a technician dictates a serial number in a noisy workshop and attaches a photo of the label. Speech recognition confuses “B8” with “88”, while the photo is clear. The system flags the uncertain field and asks for confirmation before creating the service record. The team avoids ordering the wrong part and retains a record of the human correction.',
          ], checklist: ['Which media is needed for the task?', 'Do people know when they are being recorded?', 'What data is retained and for how long?', 'How can a user correct the output?'] },
          { title: 'Test the workflow before expanding', paragraphs: [
            'Build a set of realistic cases: noise, poor lighting, accents, incomplete content and out-of-scope requests. Measure errors by type, not only as an average. A fluent summary does not always reveal a critical omission.',
            'Launch with a specific task and a human escalation path. Compare the benefit with text input or an existing process. Multimodality creates value when it removes friction without obscuring what the system captured, retained or inferred.',
            'Provide an alternative when capture fails or is not wanted. A person should be able to submit text, choose another method or request human help. This matters for accessibility, as well as noisy environments, limited connectivity and situations where recording would create disproportionate risk.',
            'For teams, a short guide can specify expected content, accepted formats and known recognition limits. It reduces unusable input and helps explain why confirmation is requested. Review the guide as usage changes or when a new media type is introduced.',
          ] },
        ],
        takeaway: 'Before adding a microphone, camera or video, define necessary data, retention and output review. Test errors under real conditions.',
        service: { href: '/en/ai-automation/', label: 'Explore AI automation' },
      },
    },
  },
  {
    id: 'content-provenance', preparedAt: '2026-10-29', status: 'review',
    copy: {
      fr: {
        sources: [
      { title: 'Reducing Risks Posed by Synthetic Content: An Overview of Technical Approaches to Digital Content Transparency', url: 'https://www.nist.gov/publications/reducing-risks-posed-synthetic-content-overview-technical-approaches-digital-content', publisher: 'NIST', accessedAt: '2026-10-29' },
      { title: 'C2PA Technical Specification', url: 'https://spec.c2pa.org/specifications/specifications/1.0/specs/C2PA_Specification.html', publisher: 'C2PA', accessedAt: '2026-10-29' },
      { title: 'Provenance detection overview', url: 'https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/provenance-detection', publisher: 'Microsoft Learn', accessedAt: '2026-10-29' },
        ],
        slug: 'provenance-contenus-ia-origine-ne-vaut-pas-verite', title: 'Provenance d’un contenu IA : connaître l’origine ne prouve pas la vérité', description: 'Watermarks et métadonnées apportent des indices sur l’origine et les modifications. Ils ne vérifient pas la véracité d’un contenu.', category: 'Veille & enjeux',
        introduction: 'Un watermark ou une fiche de provenance peut aider à identifier l’origine d’un média et certaines transformations. C’est utile pour organiser un flux éditorial et conserver le contexte d’un fichier. Mais un signal de provenance ne dit pas si le contenu est vrai, trompeur, complet ou publié avec le consentement des personnes représentées.',
        sections: [
          { title: 'Comprendre ce que décrit un signal', paragraphs: [
            'Les Content Credentials de C2PA peuvent relier un fichier à des assertions signées sur son origine ou son historique d’édition. Un watermark peut signaler qu’un contenu est issu d’un système de génération reconnu. Ces mécanismes donnent des informations vérifiables dans leur périmètre ; ils ne certifient pas la qualité éditoriale de chaque affirmation.',
            'NIST décrit plusieurs familles d’approches pour la transparence des contenus synthétiques : provenance, marquage, détection et pratiques de gouvernance. Elles répondent à des questions différentes et peuvent se compléter. Un manifeste valide peut établir que certaines informations n’ont pas été altérées depuis la signature ; il ne transforme pas les assertions en vérité indépendante.',
          ], sourceUrls: ['https://www.nist.gov/publications/reducing-risks-posed-synthetic-content-overview-technical-approaches-digital-content', 'https://spec.c2pa.org/specifications/specifications/1.0/specs/C2PA_Specification.html'] },
          { title: 'Interpréter aussi l’absence de signal', paragraphs: [
            'Un vérificateur qui ne détecte rien ne prouve pas qu’un fichier vient d’un humain. Le format ou l’outil peut ne pas être pris en charge, les métadonnées peuvent avoir été supprimées ou le watermark dégradé par une modification. Microsoft précise que son outil de provenance n’identifie pas tous les contenus IA et ne détermine pas leur véracité.',
            'À l’inverse, un signal positif peut concerner une étape partielle : une image a pu être générée puis longuement éditée, ou un document contenir une illustration générée au milieu d’un travail humain. Le signal ne mesure pas à lui seul la contribution relative de chaque personne ou outil.',
          ], sourceUrls: ['https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/provenance-detection'] },
          { title: 'Construire un processus éditorial complet', paragraphs: [
            'Conservez les fichiers originaux et les informations de provenance lorsque cela est possible. Associez au média une validation humaine, un lien vers les sources factuelles, une date et le responsable de publication. Pour les images sensibles, vérifiez aussi le consentement, les droits et le contexte représenté.',
            'Un contrôle robuste combine des signaux techniques avec la vérification des faits et une chaîne de responsabilité claire. Ajoutez un statut « origine inconnue » plutôt que d’inférer une origine à partir de l’absence de données. Expliquez aux équipes ce qu’un outil vérifie et ce qu’il ne peut pas conclure.',
            'Exemple hypothétique : une équipe reçoit une illustration avec un manifeste C2PA signé qui indique une édition par IA. Le signal documente une étape de création, mais ne prouve pas que la scène représente un événement réel. La rédaction vérifie séparément la photo de référence et choisit de publier l’image comme illustration synthétique, avec une légende explicite, plutôt que comme preuve du fait raconté.',
          ], checklist: ['Quel outil ou organisme a signé le signal ?', 'Quelles étapes d’édition sont effectivement documentées ?', 'Le contenu factuel est-il vérifié indépendamment ?', 'Que signifie un résultat négatif pour cet outil ?'] },
          { title: 'Éviter le label qui clôt la discussion', paragraphs: [
            'Les étiquettes « authentique » et « généré par IA » peuvent être trop grossières pour un contenu hybride. Décrivez plutôt ce qui est établi : un watermark reconnu, un historique signé ou une modification détectée. Une personne peut ensuite utiliser ces indices avec le contexte et d’autres preuves.',
            'Avant d’adopter une solution, testez-la sur vos formats, logiciels et chemins de partage. Une capture d’écran, un export ou une compression peut modifier les signaux. Votre procédure doit rester utile quand certaines données manquent et éviter de présenter un score de détection comme un verdict.',
            'La provenance est particulièrement utile quand elle suit le fichier tout au long de son parcours, de la création à la publication. En pratique, les logiciels de retouche, plateformes sociales et conversions peuvent retirer ou transformer les métadonnées. Testez donc le trajet complet de vos fichiers et prévoyez un registre complémentaire lorsqu’un document de provenance ne survit pas au partage.',
            'Distinguez également l’archive de travail du fichier destiné au public. Garder un original et une copie de publication facilite l’examen ultérieur des modifications, sans exposer systématiquement toutes les métadonnées internes. Choisissez une règle cohérente avec votre processus de production et la sensibilité des documents traités.',
          ] },
        ],
        takeaway: 'Utilisez la provenance comme une pièce de contexte, puis vérifiez séparément les faits, les droits et le consentement. Un signal technique ne prouve pas la vérité.',
        service: { href: '/pilotage-projet-complexe/', label: 'Découvrir le pilotage de projet' },
      },
      en: {
        sources: [
      { title: 'Reducing Risks Posed by Synthetic Content: An Overview of Technical Approaches to Digital Content Transparency', url: 'https://www.nist.gov/publications/reducing-risks-posed-synthetic-content-overview-technical-approaches-digital-content', publisher: 'NIST', accessedAt: '2026-10-29' },
      { title: 'C2PA Technical Specification', url: 'https://spec.c2pa.org/specifications/specifications/1.0/specs/C2PA_Specification.html', publisher: 'C2PA', accessedAt: '2026-10-29' },
      { title: 'Provenance detection overview', url: 'https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/provenance-detection', publisher: 'Microsoft Learn', accessedAt: '2026-10-29' },
        ],
        slug: 'ai-content-provenance-origin-is-not-truth', title: 'AI content provenance: knowing the origin does not prove truth', description: 'Watermarks and metadata provide clues about origin and edits. They do not verify whether content is true.', category: 'News & implications',
        introduction: 'A watermark or provenance record can help identify a media file’s origin and some transformations. This is useful in editorial workflows and for retaining file context. But provenance does not tell you whether content is true, misleading, complete or published with the consent of people shown.',
        sections: [
          { title: 'Understand what a signal describes', paragraphs: [
            'C2PA Content Credentials can link a file to signed assertions about its origin or editing history. A watermark may indicate that content came from a recognised generation system. These mechanisms provide verifiable information within their scope; they do not certify the editorial quality of every claim.',
            'NIST describes several approaches to synthetic-content transparency: provenance, marking, detection and governance practices. They answer different questions and can complement each other. A valid manifest may establish that information has not changed since signing; it does not make its assertions independently true.',
          ], sourceUrls: ['https://www.nist.gov/publications/reducing-risks-posed-synthetic-content-overview-technical-approaches-digital-content', 'https://spec.c2pa.org/specifications/specifications/1.0/specs/C2PA_Specification.html'] },
          { title: 'Interpret the absence of a signal too', paragraphs: [
            'A verifier finding nothing does not prove a file came from a person. The format or tool may be unsupported, metadata may have been removed or a watermark degraded by editing. Microsoft says its provenance tool does not identify all AI content or determine truthfulness.',
            'A positive signal may also relate to only one part of a file: an image may have been generated and then extensively edited, or a document may contain one generated illustration within human work. The signal alone does not measure each person’s or tool’s contribution.',
          ], sourceUrls: ['https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/provenance-detection'] },
          { title: 'Build a complete editorial process', paragraphs: [
            'Keep original files and provenance information where possible. Pair media with human review, links to factual sources, a date and a publication owner. For sensitive images, also check consent, rights and the represented context.',
            'A robust check combines technical signals with fact-checking and a clear chain of responsibility. Use a status such as “origin unknown” instead of inferring origin from missing data. Explain to teams what a tool verifies and what it cannot conclude.',
            'Hypothetical example: a team receives an illustration with a signed C2PA manifest indicating an AI edit. The signal documents a creation step, but does not prove that the scene depicts a real event. Editors separately check the reference photo and decide to publish it as a synthetic illustration with a clear caption, not as evidence for the reported event.',
          ], checklist: ['Which tool or organisation signed the signal?', 'Which editing steps are actually documented?', 'Is factual content verified independently?', 'What does a negative result mean for this tool?'] },
          { title: 'Avoid labels that end the discussion', paragraphs: [
            'Labels such as “authentic” and “AI-generated” may be too blunt for hybrid content. Describe what is established instead: a recognised watermark, signed history or detected edit. People can then consider these clues alongside context and other evidence.',
            'Before adopting a solution, test it on your formats, software and sharing paths. Screenshots, exports or compression can change signals. Your process should remain useful when some data is missing and avoid treating a detection score as a verdict.',
            'Provenance is most useful when it follows a file through its lifecycle, from creation to publication. In practice, editing software, social platforms and conversions may remove or change metadata. Test the full path your files take and keep a complementary record when provenance information does not survive sharing.',
          ] },
        ],
        takeaway: 'Use provenance as context, then separately check facts, rights and consent. A technical signal does not prove truth.',
        service: { href: '/en/project-leadership/', label: 'Explore project leadership' },
      },
    },
  },
  {
    id: 'small-models', preparedAt: '2026-10-29', status: 'review',
    copy: {
      fr: {
        sources: [
      { title: 'Small Language Models are the Future of Agentic AI', url: 'https://arxiv.org/abs/2506.02153', publisher: 'arXiv', accessedAt: '2026-10-29' },
      { title: 'AI Risk Management Framework: Generative AI Profile', url: 'https://www.nist.gov/itl/ai-risk-management-framework', publisher: 'NIST', accessedAt: '2026-10-29' },
        ],
        slug: 'petits-modeles-ia-taches-specialisees', title: 'Petits modèles IA : quand une solution ciblée suffit', description: 'Un modèle plus petit peut convenir à une tâche bornée. Comparez qualité, coût, confidentialité et maintenance sur vos propres cas.', category: 'Veille & enjeux',
        introduction: 'Les modèles de pointe attirent l’attention, mais tous les besoins ne demandent pas le plus gros système disponible. Une classification limitée, l’extraction de champs ou une réponse à partir d’une documentation stable peut être confiée à un modèle plus compact, parfois exécuté dans un environnement contrôlé. Le choix doit venir d’une comparaison sur la tâche réelle.',
        sections: [
          { title: 'Évaluer la tâche avant le modèle', paragraphs: [
            'Un petit modèle peut être adapté lorsque les entrées sont bien définies, le vocabulaire est maîtrisé et les réponses possibles sont limitées. Un modèle plus capable peut être nécessaire pour des demandes ambiguës, des raisonnements longs ou des informations qui exigent une synthèse large. Il n’existe pas de seuil universel basé uniquement sur le nombre de paramètres.',
            'Un préprint de position des chercheurs de NVIDIA défend l’usage de petits modèles pour certains appels répétitifs des agents et propose de les associer à des modèles généralistes lorsque la tâche exige plus de polyvalence. C’est une argumentation, pas un benchmark indépendant démontrant l’équivalence avec un modèle de pointe. Les résultats dépendent du modèle, des données, des outils, de la langue et de la tâche ; vérifiez aussi la licence et les conditions de déploiement.',
          ], sourceUrls: ['https://arxiv.org/abs/2506.02153'] },
          { title: 'Comparer le coût complet', paragraphs: [
            'Le coût ne se résume pas au prix par requête. Additionnez l’hébergement, l’accélération matérielle, les mises à jour, la surveillance, la sécurité, les évaluations et le travail de correction. Un modèle local peut réduire certains transferts de données, mais il exige une infrastructure et une responsabilité opérationnelle qui lui sont propres.',
            'Comparez les options sur le même ensemble d’exemples, avec des critères fixés à l’avance : exactitude, omissions, refus appropriés, latence et coût total. Incluez les cas limites et le taux de reprise humaine. Un système moins cher qui échoue sur les cas importants peut coûter davantage au final.',
          ] },
          { title: 'Choisir une architecture avec recours', paragraphs: [
            'Un routeur peut envoyer les demandes simples vers un modèle compact et réserver les cas ambigus à un système plus puissant ou à une personne. Ce mécanisme n’est utile que si le routeur sait repérer l’incertitude et si le recours est testé. Prévoyez une réponse sûre lorsque l’entrée sort du périmètre.',
            'Pour des données sensibles, étudiez l’ensemble du trajet : journalisation, sauvegardes, télémétrie et accès de l’équipe. « Local » ne signifie pas automatiquement sécurisé ou conforme. Définissez les contrôles d’accès, les durées de conservation et les règles de mise à jour.',
            'Exemple hypothétique : un petit modèle classe les notes de frais en cinq catégories. Il traite correctement les reçus courants, mais range un remboursement fournisseur dans « vente ». Sur un lot de validation, cette erreur est visible et la règle de seuil envoie les remboursements à une personne. L’équipe garde le modèle pour le tri simple et ne l’autorise pas à alimenter seule la comptabilité.',
          ], checklist: ['La tâche est-elle assez bornée ?', 'Les coûts comprennent-ils maintenance et revue ?', 'Quels cas déclenchent un modèle plus fort ou une personne ?', 'Comment surveiller les changements de qualité ?'] },
          { title: 'Maintenir la mesure dans le temps', paragraphs: [
            'Un test initial peut devenir obsolète quand les documents, les demandes ou le modèle changent. Gardez une petite suite de cas représentatifs et rejouez-la après une mise à jour. Faites suivre les erreurs par des exemples compréhensibles plutôt que par un score isolé.',
            'Commencez avec un mode d’assistance et vérifiez les sorties avant de les utiliser dans un processus. Si la qualité reste stable et le coût total favorable, élargissez progressivement. Le modèle approprié est celui qui satisfait le besoin démontré avec un niveau de contrôle soutenable.',
            'Il peut être pertinent de commencer par une architecture simple : un modèle compact pour les demandes connues, une règle déterministe pour les champs structurés et une personne pour les exceptions. Cette combinaison réduit les occasions où le modèle doit improviser. Elle est souvent plus facile à évaluer et à maintenir qu’un agent général auquel on confie le processus entier.',
            'La facilité de déploiement compte autant que les performances. Une solution qui nécessite une expertise rare ou une maintenance permanente peut être moins adaptée qu’un service externe bien gouverné, même si son coût par appel semble supérieur. Intégrez les compétences disponibles et le plan de remplacement dans la décision.',
          ] },
        ],
        takeaway: 'Sélectionnez deux ou trois candidats et testez-les sur les mêmes exemples représentatifs. Comparez le coût total et les erreurs qui comptent pour votre activité.',
        service: { href: '/ia-automatisation/', label: 'Découvrir l’automatisation IA' },
      },
      en: {
        sources: [
      { title: 'Small Language Models are the Future of Agentic AI', url: 'https://arxiv.org/abs/2506.02153', publisher: 'arXiv', accessedAt: '2026-10-29' },
      { title: 'AI Risk Management Framework: Generative AI Profile', url: 'https://www.nist.gov/itl/ai-risk-management-framework', publisher: 'NIST', accessedAt: '2026-10-29' },
        ],
        slug: 'small-ai-models-specialised-tasks', title: 'Small AI models: when a focused solution is enough', description: 'A smaller model may fit a bounded task. Compare quality, cost, privacy and maintenance on your own examples.', category: 'News & implications',
        introduction: 'Frontier models attract attention, but not every need requires the largest available system. A bounded classification, field extraction or answer from stable documentation may suit a compact model, sometimes running in a controlled environment. Choose through comparison on the actual task.',
        sections: [
          { title: 'Assess the task before the model', paragraphs: [
            'A small model may fit when inputs are well defined, vocabulary is familiar and possible answers are limited. More capable models may be needed for ambiguous requests, long reasoning or broad synthesis. There is no universal threshold based only on parameter count.',
            'A position preprint from NVIDIA researchers argues that small models can suit some repetitive agent calls and proposes combining them with general-purpose models when a task needs broader capability. This is an argument, not an independent benchmark proving equivalence with frontier models. Results depend on model, data, tools, language and task; also check licensing and deployment terms.',
          ], sourceUrls: ['https://arxiv.org/abs/2506.02153'] },
          { title: 'Compare the full cost', paragraphs: [
            'Cost is more than the price per request. Include hosting, acceleration hardware, updates, monitoring, security, evaluations and correction work. Local inference may reduce some data transfers, but it requires infrastructure and operational ownership of its own.',
            'Compare options on the same examples with criteria set in advance: accuracy, omissions, appropriate refusals, latency and total cost. Include edge cases and human rework. A cheaper system that fails on important cases may cost more overall.',
          ] },
          { title: 'Choose an architecture with escalation', paragraphs: [
            'A router can send simple requests to a compact model and reserve ambiguous cases for a stronger system or a person. This helps only if the router can identify uncertainty and escalation is tested. Define a safe response for input outside the intended scope.',
            'For sensitive data, examine the whole path: logs, backups, telemetry and team access. “Local” does not automatically mean secure or compliant. Define access controls, retention and update rules.',
            'Hypothetical example: a small model sorts expense notes into five categories. It handles routine receipts but classifies a supplier refund as a sale. A validation batch exposes the error, so a routing rule sends refunds to a person. The team keeps the model for simple sorting but does not let it update the accounts on its own.',
          ], checklist: ['Is the task sufficiently bounded?', 'Does cost include maintenance and review?', 'Which cases go to a stronger model or person?', 'How will quality changes be monitored?'] },
          { title: 'Keep measuring over time', paragraphs: [
            'An initial test may become outdated as documents, requests or the model change. Keep a small representative suite and rerun it after updates. Track errors with understandable examples, not only a single score.',
            'Start in an assistance mode and review outputs before using them in a process. If quality remains stable and total cost is favourable, expand gradually. The right model is the one that meets a demonstrated need with sustainable controls.',
            'It may be sensible to begin with a simple architecture: a compact model for familiar requests, a deterministic rule for structured fields and a person for exceptions. This reduces opportunities for the model to improvise. It is often easier to evaluate and maintain than a general agent given the whole process.',
            'Deployment effort matters as much as model performance. A solution requiring scarce expertise or constant maintenance may be less suitable than a well-governed external service, even if its per-call price is higher. Include available skills and a replacement plan in the decision.',
          ] },
        ],
        takeaway: 'Select two or three candidates and test them on the same representative examples. Compare total cost and the errors that matter to your work.',
        service: { href: '/en/ai-automation/', label: 'Explore AI automation' },
      },
    },
  },
  {
    id: 'reasoning-limits', preparedAt: '2026-10-29', status: 'review',
    copy: {
      fr: {
        sources: [
      { title: 'Semantic Calibration Prevails Where Token Confidence Fails: Benchmarking Long-Form Scientific QA', url: 'https://arxiv.org/abs/2602.00279', publisher: 'arXiv', accessedAt: '2026-10-29' },
      { title: 'AutoResearchBench: Benchmarking AI Agents on Complex Scientific Literature Discovery', url: 'https://arxiv.org/abs/2604.25256', publisher: 'arXiv', accessedAt: '2026-10-29' },
      { title: 'AI Risk Management Framework: Generative AI Profile', url: 'https://www.nist.gov/itl/ai-risk-management-framework', publisher: 'NIST', accessedAt: '2026-10-29' },
        ],
        inspiration: [{ title: 'GPT 6 Astra, so good even OpenAI are worried', url: 'https://www.youtube.com/watch?v=Spuza-KwTJ4', publishedAt: '2026-09-04' }],
        slug: 'limites-raisonnement-ia-incertitude-et-tests', title: 'Raisonnement IA : comment rendre visibles les limites', description: 'Un modèle peut fournir une réponse cohérente sans être bien calibré. Testez les erreurs, l’incertitude et les limites du benchmark.', category: 'Veille & enjeux',
        introduction: 'Les modèles savent désormais résoudre des problèmes complexes et expliquer une démarche. Cette présentation ne garantit pas que la réponse soit correcte, ni que le système signale les cas où il hésite. Pour une équipe, l’enjeu est de transformer une impression de raisonnement en critères d’acceptation observables.',
        sections: [
          { title: 'Un bon score reste une mesure située', paragraphs: [
            'Un benchmark évalue une sélection de tâches dans des conditions définies. Il ne représente pas toutes les demandes d’un métier et peut être affecté par la familiarité du modèle avec des problèmes semblables. Lisez les tâches, le protocole, la date et les exclusions, plutôt que de comparer les scores sans contexte.',
            'Un préprint accepté à un atelier EMNLP 2026 évalue quatre méthodes de calibration sur 685 000 réponses, jusqu’à vingt modèles et sept jeux de données de questions scientifiques longues. Dans ce protocole, seule la cohérence sémantique des réponses finales est rapportée comme bien calibrée. Ce résultat décrit ces tâches et méthodes ; il ne garantit pas le niveau de confiance d’un modèle sur vos demandes inédites.',
          ], sourceUrls: ['https://arxiv.org/abs/2602.00279'] },
          { title: 'Tester les erreurs et les abstentions', paragraphs: [
            'Construisez des exemples où le modèle doit dire qu’il ne sait pas, demander une précision ou refuser de conclure. Incluez des entrées incomplètes, ambiguës, contradictoires et hors sujet. Évaluez l’erreur grave séparément de l’erreur cosmétique : un chiffre inventé peut avoir plus d’impact qu’une formulation maladroite.',
            'Ne prenez pas l’explication générée pour une preuve du raisonnement interne. Vérifiez la conclusion par une méthode indépendante, une source originale ou un calcul reproductible. Une explication lisible peut aider au contrôle humain sans révéler fidèlement les mécanismes qui ont produit la sortie.',
          ] },
          { title: 'Adapter les contrôles à l’impact', paragraphs: [
            'Une idée de titre peut être acceptée avec une revue légère. Une recommandation financière, juridique ou liée à la sécurité nécessite une validation adaptée au domaine. La même sortie peut être acceptable comme brouillon et insuffisante comme décision automatisée.',
            'Définissez des seuils de recours, des personnes responsables et les sources autorisées. En cas d’incertitude, le système doit pouvoir laisser la tâche en attente plutôt que combler le manque par une supposition. Les équipes ont besoin d’un canal simple pour corriger une sortie et signaler un nouveau type d’échec.',
            'Exemple hypothétique : un assistant répond qu’un contrat client est renouvelé, en s’appuyant sur une ancienne version qui contient une reconduction tacite. Le dossier comprend pourtant un avenant signé qui met fin au contrat. Le contrôle consiste à comparer la réponse au document signé le plus récent ; l’écart conduit à suspendre la réponse et à faire confirmer le statut par la personne responsable.',
          ], checklist: ['Quels types d’erreur ont un impact élevé ?', 'Quand le modèle doit-il demander une précision ?', 'Comment la conclusion est-elle vérifiée indépendamment ?', 'Qui accepte l’usage final de la réponse ?'] },
          { title: 'Construire une évaluation métier', paragraphs: [
            'Rassemblez un petit corpus de demandes réelles, anonymisées si nécessaire, et faites établir une réponse attendue ou une règle de notation par des personnes compétentes. Incluez les cas limites et les demandes qui doivent être escaladées. Rejouez ce corpus après les changements de modèle ou de prompt.',
            'Partagez les résultats avec leur périmètre : tâche, langue, date, version, taux d’erreur et intervention humaine. Cette transparence permet de décider si le système convient à un usage limité, et quelles vérifications restent nécessaires. Une évaluation honnête éclaire une décision ; elle ne promet pas l’infaillibilité.',
            'Un score de confiance affiché par le modèle ne doit pas être utilisé comme seuil sans calibration locale. Il peut varier selon le type de question, la longueur du contexte ou la formulation. Faites une analyse par segment et vérifiez si les réponses présentées comme certaines sont effectivement plus fiables. Si cette relation n’est pas stable, fondez l’escalade sur des règles de tâche et l’impact plutôt que sur le seul score.',
            'Une revue utile ne se limite pas à approuver ou rejeter la réponse. Le relecteur peut signaler le type d’erreur, l’information manquante et l’indice qui aurait permis de détecter le problème. Ces retours enrichissent les prochains tests et permettent de distinguer un défaut ponctuel d’une limite récurrente du système.',
          ] },
        ],
        takeaway: 'Évaluez le modèle sur vos tâches et vos cas d’échec, puis définissez quand il doit s’abstenir ou demander une revue. Un benchmark général ne remplace pas ce contrôle.',
        service: { href: '/orchestration-agents-ia/', label: 'Découvrir l’orchestration d’agents' },
      },
      en: {
        sources: [
      { title: 'Semantic Calibration Prevails Where Token Confidence Fails: Benchmarking Long-Form Scientific QA', url: 'https://arxiv.org/abs/2602.00279', publisher: 'arXiv', accessedAt: '2026-10-29' },
      { title: 'AutoResearchBench: Benchmarking AI Agents on Complex Scientific Literature Discovery', url: 'https://arxiv.org/abs/2604.25256', publisher: 'arXiv', accessedAt: '2026-10-29' },
      { title: 'AI Risk Management Framework: Generative AI Profile', url: 'https://www.nist.gov/itl/ai-risk-management-framework', publisher: 'NIST', accessedAt: '2026-10-29' },
        ],
        inspiration: [{ title: 'GPT 6 Astra, so good even OpenAI are worried', url: 'https://www.youtube.com/watch?v=Spuza-KwTJ4', publishedAt: '2026-09-04' }],
        slug: 'ai-reasoning-limits-uncertainty-and-tests', title: 'AI reasoning: how to make its limits visible', description: 'A model can sound coherent without being well calibrated. Test errors, uncertainty and benchmark limits.', category: 'News & implications',
        introduction: 'Models can now solve complex problems and explain a process. That presentation does not guarantee a correct answer or that the system will flag cases where it is uncertain. For a team, the challenge is to turn an impression of reasoning into observable acceptance criteria.',
        sections: [
          { title: 'A high score is still a scoped measure', paragraphs: [
            'A benchmark evaluates selected tasks under defined conditions. It does not represent every business request and may be affected by a model’s familiarity with similar problems. Read the tasks, protocol, date and exclusions instead of comparing scores without context.',
            'A preprint accepted to an EMNLP 2026 workshop evaluates four calibration methods on 685,000 responses, up to 20 models and seven long-form scientific QA datasets. In that setup, only semantic consistency of final answers is reported as well-calibrated. This result is specific to those tasks and methods; it does not guarantee model confidence on your unseen requests.',
          ], sourceUrls: ['https://arxiv.org/abs/2602.00279'] },
          { title: 'Test errors and abstentions', paragraphs: [
            'Create examples where the model should say it does not know, ask for clarification or refuse to conclude. Include incomplete, ambiguous, contradictory and out-of-scope input. Score severe errors separately from cosmetic ones: an invented number can matter more than awkward wording.',
            'Do not treat a generated explanation as proof of internal reasoning. Check conclusions through an independent method, original source or reproducible calculation. A readable explanation can help human review without faithfully revealing the mechanisms that produced the output.',
          ] },
          { title: 'Match checks to impact', paragraphs: [
            'A headline idea may need only light review. A financial, legal or safety-related recommendation needs appropriate domain validation. The same output may be acceptable as a draft and insufficient as an automated decision.',
            'Define escalation thresholds, responsible people and approved sources. When uncertain, the system should be able to leave a task pending instead of filling a gap with a guess. Teams need a simple way to correct outputs and report new failure types.',
            'Hypothetical example: an assistant says a customer contract has renewed, relying on an older version with an automatic-renewal clause. The file also contains a signed amendment that ends the contract. The check compares the answer with the latest signed document; the mismatch prompts the team to hold the response and ask the contract owner to confirm the status.',
          ], checklist: ['Which error types have high impact?', 'When should the model ask for clarification?', 'How is the conclusion independently checked?', 'Who accepts the answer’s final use?'] },
          { title: 'Build a task-specific evaluation', paragraphs: [
            'Collect a small set of real requests, anonymised where needed, and have qualified people define expected answers or scoring rules. Include edge cases and requests that should be escalated. Rerun this set after model or prompt changes.',
            'Report results with their scope: task, language, date, version, error rate and human intervention. This helps decide whether the system fits a limited use and which checks remain necessary. An honest evaluation informs a decision; it does not promise infallibility.',
            'A confidence score produced by the model should not be used as a threshold without local calibration. It may vary with question type, context length or wording. Analyse results by segment and check whether answers labelled confident are actually more reliable. If that relationship is unstable, base escalation on task rules and impact rather than the score alone.',
          ] },
        ],
        takeaway: 'Evaluate the model on your tasks and failure cases, then define when it should abstain or ask for review. A general benchmark cannot replace this check.',
        service: { href: '/en/agent-orchestration/', label: 'Explore agent orchestration' },
      },
    },
  },
  {
    id: 'china-ai-market-correction', preparedAt: '2026-10-29', status: 'review',
    copy: {
      fr: {
        sources: [
      { title: 'In China, the AI bubble has already burst', url: 'https://www.marketscreener.com/news/in-china-the-ai-bubble-has-already-burst-ce785cdcda89f027', publisher: 'Reuters (syndicated by MarketScreener)', accessedAt: '2026-10-29' },
      { title: 'Methodology of SSE Science and Technology Innovation Board 50 Index', url: 'https://english.sse.com.cn/indices/indices/list/indexmethods/c/000688_000688hbooken_EN.pdf', publisher: 'Shanghai Stock Exchange', accessedAt: '2026-10-29' },
      { title: 'SSE Newsletter — September 2026', url: 'https://english.sse.com.cn/news/publications/newsletter/c/10834763/files/976d878d6b8f43e7ab5f84963ab28f64.html', publisher: 'Shanghai Stock Exchange', accessedAt: '2026-10-29' },
      { title: 'STAR 50 Set for a Material Adjustment, Effective from September 14', url: 'https://english.sse.com.cn/news/newsrelease/voice/c/c_20260901_10830946.shtml', publisher: 'Shanghai Stock Exchange', accessedAt: '2026-10-29' },
      { title: 'US futures and Asian stocks advance following a rally on Wall Street', url: 'https://apnews.com/article/088e6d5a0e6df20d3d8614c7f7f82baa', publisher: 'Associated Press', accessedAt: '2026-10-29' },
        ],
        slug: 'bourse-chinoise-repli-du-star-50-et-ia', title: 'Bourse chinoise : ce que dit vraiment le repli du STAR 50', description: 'Analysez le périmètre de l’indice et distinguez un mouvement boursier des conclusions sur l’adoption de l’IA.', category: 'Veille & enjeux',
        introduction: 'L’actualité boursière chinoise a été présentée comme un signal sur la bulle de l’IA. Pour l’interpréter, il faut d’abord identifier l’indice concerné et distinguer la variation des cours d’une preuve sur l’adoption ou les performances de la technologie.',
        sections: [
          { title: 'Identifier l’indice et la période', paragraphs: [
            'Le STAR 50 suit 50 valeurs sélectionnées parmi les titres du STAR Market selon leur capitalisation et leur liquidité. Reuters rapporte le 26 octobre un recul d’environ 40 % en moins de quatre mois. Le récit mentionne des inquiétudes sur les valorisations, la demande future et l’export, sans identifier de déclencheur unique.',
            'Les statistiques de la Bourse de Shanghai donnent une baisse de 9,17 % en septembre par rapport au mois précédent. Cette mesure mensuelle porte sur une fenêtre différente du recul de plusieurs mois rapporté par la presse.',
          ], sourceUrls: ['https://english.sse.com.cn/indices/indices/list/indexmethods/c/000688_000688hbooken_EN.pdf', 'https://english.sse.com.cn/news/publications/newsletter/c/10834763/files/976d878d6b8f43e7ab5f84963ab28f64.html', 'https://www.marketscreener.com/news/in-china-the-ai-bubble-has-already-burst-ce785cdcda89f027'] },
          { title: 'Ne pas appeler cela un flash crash', paragraphs: [
            'Un flash crash désigne une chute très rapide sur une courte période, parfois suivie d’une reprise ou d’une dislocation anormale. L’article cité décrit un recul sur plusieurs mois ; il n’établit pas un épisode intrajournalier de ce type.',
            'Le STAR 50 ne représente pas toutes les entreprises chinoises ni l’ensemble du marché. Dans son point de marché du 27 octobre, l’AP signalait un recul d’environ 0,1 % du Shanghai Composite.',
          ], sourceUrls: ['https://apnews.com/article/088e6d5a0e6df20d3d8614c7f7f82baa'] },
          { title: 'Distinguer causes évoquées et causes démontrées', paragraphs: [
            'Les explications d’un mouvement de marché doivent rester prudentes : une corrélation avec l’actualité du secteur ne démontre pas une cause. Les prix intègrent des anticipations, des transactions et des conditions propres au marché, qui ne se lisent pas dans un indice seul.',
            'L’indice a aussi changé de composition : la Bourse de Shanghai a annoncé le remplacement de cinq constituants, effectif le 14 septembre 2026. Toute lecture d’une série doit donc tenir compte de sa méthode et de ses membres. Une correction financière peut traduire un ajustement des attentes ou du risque sans démontrer l’échec d’une technologie ou d’un secteur entier.',
          ], sourceUrls: ['https://english.sse.com.cn/news/newsrelease/voice/c/c_20260901_10830946.shtml'] },
          { title: 'Ce qu’une entreprise peut en retenir', paragraphs: [
            'Pour un dirigeant, la question utile n’est pas de prédire la prochaine séance. C’est de séparer l’adoption concrète de l’IA des récits de marché : quels processus sont améliorés, quel coût total est engagé, quelles dépendances fournisseurs existent et quel plan reste viable si les prix ou les offres changent ?',
            'Suivez des indicateurs opérationnels — qualité, temps gagné, coûts, incidents et adoption par les équipes — plutôt que des valorisations boursières comme preuve de valeur d’usage. L’événement fournit un rappel sur l’incertitude des anticipations. Il ne constitue ni une prévision financière ni une preuve que l’IA cesse de progresser.',
            'La composition sectorielle mérite la même prudence. Le STAR 50 regroupe des entreprises technologiques et industrielles, mais le nom de l’indice ne signifie pas que chaque société est une entreprise d’IA ni que son cours mesure directement l’usage de modèles. Pour interpréter un graphique, vérifiez la méthodologie, les constituants et la période de référence avant de lui donner une lecture économique.',
            'Les articles de presse constituent un point de départ, mais un tableau de bord de décision devrait conserver les données de l’indice et la date de consultation. Les marchés évoluent et les chiffres sont révisés ou recopiés avec des fenêtres différentes. Une référence datée évite de mélanger les performances mensuelles, depuis le début de l’année et depuis un sommet.',
            'Exemple fictif : une PME hésite à renouveler un outil de tri des demandes après le recul du STAR 50. Son comité examine plutôt le pilote : volume traité, temps de revue, erreurs corrigées, coûts d’intégration et incidents. Si le test montre un gain fiable sur un flux borné, elle peut prolonger l’essai sous surveillance ; sinon, revoir le flux ou l’arrêter. L’indice ne remplace pas ces éléments internes.',
          ], checklist: ['Quel indice, instrument et intervalle sont concernés ?', 'Les causes sont-elles observées ou seulement évoquées ?', 'Quelle période et quel indice les chiffres décrivent-ils ?', 'Quels indicateurs décrivent la valeur dans mon activité ?'] },
        ],
        takeaway: 'La variation d’un indice ne démontre pas à elle seule une cause technologique. Pour vos décisions IA, comparez les investissements à des résultats d’usage, de qualité et de coût que votre équipe peut vérifier.',
        service: { href: '/pilotage-projet-complexe/', label: 'Découvrir le pilotage de projet' },
      },
      en: {
        sources: [
      { title: 'In China, the AI bubble has already burst', url: 'https://www.marketscreener.com/news/in-china-the-ai-bubble-has-already-burst-ce785cdcda89f027', publisher: 'Reuters (syndicated by MarketScreener)', accessedAt: '2026-10-29' },
      { title: 'Methodology of SSE Science and Technology Innovation Board 50 Index', url: 'https://english.sse.com.cn/indices/indices/list/indexmethods/c/000688_000688hbooken_EN.pdf', publisher: 'Shanghai Stock Exchange', accessedAt: '2026-10-29' },
      { title: 'SSE Newsletter — September 2026', url: 'https://english.sse.com.cn/news/publications/newsletter/c/10834763/files/976d878d6b8f43e7ab5f84963ab28f64.html', publisher: 'Shanghai Stock Exchange', accessedAt: '2026-10-29' },
      { title: 'STAR 50 Set for a Material Adjustment, Effective from September 14', url: 'https://english.sse.com.cn/news/newsrelease/voice/c/c_20260901_10830946.shtml', publisher: 'Shanghai Stock Exchange', accessedAt: '2026-10-29' },
      { title: 'US futures and Asian stocks advance following a rally on Wall Street', url: 'https://apnews.com/article/088e6d5a0e6df20d3d8614c7f7f82baa', publisher: 'Associated Press', accessedAt: '2026-10-29' },
        ],
        slug: 'china-stock-market-star-50-ai-correction', title: 'China’s market: what the STAR 50 decline actually tells us', description: 'Understand the index behind the headline and separate market movements from conclusions about AI adoption.', category: 'News & implications',
        introduction: 'The Chinese market story has been framed as a signal about an AI bubble. To assess it, first identify the index involved and separate a share-price move from evidence about technology adoption or performance.',
        sections: [
          { title: 'Identify the index and period', paragraphs: [
            'The STAR 50 tracks 50 securities selected from Shanghai’s STAR Market by market capitalisation and liquidity. Reuters reported on 26 October that the index had fallen about 40% in less than four months. The report mentions concerns about valuations, future demand and exports, but identifies no single trigger.',
            'Shanghai Stock Exchange data shows a 9.17% decline in September compared with the previous month, a different window from the multi-month fall reported in the press.',
          ], sourceUrls: ['https://english.sse.com.cn/indices/indices/list/indexmethods/c/000688_000688hbooken_EN.pdf', 'https://english.sse.com.cn/news/publications/newsletter/c/10834763/files/976d878d6b8f43e7ab5f84963ab28f64.html', 'https://www.marketscreener.com/news/in-china-the-ai-bubble-has-already-burst-ce785cdcda89f027'] },
          { title: 'Do not call it a flash crash', paragraphs: [
            'A flash crash is a very rapid short-period drop, sometimes followed by a recovery or abnormal market dislocation. The report describes a decline over several months; it does not establish an intraday event of that kind.',
            'The STAR 50 does not represent every Chinese company or the whole market. AP’s 27 October market report noted a decline of about 0.1% in the Shanghai Composite, a different index and a single-session measure.',
          ], sourceUrls: ['https://apnews.com/article/088e6d5a0e6df20d3d8614c7f7f82baa'] },
          { title: 'Separate reported concerns from established causes', paragraphs: [
            'Market explanations require caution: a correlation with sector news does not establish a cause. Prices reflect expectations, transactions and market conditions that cannot be read from a single index alone.',
            'The index also changed its membership: the Shanghai exchange announced five constituent replacements effective 14 September 2026. Any reading of a time series should account for its methodology and members. A financial correction may reflect changing expectations or risk without demonstrating that an entire technology or sector has failed.',
          ], sourceUrls: ['https://english.sse.com.cn/news/newsrelease/voice/c/c_20260901_10830946.shtml'] },
          { title: 'What a business can take from it', paragraphs: [
            'For a business leader, the useful question is not how to predict the next session. It is how to separate practical AI adoption from market narratives: which processes improve, what total cost is committed, which vendor dependencies exist and what plan remains viable if prices or offers change?',
            'Track operational measures—quality, time saved, cost, incidents and team adoption—instead of treating stock valuations as proof of user value. The episode is a reminder that expectations are uncertain. It is neither a financial forecast nor evidence that AI has stopped progressing.',
            'Sector composition deserves the same care. The STAR 50 contains technology and industrial companies, but its name does not mean every constituent is an AI company or that its price directly measures model adoption. Before drawing an economic conclusion from a chart, check the methodology, members and reference period.',
            'Fictional example: a small firm considers renewing a request-triage tool after the STAR 50 decline. Its team reviews the pilot instead: volume handled, review time, corrected errors, integration cost and incidents. If the trial shows a reliable gain on a bounded workflow, it can extend the trial with monitoring; otherwise, revise the workflow or stop. The index cannot substitute for this internal evidence.',
          ], checklist: ['Which index, instrument and interval are involved?', 'Are causes observed or merely reported as concerns?', 'Which index and period does the figure describe?', 'Which measures describe value in my business?'] },
        ],
        takeaway: 'An index movement alone does not establish a technological cause. For AI decisions, compare investment with usage, quality and cost outcomes your team can verify.',
        service: { href: '/en/project-leadership/', label: 'Explore project leadership' },
      },
    },
  },
];
