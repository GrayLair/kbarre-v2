# Recherche préalable : des ressources aux angles d'articles

Consultation du 29 octobre 2026. La recherche répond à la demande sur les familles de sources et les recommandations publiques ; elle répond partiellement à l'analyse des contenus vidéo, dont les transcriptions n'ont pas été obtenues. Elle ne prétend pas observer les habitudes privées des lecteurs.

## Corpus consulté avant rédaction

- [OpenAI et Anthropic](BLOG-110-LABS.md) : guides de conception, outils, contexte, skills, évaluations, systèmes multi-agents et tâches longues, avec cinq fils Reddit et leurs objections.
- [Microsoft et GitHub Copilot](BLOG-110-COPILOT.md) : quinze documents officiels distinguant M365, Copilot Studio et VS Code, six discussions Reddit, puis croisement avec les deux laboratoires.
- [AI Explained et recommandations de lecteurs](BLOG-110-READERS.md) : dix titres observés, neuf fils publics et les destinations recommandées. Les index tiers et les pages inaccessibles sont signalés.

Le parcours forme un corpus de recommandations documentées, pas un classement de fournisseurs ni une enquête représentative. Les billets d'ingénierie officiels sont des sources primaires sur leurs méthodes et cas internes ; leurs résultats commerciaux ou expérimentaux ne sont pas des garanties indépendantes.

## Conclusions utilisables

1. **Architecture proportionnée — établi comme convergence de recommandations, pas comme résultat universel.** OpenAI et Anthropic recommandent une progression depuis une solution simple, avec complexité ajoutée si l'évaluation la justifie. [Guide OpenAI — Tier 1](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/), [Building effective agents — Tier 1](https://www.anthropic.com/research/building-effective-agents). Les textes développeront des décisions concrètes : workflow, agent unique, délégation et coût de coordination.
2. **Contrôler les effets au-delà des instructions — établi comme convergence de guidance.** La documentation Microsoft et celle de Claude Code séparent les consignes interprétées des permissions et contrôles exécutés. [Permissions VS Code — Tier 1](https://code.visualstudio.com/docs/agents/run/approvals), [Claude Code — Tier 1](https://code.claude.com/docs/en/best-practices). Chaque produit garde ses mécanismes propres ; aucune limite de tenant ou de licence n'est transposée à un autre.
3. **Évaluer l'état final et le parcours — établi comme convergence méthodologique.** Les traces, appels d'outils, résultats du système et régressions complètent la réponse finale. [Évaluations Anthropic — Tier 1](https://www.anthropic.com/research/demystifying-evals-for-ai-agents), [Checklist Microsoft — Tier 1](https://learn.microsoft.com/en-us/agents/agent-evaluation/evaluation-checklist). Les articles proposeront des protocoles locaux plutôt que des chiffres de réussite inventés.
4. **La communauté apporte des questions de terrain — constat limité au corpus.** Les fils relevés signalent des problèmes de permissions cumulées, différences entre test et version publiée, instructions ignorées, définition trop large d'agent et manque de détails sur le déploiement. [Exemple Copilot — Tier 3](https://www.reddit.com/r/copilotstudio/comments/1tc3iwa/copilot_studio_evaluation_tool_vs_real_copilot/), [discussion du guide OpenAI — Tier 3](https://www.reddit.com/r/AI_Agents/comments/1k590pq/a_practical_guide_to_building_agents/). Ces témoignages deviennent des hypothèses à tester, pas des taux d'incident.

## Prolonger les recommandations plutôt qu'énumérer des noms

Le fil Reddit [« What's your best source of news, info and examples? » — Tier 3](https://www.reddit.com/r/singularity/comments/1ldna8m/whats_your_best_source_of_news_info_and_examples/) recommande notamment Simon Willison, Dwarkesh, Hard Fork et AI Explained. Les pages de destination et limites d'accès sont documentées dans le relevé lecteurs. La synthèse a prolongé la recommandation de Simon Willison jusqu'à son [guide Agentic Engineering Patterns — source primaire sur sa pratique](https://simonwillison.net/guides/agentic-engineering-patterns/), ouvert directement : il réunit des chapitres sur Git, les sous-agents, la vérification et la compréhension du code. Cela nourrit les articles sur revue, passation et fiabilité ; ce n'est pas un benchmark multi-outils.

La [page du podcast officiel AI Explained](https://podcasts.apple.com/us/podcast/ai-explained-official-podcast/id1776606099), ouverte directement dans la synthèse, contient les descriptions et liens de sources des épisodes du 12 et du 1er octobre. Elle améliore la traçabilité au-delà de l'index tiers : les épisodes renvoient à des publications des laboratoires, des manuscrits, des analyses et des controverses. Ces descriptions constituent une source primaire sur la sélection éditoriale du créateur, pas une transcription de ses arguments. Les affirmations sur les modèles ne seront reprises qu'après lecture du document primaire pertinent.

## Sources spécialisées à compléter selon les lots

Les blogs d'IA ne suffisent pas pour décrire SQLite, le réseau Windows, le SEO ou les droits d'auteur. La première passe a ouvert la [documentation WAL de SQLite — Tier 1](https://www.sqlite.org/wal.html), le [guide Google sur les fonctionnalités génératives de Search — Tier 1](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) et le [rapport CSPLA du 16 juillet 2026 — Tier 1, analyse institutionnelle et non texte législatif](https://www.culture.gouv.fr/nous-connaitre/organisation-du-ministere/conseil-superieur-de-la-propriete-litteraire-et-artistique-cspla/travaux-et-publications-du-cspla/missions-du-cspla/publication-du-rapport-de-mission-sur-le-statut-des-productions-de-l-intelligence-artificielle). Chaque lot commencera par les sources primaires propres à ses sujets, avant de rédiger ses textes.

Une ancienne URL Google `ai-features` a renvoyé 404 ; le guide actuel ci-dessus a été récupéré. Les liens inaccessibles ne serviront pas de preuve technique.

## Effets sur la sélection et la rédaction

La [sélection de 80 angles](../BLOG-SELECTION-80.json) transforme les idées du backlog en problèmes distincts. Les sujets sur frameworks, instructions et catalogue de skills incorporent explicitement les questions de portabilité, de complexité et de contrôles soulevées par la recherche. Les sujets techniques et créatifs gardent leurs propres sources et ne recevront pas artificiellement une référence à un fournisseur IA.

Chaque nouveau texte doit apporter une grille, une procédure, un exemple explicite ou une décision que le lecteur peut reprendre. Les exemples fictifs seront marqués comme tels. Aucun récit à la première personne ni résultat client ne sera déduit du corpus. Les textes restent en revue avant vérification des affirmations, des sources, du rendu et des traductions.

## Lacunes et incertitudes

- Pas de visionnage intégral ni de transcription AI Explained ; titres, descriptions et liens sont distingués.
- Échantillon Reddit opportuniste et surtout anglophone ; ni popularité mesurée ni suivi de personnes.
- Certains fils ou pages de recommandations sont limités par l'accès. Le relevé conserve ces échecs au lieu d'en inventer le contenu.
- Les sources officielles peuvent changer ; les faits volatils devront garder leur périmètre et leur date, ou être évités.
- Les propositions juridiques d'un rapport ne constituent pas une règle de droit adoptée. La publication du sujet sur les droits nécessite une attention particulière au pays et au statut des sources.

Méthode : trois collecteurs indépendants Luna/high, recherche et ouverture de pages, classification des sources, suivi des liens recommandés, puis lecture et synthèse par la lane principale avant les lots de rédaction.
