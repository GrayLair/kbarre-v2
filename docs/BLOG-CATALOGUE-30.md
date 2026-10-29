# Catalogue du blog — 30 articles

Catalogue préparé le 29 octobre 2026. Les trente articles possèdent chacun une version française et une adaptation anglaise, soit soixante routes de lecture. Les trois articles de la première série sont conservés.

La [demande initiale](BLOG-ROADMAP-30.md) a été consignée et poussée avant la recherche et la rédaction de cette extension. La [veille AI Explained](BLOG-VEILLE-AI-EXPLAINED.md) documente les titres consultés et vingt rebonds éditoriaux.

Les vingt-sept nouveaux articles contiennent au moins 600 mots de prose en français et 500 en anglais, hors titres de sections et métadonnées. Le corpus complet représente 19 659 mots en français et 15 739 en anglais. Le nombre de mots vérifie la profondeur minimale ; il ne remplace pas la relecture éditoriale.

| N° | Titre français | Titre anglais | Thème | Mots FR / EN | État |
|---:|---|---|---|---:|---|
| 1 | Le craftsmanship change de terrain, pas de valeur | Craftsmanship moves to new ground | Pratiques & équipes | 694 / 558 | review |
| 2 | Des POC utiles sans détourner les sprints de développement | Useful prototypes without pulling developers off their sprint | Pratiques & équipes | 642 / 552 | review |
| 3 | R&D avec l’IA : remplacer les intuitions par des expériences | AI R&D: replace intuition with experiments | Pratiques & équipes | 655 / 551 | review |
| 4 | Concevoir un skill IA que l’on retrouve au bon moment | Design an AI skill that appears at the right moment | Pratiques & équipes | 625 / 519 | review |
| 5 | Manager avec l’IA : écouter avant de prescrire | Managing AI adoption: listen before prescribing | Pratiques & équipes | 672 / 555 | review |
| 6 | Quel langage choisir avec une IA qui sait coder ? | Which language should you choose when AI can code? | Pratiques & équipes | 622 / 502 | review |
| 7 | L’IA rend l’assembleur plus accessible, pas plus simple | AI makes assembly more accessible, not simpler | Pratiques & équipes | 634 / 513 | review |
| 8 | CMS ou site statique : choisir selon qui entretient le contenu | CMS or static site: choose for the people maintaining content | Web & produits | 728 / 579 | review |
| 9 | Une application métier peut devenir une nouvelle porte d’entrée | A business application can become a new entry point | Web & produits | 656 / 529 | review |
| 10 | API ou abonnement IA : comparer le coût réel d’un usage | AI API or subscription: compare the real cost of use | Architecture & coûts | 733 / 613 | review |
| 11 | Context caching : préfixe réutilisé, mémoire ou RAG ? | Context caching: reusable prefix, memory or RAG? | Architecture & coûts | 791 / 654 | review |
| 12 | Router les modèles selon la tâche, pas selon une étiquette | Route models by task, not by label | Architecture & coûts | 691 / 512 | review |
| 13 | Connaissances métier : prompt, RAG ou fine-tuning ? | Business knowledge: prompt, RAG or fine-tuning? | Architecture & coûts | 675 / 537 | review |
| 14 | Benchmark IA : ce qu’il mesure et ce qu’il ne prouve pas | AI benchmarks: what they measure and what they do not prove | IA & qualité | 680 / 528 | review |
| 15 | Long contexte : mesurer l’usage, pas seulement la capacité annoncée | Long context: measure use, not just the advertised limit | IA & qualité | 687 / 540 | review |
| 16 | Coût unitaire d’un agent : compter le résultat accepté | Agent unit economics: count the accepted result | Architecture & coûts | 679 / 519 | review |
| 17 | Modèles locaux ou hébergés : choisir avec leurs contraintes | Local or hosted models: choose with their constraints in view | Architecture & coûts | 668 / 546 | review |
| 18 | Intégrer MCP : connecter un outil ne lui donne pas votre confiance | MCP integration: connecting a tool does not make it trusted | Architecture & sécurité | 675 / 516 | review |
| 19 | Recherche automatisée : ce que les tests prouvent vraiment | Automated research: what do the tests actually establish? | Veille & enjeux | 708 / 549 | review |
| 20 | Amélioration récursive de l’IA : mesurer les progrès sans confondre les boucles | Recursive AI improvement: measure progress without conflating loops | Veille & enjeux | 723 / 536 | review |
| 21 | Sécuriser un agent IA face au contenu non fiable | Securing AI agents against untrusted content | Veille & enjeux | 651 / 546 | review |
| 22 | Agents qui utilisent un ordinateur : où placer les contrôles ? | Computer-use agents: where should checkpoints go? | Veille & enjeux | 672 / 535 | review |
| 23 | Voix, images et vidéo : élargir les entrées de l’IA sans perdre le contrôle | Voice, images and video: broaden AI inputs without losing control | Veille & enjeux | 673 / 547 | review |
| 24 | Provenance d’un contenu IA : connaître l’origine ne prouve pas la vérité | AI content provenance: knowing the origin does not prove truth | Veille & enjeux | 682 / 526 | review |
| 25 | Petits modèles IA : quand une solution ciblée suffit | Small AI models: when a focused solution is enough | Veille & enjeux | 696 / 557 | review |
| 26 | Raisonnement IA : comment rendre visibles les limites | AI reasoning: how to make its limits visible | Veille & enjeux | 677 / 538 | review |
| 27 | Bourse chinoise : ce que dit vraiment le repli du STAR 50 | China’s market: what the STAR 50 decline actually tells us | Veille & enjeux | 656 / 514 | review |
| 28 | Agents IA : que vérifier avant de livrer ? | AI agents: what should you verify before delivery? | IA & qualité | 439 / 350 | review |
| 29 | Reprendre un projet numérique sans repartir de zéro | Resuming a digital project without starting over | Pilotage de projet | 415 / 340 | review |
| 30 | Refonte Web : commencer par les contenus et les parcours | Website redesign: start with content and user journeys | Web & contenus | 460 / 378 | review |

## Organisation des sources

Les contenus sont répartis entre `src/data/journal/practice.ts`, `architecture.ts`, `news.ts` et `existing.ts`. Les références publiques figurent dans chaque version linguistique et sont reliées aux sections factuelles. L’inspiration vidéo est distincte de ces références. Les sources privées ne font pas partie du contenu du blog.

## Points éditoriaux sensibles

- Le craftsmanship est défendu comme une pratique du cadrage, des skills, de l’environnement de travail et de la vérification, sans prétendre que la génération de code suffit.
- L’adoption et la perte de sens sont traitées comme des situations à examiner, sans attribuer une faible adoption à toutes les équipes. Les études citées gardent leur périmètre.
- L’assistance à l’assembleur ne supprime pas les contraintes d’ABI, de mémoire ou de mesure. Aucun langage n’est déclaré universellement supérieur à l’ère de l’IA.
- Les offres d’abonnement, crédits et API sont vérifiées dans les conditions actuelles ; aucun tarif dynamique n’est transformé en promesse permanente. Les exemples de coûts sont des scénarios explicitement hypothétiques.
- Le caching distingue préfixe réutilisé, mémoire applicative et recherche documentaire, avec coûts d’écriture, de lecture, de stockage et conditions propres aux fournisseurs.
- Pour la Chine, les sources consultées établissent une correction du STAR 50 sur plusieurs mois, rapportée les 26–27 octobre. Le texte ne prétend pas avoir établi un flash crash intrajournalier, une cause unique ou un montant de capitalisation dont le périmètre serait incertain.

## Relecture et mise en ligne

Tous les articles restent en revue. `CONTENT_PREVIEW=true` génère les soixante pages d’articles en local ; le build de production conserve leur exclusion tant que la publication n’a pas été approuvée. Voir [les règles éditoriales](EDITORIAL.md) pour le contrôle, la date réelle de publication et le changement de statut.

Contrôles du catalogue : `npm run check:journal`, puis `npm run check` et builds de production et de prévisualisation. Les contrôles de rendu, de liens et de références doivent porter sur l’état final proposé dans la PR.
