import { readFile, writeFile } from 'node:fs/promises';
import { journalEntries, journalPath } from '../src/data/journal.ts';

const selection = JSON.parse(await readFile(new URL('../docs/BLOG-SELECTION-80.json', import.meta.url), 'utf8'));
const countWords = copy => [copy.introduction, copy.takeaway, ...copy.sections.flatMap(section =>
  [...section.paragraphs, ...(section.checklist ?? [])])].join(' ').trim().split(/\s+/u).length;
const escape = value => value.replaceAll('|', '\\|').replaceAll('\n', ' ');
const lookup = new Map(journalEntries.map(entry => [entry.id, entry]));
const total = { fr: 0, en: 0 };
const lines = [
  '# Catalogue des 80 nouveaux articles — 110 au total', '',
  'Demande du 29 octobre 2026. Cette extension conserve les [30 articles précédents](BLOG-CATALOGUE-30.md) et ajoute 80 sujets distincts, chacun en français et en anglais. Les traductions ne sont pas comptées comme des articles supplémentaires.', '',
  'La [recherche préalable](research/BLOG-110-SYNTHESE.md) distingue recommandations officielles, observations communautaires et exemples éditoriaux. La [sélection structurée](BLOG-SELECTION-80.json) conserve les correspondances avec le [backlog fourni](BLOG-BACKLOG-IDEES.md).', '',
  'Les textes sont préparés au statut `review`, sans date de publication. Les chemins ci-dessous sont accessibles dans un build de prévisualisation ; ils ne sont pas publiés par le build de production.', '',
];
let number = 31;
for (const group of selection.groups) {
  lines.push(`## ${group.category}`, '',
    '| N° | Origine | Article français et anglais | Mots FR / EN |',
    '|---:|---|---|---:|');
  for (const item of group.articles) {
    const entry = lookup.get(item.id);
    if (!entry) throw new Error(`Selected article is missing: ${item.id}`);
    const frWords = countWords(entry.copy.fr);
    const enWords = countWords(entry.copy.en);
    total.fr += frWords;
    total.en += enWords;
    lines.push(`| ${number++} | ${item.backlog} | ${escape(entry.copy.fr.title)} — ${escape(entry.copy.en.title)} | ${frWords} / ${enWords} |`);
  }
  lines.push('', 'Angles distinctifs et routes de prévisualisation :', '');
  for (const item of group.articles) {
    const entry = lookup.get(item.id);
    lines.push(`- **${item.id}** : ${item.angle} FR : \`${journalPath(entry, 'fr')}\` ; EN : \`${journalPath(entry, 'en')}\`.`);
  }
  lines.push('', `Dossier de sources du lot : [${group.id.toUpperCase()}](research/BLOG-110-${group.id.toUpperCase()}-SOURCES.md).`, '');
}
lines.push('## Volume et contrôles', '',
  `Les 80 nouveaux articles représentent ${total.fr.toLocaleString('fr-FR')} mots français et ${total.en.toLocaleString('fr-FR')} mots anglais de prose, hors titres, références et métadonnées.`, '',
  '`npm run check:journal` contrôle la présence des 80 sujets, les 110 identifiants, les 220 routes, les deux langues, le statut de publication, les références et les seuils de développement. Le seuil de longueur ne remplace pas la relecture éditoriale ni la vérification des affirmations.', '',
  'Catalogue produit par `node scripts/build-journal-catalogue.mjs` à partir des données et de la sélection. La première sélection reste documentée séparément pour conserver son historique.', '');
await writeFile(new URL('../docs/BLOG-CATALOGUE-110.md', import.meta.url), lines.join('\n'));
console.log(`Catalogue generated: 80 additional articles, ${total.fr} French words, ${total.en} English words.`);
