# Contenus et blog

Le contrat éditorial est défini dans les issues [#19](https://github.com/GrayLair/kbarre-v2/issues/19), [#21](https://github.com/GrayLair/kbarre-v2/issues/21) et [#23](https://github.com/GrayLair/kbarre-v2/issues/23). Les preuves détaillées restent dans le registre privé, hors de ce dépôt public.

## Structure

- `src/data/content.ts` décrit l’enveloppe commune : type, langue, clé de traduction, statut et métadonnées SEO.
- `src/data/journal.ts` assemble les articles répartis dans `src/data/journal/` par famille éditoriale. Les types partagés sont définis dans `src/data/journal-types.ts`. Un identifiant stable relie les versions FR/EN ; les slugs et textes restent propres à chaque langue.
- Les composants `JournalIndex` et `JournalArticle` présentent ces données dans les deux langues. Les chemins sont ajoutés au mapping de langues depuis les mêmes données.
- Les pages existantes conservent leurs URLs. La migration globale de la route anglaise est un chantier distinct, suivi dans #22.

## Prévisualisation et publication

Les articles préparés sont au statut `review`. Ils ne sont pas générés par le build de production et sont exclus du sitemap. Le blog affiche un message d’attente tant qu’aucun article n’est publié. La première sélection reste décrite dans le [catalogue de 30 articles](BLOG-CATALOGUE-30.md) ; la [nouvelle feuille de route](BLOG-ROADMAP-110.md) porte la cible à 110 avec 80 textes supplémentaires, documentés dans le [catalogue de l'extension](BLOG-CATALOGUE-110.md).

Pour prévisualiser les articles en local sous PowerShell :

```powershell
$env:CONTENT_PREVIEW = 'true'
npm run dev
```

Ils apparaissent sur `/blog/` et `/en/blog/` avec une indication de prévisualisation et `noindex`. Leurs pages ne contiennent aucune date de publication ni donnée structurée `BlogPosting` avant publication.

Pour valider la version statique de prévisualisation :

```powershell
$env:CONTENT_PREVIEW = 'true'
npm run check
npm run check:journal
npm run build
```

Après revue humaine du rendu, des affirmations et des deux versions linguistiques, passer l’article à `published` et renseigner `publishedAt` à la date réelle au format `YYYY-MM-DD`. La génération de routes, le sitemap, les métadonnées et les liens de langue suivent ces données. Ne pas utiliser la date de préparation comme date de publication.

Pour revenir au build de production :

```powershell
Remove-Item Env:CONTENT_PREVIEW -ErrorAction SilentlyContinue
npm run build
```

Le build régénère `src/styles/global.inline.css` à partir de `global.css`. Relire et conserver les deux fichiers lorsqu’un changement de style est intentionnel.

## Navigation et références

L’index rend tous les articles dans son HTML. Avec JavaScript, une recherche sans distinction d’accents, un filtre par thème et une pagination de neuf articles facilitent la lecture. Les paramètres `q`, `category` et `page` conservent l’état dans l’URL. Sans JavaScript, tous les articles restent accessibles.

Chaque nouvel article comporte des références publiques propres à chaque langue. Les sections factuelles peuvent indiquer des `sourceUrls` qui renvoient à ces références ; `npm run check:journal` contrôle leur correspondance. Les trois premiers textes de pratique conservent leur forme initiale et leur périmètre de retour d’expérience.

Les pistes AI Explained sont enregistrées séparément dans `src/data/journal/inspiration.ts` et [documentées](BLOG-VEILLE-AI-EXPLAINED.md). Elles décrivent des rebonds éditoriaux à partir de titres observés, sans attribuer nos analyses à l’auteur des vidéos. Les sources factuelles restent distinctes. Les articles suggèrent trois prolongements de lecture, en privilégiant leur thème.

## Relecture

Chaque article doit avoir un sujet précis, un apport pratique, une hiérarchie de titres cohérente, une description SEO et une version anglaise relue. Vérifier les liens, les changements de langue, le rendu mobile et le parcours vers le service associé. Le temps de lecture est une estimation calculée sur le texte, à 200 mots par minute.

Publier des capacités et principes génériques autorisés, ou le cas du site lui-même. Ne pas copier de noms de projets privés, extraits, identifiants, prompts, procédures protégées ou chiffres internes. L’accès à une source ne constitue pas une autorisation de publication. Un ticket de planification ne prouve pas une réalisation livrée.

La série contient 110 articles distincts, avec autant d'adaptations anglaises. La [sélection structurée](BLOG-SELECTION-80.json) réserve les identifiants des 80 nouveaux textes et leur rattachement au backlog. `npm run check:journal` vérifie le total, leur présence, les 220 routes, les identifiants, slugs, sources et la profondeur minimale. Chaque texte de l'extension comporte au moins cinq sections, trois références et des citations dans les sections factuelles. Ces seuils ne remplacent pas la relecture : la qualité d'un article dépend de sa précision et de son apport, pas seulement de sa longueur.

La [synthèse de recherche préalable](research/BLOG-110-SYNTHESE.md) et les dossiers par lot tracent les sources consultées, leurs limites et les recommandations publiques. Reddit apporte des questions et des pistes de lecture ; les faits techniques remontent aux sources primaires. Les billets de fournisseurs et leurs cas internes restent attribués à leurs auteurs. Les sources spécialisées sont complétées avant la rédaction de chaque lot.

Le catalogue se régénère avec `node scripts/build-journal-catalogue.mjs`. La publication et la clôture des sujets GitHub restent distinctes du contrôle de contenu.
