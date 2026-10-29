import type { JournalEntry } from '../journal-types';

const S = {
  stems: { title: 'How do I get stems?', url: 'https://help.suno.com/en/articles/13925185', publisher: 'Suno Help', accessedAt: '2026-10-29' },
  sunoExport: { title: 'Exporting from Studio', url: 'https://help.suno.com/en/articles/13925249', publisher: 'Suno Help', accessedAt: '2026-10-29' },
  ableton: { title: 'Stem Separation in Ableton Live FAQ', url: 'https://help.ableton.com/hc/en-us/articles/23730994755996-Stem-Separation-in-Ableton-Live-FAQ', publisher: 'Ableton Help', accessedAt: '2026-10-29' },
  sunoCommercial: { title: 'What rights do I have with a paid subscription?', url: 'https://help.suno.com/en/articles/9601665', publisher: 'Suno Help', accessedAt: '2026-10-29' },
  sunoOwnership: { title: 'Does Suno own the music I make?', url: 'https://help.suno.com/en/articles/2416769', publisher: 'Suno Help', accessedAt: '2026-10-29' },
  lyrics: { title: 'Can I use my own lyrics?', url: 'https://help.suno.com/en/articles/2415873', publisher: 'Suno Help', accessedAt: '2026-10-29' },
  adobeVideo: { title: 'Generative Media Tool overview', url: 'https://helpx.adobe.com/premiere/desktop/edit-projects/edit-with-generative-ai/generative-media-tool-overview.html', publisher: 'Adobe Premiere Help', accessedAt: '2026-10-29' },
  credentials: { title: 'Content Credentials overview', url: 'https://helpx.adobe.com/firefly/web/get-started/learn-the-basics/content-credentials-overview.html', publisher: 'Adobe Firefly Help', accessedAt: '2026-10-29' },
  cpi: { title: 'Code de la propriété intellectuelle, article L111-1', url: 'https://www.legifrance.gouv.fr/affichCode.do?cidTexte=LEGITEXT000006069414&idSectionTA=LEGISCTA000006161633', publisher: 'Légifrance', accessedAt: '2026-10-29' },
  painer: { title: 'Judgment in Case C-145/10, Eva-Maria Painer', url: 'https://curia.europa.eu/jcms/upload/docs/application/pdf/2011-12/cp110132en.pdf', publisher: 'Court of Justice of the European Union', accessedAt: '2026-10-29' },
  cspla: { title: 'Rapport de mission sur le statut des productions de l’intelligence artificielle', url: 'https://www.culture.gouv.fr/nous-connaitre/organisation-du-ministere/conseil-superieur-de-la-propriete-litteraire-et-artistique-cspla/travaux-et-publications-du-cspla/missions-du-cspla/publication-du-rapport-de-mission-sur-le-statut-des-productions-de-l-intelligence-artificielle', publisher: 'CSPLA, Ministère de la Culture', accessedAt: '2026-10-29' },
  dsm: { title: 'Directive (EU) 2019/790, Articles 3 and 4', url: 'https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=oj%3AJOL_2019_130_R_0004', publisher: 'EUR-Lex', accessedAt: '2026-10-29' },
  aiAct: { title: 'Regulation (EU) 2024/1689, Article 50', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689', publisher: 'EUR-Lex', accessedAt: '2026-10-29' },
  civil: { title: 'Code civil, article 9', url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006419288', publisher: 'Légifrance', accessedAt: '2026-10-29' },
  images: { title: 'Images Tutorial', url: 'https://www.w3.org/WAI/tutorials/images/', publisher: 'W3C WAI', accessedAt: '2026-10-29' },
  video: { title: 'Planning Audio and Video Media', url: 'https://www.w3.org/WAI/media/av/planning/', publisher: 'W3C WAI', accessedAt: '2026-10-29' },
  captions: { title: 'Understanding SC 1.2.2: Captions (Prerecorded)', url: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded', publisher: 'W3C WAI', accessedAt: '2026-10-29' },
  ogp: { title: 'The Open Graph protocol', url: 'https://ogp.me/', publisher: 'Open Graph protocol', accessedAt: '2026-10-29' },
};

const entry = (id: string, fr: JournalEntry['copy']['fr'], en: JournalEntry['copy']['en']): JournalEntry => ({ id, preparedAt: '2026-10-29', status: 'review', copy: { fr, en } });

export const supplementalMediaEntries: JournalEntry[] = [
  entry('ai-music-creative-role', {
    slug: 'musique-generative-travail-composition', title: 'Musique générative : où reste le travail de composition ?', description: 'Repérer les choix qui donnent une direction à un morceau généré, de l’intention à l’arrangement final.', category: 'Création & médias',
    introduction: 'Une génération peut livrer en quelques instants une voix, une harmonie et une forme déjà reconnaissable. Cela ne répond pas à la question de ce que vous avez voulu faire entendre. Le travail de composition peut se déplacer vers le cadrage, l’écoute critique, l’architecture, la sélection et la transformation du matériau. Ce déplacement n’impose pas un verdict sur la valeur artistique : il invite à décrire concrètement où se trouvent les décisions et comment elles survivent dans le morceau final.',
    sources: [S.lyrics, S.painer, S.cspla], sections: [
      { title: 'Écrire une intention qui contraint le choix', sourceUrls: [S.lyrics.url], paragraphs: [
        '« Faire une chanson entraînante » laisse presque tout ouvert. Décrivez plutôt une scène, le mouvement souhaité et une contrainte audible : une mélodie qui retient son élan, une voix proche, puis une rupture de texture avant le refrain. Le brief devient utile lorsqu’il permet d’expliquer pourquoi une piste est écartée, pas seulement pourquoi elle plaît au premier passage.',
        'Séparez l’idée des références que vous avez le droit d’utiliser. Une ambiance peut se décrire par des propriétés observables — densité, registre, pulsation, contraste — sans demander la copie d’un artiste identifiable. Une consigne solide dit ce que l’auditeur doit percevoir et laisse plusieurs chemins pour y parvenir.'
      ] },
      { title: 'Écouter avec des questions différentes', paragraphs: [
        'À la première écoute, notez une impression générale sans chercher immédiatement à réparer le morceau. À la seconde, suivez le récit : qu’est-ce qui change entre le début, le milieu et la fin ? À la troisième, écoutez les détails qui dérangent — une syllabe, un raccord, un instrument qui attire l’attention au mauvais endroit. Trois écoutes guidées révèlent des problèmes différents.',
        'Formulez vos observations sans vocabulaire technique obligatoire. « La voix masque le mot important » aide déjà à prendre une décision. Si vous connaissez le solfège ou le mixage, nommez précisément le phénomène; sinon, une description située dans le temps reste exploitable. Le niveau de jargon ne mesure ni l’intention ni la qualité du jugement.'
      ] },
      { title: 'Construire une forme plutôt que collectionner les versions', sourceUrls: [S.cspla.url, S.painer.url], paragraphs: [
        'Gardez une feuille de montage qui indique les moments retenus et leur fonction : installer un climat, apporter une information, ouvrir une transition ou créer un contraste. Déplacer un refrain, couper une phrase ou combiner des éléments peut révéler une structure que chaque génération isolée ne proposait pas. Chaque choix doit néanmoins s’entendre dans l’œuvre achevée.',
        'Le rapport du CSPLA décrit, comme analyse institutionnelle, plusieurs moments où des choix humains peuvent intervenir : conception, direction de l’outil, puis sélection et intégration. La jurisprudence européenne sur l’originalité parle de choix libres et créatifs. Ce sont des repères pour garder une trace du processus, pas une formule qui confère automatiquement un droit à chaque intervention.'
      ] },
      { title: 'Exercice fictif : créer une progression', paragraphs: [
        'Exemple fictif : pour une séquence de 45 secondes qui introduit un podcast de randonnée, le brief demande un départ calme, un motif reconnaissable, une montée et une fin qui laisse la parole respirer. Après trois propositions, l’équipe retient le motif de la deuxième, le silence de la première et supprime une voix qui surligne le message.',
        'Résultat attendu : une version annotée où chaque passage a une raison de rester, plus une liste des éléments écartés et pourquoi. Le but n’est pas de prétendre que la combinaison est juridiquement originale; c’est de rendre les décisions éditoriales transmissibles et de reprendre le montage sans réécouter toutes les variantes.'
      ] },
      { title: 'Quand cette méthode n’est pas adaptée', paragraphs: [
        'Pour un fond musical temporaire destiné à tester un montage interne, une sélection rapide peut suffire. Une campagne, un générique récurrent ou une distribution commerciale mérite davantage de contrôles : contexte de création, fichiers disponibles, droits contractuels, éléments de tiers et pièces de production. Le degré de documentation devrait suivre l’usage, la durée et l’exposition du morceau.',
        'Ne transformez pas un dossier de décisions en preuve absolue de titularité. Les conditions de l’outil, les droits sur paroles ou échantillons, le droit applicable et l’évaluation d’une œuvre sont distincts. La méthode sert à décider plus lucidement, communiquer la contribution créative et savoir quand demander un avis juridique.'
      ], checklist: ['Quelle évolution l’auditeur doit-il percevoir ?', 'Quels passages retenus portent cette intention ?', 'Les paroles et sources sont-elles autorisées ?', 'Les décisions restent-elles audibles dans le rendu ?'] }
    ], takeaway: 'Écrivez une intention audible, annotez les choix de forme et vérifiez ce qui reste dans l’export final. Cette trace éclaire le processus sans promettre un statut juridique automatique.', service: { href: '/creation-media-ia/', label: 'Découvrir la création média assistée par IA' }
  }, {
    slug: 'generative-music-where-composition-happens', title: 'Generative music: where does composition still happen?', description: 'Trace the decisions that give a generated track direction, from intent to final arrangement.', category: 'Creative media',
    introduction: 'A generation may deliver a recognisable voice, harmony and structure in moments. That does not answer what you wanted the listener to hear. Compositional work can move into framing, critical listening, architecture, selection and transformation of material. This shift does not require a verdict on artistic value. It asks us to describe where decisions actually happen and whether they remain audible in the finished track.',
    sources: [S.lyrics, S.painer, S.cspla], sections: [
      { title: 'Write an intention that constrains choices', sourceUrls: [S.lyrics.url], paragraphs: [
        '“Make an upbeat song” leaves almost everything open. Describe a scene, desired movement and an audible constraint instead: a melody that holds back, an intimate voice, then a change of texture before the chorus. A brief is useful when it explains why one option is rejected, not only why it feels appealing on first listen.',
        'Separate your idea from references you are authorised to use. Describe an atmosphere through observable musical properties—density, register, pulse and contrast—without asking for a copy of an identifiable artist. A strong instruction says what a listener should perceive while leaving several routes to get there.'
      ] },
      { title: 'Listen with different questions', paragraphs: [
        'On the first pass, note an overall impression without immediately trying to repair the track. On the second, follow its story: what changes between the beginning, middle and end? On the third, listen for details that distract—a syllable, a join or an instrument drawing attention to the wrong place. Three guided listens reveal different problems.',
        'Describe observations without assuming technical vocabulary. “The voice hides the important word” is already useful. If you know theory or mixing, name the phenomenon precisely; otherwise, a description tied to a moment can guide a decision. The amount of jargon does not measure the strength of creative judgement.'
      ] },
      { title: 'Build a form instead of collecting versions', sourceUrls: [S.cspla.url, S.painer.url], paragraphs: [
        'Keep an edit sheet that records which moments you retain and what each one does: establish a mood, introduce information, open a transition or create contrast. Moving a chorus, cutting a line or combining elements may reveal a structure that no single generation proposed. Each choice still needs to be audible in the finished work.',
        'The CSPLA report presents, as institutional analysis, several moments where human choices may arise: conception, direction of the tool, then selection and integration. European case law describes originality through free and creative choices. These are reasons to keep process notes, not a formula that automatically grants a right for every intervention.'
      ] },
      { title: 'Hypothetical exercise: create progression', paragraphs: [
        'Hypothetical example: a 45-second introduction for a hiking podcast needs a calm opening, a recognisable motif, a gradual rise and an ending that leaves room for speech. After three candidates, the team keeps the second motif, takes a pause from the first and removes a vocal that overstates the message.',
        'Expected result: an annotated version explaining why each passage remains, plus a short list of discarded elements and reasons. The point is not to claim the combination is legally original. It is to make editorial decisions transferable and resume the edit without replaying every variant.'
      ] },
      { title: 'When this method is not a good fit', paragraphs: [
        'A quick selection may be enough when you need temporary background music for an internal edit. A campaign, recurring theme or commercial release warrants more checks: creation context, available files, contractual rights, third-party material and production records. Documentation should scale with the use, duration and exposure of the track.',
        'Do not turn a decision log into absolute proof of ownership. Tool terms, rights in lyrics or samples, applicable law and the assessment of a work are separate questions. This method supports clearer decisions, communication about creative contribution and recognition of when legal advice is needed.'
      ], checklist: ['What progression should a listener notice?', 'Which passages support that intent?', 'Are lyrics and sources authorised?', 'Are the decisions audible in the final render?'] }
    ], takeaway: 'Write an audible intention, annotate structural choices and check what remains in the final export. This documents the creative process without promising an automatic legal status.', service: { href: '/en/media-creation-ai/', label: 'Explore AI-assisted media creation' }
  }),
  entry('brand-asset-library', {
    slug: 'bibliotheque-medias-marque-web-reseaux', title: 'Décliner sa marque sur le Web et les réseaux avec une bibliothèque de médias', description: 'Organiser formats, recadrages, métadonnées, accessibilité, versions et droits dans un fonds transmissible.', category: 'Création & médias',
    introduction: 'Une bibliothèque de médias n’est pas un dossier rempli de logos et de visuels. Elle aide à retrouver la bonne version, comprendre où elle peut être utilisée et préparer une déclinaison sans dégrader le message. Cette tâche prend de l’importance quand une marque passe du site aux publications sociales, aux vidéos, aux documents et aux aperçus de partage. Une structure modeste peut suffire : métadonnées cohérentes, conventions de nommage et règles de recadrage. Elle ne remplace pas la vérification des licences ni la relecture de chaque support.',
    sources: [S.images, S.ogp, S.credentials, S.video], sections: [
      { title: 'Organiser les médias autour de leurs usages', paragraphs: [
        'Commencez par quelques familles compréhensibles : logos, photographie, illustration, audio, vidéo, modèles et exports de campagne. Ajoutez pour chaque fichier un nom stable, une date, la langue, le propriétaire, le statut d’approbation, les droits, les crédits et les supports permis. Un tag n’aide que si l’équipe sait quand l’ajouter et comment le retrouver.',
        'Évitez un répertoire par canal lorsque le même média sert partout. Reliez plutôt une source maîtresse à des déclinaisons explicitement nommées. Conservez l’original séparément des fichiers recadrés ou compressés pour que le prochain usage ne parte pas d’une version dégradée.'
      ] },
      { title: 'Préparer formats et recadrages', sourceUrls: [S.ogp.url], paragraphs: [
        'Indiquez les dimensions requises à partir des besoins vérifiés des supports et ajoutez la date de référence. Une image carrée, un bandeau large et un format vertical ne partagent pas forcément le même point focal. Fournissez un recadrage validé, ou une zone de protection qui indique les éléments à garder visibles.',
        'Pour les pages partagées, Open Graph définit notamment les métadonnées du titre, de la description et de l’image. Il ne garantit pas une présentation identique dans tous les services, qui peuvent mettre en cache ou imposer leurs propres contraintes. Un test de partage complète donc les champs de la bibliothèque.'
      ] },
      { title: 'Exemple fictif : une campagne à quatre formats', paragraphs: [
        'Exemple fictif : une petite marque prépare un lancement et souhaite un carré social, un bandeau Web, un visuel Open Graph et une vignette vidéo. La personne responsable identifie le fichier maître, note les formats validés, conserve une version sans texte et relie chaque export à la campagne et au statut des droits.',
        'Résultat attendu : un collègue peut ouvrir le bon fichier, voir s’il est approuvé, retrouver le texte alternatif proposé et distinguer le master du recadrage. Si le brief change, la source maîtresse permet de refaire les exports nécessaires au lieu de chercher dans de vieilles pièces jointes.'
      ] },
      { title: 'Inclure accessibilité et provenance', sourceUrls: [S.images.url, S.credentials.url], paragraphs: [
        'Le W3C explique qu’une image informative doit transmettre son information essentielle, qu’une image décorative peut avoir un alt vide et qu’une image fonctionnelle doit décrire sa fonction. La bibliothèque peut noter le rôle prévu, mais le texte alternatif final dépend de la page où l’image apparaît. Évitez de copier mécaniquement le même texte partout.',
        'Pour certains contenus générés, Content Credentials peut conserver des indications de création. Gardez vos propres informations de provenance, car une conversion ou une plateforme peut supprimer les métadonnées. Ces informations ne remplacent ni consentement, ni contrat, ni contrôle d’exactitude.'
      ] },
      { title: 'Définir une règle de cycle de vie', sourceUrls: [S.video.url], paragraphs: [
        'Nommer une personne qui approuve, une échéance de revue et une méthode d’archivage réduit les doublons. Retirez du chemin courant les variantes périmées, mais conservez ce qui explique une diffusion passée ou permet de réutiliser un master autorisé. Décrivez aussi comment corriger un crédit ou une licence expirée.',
        'N’en faites pas un système complexe si une seule personne produit rarement des visuels. Une table indexée et quelques conventions peuvent suffire; la structure devrait coûter moins que le temps perdu à chercher. Testez le transfert : demandez à une personne qui n’a pas créé les fichiers de préparer un export et de retrouver ses droits sans aide.'
      ], checklist: ['Chaque média a-t-il un maître et un statut visibles ?', 'Les formats correspondent-ils à des besoins datés ?', 'Droits, crédits et alt text sont-ils contextuels ?', 'Une autre personne peut-elle trouver et décliner le média ?'] }
    ], takeaway: 'Une bibliothèque utile relie chaque média à son usage, son statut, ses droits et ses déclinaisons. Testez-la par un transfert réel avant d’ajouter catégories ou outils.', service: { href: '/creation-media-ia/', label: 'Découvrir la création média assistée par IA' }
  }, {
    slug: 'brand-media-library-for-web-and-social', title: 'Adapt your brand across web and social with a media library', description: 'Organise formats, crops, metadata, accessibility, versions and rights in an easy-to-handover collection.', category: 'Creative media',
    introduction: 'A media library is not a folder full of logos and images. It helps people find the right version, understand where it can be used and adapt it without weakening the message. This matters when a brand moves from its website to social posts, video, documents and share previews. A modest system may be enough: consistent metadata, naming rules and crop guidance. It does not replace licence checks or review of each medium.',
    sources: [S.images, S.ogp, S.credentials, S.video], sections: [
      { title: 'Organise assets around their uses', paragraphs: [
        'Start with a few categories the team understands: logos, photography, illustration, audio, video, templates and campaign exports. Give each file a stable name, date, language, owner, approval status, rights, credits and permitted uses. A tag only helps when someone knows when to add it and how to find it.',
        'Avoid a separate directory for every channel if the same asset is used in several places. Link derivatives to a clearly named master instead. Keep the original apart from cropped or compressed files so a future use does not start from a degraded version.'
      ] },
      { title: 'Prepare formats and crops', sourceUrls: [S.ogp.url], paragraphs: [
        'Specify dimensions from verified channel needs, with a reference date. A square image, wide banner and vertical format may not share the same focal point. Provide an approved crop or safe area showing which elements must remain visible.',
        'For shared pages, the Open Graph protocol defines metadata including title, description and image. It does not guarantee the same display in every service, which may cache content or impose its own constraints. A share-preview check complements the library fields.'
      ] },
      { title: 'Hypothetical example: one campaign in four formats', paragraphs: [
        'Hypothetical example: a small brand is preparing a launch and needs a square social post, web banner, Open Graph image and video thumbnail. The asset owner identifies the master, records approved formats, keeps a text-free version and links each export to a campaign and rights status.',
        'Expected result: a colleague can open the right file, see whether it is approved, find suggested alt text and distinguish the master from campaign crops. If the brief changes, the master makes it possible to recreate only needed exports instead of searching old email attachments.'
      ] },
      { title: 'Include accessibility and provenance', sourceUrls: [S.images.url, S.credentials.url], paragraphs: [
        'W3C explains that informative images should convey essential information, decorative images may use empty alt text and functional images should describe their purpose. A library can suggest an image’s role, but final alternative text depends on the page. Do not copy identical alt text everywhere.',
        'Content Credentials may preserve creation information for some generated assets. Keep your own provenance records too, since conversion or a platform may remove metadata. Origin information does not replace consent, a contract or an accuracy check.'
      ] },
      { title: 'Set a lifecycle rule', sourceUrls: [S.video.url], paragraphs: [
        'Naming an approver, review date and archive method reduces duplication. Remove outdated variants from the current path, but keep what is needed to explain past publication or reuse an authorised master. Include a correction process when a credit or licence expires.',
        'Do not make the system complex if one person rarely produces visuals. An indexed table and a few conventions may be enough; structure should cost less than searching. Test a handover: ask someone who did not create the files to prepare an export and find its rights without help.'
      ], checklist: ['Does every asset show a master and status?', 'Are formats tied to dated needs?', 'Are rights, credits and alt text contextual?', 'Can another person find and adapt the right asset?'] }
    ], takeaway: 'A useful brand library connects each asset to its use, status, rights and derivatives. Test it through a real handover before adding categories or tools.', service: { href: '/en/media-creation-ai/', label: 'Explore AI-assisted media creation' }
  }),
  entry('ai-works-rights-checks', {
    slug: 'oeuvres-ia-questions-droits-avant-diffusion', title: 'Œuvres et IA : les questions de droits à poser avant diffusion', description: 'Séparer droit français, règles de l’Union, jurisprudence, rapport CSPLA, contrat de plateforme et droits de tiers.', category: 'Création & médias',
    introduction: 'La question « ai-je le droit de publier ? » regroupe plusieurs problèmes différents. Une plateforme peut accorder une permission contractuelle d’usage commercial; le droit d’auteur détermine séparément si une création est protégée et qui peut revendiquer des droits. Les textes sur la fouille de données, les droits des personnes et les contenus trompeurs peuvent aussi intervenir. Une réponse sérieuse commence par séparer ces sources et identifier les faits : outil, version des conditions, matériau fourni, choix humains, public et territoire de publication.',
    sources: [S.cpi, S.painer, S.cspla, S.dsm, S.aiAct, S.sunoCommercial, S.sunoOwnership, S.civil], sections: [
      { title: 'Droit français : commencer par les textes', sourceUrls: [S.cpi.url, S.civil.url], paragraphs: [
        'L’article L111-1 du Code de la propriété intellectuelle prévoit qu’un auteur jouit du droit sur son œuvre de l’esprit du seul fait de sa création. Il ne tranche pas mécaniquement si une sortie générée donnée est une œuvre ni qui en serait l’auteur. Il faut examiner l’originalité reconnue par le droit et les apports concrets dans le résultat.',
        'D’autres règles françaises concernent la vie privée, l’image d’une personne, les marques, les contrats ou les œuvres intégrées. Le Code civil protège le respect de la vie privée; cette référence ne résout pas chaque photographie ou voix. Vérifiez le contexte, les exceptions pertinentes et les textes en vigueur au moment de la publication.'
      ] },
      { title: 'Cadre de l’Union et jurisprudence : ne pas les confondre', sourceUrls: [S.painer.url, S.dsm.url, S.aiAct.url], paragraphs: [
        'Dans l’affaire Painer, la CJUE associe l’originalité à la création intellectuelle propre de l’auteur et à des choix libres et créatifs. L’arrêt concernait des photographies, pas directement l’IA générative. La directive sur le marché numérique encadre, entre autres, certaines opérations de fouille de textes et données avec des conditions et réservations de droits.',
        'L’article 50 du règlement européen sur l’IA traite d’obligations de transparence et de marquage pour certains fournisseurs ou déployeurs. Il ne détermine pas à lui seul le droit d’auteur sur une sortie. Examinez séparément : autorisation des entrées, droits éventuels dans les sorties, droits des personnes représentées et divulgation applicable.'
      ] },
      { title: 'Rapport CSPLA : analyse institutionnelle, pas règle adoptée', sourceUrls: [S.cspla.url], paragraphs: [
        'Le rapport de mission du CSPLA publié le 16 juillet 2026 examine la protection des créations faites avec IA générative et celle de la création face aux contenus générés. Sa notice résume une grille en trois moments — conception et paramétrage, direction et itération, sélection et intégration — à partir de la jurisprudence européenne. C’est une analyse institutionnelle, pas une loi.',
        'Le rapport distingue les productions hybrides qui peuvent, selon les faits et l’originalité, relever du droit d’auteur des productions synthétiques sans intervention humaine significative, qu’il estime étrangères à cette protection. Cette grille n’est pas un jugement universel rendu pour toute image ou musique. N’en déduisez pas qu’une part humaine ou un pourcentage de retouche garantit des droits.'
      ] },
      { title: 'Conditions de service : permission contractuelle distincte', sourceUrls: [S.sunoCommercial.url, S.sunoOwnership.url], paragraphs: [
        'Les pages Suno illustrent pourquoi il faut lire les conditions propres au service : elles décrivent des permissions différentes selon le niveau de compte et le moment où le morceau est créé ou téléchargé. Suno précise aussi qu’une autorisation commerciale ne garantit pas une protection par copyright. D’autres services peuvent utiliser des termes différents.',
        'Archivez les conditions et le compte utilisés, avec la date de création, les fichiers exportés et les autorisations sur les entrées. Une permission contractuelle n’est pas une décision judiciaire, ne neutralise pas nécessairement les droits d’un tiers et peut dépendre du territoire, de l’objet ou d’autres clauses.'
      ] },
      { title: 'Liste de contrôle avant de publier', paragraphs: [
        'Exemple fictif : une agence veut diffuser une illustration créée à partir d’un croquis de son client et d’une photo trouvée sur le Web. Avant publication, elle vérifie la licence de la photo, l’accord du client sur le croquis, les conditions de l’outil à la date d’usage, la présence de personnes reconnaissables, les marques et le canal de diffusion. Si un élément reste incertain, elle remplace la référence ou suspend la publication.',
        'Cette liste est une méthode de tri, pas un avis juridique. Gardez distincts le droit applicable France/UE, la jurisprudence, le rapport d’analyse, le contrat de plateforme, les droits de tiers et les obligations de transparence. Pour une campagne coûteuse ou un usage sensible, obtenez un avis juridique contextualisé plutôt que de vous fier à une formule générale.'
      ], checklist: ['Quel texte ou décision répond à chaque question ?', 'Quelles conditions de service s’appliquaient ?', 'Quels matériaux et personnes identifiables sont présents ?', 'Que faut-il divulguer et quelles preuves conserver ?'] }
    ], takeaway: 'Avant diffusion, séparez droit positif, jurisprudence, analyse CSPLA, contrat du service et droits de tiers. Aucun de ces éléments n’est un laissez-passer universel.', service: { href: '/creation-media-ia/', label: 'Découvrir la création média assistée par IA' }
  }, {
    slug: 'ai-works-rights-questions-before-release', title: 'AI and creative works: rights questions to ask before release', description: 'Separate French law, EU rules, case law, the CSPLA report, platform terms and third-party rights.', category: 'Creative media',
    introduction: '“Can I publish this?” combines several different questions. A platform may grant contractual permission for commercial use; copyright law separately determines whether a creation is protected and who may claim rights. Rules on data mining, people’s rights and misleading content may also matter. A serious answer starts by separating these sources and identifying facts: tool, terms version, supplied material, human choices, audience and publication territory.',
    sources: [S.cpi, S.painer, S.cspla, S.dsm, S.aiAct, S.sunoCommercial, S.sunoOwnership, S.civil], sections: [
      { title: 'French law: start with the legal text', sourceUrls: [S.cpi.url, S.civil.url], paragraphs: [
        'Article L111-1 of the French Intellectual Property Code says an author has rights in a work of the mind from its creation. It does not automatically decide whether a particular generated output is a work or who would be its author. Assess originality under the applicable law and concrete contributions to the result.',
        'Other French rules may concern privacy, a person’s image, trademarks, contracts and incorporated works. The Civil Code protects respect for private life; that reference alone does not resolve every photograph or voice. Check context, relevant exceptions and law in force at publication.'
      ] },
      { title: 'EU framework and case law are different things', sourceUrls: [S.painer.url, S.dsm.url, S.aiAct.url], paragraphs: [
        'In Painer, the Court of Justice links originality to the author’s own intellectual creation and free and creative choices. That case concerned photographs and did not directly decide generative AI. The Digital Single Market Directive sets conditions for certain text-and-data-mining operations, including rights reservations.',
        'Article 50 of the EU AI Act concerns specific transparency and marking duties for providers or deployers. It does not itself determine copyright in an output. Keep questions separate: permission for inputs, possible rights in outputs, rights of depicted people, and applicable disclosure.'
      ] },
      { title: 'CSPLA report: institutional analysis, not an adopted rule', sourceUrls: [S.cspla.url], paragraphs: [
        'Published on 16 July 2026, the CSPLA mission report examines protection for creations made with generative AI and human creation in the face of generated content. Its notice describes three moments—conception and configuration, direction and iteration, selection and integration—drawing on European case law. This is institutional analysis, not legislation.',
        'The report distinguishes hybrid productions that may qualify depending on facts and originality from synthetic outputs without significant human intervention, which it considers outside copyright protection. This is the report’s framework, not a universal judgment for every image or song. Do not turn it into a rule that any human share or percentage of editing guarantees rights.'
      ] },
      { title: 'Service terms: contractual permission is separate', sourceUrls: [S.sunoCommercial.url, S.sunoOwnership.url], paragraphs: [
        'Suno’s help pages show why service-specific terms matter: they describe different permissions depending on account level and when a track was made or downloaded. Suno also says commercial-use permission does not guarantee copyright protection. Other services may use different terms and exceptions.',
        'Keep the applicable terms and account evidence with creation date, exported files and permissions for inputs. A provider’s permission is not a court decision, does not necessarily remove third-party rights and may be limited by territory, purpose or other clauses.'
      ] },
      { title: 'A pre-publication checklist', paragraphs: [
        'Hypothetical example: an agency plans to release an illustration made from a client sketch and a photo found online. It checks the photo licence, client agreement for the sketch, tool terms that applied at the time, identifiable people, trademarks and distribution channel. If one element remains uncertain, it replaces the reference or holds publication.',
        'This is a triage method, not legal advice. Keep separate questions separate: applicable French or EU law, relevant case law, CSPLA analysis, platform contract, third-party rights and transparency duties. For a costly campaign or sensitive use, seek contextual legal advice instead of relying on a universal slogan.'
      ], checklist: ['Which text or decision answers each question?', 'Which service terms applied?', 'Which materials and identifiable people appear?', 'What must be disclosed and what evidence retained?'] }
    ], takeaway: 'Before release, separate law, case law, CSPLA analysis, service terms and third-party rights. None is a universal clearance on its own.', service: { href: '/en/media-creation-ai/', label: 'Explore AI-assisted media creation' }
  }),
  entry('real-or-generated-photos', {
    slug: 'photos-reelles-images-generees-site-professionnel', title: 'Photos réelles ou images générées pour un site professionnel ?', description: 'Choisir la représentation qui convient au message, à la preuve attendue et aux personnes montrées.', category: 'Création & médias',
    introduction: 'Une photographie prise sur place et une image générée peuvent toutes deux attirer l’attention, mais elles ne racontent pas la même chose. La première peut documenter une équipe, un lieu ou un produit; la seconde peut illustrer un concept ou une ambiance qui n’existe pas telle quelle. Le choix part de l’affirmation que le site veut soutenir. Provenance, consentement, accessibilité et transparence se vérifient ensuite comme des dimensions distinctes au lieu de réduire la décision à une comparaison de prix ou de réalisme.',
    sources: [S.civil, S.painer, S.images, S.credentials, S.aiAct], sections: [
      { title: 'Demander ce que l’image affirme', paragraphs: [
        'Si l’image montre les personnes qui fourniront un service, les locaux visitables ou un produit disponible, le public peut la lire comme une preuve. Une représentation générée peut convenir à une métaphore ou un concept, mais devient trompeuse si elle laisse croire à une équipe, un lieu ou un résultat réel qui n’existe pas.',
        'Écrivez une phrase d’usage : « cette image montre l’équipe » ou « cette illustration évoque la sensation de calme recherchée ». Elle clarifie le degré de vérité attendu et aide à rédiger une légende. Une image purement décorative peut n’avoir aucun texte alternatif; le contexte détermine son rôle.'
      ] },
      { title: 'Contrôler personnes, lieu et produit', sourceUrls: [S.civil.url, S.painer.url], paragraphs: [
        'Pour une photo réelle, confirmez qui l’a prise, qui détient les droits et quelle autorisation couvre la publication, le support et la durée. Vérifiez aussi les personnes reconnaissables, l’espace privé et les informations visibles en arrière-plan. Le Code civil protège le respect de la vie privée, tandis que le droit d’auteur du photographe est une autre question.',
        'La CJUE a reconnu qu’un portrait photographique peut relever du droit d’auteur et décrit les choix du photographe. Une image générée ne supprime pas automatiquement les droits liés à une personne ou à une référence incorporée. L’absence de photographe présent ne signifie pas l’absence de contraintes.'
      ] },
      { title: 'Exemple fictif : présenter un lieu de travail', paragraphs: [
        'Exemple fictif : un cabinet de conseil prépare une page qui décrit ses ateliers en présentiel. Il peut photographier une salle réelle après avoir vérifié les participants et autorisations, ou publier une illustration générée évoquant l’idée d’un atelier. Il ne devrait pas montrer une salle imaginaire comme son bureau si cela influence la confiance du visiteur.',
        'Résultat attendu : une image dont la légende et le contexte correspondent à ce qu’elle montre. Si la salle réelle n’est pas disponible, l’illustration peut rester utile sans se faire passer pour un reportage. Ce choix établit une attente juste plutôt que d’exagérer la taille ou la présence de l’organisation.'
      ] },
      { title: 'Préserver accessibilité et provenance', sourceUrls: [S.images.url, S.credentials.url], paragraphs: [
        'Le W3C recommande des alternatives selon le rôle : transmettre l’information d’une image informative, nommer la fonction d’une image cliquable, ou laisser vide le texte alternatif d’une décoration. Décrivez ce que l’image apporte au contenu, pas chaque détail. Une légende et un texte alternatif peuvent remplir des fonctions complémentaires.',
        'Les Content Credentials d’Adobe peuvent fournir des indications de provenance pour certains fichiers, mais leur présence ne certifie ni toutes les étapes ni les droits. Gardez vos propres notes, autorisations et versions maîtres. La provenance facilite une vérification si les métadonnées restent disponibles; elle ne remplace pas l’examen de la source.'
      ] },
      { title: 'Vérifier la transparence et choisir sobrement', sourceUrls: [S.aiAct.url], paragraphs: [
        'Le règlement européen IA prévoit des obligations de divulgation pour certains deepfakes et règles pour certains fournisseurs, avec des exceptions. La situation dépend du média, de sa destination et des rôles concernés. Examinez les exigences plutôt que de supposer que toute image générée suit la même règle ou qu’aucune mention n’est jamais nécessaire.',
        'Une photo réelle est souvent préférable lorsque l’authenticité est au cœur de la promesse; une image générée peut convenir à une idée abstraite ou une scène illustrative. Les deux choix échouent si licence manque, cadrage exclut une partie du public ou visuel promet autre chose que le texte. Pour une image sensible ou une personne réelle, prévoyez une revue adaptée.'
      ], checklist: ['Quelle affirmation l’image accompagne-t-elle ?', 'La scène est-elle réelle, illustrative ou composite ?', 'Droits, consentements et provenance sont-ils documentés ?', 'Le texte alternatif décrit-il la fonction réelle ?'] }
    ], takeaway: 'Choisissez une photo ou une image générée selon ce que le visiteur doit comprendre et croire. Vérifiez séparément exactitude, autorisations, accessibilité et transparence.', service: { href: '/creation-media-ia/', label: 'Découvrir la création média assistée par IA' }
  }, {
    slug: 'real-or-generated-photos-for-business-website', title: 'Real or generated photos for a professional website?', description: 'Choose the representation that fits the message, evidence expected and people who may be shown.', category: 'Creative media',
    introduction: 'A photograph taken on site and a generated image can both attract attention, but they do not tell the same story. The first may document a team, place or product; the second may illustrate a concept or mood that does not exist as shown. Start with the claim the website needs to support. Then check provenance, consent, accessibility and transparency separately instead of reducing the decision to price or realism.',
    sources: [S.civil, S.painer, S.images, S.credentials, S.aiAct], sections: [
      { title: 'Ask what the image claims', paragraphs: [
        'If an image shows service providers, premises visitors can actually visit or an available product, audiences may read it as evidence. A generated depiction may suit a metaphor or concept, but it can mislead if it implies a real team, place or outcome that does not exist.',
        'Write a sentence describing the use: “this image shows the team” or “this illustration suggests the calm we want people to feel.” It clarifies the expected truth and helps with a caption. A decorative image may need no alternative text; context determines its role.'
      ] },
      { title: 'Check people, place and product', sourceUrls: [S.civil.url, S.painer.url], paragraphs: [
        'For a real photograph, confirm who took it, who holds the rights and which permission covers publication, medium and duration. Check recognisable people, private spaces and information visible in the background. French civil law protects respect for private life, while the photographer’s copyright is a separate question.',
        'The Court of Justice has recognised copyright protection for portrait photographs and described photographers’ choices. A generated image does not automatically remove rights connected to a person or incorporated reference. No photographer being present does not mean there are no constraints.'
      ] },
      { title: 'Hypothetical example: show a workplace', paragraphs: [
        'Hypothetical example: a consultancy is preparing a page about in-person workshops. It can photograph a real room after checking participants and permissions, or publish a generated illustration representing a workshop. It should not show an imaginary room as its office if that detail affects visitor trust.',
        'Expected result: an image whose caption and context match what it shows. If the real room is unavailable, an illustration can still help if it is not presented as reportage. The choice sets an accurate expectation instead of inflating a sense of scale or presence.'
      ] },
      { title: 'Preserve accessibility and provenance', sourceUrls: [S.images.url, S.credentials.url], paragraphs: [
        'W3C recommends alternatives according to role: convey information from an informative image, name the purpose of a linked image, or provide empty alt text for decoration. Describe what the image adds, not every visible detail. A caption and alternative text can serve different purposes.',
        'Adobe Content Credentials may provide provenance information for some files, but their presence does not certify every step or right. Keep your own notes, permissions and master versions too. Provenance can support a check while metadata remains available; it does not replace checking the source.'
      ] },
      { title: 'Check disclosure duties and choose simply', sourceUrls: [S.aiAct.url], paragraphs: [
        'The EU AI Act includes disclosure duties for certain deepfake content and specific rules for some providers, with exceptions. The situation depends on medium, purpose and actors. Review relevant requirements instead of assuming every generated image follows one rule or no label is ever needed.',
        'A real photograph often fits when authenticity is central to the promise; a generated image may suit an abstract idea or clearly illustrative scene. Either can fail if the licence is missing, the crop excludes part of the audience or the visual promises more than the copy. For sensitive imagery or a real person, arrange a suitable review before release.'
      ], checklist: ['Which claim does the image support?', 'Is the scene real, illustrative or composite?', 'Are rights, consent and provenance documented?', 'Does alt text describe the image’s role?'] }
    ], takeaway: 'Choose a photograph or generated image according to what visitors should understand and believe. Check accuracy, permissions, accessibility and disclosure separately.', service: { href: '/en/media-creation-ai/', label: 'Explore AI-assisted media creation' }
  }),
  entry('ai-brand-identity-workflow', {
    slug: 'identite-visuelle-ia-brief-systeme-utilisable', title: 'Créer une identité visuelle avec l’IA : du brief à un système utilisable', description: 'Transformer des explorations génératives en règles visuelles cohérentes et réutilisables.', category: 'Création & médias',
    introduction: 'Une identité de marque ne se réduit pas à une image qui plaît. Elle doit permettre de reconnaître une organisation dans plusieurs contextes, survivre à des recadrages et rester utilisable par les personnes qui produiront les prochains contenus. L’IA peut ouvrir des directions visuelles ou aider à explorer des compositions, mais elle ne décide pas de la cohérence d’ensemble. Pour transformer une inspiration en système, il faut un brief, des références autorisées, des règles explicites et des fichiers finaux contrôlés dans leurs usages réels.',
    sources: [S.adobeVideo, S.credentials, S.cspla, S.images], sections: [
      { title: 'Définir le noyau avant les variations', paragraphs: [
        'Écrivez le rôle de la marque, les publics, les situations de contact et les signaux visuels à préserver. Distinguez les invariants — nom, symbole, contraste, ton — des éléments qui peuvent évoluer selon une campagne. Sans ce noyau, une série cohérente d’images peut produire une identité impossible à reproduire.',
        'Rassemblez seulement des références que vous avez le droit d’utiliser. Une référence précise une propriété comme la densité, la géométrie ou l’équilibre des couleurs sans demander la copie d’un logo, d’une illustration protégée ou du style reconnaissable d’un créateur. Gardez sa source et la raison de son inclusion.'
      ] },
      { title: 'Explorer par familles de décisions', sourceUrls: [S.adobeVideo.url], paragraphs: [
        'Testez séparément palette, structure, typographie et traitement des images. Si vous changez tout en même temps, il devient difficile de comprendre pourquoi une piste fonctionne. Une feuille de comparaison peut noter lisibilité, contraste, facilité de déclinaison et accord avec le brief.',
        'Choisissez une direction, puis vérifiez-la avec des usages concrets : avatar rond, bandeau, document imprimé, visuel carré et interface sombre ou claire. La cohérence ne signifie pas que tous les supports se ressemblent. Elle vient de choix répétés qui restent reconnaissables tout en s’adaptant au contenu.'
      ] },
      { title: 'Exemple fictif : une association de jardinage', paragraphs: [
        'Exemple fictif : une association locale veut un système utilisable par des bénévoles non designers. Le brief demande une ambiance accueillante, un nom lisible à petite taille et un visuel qui fonctionne en noir et blanc. L’équipe examine deux palettes, deux compositions et trois options de symbole en ne changeant qu’une variable à la fois.',
        'Résultat attendu : une page de règles avec couleurs, tailles minimales, espace de protection, usages interdits et deux mises en page de référence. Le symbole final est nettoyé dans un format vectoriel contrôlé. La génération a servi d’exploration; elle n’a pas livré seule une identité prête à exploiter.'
      ] },
      { title: 'Documenter les fichiers et leur provenance', sourceUrls: [S.credentials.url, S.cspla.url], paragraphs: [
        'Conservez le brief, les références, les versions sélectionnées, les retouches et les fichiers publiés. Adobe explique que ses Content Credentials peuvent associer à certains médias des indications sur l’outil et les actions de création. Cette provenance peut aider, mais sa présence ne prouve ni la vérité complète du contenu ni la titularité des droits.',
        'Le rapport du CSPLA traite les contributions humaines à une production hybride comme une question d’originalité appréciée à partir de la création finale. La documentation aide à décrire le processus et transmettre les choix; elle ne transforme pas une sortie en œuvre protégée par accumulation de prompts. La conclusion dépend du droit applicable et des faits.'
      ] },
      { title: 'Rendre le système accessible et maintenable', sourceUrls: [S.images.url], paragraphs: [
        'Les guides W3C distinguent images informatives, décoratives, fonctionnelles et complexes. Une bibliothèque doit donc indiquer la fonction attendue, pas un texte alternatif identique pour chaque page. Le logo peut être un lien vers l’accueil; une illustration peut être décorative ou apporter une information à décrire.',
        'Livrez les sources modifiables, exports Web, variantes de contraste, noms stables et règles de remplacement. Refusez le système si un non-spécialiste ne peut pas produire une déclinaison correcte à partir du guide. Pour un besoin d’exclusivité, de dépôt ou d’identité distinctive, faites analyser disponibilité et risques par des personnes compétentes.'
      ], checklist: ['Quelles règles restent stables sur tous les supports ?', 'Les références sont-elles autorisées et traçables ?', 'Les fichiers sont-ils éditables et testés aux tailles réelles ?', 'Quelles vérifications de marque et de droits restent nécessaires ?'] }
    ], takeaway: 'Une identité utilisable comprend des règles, des fichiers sources, des variantes et une trace des références. Traitez la génération comme une phase d’exploration, puis validez le système dans ses usages réels.', service: { href: '/creation-media-ia/', label: 'Découvrir la création média assistée par IA' }
  }, {
    slug: 'ai-brand-identity-brief-to-usable-system', title: 'AI-assisted brand identity: from brief to usable system', description: 'Turn generative exploration into coherent, reviewable and reusable visual rules.', category: 'Creative media',
    introduction: 'A brand identity is more than an image someone likes. It needs to help people recognise an organisation across contexts, survive crops and remain usable by whoever creates the next materials. AI can open visual directions or help explore compositions, but it does not decide whether the whole system is coherent. Turning inspiration into a system requires a brief, authorised references, explicit rules and final files checked in their real uses.',
    sources: [S.adobeVideo, S.credentials, S.cspla, S.images], sections: [
      { title: 'Define the core before variations', paragraphs: [
        'Write the brand’s role, audiences, points of contact and visual signals to preserve. Separate fixed elements—name, symbol, contrast and tone—from elements that can change by campaign. Without a core, a consistent series of attractive images can still create an identity that is impossible to reproduce.',
        'Use only references you are authorised to use. A reference can clarify density, geometry or colour balance without asking for a copy of a logo, protected illustration or a creator’s recognisable style. Keep its source and reason for inclusion.'
      ] },
      { title: 'Explore by families of decisions', sourceUrls: [S.adobeVideo.url], paragraphs: [
        'Test palette, layout, typography and image treatment separately. If you change everything at once, it is hard to know why a direction works. A comparison sheet can note readability, contrast, ease of adaptation and fit with the brief.',
        'Choose a direction and test it in real uses: a round avatar, banner, printed document, square post and light or dark interface. Consistency does not mean every medium looks the same. It comes from repeated choices that remain recognisable while adapting to their content.'
      ] },
      { title: 'Hypothetical example: an identity for a gardening association', paragraphs: [
        'Hypothetical example: a local association needs a system non-design volunteers can use. The brief asks for a welcoming feel, a name readable at small sizes and a visual that works in black and white. The team tests two palettes, two layouts and three symbols, changing one variable at a time.',
        'Expected result: a rule sheet with colours, minimum sizes, clear space, prohibited uses and two reference layouts. A person cleans the final symbol into a controlled vector format. Generation supported exploration; it did not deliver a ready-to-use identity by itself.'
      ] },
      { title: 'Document files and provenance', sourceUrls: [S.credentials.url, S.cspla.url], paragraphs: [
        'Keep the brief, reference sources, selected versions, edits and published files. Adobe explains that its Content Credentials may associate some media with information about the tool and creation actions. Provenance can help, but its presence does not prove the content’s full truth or ownership.',
        'The CSPLA report discusses human contributions to hybrid output as an originality question assessed through the final creation. Documentation helps describe a process and transfer decisions; it does not make an output protected by accumulating prompts. A legal conclusion depends on applicable law and facts.'
      ] },
      { title: 'Make the system accessible and maintainable', sourceUrls: [S.images.url], paragraphs: [
        'W3C guidance distinguishes informative, decorative, functional and complex images. A library should state each image’s intended role rather than provide identical alternative text everywhere. A logo may link home; an illustration may be decorative or convey information that needs a description.',
        'Deliver editable sources, web exports, contrast variants, stable filenames and replacement rules. A non-specialist should be able to produce a correct adaptation from the guide. If exclusivity, registration or a highly distinctive identity matters, seek qualified review of availability and intellectual-property and trademark risks.'
      ], checklist: ['Which rules stay stable across media?', 'Are references authorised and traceable?', 'Are files editable and checked at actual sizes?', 'Which brand and rights checks remain?'] }
    ], takeaway: 'A usable visual identity includes rules, source files, variants and a record of references. Treat generation as exploration, then validate the system in its real uses.', service: { href: '/en/media-creation-ai/', label: 'Explore AI-assisted media creation' }
  }),
  entry('multimedia-brief-to-release', {
    slug: 'brief-idee-campagne-multimedia-livraison', title: 'D’une idée à une campagne multimédia : organiser les passages entre formats', description: 'Faire circuler une intention commune entre texte, image et son par des étapes de validation lisibles.', category: 'Création & médias',
    introduction: 'Une campagne peut réunir une page Web, un film court, une vignette, une publication sociale et une version audio. Le danger n’est pas seulement de produire des formats qui se ressemblent peu : chaque équipe peut transformer le message sans savoir quelles décisions sont communes et lesquelles relèvent du support. Un brief multimédia bien construit conserve un noyau éditorial, nomme les adaptations attendues et définit les contrôles avant diffusion. L’IA peut aider à proposer ou décliner des matériaux, mais les passages entre formats demandent toujours des choix et une acceptation.',
    sources: [S.video, S.captions, S.ogp, S.aiAct], sections: [
      { title: 'Écrire un brief partagé et adaptable', paragraphs: [
        'Rassemblez objectif, public, message essentiel, preuves autorisées, ton, appel à l’action et contraintes de droits. Séparez ce qui ne doit pas changer — promesse, chiffres, nom du produit — de ce qui peut être adapté au format. La vidéo peut montrer une démonstration pendant que le texte explique les détails, sans que chacun prétende tout dire.',
        'Ajoutez une fiche par support : durée ou dimensions requises, rôle du contenu, éléments à inclure, exclusions et personne qui valide. Les contraintes des plateformes changent; consignez leur source et date de vérification au lieu de les transformer en règle générale.'
      ] },
      { title: 'Tracer les dépendances entre formats', paragraphs: [
        'Une campagne possède souvent un ordre logique : valider le message avant d’enregistrer la voix, approuver le storyboard avant de monter, puis adapter l’image aux recadrages. Dessinez les dépendances comme une chaîne courte de livrables. Si le texte change après enregistrement, qui réécrit les sous-titres et recale le montage ?',
        'Un tableau de versions note propriétaire, état, source et formats dérivés. Ne mettez pas toutes les variations dans un dossier « final »; séparez maître, version approuvée et exports. La convention doit aider une autre personne à retrouver la bonne version sans demander à l’auteur de la génération.'
      ] },
      { title: 'Exemple fictif : annoncer un atelier local', paragraphs: [
        'Exemple fictif : une bibliothèque municipale annonce un atelier de réparation. Le brief prévoit une page d’inscription, une vidéo courte et une image de partage. Les détails critiques — date, lieu, conditions — ont une source officielle unique. La vidéo renvoie vers la page et ne réécrit pas ces faits depuis des notes provisoires.',
        'Résultat attendu : trois livrables adaptés, un même appel à l’action, une date cohérente, des captions vérifiées et une image sociale qui ouvre la bonne page. Une version anglaise, si prévue, reprend les faits et adapte les expressions à sa langue. Toute donnée manquante reste marquée à confirmer.'
      ] },
      { title: 'Inclure accessibilité et métadonnées', sourceUrls: [S.video.url, S.captions.url, S.ogp.url], paragraphs: [
        'Le W3C conseille de planifier l’accessibilité en même temps que la production. Prévoyez captions pour l’information sonore pertinente, texte alternatif selon la fonction de l’image et transcription ou description lorsque l’information visuelle n’est pas dite. Vérifiez les noms, les sons qui portent du sens et les éléments importants visibles à l’écran.',
        'Les métadonnées Open Graph peuvent définir titre, description et image associés à une page partagée. Elles font partie du livrable Web, mais l’aperçu dépend aussi du service qui récupère la page. Testez les champs et l’image cible sur le site; un nom de fichier séduisant ne garantit pas ce que verra le lecteur.'
      ] },
      { title: 'Valider, publier et archiver clairement', sourceUrls: [S.aiAct.url], paragraphs: [
        'Avant diffusion, vérifiez faits, versions linguistiques, liens, crédits, autorisations, mentions requises et cohérence des déclinaisons. Pour les médias générés ou manipulés, étudiez les obligations de transparence selon rôles et usages visés. L’article 50 du règlement IA distingue plusieurs cas; ne réduisez pas l’analyse à un autocollant universel.',
        'Après publication, conservez version approuvée, exports, fichiers modifiables utiles, sources, date et responsable. Définissez aussi comment corriger ou retirer le contenu si une information devient fausse. Ce niveau de procédure peut être excessif pour une micropublication urgente; gardez alors au minimum la vérification des faits et du lien final.'
      ], checklist: ['Le message partagé a-t-il une source de vérité ?', 'Adaptations et responsables sont-ils nommés ?', 'Captions, alt text et métadonnées sont-ils prévus ?', 'Le dossier identifie-t-il la version publiée ?'] }
    ], takeaway: 'Reliez chaque format à un brief commun, une dépendance et un responsable de validation. Une campagne est plus facile à corriger quand versions et preuves de publication sont traçables.', service: { href: '/creation-media-ia/', label: 'Découvrir la création média assistée par IA' }
  }, {
    slug: 'multimedia-campaign-brief-to-release', title: 'From idea to multimedia campaign: manage handoffs between formats', description: 'Carry one shared intention across copy, image and sound with clear review steps.', category: 'Creative media',
    introduction: 'A campaign may include a website page, short film, thumbnail, social post and audio version. The risk is not only producing formats that look unrelated: each team may shift the message without knowing which decisions are shared and which belong to a medium. A good multimedia brief preserves an editorial core, names adaptations and defines checks before publication. AI may help propose or adapt materials, but moving between formats still requires choices and acceptance.',
    sources: [S.video, S.captions, S.ogp, S.aiAct], sections: [
      { title: 'Write a brief that is shared and adaptable', paragraphs: [
        'Collect the objective, audience, essential message, authorised evidence, tone, call to action and rights constraints. Separate what must stay fixed—promise, figures, product name—from what can change by format. Video may show a demonstration while copy explains details, without either trying to say everything.',
        'Add a sheet for each medium: duration or dimensions, content purpose, required elements, exclusions and approver. Platform requirements change. Record their source and date instead of turning them into timeless rules in the brief.'
      ] },
      { title: 'Track dependencies between formats', paragraphs: [
        'Campaigns often have a logical order: approve the message before recording voice, approve the storyboard before editing, then adapt the image for crops. Draw dependencies as a short chain of deliverables. If copy changes after recording, who updates captions and adjusts the edit?',
        'A version table records owner, status, source and derived formats. Do not put every variation in a “final” folder. Separate the master, approved version and distribution exports. The convention should help another person find the right version without asking who generated it.'
      ] },
      { title: 'Hypothetical example: announce a local workshop', paragraphs: [
        'Hypothetical example: a municipal library announces a repair workshop. The brief calls for a registration page, short video and share image. Critical details—date, place and requirements—come from one official source. The video links to the page instead of rewriting facts from provisional notes.',
        'Expected result: three adapted items, a shared call to action, consistent date, checked captions and a social image leading to the right page. If an English version is planned, it retains facts while adapting expressions. Missing details remain flagged for confirmation.'
      ] },
      { title: 'Build accessibility and metadata into production', sourceUrls: [S.video.url, S.captions.url, S.ogp.url], paragraphs: [
        'W3C recommends planning accessibility alongside production. Include captions for meaningful audio, alternative text according to an image’s role and transcripts or descriptions when important visual information is not spoken. Check names, meaningful sounds and information shown on screen.',
        'Open Graph metadata can set the title, description and image for a shared page. It is one part of a web deliverable, but the preview also depends on the service retrieving the page. Check fields and target image on the site; an appealing filename cannot guarantee what readers see.'
      ] },
      { title: 'Approve, publish and archive clearly', sourceUrls: [S.aiAct.url], paragraphs: [
        'Before release, verify facts, language versions, links, credits, permissions, required disclosures and consistency across adaptations. For generated or manipulated media, assess transparency duties for intended roles and uses. Article 50 of the AI Act distinguishes several situations; do not reduce it to one universal sticker.',
        'After publication, keep the approved version, exports, useful editable files, sources, date and owner. Define how to correct or remove content if information becomes false. This level of process may not fit urgent, low-impact updates; at minimum, check facts and the final link.'
      ], checklist: ['Does the shared message have a source of truth?', 'Are adaptations and approvers identified?', 'Were captions, alt text and metadata planned?', 'Can the record identify the published version?'] }
    ], takeaway: 'Connect each format to a shared brief, dependency and approver. A campaign is easier to correct when its versions and publication evidence are traceable.', service: { href: '/en/media-creation-ai/', label: 'Explore AI-assisted media creation' }
  }),
  entry('ai-video-production', {
    slug: 'production-video-ia-fil-editorial', title: 'Intégrer l’IA à une production vidéo sans perdre le fil éditorial', description: 'Conserver récit, continuité et accessibilité en traitant la génération comme une étape de production.', category: 'Création & médias',
    introduction: 'Une production vidéo tient parce que ses plans servent une même idée, même s’ils ont été tournés à des moments différents ou fabriqués avec des moyens distincts. Ajouter une génération au montage peut aider à créer un plan de transition, un effet sonore ou une première assemblée. Cela ne choisit ni le propos, ni le rythme, ni les informations qu’il faut rendre accessibles. Le fil éditorial se protège en décidant avant la génération de la fonction du plan, puis en contrôlant ce qui change dans la séquence et ce que verra le public.',
    sources: [S.adobeVideo, S.video, S.captions, S.aiAct], sections: [
      { title: 'Commencer par la fonction narrative du plan', sourceUrls: [S.adobeVideo.url], paragraphs: [
        'Décrivez l’action à comprendre, la durée, le point de vue et les éléments qui ne peuvent pas varier. Un plan ajouté peut masquer une coupe, montrer une conséquence ou donner un peu d’air entre deux propos. « Il faut un plan plus beau » ne dit rien sur sa place dans le récit.',
        'Adobe documente des outils qui génèrent des éléments dans une timeline ou préparent une première séquence. Leur présence dans le logiciel ne prouve pas qu’ils conviennent au projet. Gardez une version de référence du montage et traitez la génération comme un essai réversible jusqu’à validation.'
      ] },
      { title: 'Suivre les invariants de continuité', paragraphs: [
        'Pour chaque ajout, contrôlez direction du regard, position des objets, lumière, mouvement de caméra et chronologie. Un plan généré peut être crédible isolément mais rompre la géographie de la scène après le plan précédent. Visionnez la transition avec quelques secondes avant et après, à vitesse normale et sans arrêt sur image.',
        'Le son demande le même soin : une ambiance doit se poursuivre ou marquer un changement voulu; un dialogue ne doit pas perdre sa relation avec la bouche ou l’action. Notez la source du plan, la version choisie et le montage appliqué. Une personne qui reprend le projet doit distinguer archive, tournage, génération et compositing.'
      ] },
      { title: 'Exemple fictif : illustrer sans inventer une preuve', paragraphs: [
        'Exemple fictif : une vidéo explique comment remplacer un filtre à eau domestique. L’équipe dispose d’un tournage réel du geste, mais souhaite une image de transition entre deux étapes. Une séquence générée peut illustrer l’idée, à condition de ne pas être présentée comme la démonstration d’un modèle réellement vendu.',
        'Résultat attendu : l’étape technique reste montrée par le produit et le geste réels; l’image de transition est traitée comme illustration; les légendes évitent de lui attribuer une preuve factuelle. Si la distinction reste ambiguë, supprimez l’image et utilisez un carton ou un schéma explicitement explicatif.'
      ] },
      { title: 'Prévoir sous-titres, transcription et description', sourceUrls: [S.video.url, S.captions.url], paragraphs: [
        'Le W3C recommande de déterminer les besoins d’accessibilité pendant la planification. Pour une vidéo préenregistrée avec information sonore utile, les captions synchronisées couvrent paroles et sons importants; lorsque l’image transmet une information seule, une description audio ou alternative textuelle peut aussi être nécessaire. Le besoin dépend du contenu, pas du fait qu’il soit généré.',
        'Réservez du temps au script et au montage pour ces livrables. Des sous-titres automatiques peuvent contenir des erreurs de noms, d’unités et de ponctuation; relisez-les avec l’image et l’audio. Évitez de placer un texte généré dans une image quand un titre éditable convient mieux. L’accessibilité ne se réduit pas à exporter un fichier de sous-titres.'
      ] },
      { title: 'Valider la transparence et le point d’arrêt', sourceUrls: [S.aiAct.url], paragraphs: [
        'L’article 50 du règlement européen sur l’IA prévoit des obligations de marquage ou de divulgation pour certains contenus et usages, avec des distinctions entre fournisseurs et déployeurs ainsi que des exceptions. Vérifiez la situation applicable à votre publication et sa date. Une exigence de transparence ne donne pas à elle seule une autorisation sur les images, voix, musique ou données personnelles.',
        'Fixez des critères d’arrêt : le plan est compréhensible, la continuité tient, les faits sont exacts, captions et autres livrables ont été relus, les sources sont claires. Si l’ajout brouille la vérité du récit ou accroît le travail de correction, revenir au tournage ou à une illustration simple peut être préférable.'
      ], checklist: ['À quoi sert chaque plan généré ?', 'La continuité tient-elle dans la séquence complète ?', 'Voix, faits et droits ont-ils été vérifiés ?', 'Les captions correspondent-elles au rendu livré ?'] }
    ], takeaway: 'Attribuez une fonction éditoriale à chaque ajout, puis contrôlez continuité, faits et accessibilité dans la version complète. La génération peut aider une étape sans remplacer la responsabilité de montage.', service: { href: '/creation-media-ia/', label: 'Découvrir la création média assistée par IA' }
  }, {
    slug: 'ai-in-video-production-keep-editorial-thread', title: 'Use AI in video production without losing the editorial thread', description: 'Keep story, continuity and accessibility intact while treating generation as one production step.', category: 'Creative media',
    introduction: 'A video holds together because its shots serve the same idea, even when they were recorded at different times or made in different ways. Adding generation to an edit may help create a transition, sound effect or rough assembly. It does not choose the message, pacing or information that must be accessible. Protect the editorial thread by deciding what a shot is for before generating it, then checking what changed in the sequence and what viewers will see.',
    sources: [S.adobeVideo, S.video, S.captions, S.aiAct], sections: [
      { title: 'Start with the shot’s narrative function', sourceUrls: [S.adobeVideo.url], paragraphs: [
        'Describe the action viewers need to understand, duration, viewpoint and elements that must stay stable. An added shot might conceal an edit, show a consequence or create breathing room. “We need a better-looking shot” says nothing about its place in the story.',
        'Adobe documents tools that generate media within a timeline or prepare an initial sequence. Their presence in an editor does not prove they suit your project. Keep a reference edit and treat generation as a reversible experiment until approved.'
      ] },
      { title: 'Track what must remain continuous', paragraphs: [
        'For each addition, check eyeline, object position, light, camera movement and chronology. A generated shot may look plausible alone but break the scene’s geography after the previous shot. Watch the transition with several seconds on both sides, at normal speed and without pausing.',
        'Sound needs the same care: ambience should continue or signal an intended change, while dialogue should remain connected to the speaker or action. Record the source, selected version and edits. A new contributor should distinguish archive footage, recorded footage, generated media and compositing.'
      ] },
      { title: 'Hypothetical example: illustrate without inventing evidence', paragraphs: [
        'Hypothetical example: a video explains how to replace a household water filter. The team has real footage of the task but wants a transition between steps. A generated sequence may illustrate the idea if it is not presented as a demonstration of an actual filter on sale.',
        'Expected result: the technical step remains visible through the real product and action; the transition is clearly treated as illustration; captions do not imply factual proof. If that distinction remains unclear, remove the image and use a title card or an explanatory diagram.'
      ] },
      { title: 'Plan captions, transcripts and description', sourceUrls: [S.video.url, S.captions.url], paragraphs: [
        'W3C recommends deciding accessibility needs during planning. For prerecorded video with meaningful audio, synchronized captions cover speech and important sounds. When images carry information that is otherwise unavailable, audio description or a text alternative may also be needed. The need depends on the content, not on whether it was generated.',
        'Reserve time in the script and edit for these deliverables. Automatic captions may mishear names, units and punctuation; review them against picture and audio. Avoid baking generated text into an image when an editable title works better. Accessibility is more than exporting a subtitle file.'
      ] },
      { title: 'Check transparency and define a stopping point', sourceUrls: [S.aiAct.url], paragraphs: [
        'Article 50 of the EU AI Act sets marking or disclosure duties for certain content and uses, with distinctions between providers and deployers plus exceptions. Check which situation applies and when. A transparency duty does not itself grant permission for images, voices, music or personal data.',
        'Set stopping criteria: the shot is understandable, continuity holds, facts are accurate, deliverables were reviewed and sources are clear. If an addition obscures the story’s truth or increases correction work, returning to recorded footage or a simple illustration may be better.'
      ], checklist: ['What editorial purpose does each generated shot serve?', 'Does continuity work in the complete sequence?', 'Have voices, facts and rights been checked?', 'Do captions match the delivered edit?'] }
    ], takeaway: 'Give every addition an editorial purpose, then check continuity, facts and accessibility in the complete version. Generation can support one step without replacing the editor’s responsibility.', service: { href: '/en/media-creation-ai/', label: 'Explore AI-assisted media creation' }
  }),
  entry('art-direction-decisions', {
    slug: 'direction-artistique-choisir-intention-contraintes', title: 'Direction artistique : choisir une intention et tenir ses contraintes', description: 'Relier chaque décision au brief et au contexte d’usage pour choisir entre variantes séduisantes.', category: 'Création & médias',
    introduction: 'Une série d’images peut sembler réussie dans une galerie et échouer dès qu’on la place dans une page, une affiche ou un montage. La direction artistique ne consiste pas seulement à demander une apparence : elle choisit les éléments qui porteront une idée et fixe les limites à ne pas franchir. Avec des outils génératifs, la vitesse rend la sélection plus importante, car une sortie convaincante peut détourner l’attention du brief. Une grille légère aide à choisir, mais ne remplace ni l’examen du public ni l’analyse des droits.',
    sources: [S.adobeVideo, S.cspla, S.images], sections: [
      { title: 'Transformer le brief en critères observables', paragraphs: [
        'Choisissez trois à cinq critères liés à l’usage : sujet lisible à petite taille, espace disponible pour un titre, humeur adaptée, palette compatible avec les autres contenus et absence d’élément trompeur. Classez-les en exigences et préférences. Sans ce classement, un détail spectaculaire peut l’emporter sur une contrainte essentielle.',
        'Ajoutez les contraintes de contexte avant de comparer : canal, recadrage prévu, langue, contraste, public et place des appels à l’action. Une couverture et une vignette sociale n’ont pas la même surface ni la même fonction. La même image peut demander des compositions différentes, pas seulement un redimensionnement.'
      ] },
      { title: 'Comparer dans la situation où l’image vivra', sourceUrls: [S.images.url], paragraphs: [
        'Affichez les variantes avec le vrai titre, dans le vrai cadre et à une taille proche d’un téléphone. Le guide W3C rappelle que la description dépend de la fonction de l’image; l’évaluation visuelle dépend également de ce que le média doit communiquer ici. Un aperçu plein écran n’est qu’une étape du contrôle.',
        'Regardez d’abord le point focal, puis les détails. Le sujet est-il compris sans zoom ? Le contraste laisse-t-il respirer le texte ? Un geste, un symbole ou un décor suggère-t-il une caractéristique fausse du produit ? Notez une observation précise pour chaque critère, pas une note globale fondée sur l’intuition seule.'
      ] },
      { title: 'Exemple fictif : choisir entre trois affiches', paragraphs: [
        'Exemple fictif : un atelier de réparation de vélos choisit une affiche parmi trois propositions. Le brief impose de montrer une roue, garder un espace clair pour la date et éviter un modèle haut de gamme que l’atelier ne vend pas. Les variantes sont notées séparément sur ces trois contraintes, puis selon la préférence d’ambiance.',
        'Résultat attendu : éliminer toute option qui enfreint une contrainte avant de discuter du style. Si aucune n’est acceptable, changez le brief ou la composition; demander « encore plus proche » ne précise pas le problème. Cette séquence protège l’équipe des choix guidés uniquement par l’effet de nouveauté.'
      ] },
      { title: 'Prendre les décisions aux phases utiles', sourceUrls: [S.cspla.url], paragraphs: [
        'Le rapport du CSPLA décrit des points de décision en amont, pendant les itérations et lors de la sélection ou intégration finale. En pratique, conservez le brief, les références autorisées, les versions examinées, les corrections et l’image publiée. Cela rend la direction transmissible et les écarts compréhensibles.',
        'Cette trace n’est pas un test juridique automatique d’originalité. Le rapport propose une analyse, les textes et la jurisprudence déterminent le droit, et les faits comptent. Gardez un dossier proportionné : quelques brouillons pertinents et le résultat suffisent souvent mieux qu’une archive de centaines de générations.'
      ] },
      { title: 'Savoir s’arrêter ou changer de méthode', paragraphs: [
        'Arrêtez la génération lorsque les critères essentiels sont satisfaits et que les dernières variantes ne modifient plus la décision. Si le visuel exige une fidélité exacte au produit, au lieu ou à la personne, une photographie autorisée, une illustration contrôlée ou un schéma peut mieux convenir. Générer librement ne rend pas chaque représentation souhaitable.',
        'La grille est un outil éditorial, pas une mesure objective universelle. Elle ne prédit ni performance commerciale ni préférence d’un public. Pour un lancement important, confrontez le visuel à des personnes qui ne connaissent pas le brief et demandez ce qu’elles comprennent, sans suggérer la réponse.'
      ], checklist: ['Quels critères sont non négociables ?', 'L’image est-elle lisible dans son vrai format ?', 'Un élément peut-il induire le public en erreur ?', 'Quelles versions et autorisations accompagnent le fichier ?'] }
    ], takeaway: 'Écrivez les critères avant de regarder les variantes, puis choisissez dans le format réel. Une décision artistique solide explique ce qu’elle sert et ce qu’elle écarte.', service: { href: '/creation-media-ia/', label: 'Découvrir la création média assistée par IA' }
  }, {
    slug: 'art-direction-choose-intent-and-constraints', title: 'Art direction: choose an intention and keep its constraints', description: 'Connect decisions to the brief and context to choose among appealing variants.', category: 'Creative media',
    introduction: 'A set of images may look successful in a gallery and fail as soon as it appears on a page, poster or edit. Art direction is more than asking for an appearance: it selects the elements that carry an idea and sets boundaries that must not be crossed. Generative speed makes selection more important because a persuasive result can pull attention away from the brief. A light rubric helps you choose, but does not replace audience review or rights checks.',
    sources: [S.adobeVideo, S.cspla, S.images], sections: [
      { title: 'Turn the brief into observable criteria', paragraphs: [
        'Choose three to five criteria tied to the use: a subject readable at small size, room for a headline, a suitable mood, a palette consistent with other content and no misleading element. Rank them as requirements or preferences. Without that ranking, a striking detail can win over an essential constraint.',
        'Add context before comparing: channel, planned crop, language, contrast, audience and call-to-action placement. A cover image and social thumbnail have different space and purposes. The same image may need different compositions rather than a mechanical resize.'
      ] },
      { title: 'Compare images where they will be used', sourceUrls: [S.images.url], paragraphs: [
        'Show variants with the real headline, in the real frame and near their size on a phone. W3C says an image’s description depends on its role on a page; visual evaluation also depends on what it needs to communicate here. A full-screen preview is only one check.',
        'Look at the focal point first, then details. Is the subject clear without zooming? Does contrast give text room? Could a gesture, symbol or setting imply a false product feature? Record a specific observation against each criterion, not one overall score based on instinct alone.'
      ] },
      { title: 'Hypothetical example: choose among three posters', paragraphs: [
        'Hypothetical example: a bicycle repair workshop has three poster concepts. The brief requires a wheel, clear space for the date and no high-end model that the shop does not sell. Each option gets a separate decision against those constraints, followed by a preference for its mood.',
        'Expected result: eliminate any option that misrepresents the product or hides the date before debating style. If none works, change the brief or composition; asking for something “closer” does not explain the problem. This keeps novelty from driving the choice by itself.'
      ] },
      { title: 'Make decisions at useful stages', sourceUrls: [S.cspla.url], paragraphs: [
        'The CSPLA report describes decision points in conception, during iteration and in final selection or integration. In practice, keep the brief, authorised references, reviewed versions, corrections and published image. This makes direction transferable and explains how deviations were handled.',
        'That record is not an automatic legal originality test. The report offers analysis, law and case decisions establish legal rules, and the facts of each creation matter. Keep documentation proportionate: relevant drafts and the final result are often more useful than hundreds of generations without selection reasons.'
      ] },
      { title: 'Know when to stop or change methods', paragraphs: [
        'Stop generating once essential criteria are met and recent variants no longer change the decision. If the visual needs exact fidelity to a product, place or person, an authorised photograph, controlled illustration or diagram may fit better. Freedom to generate does not make every depiction appropriate.',
        'This rubric is an editorial tool, not a universal objective measure. It cannot predict commercial performance or audience preference. For a significant launch, ask people unfamiliar with the brief what they understand without suggesting an answer.'
      ], checklist: ['Which criteria are non-negotiable?', 'Is the image readable in its actual format?', 'Could an element mislead the audience?', 'Which versions and permissions travel with the file?'] }
    ], takeaway: 'Write criteria before reviewing variants, then choose in the actual format. A sound art-direction decision explains both what it serves and what it rules out.', service: { href: '/en/media-creation-ai/', label: 'Explore AI-assisted media creation' }
  }),
  entry('creativity-tool-mastery', {
    slug: 'creer-sans-tout-maitriser-avec-ia', title: 'Créer sans tout maîtriser : les compétences qui comptent avec l’IA', description: 'Développer intention, perception et jugement pour travailler avec un outil sans en apprendre chaque recoin.', category: 'Création & médias',
    introduction: 'Un outil génératif peut produire des images, du son ou des variations avant que son utilisateur connaisse toutes ses commandes. Cette facilité ne supprime pas les compétences; elle rend certaines d’entre elles plus visibles. Il faut savoir quoi chercher, remarquer ce qui ne fonctionne pas, comparer des options et décider quand une correction manuelle serait plus simple. La maîtrise utile n’est donc pas l’exhaustivité des menus : c’est la capacité à relier une intention à des choix perceptibles et à apprendre à partir d’eux.',
    sources: [S.adobeVideo, S.cspla, S.images], sections: [
      { title: 'Décrire le résultat recherché', sourceUrls: [S.adobeVideo.url], paragraphs: [
        'Une consigne utile nomme l’usage, le public et les éléments qui doivent rester stables. Pour une vignette, demandez-vous quelle idée doit être comprise en une seconde, quel espace garder pour le titre et ce qui ne doit pas apparaître. Cette précision aide à reconnaître une sortie inutilisable même si elle paraît séduisante.',
        'Le vocabulaire visuel ou sonore se construit en observant des exemples : premier plan, contraste, rythme lent, respiration, texture, niveau de détail. Il n’est pas nécessaire de connaître toutes les commandes pour formuler une hypothèse testable. Un vocabulaire partagé améliore toutefois la discussion entre rédaction, direction artistique et production.'
      ] },
      { title: 'Entraîner le regard et l’écoute à comparer', sourceUrls: [S.cspla.url], paragraphs: [
        'Comparez plusieurs variantes avec une question à la fois. Vérifiez d’abord la lisibilité, ensuite la cohérence avec le brief, puis la finition. Si vous évaluez vingt critères simultanément, l’impression dominante risque de remplacer le jugement. Une grille courte oblige à expliquer ce qui compte pour cet usage précis.',
        'Le rapport du CSPLA décrit la sélection et l’intégration parmi les étapes où peuvent intervenir des choix humains. Il ne dit pas que toute sélection constitue une création protégée. Il rappelle plutôt pourquoi le jugement doit devenir visible dans le résultat. « Je préfère celle-ci » peut lancer la discussion, mais il faut relier ce choix au but.'
      ] },
      { title: 'Exercice fictif : comparer trois vignettes', paragraphs: [
        'Exemple fictif : une petite librairie prépare une vignette pour annoncer un club de lecture. Elle a un titre court, un nom d’événement et une contrainte de lecture sur téléphone. Pour chaque proposition, notez de 0 à 2 la lisibilité du titre, la cohérence du ton et l’espace disponible; ajoutez une phrase de justification.',
        'Résultat attendu : retenir l’option qui satisfait les critères indispensables, pas nécessairement celle qui contient le plus de détails. Si aucune n’atteint la lisibilité requise, modifiez la mise en page ou partez d’une composition plus simple. L’exercice entraîne un langage de critique et montre quand continuer la génération n’apporte plus de progrès.'
      ] },
      { title: 'Apprendre par une correction localisée', paragraphs: [
        'Quand une sortie échoue, isolez le défaut avant de relancer : sujet mal placé, ambiance chargée, mouvement incohérent ou mot illisible. Corriger une variable à la fois aide à comprendre si l’instruction a eu l’effet attendu. L’historique des décisions évite aussi de répéter une piste déjà écartée pour la même raison.',
        'Certaines finitions restent plus fiables dans un logiciel classique : reformater le texte, corriger une coupe, égaliser un niveau ou produire une version au bon format. La compétence consiste aussi à choisir le bon outil de finition, plutôt qu’à attendre de la génération une précision que le flux ne garantit pas.'
      ] },
      { title: 'Définir une progression et ses limites', sourceUrls: [S.images.url], paragraphs: [
        'Choisissez un seul apprentissage par projet : mieux décrire le cadrage, repérer une rupture de continuité ou écrire un texte alternatif qui transmet le sens. Les guides W3C montrent que la description pertinente d’une image dépend de sa fonction dans la page. Évaluez donc une création dans son contexte, pas isolément dans une galerie.',
        'Cette méthode ne remplace ni une formation lorsqu’un outil spécialisé est requis, ni l’expertise d’une personne qui connaît les contraintes du métier. Elle convient mal si l’usage exige une reproduction exacte, une finition très précise ou une faible tolérance aux sorties incertaines. Simplifiez le besoin ou choisissez un processus déterministe dans ces cas.'
      ], checklist: ['Quel critère compte le plus pour ce support ?', 'Quelle différence observable sépare les options ?', 'Quelle correction précise mérite un nouvel essai ?', 'Une étape manuelle serait-elle plus directe ?'] }
    ], takeaway: 'Apprenez d’abord à formuler une intention, comparer avec un critère et corriger une chose à la fois. La maîtrise se construit en décisions réutilisables, pas par la mémorisation de chaque commande.', service: { href: '/creation-media-ia/', label: 'Découvrir la création média assistée par IA' }
  }, {
    slug: 'create-with-ai-without-mastering-everything', title: 'Create without mastering everything: the skills that matter with AI', description: 'Build intent, perception and judgement without learning every corner of a creative tool.', category: 'Creative media',
    introduction: 'A generative tool can produce images, sound or variations before its user knows every control. That convenience does not remove skill; it makes some skills more visible. You need to know what to look for, notice what fails, compare options and decide when a manual correction would be simpler. Useful mastery is not knowing every menu. It is connecting an intention with perceptible choices and learning from results.',
    sources: [S.adobeVideo, S.cspla, S.images], sections: [
      { title: 'Describe the outcome you want', sourceUrls: [S.adobeVideo.url], paragraphs: [
        'A useful instruction names the purpose, audience and elements that must stay stable. For a thumbnail, ask what idea should be understood in a second, how much space to leave for a headline, and what must not appear. This helps identify an unusable result even when it looks appealing.',
        'Visual and audio vocabulary grows from observing examples: foreground, contrast, slow rhythm, breathing room, texture or level of detail. You need not know every control’s name to form a testable hypothesis. Shared vocabulary can improve discussion across writing, art direction and production.'
      ] },
      { title: 'Train your eye and ear to compare', sourceUrls: [S.cspla.url], paragraphs: [
        'Compare variants using one question at a time. First check readability, then fit with the brief, then finishing details. If you score twenty things at once, the strongest impression can replace judgement. A short rubric makes you explain what matters for this particular use.',
        'The CSPLA report includes selection and integration among stages where human choices may occur. It does not say every act of selection qualifies for protected authorship. It helps explain why judgement should become visible in the result. “I prefer this one” can start the discussion, but it needs to connect to purpose.'
      ] },
      { title: 'Hypothetical exercise: compare three thumbnails', paragraphs: [
        'Hypothetical example: a small bookshop needs a thumbnail for its reading club. It has a short title, event name and a requirement that it stay legible on a phone. For each option, score title readability, tone and available space from zero to two, then add one sentence explaining the score.',
        'Expected result: choose the option that meets essential criteria, not necessarily the one with the most detail. If none is readable enough, change the layout or start from a simpler composition. The exercise develops a shared language for critique and shows when more generations are no longer making progress.'
      ] },
      { title: 'Learn through a local correction', paragraphs: [
        'When an output fails, isolate the problem before regenerating: a misplaced subject, crowded mood, inconsistent movement or unreadable text. Changing one variable at a time helps you see whether the instruction had its intended effect. A decision history also prevents repeating a direction already rejected for the same reason.',
        'Some finishing tasks remain more reliable in conventional software: reformatting text, fixing a cut, levelling audio or exporting at the right size. Skill also means choosing the right finishing tool rather than expecting precision that the workflow does not guarantee.'
      ] },
      { title: 'Set a learning goal and recognise limits', sourceUrls: [S.images.url], paragraphs: [
        'Choose one learning goal per project: describe framing more clearly, identify a continuity break or write alternative text that conveys meaning. W3C guidance shows that an image’s useful description depends on its role on the page. Judge a creation in context, not as an isolated gallery item.',
        'This approach does not replace technical training when a specialist tool is required, or the judgement of someone who knows the field’s constraints. It is a poor fit where exact reproduction, precise finishing or a very low tolerance for uncertain output is essential. In those cases, simplify the task or use a deterministic process.'
      ], checklist: ['Which criterion matters most for this medium?', 'What observable difference separates the options?', 'Which correction warrants another attempt?', 'Would a manual step be more direct?'] }
    ], takeaway: 'Learn to state an intention, compare against a criterion and change one thing at a time. Creative-tool mastery grows through reusable decisions, not by memorising every control.', service: { href: '/en/media-creation-ai/', label: 'Explore AI-assisted media creation' }
  }),
  entry('hybrid-music-production', {
    slug: 'morceau-genere-session-production-musicale', title: 'Du morceau généré à une session de production musicale exploitable', description: 'Préparer stems, tempo, alignement et exports pour reprendre un morceau généré dans une session audio.', category: 'Création & médias',
    introduction: 'Un fichier stéréo peut suffire à écouter une idée, mais il laisse peu de marge quand il faut déplacer une voix, retirer une percussion ou prolonger une fin. Une session exploitable dépend de ce que l’outil fournit, de la manière dont les pistes sont alignées et des décisions encore ouvertes. Il faut aussi distinguer l’export technique de l’autorisation d’usage : un fichier téléchargeable ne vérifie pas tous les droits. La préparation commence par un inventaire et un test de reprise, pas par une promesse de remix facile.',
    sources: [S.stems, S.sunoExport, S.ableton, S.sunoCommercial], sections: [
      { title: 'Vérifier ce que l’outil permet au compte concerné', sourceUrls: [S.stems.url, S.sunoExport.url], paragraphs: [
        'Suno documente l’extraction de stems et les exports multipistes dans Studio, mais certaines options dépendent du plan ou des crédits. Ableton décrit également une séparation de stems dans Live 12 Suite. Ces capacités ne sont pas interchangeables : relevez le produit, la version, le compte et l’option observée avant de bâtir une procédure.',
        'Ne partez pas du principe que les stems sont des prises propres enregistrées séparément. Séparer un mix reconstruit des composantes et peut laisser des artefacts, des résidus ou des sons mélangés. Écoutez chaque fichier en solo puis dans l’ensemble; notez les défauts qui compromettraient le montage ou le mixage.'
      ] },
      { title: 'Créer une session témoin avant le vrai projet', sourceUrls: [S.ableton.url], paragraphs: [
        'Choisissez un court extrait et importez tous les fichiers à partir du même point temporel. Vérifiez si les fichiers débutent simultanément, si leur longueur diffère et si l’importation déclenche un étirement automatique. Gardez une copie intacte des exports : la session de travail peut changer fréquence, niveau ou position sans modifier les sources archivées.',
        'Le tempo affiché par un générateur peut être absent ou indicatif. Déterminez d’abord si la musique suit une pulsation stable, puis comparez avec la grille du DAW. Ne quantifiez pas automatiquement un matériau qui accélère ou respire; pour un montage sonore, le tempo peut n’être qu’un repère de travail.'
      ] },
      { title: 'Exemple fictif : livrer un habillage de 30 secondes', paragraphs: [
        'Exemple fictif : une équipe prépare un habillage de podcast de 30 secondes à partir d’un morceau généré. Elle reçoit un mix stéréo et trois stems. Le brief demande un départ immédiat, une voix dégagée à 00:12 et une fin courte. Le monteur aligne les fichiers à zéro, vérifie les transitoires, puis coupe les pistes au même point.',
        'Résultat attendu : une session qui s’ouvre avec ses sources, les pistes nommées, la région finale marquée et un export stéréo écouté du début à la fin. Si un stem contient des artefacts sous la voix, l’équipe garde le mix complet plutôt que de poursuivre une séparation dégradante. La réussite signifie une reprise fiable, pas un maximum de fichiers.'
      ] },
      { title: 'Préparer l’export et la transmission', sourceUrls: [S.sunoExport.url], paragraphs: [
        'Définissez la destination : maquette de revue, montage vidéo ou master à remettre à un autre studio. Indiquez le format attendu, la durée, le niveau demandé s’il y en a un et les métadonnées utiles. Ne choisissez pas une fréquence ou profondeur de bits par superstition; demandez le besoin réel au destinataire.',
        'Joignez les sources, la session native si elle est demandée, un export de référence et une note de reprise. Décrivez les traitements déjà faits, le tempo estimé, les coupes et les éléments qu’il ne faut pas changer. Une archive bien nommée peut être plus exploitable qu’une série de fichiers isolés sans explication.'
      ] },
      { title: 'Séparer faisabilité, contrat et droit applicable', sourceUrls: [S.sunoCommercial.url], paragraphs: [
        'Avant un usage commercial, vérifiez quand la piste a été créée, le plan et les conditions alors applicables, la possibilité d’export et les restrictions sur les paroles ou références. Suno présente ses permissions commerciales dans ses propres conditions, mais précise qu’elles ne garantissent pas une protection par copyright. Ce sont deux niveaux différents.',
        'Une permission contractuelle ne neutralise pas automatiquement les droits d’un tiers ni les questions du droit d’auteur local. Conservez les conditions, la date, l’identifiant de création et les autorisations sur les sources. Si l’enjeu financier ou la visibilité sont élevés, faites examiner le cas par un professionnel compétent.'
      ], checklist: ['Quels fichiers et quelle version ont été exportés ?', 'Les pistes restent-elles alignées après import ?', 'Quels défauts sont audibles seuls et dans le mix ?', 'Quelles conditions et sources tierces s’appliquent ?'] }
    ], takeaway: 'Faites une session témoin avec les fichiers réellement disponibles avant de promettre un projet modifiable. Validez alignement, qualité, export de destination et conditions d’usage séparément.', service: { href: '/creation-media-ia/', label: 'Découvrir la création média assistée par IA' }
  }, {
    slug: 'generated-track-to-usable-music-session', title: 'From generated track to a usable music production session', description: 'Prepare stems, tempo, alignment and exports so a generated track can continue in an audio session.', category: 'Creative media',
    introduction: 'A stereo file may be enough to hear an idea, but it leaves little room to move a voice, remove percussion or extend an ending. A usable session depends on what the tool provides, how tracks align and which decisions remain open. Separate technical export from permission to use the material: a downloadable file does not verify every right. Start with an inventory and a handover test, not a promise of effortless remixing.',
    sources: [S.stems, S.sunoExport, S.ableton, S.sunoCommercial], sections: [
      { title: 'Check what the relevant account provides', sourceUrls: [S.stems.url, S.sunoExport.url], paragraphs: [
        'Suno documents stem extraction and multitrack exports in Studio, but some options depend on plan or credits. Ableton also documents stem separation in Live 12 Suite. These capabilities are not interchangeable. Record the product, version, account and observed option before writing your workflow around them.',
        'Do not assume stems are clean recordings captured separately. Separating a mix reconstructs components and can leave artefacts, residue or mixed sounds. Listen to each file alone and in context; note any defect that would affect editing or mixing.'
      ] },
      { title: 'Create a test session before the real project', sourceUrls: [S.ableton.url], paragraphs: [
        'Choose a short passage and import every file from the same time position. Check whether files start together, whether their lengths differ and whether import triggers automatic stretching. Keep untouched copies of exports: the working session may change sample rate, level or position without altering archived sources.',
        'A generator’s displayed tempo may be missing or indicative. First check whether the music follows a stable pulse, then compare it with the DAW grid. Do not automatically quantise material that accelerates or breathes; for an edit, tempo may only be a working reference.'
      ] },
      { title: 'Hypothetical example: hand over a 30-second podcast ident', paragraphs: [
        'Hypothetical example: a team prepares a 30-second podcast ident from generated music. It receives a stereo mix and three stems. The brief asks for an immediate start, clear space for a voice at 00:12 and a short ending. The editor aligns files at zero, checks transients and cuts every track at the same point.',
        'Expected result: a session that opens with its sources, named tracks, a marked final range and a stereo export reviewed from start to finish. If a stem has artefacts under the voice, the team keeps the full mix instead of pursuing a degraded separation. Success means a reliable handover, not the largest number of files.'
      ] },
      { title: 'Prepare the export and handover', sourceUrls: [S.sunoExport.url], paragraphs: [
        'Start with the destination: a review draft, video edit or master for another studio. Confirm the required format, duration, requested level if any and useful metadata. Do not choose sample rate or bit depth through superstition; ask what the recipient needs.',
        'Include sources, the native session if requested, a reference export and a handover note. Describe existing processing, estimated tempo, edits and elements that must remain unchanged. A clearly named archive may be more useful than loose files without context.'
      ] },
      { title: 'Separate feasibility, contract and law', sourceUrls: [S.sunoCommercial.url], paragraphs: [
        'Before commercial use, check when the track was made, which plan and terms applied, export permissions and restrictions concerning lyrics or references. Suno sets out its own commercial-use permissions while warning that these do not guarantee copyright protection. These are different questions.',
        'A service’s contractual permission does not automatically remove third-party rights or resolve local copyright questions. Keep the applicable terms, date, creation identifier and permissions for sources. For significant financial or public exposure, have the specific case reviewed by a qualified professional.'
      ], checklist: ['Which files and version were exported?', 'Do tracks stay aligned after import?', 'What defects can be heard alone and in the mix?', 'Which terms and third-party sources apply?'] }
    ], takeaway: 'Make a test session using the files actually available before promising an editable project. Validate alignment, quality, destination export and usage terms separately.', service: { href: '/en/media-creation-ai/', label: 'Explore AI-assisted media creation' }
  }),
];
