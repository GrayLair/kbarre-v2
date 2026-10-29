# Contenus et blog

Le contrat éditorial est défini dans les issues [#19](https://github.com/GrayLair/kbarre-v2/issues/19), [#21](https://github.com/GrayLair/kbarre-v2/issues/21) et [#23](https://github.com/GrayLair/kbarre-v2/issues/23). Les preuves détaillées restent dans le registre privé, hors de ce dépôt public.

## Structure

- `src/data/content.ts` décrit l’enveloppe commune : type, langue, clé de traduction, statut et métadonnées SEO.
- `src/data/journal.ts` contient les articles et leurs adaptations FR/EN. Un identifiant stable relie les deux versions ; les slugs et textes restent propres à chaque langue.
- Les composants `JournalIndex` et `JournalArticle` présentent ces données dans les deux langues. Les chemins sont ajoutés au mapping de langues depuis les mêmes données.
- Les pages existantes conservent leurs URLs. La migration globale de la route anglaise est un chantier distinct, suivi dans #22.

## Prévisualisation et publication

Les trois premiers articles sont au statut `review`. Ils ne sont pas générés par le build de production et sont exclus du sitemap. Le blog affiche un message d’attente tant qu’aucun article n’est publié.

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
npm run build
```

Après revue humaine du rendu, des affirmations et des deux versions linguistiques, passer l’article à `published` et renseigner `publishedAt` à la date réelle au format `YYYY-MM-DD`. La génération de routes, le sitemap, les métadonnées et les liens de langue suivent ces données. Ne pas utiliser la date de préparation comme date de publication.

Pour revenir au build de production :

```powershell
Remove-Item Env:CONTENT_PREVIEW -ErrorAction SilentlyContinue
npm run build
```

Le build régénère `src/styles/global.inline.css` à partir de `global.css`. Relire et conserver les deux fichiers lorsqu’un changement de style est intentionnel.

## Relecture

Chaque article doit avoir un sujet précis, un apport pratique, une hiérarchie de titres cohérente, une description SEO et une version anglaise relue. Vérifier les liens, les changements de langue, le rendu mobile et le parcours vers le service associé. Le temps de lecture est une estimation calculée sur le texte, à 200 mots par minute.

Publier des capacités et principes génériques autorisés, ou le cas du site lui-même. Ne pas copier de noms de projets privés, extraits, identifiants, prompts, procédures protégées ou chiffres internes. L’accès à une source ne constitue pas une autorisation de publication. Un ticket de planification ne prouve pas une réalisation livrée.

Cette première série ne clôture pas le chantier d’environ vingt articles suivi dans #61.
