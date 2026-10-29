# Revue éditoriale — extension du blog à 110 articles

Date : 29 octobre 2026
Dépôt examiné : `kbarre-blog110-review-20261029`
État : avis éditorial de préparation, les 80 nouveaux articles restent au statut `review`.

## Verdict

**Avis favorable à la poursuite de la revue avant publication.** La clarification ROI recommandée lors de la première passe est maintenant intégrée aux deux langues et le calcul révisé est cohérent. Les 80 angles ont un apport pratique identifiable dans les briefs; je n’ai pas trouvé de doublon sémantique évident avec les 30 articles conservés. Les échantillons complets bilingues sont bien appariés, sans récit personnel ou client présenté comme réel dans les cas examinés. Les exemples explicitement fictifs et les réserves empêchent le plus souvent de transformer une méthode proposée en résultat observé.

Ce verdict ne vaut pas approbation de publication ni validation des affirmations techniques, juridiques ou volatiles. Les 160 versions linguistiques n’ont pas toutes été relues intégralement.

## Périmètre effectivement relu

- Les 80 entrées de `.qa-artifacts/editorial-briefs.json` après intégration du groupe sécurité : titres, introduction, résumés d’ouverture des sections, takeaways et références recensées. Cela permet une revue de couverture et de différenciation au niveau des briefs; ces résumés ne remplacent pas le texte complet.
- Un article FR et sa version EN lus intégralement pour chacun des huit groupes : `ai-roi-measurement`, `independent-ai-review`, `agent-instruction-portability`, `hybrid-team-accountability`, `sqlite-wal-concurrency`, `ai-answer-verification`, `seo-migration-controls` et `ai-works-rights-checks`.
- Les 30 titres et descriptions du catalogue antérieur, les règles de `docs/EDITORIAL.md`, la sélection structurée des 80 angles et la synthèse de recherche avec ses trois dossiers préalables LABS, COPILOT et READERS.
- Le catalogue déclare **65 052 mots FR et 54 450 mots EN** pour les 80 nouveaux articles, hors titres, références et métadonnées : moyenne de 813 / 681 mots par version; minimum 625 / 535, maximum 1 123 / 944. Les deux langues dépassent donc les repères de 600 / 500 mots utilisés pour les 27 articles nouveaux du catalogue précédent. Les articles examinés ont cinq sections ou plus et au moins trois références selon la sélection et les briefs. La différence de longueur entre les langues n’indique pas à elle seule une adaptation déficiente; vérifier au rendu qu’aucune nuance ou étape utile ne manque dans la version anglaise.
- L’audit lexical disponible ne rapporte aucun paragraphe exactement répété et aucune paire au-dessus de 5 % de suites de cinq mots partagées. Ce résultat mécanique ne démontre pas l’originalité sémantique.

## Constat éditorial

Les nouveaux sujets proposent généralement une méthode, une grille, une procédure ou une décision réutilisable, et pas seulement un thème général. Les exemples des huit textes examinés sont qualifiés comme fictifs/hypothétiques. Je n’ai repéré dans ces textes échantillonnés ni témoignage client/personnel attribué au site, ni projet privé nommé, ni indicateur présenté comme une observation de Kbarre.

Les distinctions de périmètre sont explicites dans plusieurs paires proches : formation pratique vs choix former/recruter; contrat de travail délégué vs structure d’une équipe hybride; fiabilité de terrain vs sélection de framework; migration SEO vs refonte des contenus/parcours; preuve de provenance vs droits d’usage d’une œuvre générée. Les introductions des briefs aident à séparer les sujets, mais cette différenciation doit aussi rester visible dans les articles complets.

### Revalidation ciblée de l’exemple ROI

La clarification recommandée dans la première passe a été appliquée en français et en anglais. Le texte indique maintenant que la vérification interne est comprise dans les six minutes mesurées, que les 300 € correspondent aux frais externes (120 € d’outil + 180 € de soutien et maintenance), et qu’aucun ROI financier n’est calculé. Les 180 € représentent une valorisation interne des six heures réaffectées; ce montant n’est ni une économie de trésorerie ni un revenu mesuré.

Le calcul révisé est cohérent : 300 × 8 minutes = 40 heures de référence; 300 × 6 minutes = 30 heures après essai; 10 heures théoriquement libérées, dont 6 réaffectées à 30 €/heure = 180 €. Le contrôle interne est compris dans les 6 minutes et n’est pas ajouté une seconde fois aux coûts externes. Le passage maintient aussi que les quatre heures restantes ne sont pas une économie ni une capacité prouvée, et qualifie tous les chiffres de fictifs.

La phrase « Aucun ROI financier n’est calculé ici : les 180 € représentent une valorisation interne de capacité réaffectée, pas une économie de trésorerie ni un revenu mesuré. » et son équivalent anglais lèvent la confusion centrale soulevée précédemment. **Cette correction éditoriale est vérifiée; je n’ai pas trouvé d’autre correction requise dans le périmètre ciblé de cette revalidation.**

### Proximités à conserver à l’œil

- **`owned-website-value`** est voisin des anciens articles sur le choix CMS/site statique et la refonte éditoriale. Son axe doit rester la répartition du rôle entre site, réseaux sociaux et assistants IA, sans refaire un guide de migration ou d’architecture.
- **`independent-ai-review`** est voisin de l’ancien sujet « que vérifier avant de livrer un agent ». L’angle distinctif — indépendance du contexte, méthode, preuves et erreurs corrélées — est clair dans l’échantillon complet et mérite d’être conservé dans les autres sections.
- **`ai-works-rights-checks`** croise l’ancien sujet de provenance des contenus IA. L’article échantillonné traite plutôt de droit applicable, conditions de service et droits de tiers; il sépare bien ces questions. Veiller à ne pas laisser entendre que provenance, permission commerciale ou rapport CSPLA valent autorisation générale.

Je ne recommande pas de fusionner ces sujets sur la base des éléments examinés.

## Provenance et limites de recherche

La synthèse et les dossiers consultés distinguent correctement les publications officielles de fournisseurs, les sources indépendantes ou institutionnelles et les témoignages Reddit. Les articles de fournisseurs sont pertinents pour décrire leur documentation, leurs outils ou leurs recommandations; ils ne constituent pas des comparatifs indépendants. Reddit reste un signal ponctuel sur les questions de lecteurs, pas un sondage. Les vidéos AI Explained sont abordées à partir des titres, descriptions et liens recensés : ni visionnage intégral ni transcription complète ne sont revendiqués. Je n’ai relevé aucune attribution de conclusions non vérifiées à ces vidéos dans les échantillons relus.

La relecture complète de huit articles est un échantillon, non une validation des 160 textes. Les 80 briefs ne montrent pas tout le développement argumentatif, les transitions, les citations en contexte ni les subtilités de traduction. Les affirmations volatiles ou à enjeu juridique et sécurité nécessitent toujours la revue factuelle distincte prévue. Les liens, rendus mobiles, accessibilité et parcours de service ne font pas partie de cette revue éditoriale.

## Recommandation de clôture

Conserver les 80 sujets et l’avis favorable. La clarification ROI est intégrée et revalidée; terminer les revues factuelles, la lecture complète restante, le contrôle des liens et les vérifications de rendu bilingue avant toute publication. Aucun autre article, statut de publication ou fichier n’a été modifié dans cette revalidation.

## Comptage final après ajustements de sources

Le catalogue régénéré à partir des données finales indique **65 059 mots FR et 54 460 mots EN** pour les 80 nouveaux articles. La différence avec les compteurs de la passe précédente vient de la clarification des références et du paragraphe organisationnel de réponse à incident ; elle ne modifie pas les 80 angles ni le statut de préparation. Cette mise à jour de comptage par la lane principale n'étend pas l'échantillon de relecture intégrale.
