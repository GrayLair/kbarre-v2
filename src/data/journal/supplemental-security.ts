import type { JournalEntry } from '../journal-types';

const source = (title: string, url: string, publisher: string) => ({ title, url, publisher, accessedAt: '2026-10-29' });
const stealer = source('Mise en garde face aux virus stealers', 'https://www.cybermalveillance.gouv.fr/medias/2024/03/240322_Fiche_VirusStealer.pdf', 'Cybermalveillance.gouv.fr');
const uac = source('User Account Control Overview', 'https://learn.microsoft.com/en-us/windows-server/security/user-account-control/user-account-control-overview', 'Microsoft Learn');
const uacDisable = source('Disable User Account Control (UAC)', 'https://learn.microsoft.com/en-us/troubleshoot/windows-server/windows-security/disable-user-account-control', 'Microsoft Learn');
const accountHelp = source('Que faire en cas de piratage de compte sur les réseaux sociaux ?', 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/que-faire-en-cas-de-piratage-de-compte-sur-les-reseaux-sociaux', 'Cybermalveillance.gouv.fr');
const incidentResponse = source('Incident Response Recommendations and Considerations for Cybersecurity Risk Management: A CSF 2.0 Community Profile', 'https://csrc.nist.gov/pubs/sp/800/61/r3/final', 'NIST');
const dnsTransport = source('Secure transports for DNS', 'https://developers.google.com/speed/public-dns/docs/secure-transports', 'Google Public DNS');
const dnsSecurity = source('Security Benefits', 'https://developers.google.com/speed/public-dns/docs/security', 'Google Public DNS');
const cisaDns = source('TIC 3.0 Remote User Use Case v2.2', 'https://www.cisa.gov/sites/default/files/2025-07/CISA%20TIC%203.0%20Remote%20User%20Use%20Case%20v2.2_2.pdf', 'CISA');
const uacHow = source('How User Account Control works', 'https://learn.microsoft.com/en-us/windows/security/application-security/application-control/user-account-control/how-it-works', 'Microsoft Learn');
const smbTrouble = source("Can't access shared folders from File Explorer", 'https://learn.microsoft.com/en-us/troubleshoot/windows-client/networking/cannot-access-shared-folder-file-explorer', 'Microsoft Learn');
const smbFirewall = source('SMB: File and printer sharing ports should be open', 'https://learn.microsoft.com/en-us/windows-server/storage/file-server/best-practices-analyzer/smb-open-file-sharing-ports', 'Microsoft Learn');
const smbMulti = source('SMB multichannel troubleshooting', 'https://learn.microsoft.com/da-dk/troubleshoot/windows-server/networking/smb-multichannel-troubleshooting?source=recommendations', 'Microsoft Learn');
const cloudCNIL = source('Sécurité : Cloud, informatique en nuage', 'https://www.cnil.fr/fr/securite-cloud-informatique-en-nuage', 'CNIL');
const processorCNIL = source('Sécurité : Gérer la sous-traitance', 'https://www.cnil.fr/fr/securite-gerer-la-sous-traitance', 'CNIL');
const cloudFramework = source('Google Cloud Well-Architected Framework', 'https://docs.cloud.google.com/architecture/framework?hl=en', 'Google Cloud');
const tunnelRoute = source('Routing', 'https://developers.cloudflare.com/tunnel/concepts/routing/', 'Cloudflare Docs');
const privateApp = source('Secure a private IP or hostname', 'https://developers.cloudflare.com/cloudflare-one/access-controls/applications/non-http/self-hosted-private-app/', 'Cloudflare One');
const funnel = source('Tailscale Funnel', 'https://tailscale.com/docs/features/tailscale-funnel', 'Tailscale Docs');
const googleHacked = source('Troubleshoot Google Search Crawling Errors', 'https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors', 'Google Search Central');
const googleReport = source('Report spam, phishing, or malware', 'https://developers.google.com/search/help/report-quality-issues?authuser=14&hl=en', 'Google Search Central');
const cnilGuide = source('Sécurité des données personnelles — Guide pratique 2024', 'https://www.cnil.fr/sites/cnil/files/2024-03/cnil_guide_securite_personnelle_2024.pdf?v=1754575066', 'CNIL');
const ocrPower = source('OCR actions — Power Automate', 'https://learn.microsoft.com/en-us/power-automate/desktop-flows/actions-reference/ocr', 'Microsoft Learn');
const ocrConfidence = source('Interpret and improve model accuracy and confidence scores', 'https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept/accuracy-confidence?view=doc-intel-4.0.0', 'Microsoft Learn');
const nistSynthetic = source('Reducing Risks Posed by Synthetic Content', 'https://doi.org/10.6028/NIST.AI.100-4', 'NIST');
const owaspOutput = source('OWASP Top 10 for LLM Applications 2025', 'https://genai.owasp.org/download/43299/?tmstv=1731900559', 'OWASP');

export const supplementalSecurityEntries: JournalEntry[] = [
  {
    id: 'infostealers-user-rights', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'infostealer-droits-utilisateur-windows', title: 'Vol de mots de passe : un malware n’a pas toujours besoin des droits administrateur',
        description: 'Comprendre ce qu’un programme peut lire dans une session Windows et pourquoi l’élévation administrateur ne protège pas tous les secrets.', category: 'Sécurité & fiabilité',
        introduction: 'Le cadenas administrateur n’est pas la frontière entre « malware possible » et « malware impossible ». Un programme lancé avec les droits ordinaires d’un compte peut agir dans le périmètre de ce compte : lire des fichiers accessibles, observer certaines données présentes dans la session et tenter de réutiliser des accès enregistrés. Les stealers décrits par Cybermalveillance.gouv.fr visent notamment des identifiants. Comprendre cette distinction permet de mieux choisir les défenses et d’éviter une fausse assurance fondée uniquement sur les demandes UAC.',
        sources: [stealer, uac, uacDisable],
        sections: [
          { title: 'Droits administrateur et droits de session répondent à deux questions différentes', sourceUrls: [uac.url, uacDisable.url], paragraphs: [
            'L’élévation concerne les actions qui demandent des privilèges supérieurs, par exemple certaines modifications du système. Les applications ordinaires héritent généralement d’un jeton standard. Cela limite les changements globaux qu’un programme peut faire sans consentement ou identifiants d’administration. En revanche, être un utilisateur standard ne signifie pas que l’on ne possède aucune donnée sensible : la session peut ouvrir des documents, utiliser des applications déjà connectées et conserver des informations dans des emplacements accessibles au compte.',
            'Microsoft décrit explicitement que du code malveillant peut fonctionner sans droits administrateur et écrire dans des dossiers du profil. Il faut donc séparer la protection du système d’exploitation de la protection des secrets disponibles à l’utilisateur. Une invite UAC absente n’est pas la preuve qu’aucun logiciel dangereux ne s’exécute ; une invite présente n’explique pas à elle seule pourquoi le programme la réclame.'
          ] },
          { title: 'Pourquoi un stealer peut viser une session ordinaire', sourceUrls: [stealer.url], paragraphs: [
            'Un infostealer cherche des données que le contexte d’exécution peut atteindre. Selon le logiciel, la configuration et les protections actives, cela peut inclure des identifiants, des données de navigateur ou des fichiers. La fiche de Cybermalveillance décrit le vol d’identifiants comme spécialité des stealers et rapporte des leurres autour de logiciels ou extensions de jeu. Cette description n’est pas un inventaire technique exhaustif et ne permet pas de conclure ce qui a été consulté sur un ordinateur particulier.',
            'La conséquence pratique est simple : limiter les privilèges reste utile, mais ne remplace pas les mises à jour, une protection endpoint active, des logiciels issus de sources légitimes et une prudence particulière devant une demande de désactiver les défenses. Utiliser un gestionnaire de mots de passe et l’authentification multifacteur réduit certains risques de réutilisation, sans neutraliser un appareil déjà compromis ni toutes les formes de vol de session.'
          ] },
          { title: 'Exemple fictif : évaluer la portée d’un téléchargement douteux', paragraphs: [
            'Exemple fictif : une personne installe un outil non vérifié depuis un lien reçu dans un serveur de discussion. Le programme s’ouvre sans demander l’administration. Il faut retenir deux décisions, pas supposer une conclusion forensique : d’abord cesser d’utiliser ce poste pour se connecter à des comptes importants ; ensuite demander conseil au support informatique ou à un prestataire compétent pour évaluer la machine. L’absence de demande UAC ne permet pas de classer l’événement comme bénin.',
            'Si un compte montre une connexion inconnue, la réponse au compte suit sa procédure officielle : sécuriser l’accès depuis un appareil jugé sain, vérifier les sessions, invalider celles qui ne sont pas reconnues et réinitialiser les secrets concernés. Le poste suspect ne doit pas servir à saisir le nouveau mot de passe tant que l’état du terminal reste incertain. Dans une organisation, prévenir le responsable informatique évite des changements isolés qui compliqueraient la réponse.'
          ] },
          { title: 'Une fiche de prévention qui porte sur la session, pas sur un seul bouton', checklist: [
            'Conserver un compte standard pour l’usage quotidien lorsque c’est compatible avec les besoins.',
            'Garder les mécanismes de protection et les mises à jour activés ; ne pas suivre une consigne de téléchargement qui exige de couper l’antivirus.',
            'Réserver les comptes administrateur aux tâches d’administration et protéger séparément les comptes critiques.',
            'Préparer un moyen de contact informatique et une procédure de révocation des sessions avant un incident.'
          ], paragraphs: [
            'Cette fiche vise à réduire l’exposition, pas à garantir qu’un compte ou un appareil ne sera jamais compromis. Les protections doivent se compléter : droits limités pour contenir certaines modifications, authentification forte pour réduire l’usage d’un mot de passe volé, sauvegardes pour la récupération et capacité de signaler rapidement un incident. Un seul contrôle ne couvre pas toute la chaîne.',
            'Les particuliers peuvent s’appuyer sur le service d’assistance officiel de la plateforme et sur Cybermalveillance.gouv.fr. Les organisations devraient suivre leur procédure interne, qui peut prévoir l’isolement coordonné, la conservation de journaux et l’escalade vers un spécialiste. Ces conseils généraux ne déterminent ni l’origine d’une infection ni les données effectivement exfiltrées.'
          ] },
          { title: 'Ce que cette distinction ne permet pas d’affirmer', paragraphs: [
            'Savoir qu’un malware n’a pas besoin d’être administrateur ne prouve pas qu’il a réussi à voler un secret. Inversement, ne trouver aucun changement système évident n’exclut pas l’accès à des ressources du compte. L’analyse dépend des logiciels installés, des protections, des droits accordés et des éléments disponibles. Une capture d’écran ou un scan isolé ne donne pas nécessairement une chronologie complète.',
            'Le bon message n’est donc ni « les droits standards ne servent à rien », ni « UAC arrête les malwares ». Les droits standards réduisent l’accès aux opérations administratives ; la sécurité d’une session exige aussi de limiter les secrets persistants, d’éviter les exécutables douteux, de protéger les comptes et de savoir qui contacter en cas de doute.'
          ] }
        ],
        takeaway: 'Un compte standard limite certaines modifications système, mais un programme lancé dans la session peut encore atteindre les ressources de cet utilisateur. Traitez droits, protections du poste et sécurité des comptes comme des contrôles complémentaires.',
        service: { href: '/pilotage-projet-complexe/', label: 'Découvrir une approche structurée des projets numériques' }
      },
      en: {
        slug: 'infostealers-and-standard-user-rights', title: 'Password theft: malware does not always need administrator rights',
        description: 'Understand what a program can access in a Windows session and why elevation prompts do not protect every user secret.', category: 'Security & reliability',
        introduction: 'Administrator approval is not the boundary between possible and impossible malware. A program running with an ordinary account can act within that account’s access: read accessible files, interact with data available in the session, and attempt to reuse stored access. Cybermalveillance.gouv.fr describes stealers as malware focused on credentials. Understanding the distinction helps choose layered defenses and avoids treating the absence of a UAC prompt as proof that a program is harmless.',
        sources: [stealer, uac, uacDisable],
        sections: [
          { title: 'Administrator rights and session rights answer different questions', sourceUrls: [uac.url, uacDisable.url], paragraphs: [
            'Elevation concerns operations that require higher privileges, such as some system changes. Ordinary applications generally inherit a standard token, limiting system-wide changes without approval or administrator credentials. But a standard user still has sensitive data: the session can open documents, use applications that are already signed in, and access information stored in locations available to that account.',
            'Microsoft explicitly notes that malicious code can run without administrator rights and write to profile areas. Separate operating-system protection from protection of the secrets available to the user. No UAC prompt does not prove that nothing dangerous is running; a prompt alone does not explain why the program requests elevation.'
          ] },
          { title: 'Why a stealer can target an ordinary session', sourceUrls: [stealer.url], paragraphs: [
            'An infostealer seeks data reachable in its execution context. Depending on the software, configuration, and active protections, this may include credentials, browser data, or files. Cybermalveillance’s advisory describes credential theft as the specialty of stealers and reports lures involving game software or extensions. It is not a complete technical inventory and cannot establish what was accessed on one particular computer.',
            'The practical response is to keep least privilege, updates, endpoint protection, and legitimate software sources in place, and to distrust downloads that ask you to disable defenses. A password manager and multifactor authentication reduce some reuse risks, but do not clean an infected device or defeat every form of session theft.'
          ] },
          { title: 'Hypothetical example: assess a suspicious download', paragraphs: [
            'Hypothetical example: someone installs an unverified utility from a link posted in a discussion server. It opens without an administrator prompt. Draw two decisions, not a forensic conclusion: stop using that computer to access important accounts, then ask IT support or a qualified provider to assess the machine. The absence of a UAC prompt is not enough to call the event harmless.',
            'If an account shows an unknown sign-in, use the service’s official recovery process from a device believed to be clean. Review sessions, revoke unrecognized ones, and reset affected secrets. Do not type the new password on the suspect computer while its state is uncertain. In an organization, tell IT so that account changes fit the wider response.'
          ] },
          { title: 'A prevention checklist for the whole session', checklist: [
            'Use a standard account for daily work when practical.',
            'Keep protection and updates enabled; do not follow download instructions to disable antivirus.',
            'Reserve administrator accounts for administration and protect critical accounts separately.',
            'Know whom to contact and how to revoke sessions before an incident.'
          ], paragraphs: [
            'This checklist reduces exposure; it cannot guarantee that an account or device will never be compromised. Controls should complement one another: limited rights can contain some changes, strong authentication can reduce password reuse, backups support recovery, and a clear reporting path can speed escalation. No single control covers the entire chain.',
            'Individuals can use the platform’s official help and Cybermalveillance.gouv.fr. Organizations should follow their own incident procedure, which may include coordinated isolation, log retention, and specialist escalation. General guidance cannot establish the infection source or prove which data left a device.'
          ] },
          { title: 'What this distinction cannot prove', paragraphs: [
            'Knowing that malware does not need administrator rights does not prove it successfully stole a secret. Conversely, seeing no obvious system change does not rule out access to account resources. Assessment depends on installed software, protections, granted rights, and available records. A screenshot or one scan may not provide a complete timeline.',
            'The message is neither “standard rights are useless” nor “UAC stops malware.” Standard rights limit administrative operations; session security also depends on reducing persistent secrets, avoiding untrusted executables, protecting accounts, and knowing whom to contact.'
          ] }
        ],
        takeaway: 'A standard account limits some system changes, but a program in that session may still reach that user’s resources. Treat account rights, device defenses, and account security as complementary controls.',
        service: { href: '/en/project-leadership/', label: 'Explore a structured approach to digital projects' }
      }
    }
  },
  {
    id: 'dns-filtering-limits', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'dns-filtrant-protections-limites', title: 'DNS filtrant : ce qu’il protège et ce qu’il laisse passer',
        description: 'Distinguer filtrage de domaines, chiffrement des requêtes DNS et protection des échanges applicatifs.', category: 'Sécurité & fiabilité',
        introduction: 'Changer de résolveur DNS ou activer un filtre peut empêcher certaines résolutions de noms connues comme malveillantes, mais cette couche ne voit pas tout ce qui se passe sur Internet. Le DNS traduit des noms en réponses ; il ne remplace ni un VPN, ni un antivirus, ni le chiffrement HTTPS. Pour décider si un filtre est utile, il faut identifier précisément la menace visée, le résolveur réellement utilisé par les appareils et les protections qui restent nécessaires autour.',
        sources: [cisaDns, dnsTransport, dnsSecurity],
        sections: [
          { title: 'Ce qu’un filtre DNS peut bloquer', sourceUrls: [cisaDns.url], paragraphs: [
            'Un filtre DNS peut comparer une demande de résolution à une liste ou à une politique et répondre de façon à empêcher l’accès au nom ciblé. CISA décrit le sinkholing de domaines comme une forme de liste de refus qui protège contre l’accès aux domaines malveillants identifiés. C’est utile quand la destination est connue et que les appareils utilisent effectivement ce service de résolution.',
            'Le résultat dépend alors de la couverture et de la mise à jour des listes, de la configuration des clients et du chemin réseau. Un domaine très récent ou inconnu peut ne pas apparaître dans la politique. Les faux positifs peuvent aussi bloquer une ressource légitime. Il faut donc prévoir un mécanisme de signalement et une façon de corriger une règle sans désactiver toute la protection.'
          ] },
          { title: 'Résolution chiffrée n’est pas navigation chiffrée', sourceUrls: [dnsTransport.url, dnsSecurity.url], paragraphs: [
            'DNS over HTTPS et DNS over TLS protègent le transport entre le client et le résolveur compatible. Google explique que ces protocoles chiffrent les requêtes et réponses DNS sur ce segment et peuvent compléter DNSSEC pour authentifier les réponses des domaines signés. Cela réduit certaines possibilités d’écoute ou de modification en transit entre ces deux points.',
            'Cela ne chiffre pas automatiquement la page visitée, ne cache pas l’activité au résolveur et ne garantit pas qu’une application n’utilise pas un autre mécanisme de résolution. Le contenu d’un site doit être protégé par son protocole applicatif, généralement HTTPS. Le service DNS reste une partie de l’architecture et peut voir les noms demandés selon son modèle de fonctionnement et sa politique de confidentialité.'
          ] },
          { title: 'Un filtre DNS n’est ni un VPN ni un bouclier contre chaque lien', paragraphs: [
            'Un VPN transporte le trafic dans un tunnel entre un appareil et un point de sortie ; un filtre DNS décide de réponses à des questions de nom. Certains VPN peuvent aussi utiliser un DNS particulier, mais cette combinaison ne rend pas les deux fonctions équivalentes. Le choix d’un résolveur public ne chiffre pas l’ensemble du trafic réseau et ne remplace pas les contrôles de confiance sur les fichiers téléchargés.',
            'Un lien trompeur peut utiliser un domaine compromis ou récemment créé qui n’est pas encore listé. Une application peut communiquer avec une adresse IP déjà connue sans requête de nom visible pour le filtre. Et un utilisateur peut accepter une alerte, ignorer un avertissement ou être trompé par un nom ressemblant à un domaine légitime. La couche DNS améliore une défense en profondeur, elle ne certifie pas la sûreté d’une page.'
          ] },
          { title: 'Exercice fictif : vérifier le chemin de résolution', paragraphs: [
            'Exemple fictif : une petite équipe configure un service de filtrage sur son routeur, mais deux portables utilisent encore un DNS sécurisé configuré dans leur navigateur. Le résultat attendu n’est pas de supposer que le filtre fonctionne : l’administrateur inventorie les paramètres autorisés, vérifie quel résolveur chaque appareil interroge dans un test convenu, puis ajuste la configuration gérée ou documente l’exception. Le test ne doit utiliser aucun domaine dangereux réel.',
            'La fiche de décision peut contenir quatre champs : menace ciblée, résolveur et appareils couverts, méthode de mise à jour des règles, procédure de faux positif. Ajoutez les limites : domaines absents de la liste, appareils hors réseau et résolution applicative indépendante. Cette fiche aide à évaluer le contrôle sans présenter un test de laboratoire comme une garantie globale.'
          ] },
          { title: 'Choisir selon le besoin et contrôler les effets', sourceUrls: [cisaDns.url, dnsTransport.url], paragraphs: [
            'Pour un foyer, un filtre peut réduire l’exposition à des domaines déjà identifiés et simplifier certains réglages. Pour une organisation, il faut aussi considérer le roaming, les règles internes, les besoins de journalisation, les données envoyées au prestataire et les exceptions. Le contrôle est moins adapté lorsqu’on ne peut ni administrer les clients ni vérifier leurs chemins de résolution.',
            'Avant de déployer, définissez un objectif observable : par exemple, appliquer une politique à un groupe géré et pouvoir diagnostiquer un blocage légitime. Vérifiez après chaque changement que les services nécessaires fonctionnent, qu’une procédure de dérogation existe et que les personnes savent à qui signaler un problème. Réévaluez le résolveur et les règles lorsque le contexte ou la politique de confidentialité change.'
          ] }
        ],
        takeaway: 'Le DNS filtrant peut bloquer certains noms connus quand le trafic passe par lui. Vérifiez la couverture réelle, le traitement des exceptions et les protections complémentaires ; ne le confondez pas avec un VPN ou HTTPS.',
        service: { href: '/pilotage-projet-complexe/', label: 'Découvrir une approche structurée des projets numériques' }
      },
      en: {
        slug: 'dns-filtering-scope-and-limits', title: 'DNS filtering: what it protects and what it misses',
        description: 'Separate domain filtering, encrypted DNS queries, and protection for application traffic.', category: 'Security & reliability',
        introduction: 'Changing DNS resolvers or enabling a filter can block some known malicious domain lookups, but this layer cannot see everything happening online. DNS maps names to answers; it is not a VPN, antivirus, or HTTPS. To decide whether filtering helps, identify the threat, confirm which resolver each device actually uses, and keep the other protections the design still needs.',
        sources: [cisaDns, dnsTransport, dnsSecurity],
        sections: [
          { title: 'What a DNS filter can block', sourceUrls: [cisaDns.url], paragraphs: [
            'A DNS filter can compare a lookup with a list or policy and return an answer that prevents access to the targeted name. CISA describes domain sinkholing as a denylist that protects against access to identified malicious domains. It helps when the destination is known and devices actually use that resolver.',
            'Coverage, list updates, client configuration, and network paths all affect the result. A new or unknown domain may not be listed. False positives can block legitimate services, so plan a way to report and correct a rule without disabling the whole control.'
          ] },
          { title: 'Encrypted DNS is not encrypted browsing', sourceUrls: [dnsTransport.url, dnsSecurity.url], paragraphs: [
            'DNS over HTTPS and DNS over TLS protect transport between a client and a compatible resolver. Google says these protocols encrypt DNS queries and replies on that segment and can complement DNSSEC for signed domains. This reduces some eavesdropping or tampering opportunities between those points.',
            'It does not automatically encrypt the visited page, hide activity from the resolver, or guarantee that an application uses that resolver. Website content needs application-level protection, usually HTTPS. The resolver remains part of the architecture and may see requested names under its operating model and privacy policy.'
          ] },
          { title: 'DNS filtering is neither a VPN nor a shield for every link', paragraphs: [
            'A VPN tunnels traffic between a device and an exit point; DNS filtering decides answers to name lookups. Some VPNs also use a particular DNS service, but the functions are not interchangeable. Choosing a public resolver does not encrypt all network traffic or replace caution around downloaded files.',
            'A deceptive link may use a compromised or newly created domain not yet listed. An application may contact a known IP without a visible name lookup. A person can also ignore an alert or be fooled by a lookalike name. DNS adds a defense layer; it does not certify that a page is safe.'
          ] },
          { title: 'Hypothetical exercise: check the resolution path', paragraphs: [
            'Hypothetical example: a small team configures filtering on its router, but two laptops still use secure DNS set in their browsers. Do not assume the filter works. Inventory approved settings, check which resolver each device queries in a controlled test, then adjust managed settings or document the exception. The test should not use a real dangerous domain.',
            'A short decision record can capture four items: targeted threat, covered resolvers and devices, rule-update method, and false-positive process. Add limits such as unlisted domains, off-network devices, and application-specific resolution. This evaluates the control without pretending a lab check guarantees general protection.'
          ] },
          { title: 'Choose for the need and review the effects', sourceUrls: [cisaDns.url, dnsTransport.url], paragraphs: [
            'For a household, a filter can reduce exposure to already identified domains and simplify settings. An organization must also consider roaming, internal rules, logging needs, data shared with a provider, and exceptions. The control is a poor fit when clients cannot be managed and their resolution paths cannot be checked.',
            'Before deployment, define an observable goal: for example, apply a policy to a managed group and diagnose legitimate blocks. After changes, confirm needed services work, a bypass or exception process exists, and people know where to report a problem. Revisit resolver choice and rules when context or privacy terms change.'
          ] }
        ],
        takeaway: 'DNS filtering can block some known names when requests pass through it. Check actual coverage, exceptions, and complementary controls; it is not a VPN or HTTPS.',
        service: { href: '/en/project-leadership/', label: 'Explore a structured approach to digital projects' }
      }
    }
  },
  {
    id: 'windows-uac-boundaries', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'windows-uac-comprendre-elevation', title: 'Windows UAC : comprendre ce que valide la demande administrateur',
        description: 'Lire une demande UAC comme une autorisation d’élévation précise et comprendre les données qui restent accessibles à une session.', category: 'Sécurité & fiabilité',
        introduction: 'Une boîte de dialogue UAC n’est pas une approbation générale de la sécurité d’un programme. Elle signale qu’une action demande un contexte de privilèges supérieur et présente une décision à l’utilisateur ou à l’administrateur. Le sens de cette décision dépend du compte, du programme et de la politique Windows configurée. Comprendre ce mécanisme aide à prendre une décision prudente sans attribuer à UAC la protection de toutes les données ni ignorer les protections apportées par les comptes standards.',
        sources: [uacHow, uac, uacDisable],
        sections: [
          { title: 'UAC aide à encadrer l’élévation de privilèges', sourceUrls: [uacHow.url, uac.url], paragraphs: [
            'Windows utilise des jetons d’accès pour déterminer les droits d’un processus. Pour un compte administrateur en mode d’approbation, les applications ordinaires tournent normalement avec un jeton filtré ; les actions qui réclament un jeton administrateur peuvent déclencher une demande d’approbation. Pour un utilisateur standard, la demande peut exiger les identifiants d’un administrateur. Le comportement exact dépend des paramètres et stratégies de l’appareil.',
            'L’objectif est de rendre visible un changement qui nécessite une élévation et de limiter les actions qui obtiennent les privilèges correspondants sans validation. Ce mécanisme ne vérifie pas que le logiciel est utile à l’utilisateur, qu’il ne contient pas de défauts ou qu’il respecte une finalité annoncée. La décision doit donc porter sur le programme et le changement demandé, pas uniquement sur l’apparence familière de la fenêtre.'
          ] },
          { title: 'Ce que la demande ne valide pas', paragraphs: [
            'Cliquer sur Oui accorde le contexte d’élévation demandé sous la configuration présente ; cela ne constitue pas un audit indépendant du programme. Vérifiez le nom de l’éditeur, l’origine du fichier, la raison de l’action et si vous l’avez déclenchée. Une fenêtre inattendue après l’ouverture d’une pièce jointe ou d’un faux utilitaire mérite l’arrêt et un signalement, pas une approbation par habitude.',
            'Inversement, l’absence d’invite ne signifie pas qu’un programme est inoffensif. Un programme malveillant peut chercher à lire ou modifier des éléments auxquels l’utilisateur a déjà accès sans toucher aux paramètres système qui exigent l’administration. UAC vise l’élévation ; la session ordinaire conserve ses propres droits sur ses fichiers et applications.'
          ] },
          { title: 'Exemple fictif : distinguer une installation attendue d’une demande surprenante', paragraphs: [
            'Exemple fictif : une personne lance volontairement l’installation d’un outil téléchargé depuis le site de son éditeur, mais l’invite affiche un éditeur absent ou inconnu. La décision prudente consiste à annuler, retrouver la page officielle indépendamment et vérifier le fichier avant de recommencer. Si la demande vient d’une application inattendue, interrompre l’action et consulter le support informatique est préférable à l’essai « pour voir ce qui se passe ».',
            'Si la demande est cohérente, attendue et vérifiée, l’utilisateur ou la politique d’entreprise peut autoriser l’élévation nécessaire. Le cas fictif ne démontre pas comment identifier une menace ni garantir l’authenticité d’un binaire ; il met en évidence les questions à poser avant d’accorder des droits plus larges.'
          ] },
          { title: 'Une grille courte pour décider', sourceUrls: [uacHow.url], checklist: [
            'Ai-je initié cette action, à ce moment précis ?',
            'Le nom de l’application et son éditeur correspondent-ils à l’outil attendu ?',
            'La tâche nécessite-t-elle réellement une modification système ?',
            'Si l’origine reste incertaine, puis-je annuler et demander une vérification ?'
          ], paragraphs: [
            'Cette grille n’est pas un système de validation technique. Elle ralentit juste l’approbation automatique et fournit un chemin d’escalade. Dans un environnement professionnel, les employés ne devraient pas être forcés de résoudre seuls une demande dont ils ne comprennent pas la portée ; un canal de support ou un processus d’installation géré peut éviter le clic au hasard.',
            'Les administrateurs peuvent réduire les demandes répétitives par une gestion des logiciels et des stratégies cohérentes, plutôt qu’en désactivant silencieusement les contrôles. Les paramètres UAC varient selon les versions Windows et politiques d’organisation. La documentation applicable à l’édition et au contexte de l’appareil doit guider toute configuration centralisée.'
          ] },
          { title: 'UAC fait partie d’une défense en profondeur', sourceUrls: [uacDisable.url, uac.url], paragraphs: [
            'Conserver un compte standard pour les tâches quotidiennes peut réduire l’impact de certaines actions nécessitant des privilèges administrateur. Il faut néanmoins protéger les fichiers de l’utilisateur, les identités connectées, le navigateur et les données synchronisées. Des mises à jour, des contrôles endpoint, des sauvegardes et des méthodes d’authentification adaptées complètent UAC.',
            'N’augmentez pas la sécurité en désactivant globalement une fonction ou en cliquant systématiquement sur chaque invite : les deux pratiques peuvent faire disparaître le sens du contrôle. Le modèle est plus utile quand les demandes sont rares, contextualisées et examinées par une personne capable d’identifier ce qui vient d’être lancé.'
          ] }
        ],
        takeaway: 'Une demande UAC porte sur l’élévation d’un processus, pas sur une certification générale de confiance. Vérifiez l’action déclenchante, l’éditeur et la nécessité ; protégez aussi les ressources déjà accessibles à l’utilisateur.',
        service: { href: '/pilotage-projet-complexe/', label: 'Découvrir une approche structurée des projets numériques' }
      },
      en: {
        slug: 'windows-uac-elevation-boundaries', title: 'Windows UAC: understand what an administrator prompt approves',
        description: 'Treat a UAC prompt as a specific elevation decision and understand which data remains available to the signed-in session.', category: 'Security & reliability',
        introduction: 'A UAC dialog is not a general security approval for a program. It signals that an action requests a higher-privilege context and presents a decision to a user or administrator. The meaning depends on the account, program, and Windows policy. Understanding the mechanism helps people decide carefully without assuming UAC protects every file or dismissing the value of standard accounts.',
        sources: [uacHow, uac, uacDisable],
        sections: [
          { title: 'UAC helps govern privilege elevation', sourceUrls: [uacHow.url, uac.url], paragraphs: [
            'Windows uses access tokens to determine process rights. Under Admin Approval Mode, an administrator’s ordinary apps typically run with a filtered token; actions that require an administrator token can trigger an approval prompt. A standard user may need administrator credentials instead. Exact behavior depends on the device’s settings and policies.',
            'The goal is to make a requested elevated change visible and limit actions that obtain those privileges without approval. UAC does not independently verify that software is useful, defect-free, or doing what its publisher claims. Decide based on the program and requested change, not just on a familiar-looking window.'
          ] },
          { title: 'What the prompt does not approve', paragraphs: [
            'Selecting Yes grants the requested elevated context under the current configuration; it is not an independent audit. Check the publisher, file source, reason for the action, and whether you initiated it. An unexpected prompt after opening an attachment or fake utility calls for stopping and reporting, not habitual approval.',
            'Conversely, no prompt does not mean a program is harmless. Malware may read or change information the signed-in user can already access without modifying system settings that require administration. UAC governs elevation; the ordinary session still has rights to its files and applications.'
          ] },
          { title: 'Hypothetical example: expected installation or surprising prompt?', paragraphs: [
            'Hypothetical example: a person starts an expected installer from its publisher’s site, but the prompt shows an absent or unfamiliar publisher. The prudent choice is to cancel, independently return to the official page, and verify the file before trying again. If an unexpected application caused the prompt, stop and ask IT support rather than approving it as an experiment.',
            'If the request is expected, coherent, and verified, the user or organizational policy can approve the necessary elevation. This example does not teach threat identification or guarantee a binary is authentic; it shows the questions to ask before granting broader rights.'
          ] },
          { title: 'A short decision checklist', sourceUrls: [uacHow.url], checklist: [
            'Did I initiate this action at this time?',
            'Do the application name and publisher match the expected tool?',
            'Does the task really require a system change?',
            'If the source is unclear, can I cancel and ask for a check?'
          ], paragraphs: [
            'This checklist is not a technical validation system. It slows automatic approval and offers an escalation path. In a workplace, employees should not have to resolve a request they do not understand alone; a support channel or managed installation process can prevent guesswork.',
            'Administrators can reduce repeated prompts with consistent software management and policy rather than silently disabling controls. UAC settings vary across Windows editions and organizational policies. Use documentation for the device’s edition and context before changing centralized settings.'
          ] },
          { title: 'UAC is one part of defense in depth', sourceUrls: [uacDisable.url, uac.url], paragraphs: [
            'Using a standard account for everyday work can reduce the impact of some actions that require administrator privileges. User files, signed-in identities, browser data, and synchronized information still need protection. Updates, endpoint controls, backups, and suitable authentication methods complement UAC.',
            'Do not try to improve security by globally disabling a feature or automatically clicking every prompt; both habits remove the control’s meaning. It is most useful when prompts are uncommon, contextual, and reviewed by someone who knows what was just launched.'
          ] }
        ],
        takeaway: 'A UAC prompt concerns process elevation, not general trust certification. Check the initiating action, publisher, and need; also protect resources the user can already access.',
        service: { href: '/en/project-leadership/', label: 'Explore a structured approach to digital projects' }
      }
    }
  },
  {
    id: 'windows-file-sharing', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'diagnostiquer-partage-fichiers-windows', title: 'Deux PC sur le même réseau : pourquoi le partage de fichiers échoue encore',
        description: 'Diagnostiquer SMB par couches : profil réseau, chemin, pare-feu, compte et permissions, sans ouvrir tout le réseau.', category: 'Sécurité & fiabilité',
        introduction: 'Deux ordinateurs connectés au même Wi-Fi ne sont pas automatiquement autorisés à se voir ni à partager des fichiers. Le partage Windows dépend d’un chemin réseau, de paramètres de découverte, de règles de pare-feu, d’identifiants et de permissions. Modifier toutes ces couches à la fois empêche de comprendre le problème et peut élargir l’accès inutilement. Un parcours de diagnostic ordonné permet de trouver la couche en cause et de garder les règles limitées aux appareils et profils qui en ont besoin.',
        sources: [smbTrouble, smbFirewall, smbMulti],
        sections: [
          { title: 'Commencer par le besoin et le profil réseau', sourceUrls: [smbTrouble.url, smbMulti.url], paragraphs: [
            'Confirmez d’abord que le partage est souhaité entre ces deux appareils et sur ce réseau de confiance. Windows distingue notamment des profils de connexion ; le profil public peut appliquer des règles plus restrictives. N’activez pas la découverte de réseau ni le partage de fichiers sur un réseau public simplement pour faire disparaître un message d’erreur.',
            'Notez les noms des deux ordinateurs, le compte censé accéder au dossier et le message exact. Vérifiez que le poste serveur est allumé, connecté au bon réseau et que le dossier est toujours partagé. Tester par nom et, si nécessaire, vérifier la connectivité par les outils d’assistance permet de différencier un problème de découverte ou de chemin d’un refus de permission.'
          ] },
          { title: 'Vérifier ensuite les règles, sans couper le pare-feu', sourceUrls: [smbFirewall.url, smbMulti.url], paragraphs: [
            'Le pare-feu peut bloquer les connexions entrantes nécessaires à SMB. La documentation Microsoft décrit des règles File and Printer Sharing qui doivent être activées dans certains diagnostics ciblés et insiste sur le contexte de profil. Cela ne justifie pas de désactiver le pare-feu entier ni de rendre les règles entrantes accessibles depuis tous les réseaux.',
            'Vérifiez la portée de la règle et le profil actif sur la machine qui héberge le partage. Sur un réseau géré, demandez à l’administrateur avant de toucher aux politiques. Un changement contrôlé est plus facile à annuler qu’une désactivation générale et fournit une information utile sur la couche réellement en cause.'
          ] },
          { title: 'Un chemin accessible peut encore refuser l’ouverture', paragraphs: [
            'SMB sépare le partage réseau des permissions du système de fichiers. Un compte peut découvrir un nom de partage mais ne pas avoir le droit de lire le dossier ; les autorisations effectives dépendent des deux niveaux. Utilisez un compte nommé, vérifiez qu’il a uniquement les droits nécessaires et évitez l’accès invité ou le partage général en écriture.',
            'Les identifiants enregistrés sur le client peuvent aussi pointer vers le mauvais compte ou un mot de passe périmé. Lorsqu’un message mentionne des identifiants, vérifiez quelle identité Windows présente à la machine distante et suivez les règles du propriétaire du réseau. Ne demandez pas de communiquer un mot de passe dans un chat ou un courriel non sécurisé.'
          ] },
          { title: 'Exemple fictif : isoler une erreur par couche', paragraphs: [
            'Exemple fictif : un portable professionnel peut ouvrir un dossier partagé sur le réseau privé du bureau, mais pas à domicile. Le diagnostic compare d’abord le profil et le réseau ; il vérifie ensuite si l’accès distant est autorisé par l’organisation. Si les connexions directes ne sont pas prévues, le résultat attendu est d’utiliser le canal approuvé ou d’attendre le retour au réseau géré, pas d’ouvrir SMB sur Internet.',
            'Pour une paire d’ordinateurs personnels sur un réseau privé, une fiche peut noter : nom de partage, compte autorisé, profil actif, règle ciblée vérifiée et résultat de lecture/écriture attendu. Ne changez qu’une variable à la fois, puis revenez sur la règle si le test ne confirme pas le besoin.'
          ] },
          { title: 'Éviter les raccourcis hérités et les ouvertures larges', checklist: [
            'Ne désactivez pas le pare-feu pour tester un partage.',
            'N’activez pas SMB1 comme étape de dépannage par défaut ; confirmez d’abord une exigence de compatibilité documentée.',
            'N’ouvrez que le partage et les opérations nécessaires aux comptes concernés.',
            'Révoquez une règle temporaire lorsque le test est terminé.'
          ], paragraphs: [
            'Certaines pages de dépannage anciennes listent des options de compatibilité qui ne doivent pas devenir des recettes. Microsoft décrit le diagnostic SMB dans plusieurs contextes ; il faut tenir compte de la version Windows, du rôle du poste et des exigences de sécurité. L’installation d’un protocole ancien augmente l’exposition et ne résout pas forcément une panne de nom, d’identifiants ou de permissions.',
            'Si le partage contient des données professionnelles ou sensibles, demandez au propriétaire du système de confirmer le périmètre. Une configuration fonctionnelle ne signifie pas que le partage est adapté à chaque réseau. La règle de succès est un accès contrôlé depuis les appareils prévus et le refus des autres chemins.'
          ] }
        ],
        takeaway: 'Diagnostiquez dans l’ordre : profil et besoin, chemin réseau, règles ciblées, compte, puis permissions. Gardez le pare-feu activé et limitez le partage au réseau et aux utilisateurs prévus.',
        service: { href: '/pilotage-projet-complexe/', label: 'Découvrir une approche structurée des projets numériques' }
      },
      en: {
        slug: 'troubleshoot-windows-file-sharing', title: 'Two PCs on one network: why file sharing still fails',
        description: 'Diagnose SMB by layer: network profile, path, firewall, account, and permissions—without opening the whole network.', category: 'Security & reliability',
        introduction: 'Two computers on the same Wi-Fi are not automatically allowed to discover one another or share files. Windows sharing depends on a network path, discovery settings, firewall rules, credentials, and permissions. Changing every layer at once hides the cause and may widen access unnecessarily. An ordered diagnostic path can identify the failing layer while keeping rules limited to the devices and profiles that need them.',
        sources: [smbTrouble, smbFirewall, smbMulti],
        sections: [
          { title: 'Start with the need and network profile', sourceUrls: [smbTrouble.url, smbMulti.url], paragraphs: [
            'First confirm that sharing between these devices is intended on this trusted network. Windows distinguishes connection profiles, and a public profile may apply stricter rules. Do not enable network discovery or file sharing on a public network just to clear an error.',
            'Record both computer names, the account meant to access the folder, and the exact message. Check that the host is on, connected to the right network, and still sharing the folder. Testing by name and using appropriate support tools to check connectivity helps separate discovery or path issues from permission denial.'
          ] },
          { title: 'Check rules without turning off the firewall', sourceUrls: [smbFirewall.url, smbMulti.url], paragraphs: [
            'The firewall can block inbound SMB connections. Microsoft documents File and Printer Sharing rules that may need enabling for specific diagnostics and emphasizes the active profile. That does not justify disabling the whole firewall or allowing inbound rules from every network.',
            'Check the rule’s scope and the profile on the machine hosting the share. On a managed network, ask the administrator before changing policy. A controlled change is easier to reverse than a broad shutdown and reveals which layer is involved.'
          ] },
          { title: 'A reachable path can still deny access', paragraphs: [
            'SMB separates the network share from file-system permissions. An account may discover a share but lack permission to read the folder; effective access depends on both layers. Use a named account, grant only necessary access, and avoid guest access or broad write permissions.',
            'Saved credentials on the client may also point to the wrong account or an old password. If a message mentions credentials, check which Windows identity is being presented to the remote machine and follow the network owner’s rules. Do not send passwords through an insecure chat or email.'
          ] },
          { title: 'Hypothetical example: isolate the failing layer', paragraphs: [
            'Hypothetical example: a company laptop opens a share at the office but not at home. First compare the network profile and ask whether remote access is allowed by policy. If direct connections are not intended, the right outcome is to use an approved channel or wait until the managed network is available—not expose SMB to the Internet.',
            'For two personal computers on a private network, record the share name, authorized account, active profile, specific rule checked, and expected read/write result. Change one variable at a time, then remove the rule if the test does not confirm a need.'
          ] },
          { title: 'Avoid legacy shortcuts and broad openings', checklist: [
            'Do not disable the firewall to test sharing.',
            'Do not enable SMB1 as a default troubleshooting step; first confirm a documented compatibility requirement.',
            'Limit each share and operation to the intended accounts.',
            'Remove temporary rules when the test ends.'
          ], paragraphs: [
            'Some older troubleshooting pages list compatibility options that should not become recipes. Microsoft describes SMB diagnosis in several contexts; account for Windows version, computer role, and security requirements. Installing an older protocol increases exposure and may not fix a naming, credential, or permission issue.',
            'If the share holds business or sensitive data, ask its owner to confirm scope. A working configuration is not automatically suitable for every network. Success means controlled access from intended devices and denial through other paths.'
          ] }
        ],
        takeaway: 'Diagnose in order: profile and need, network path, targeted rules, account, then permissions. Keep the firewall on and limit the share to intended users and networks.',
        service: { href: '/en/project-leadership/', label: 'Explore a structured approach to digital projects' }
      }
    }
  },
  {
    id: 'automation-hosting-choice', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'heberger-automatisations-local-ou-cloud', title: 'Héberger ses automatisations chez soi ou dans le cloud ?',
        description: 'Comparer disponibilité, maintenance, responsabilités, sauvegardes et connectivité avant de choisir un hébergement.', category: 'Sécurité & fiabilité',
        introduction: 'Une automatisation hébergée à domicile peut rester proche des fichiers et équipements locaux ; un service cloud peut être accessible même quand le poste de travail est éteint. Aucun de ces choix n’est automatiquement plus fiable, moins cher ou plus sûr. La décision dépend de la fréquence d’exécution, de la qualité de la connexion, des compétences disponibles pour la maintenance, des données traitées et du plan de reprise. Comparer le coût complet et les responsabilités évite de ne retenir que le prix d’un serveur ou d’un abonnement.',
        sources: [cloudCNIL, processorCNIL, cloudFramework],
        sections: [
          { title: 'Partir des exigences de l’automatisation', sourceUrls: [cloudCNIL.url], paragraphs: [
            'Écrivez d’abord quand l’automatisation doit fonctionner, combien de temps d’interruption est acceptable, quelles données elle manipule et quelles autres applications elle doit joindre. Un script qui traite un document une fois par semaine n’a pas les mêmes exigences qu’un service qui répond à chaque commande. La sensibilité des données, la localisation souhaitée et la durée de conservation peuvent aussi éliminer certaines options.',
            'La CNIL recommande d’évaluer les besoins de sécurité et d’intégrer les services cloud à l’analyse de risques ainsi qu’aux plans de continuité et de reprise. Cette logique vaut également pour un hébergement local : il faut déterminer qui met à jour le système, surveille les sauvegardes, contrôle les accès et réagit à une panne.'
          ] },
          { title: 'Comparer les responsabilités et l’exploitation', sourceUrls: [processorCNIL.url, cloudFramework.url], paragraphs: [
            'À domicile, le propriétaire gère souvent le matériel, les mises à jour, l’alimentation, la connectivité et la récupération après panne. Dans le cloud, l’hébergeur gère certaines couches, mais le client reste responsable des comptes, de la configuration, des droits et parfois des sauvegardes ou journaux. La répartition précise dépend du service choisi et du contrat ; « cloud » ne signifie pas « fournisseur responsable de tout ».',
            'Pour un service qui traite des données personnelles pour une organisation, la sélection du sous-traitant et les obligations contractuelles méritent un examen spécifique. La CNIL recommande de documenter les garanties, responsabilités, incident, restitution et destruction des données. Pour un usage individuel, ces formalités ne sont pas forcément applicables de la même manière, mais la lecture des conditions de service reste pertinente.'
          ] },
          { title: 'Coût complet : compter le temps et les interruptions', paragraphs: [
            'Le calcul ne se limite pas au montant mensuel. Pour une solution locale, estimez matériel, consommation, remplacement, routeur ou connexion de secours et temps consacré aux mises à jour. Pour le cloud, comptez l’instance, stockage, trafic, sauvegardes, supervision, journaux, transfert de données et effort de migration. Certains coûts n’apparaissent qu’en cas de croissance ou de sortie du service.',
            'Ajoutez la valeur d’une interruption pour le processus : existe-t-il un report manuel ou la tâche doit-elle absolument s’exécuter à l’heure ? Une automatisation critique peut nécessiter redondance, alertes et récupération testée, quel que soit son lieu d’hébergement. L’architecture cloud peut soutenir la fiabilité, mais elle ne crée pas à elle seule un processus de reprise bien conçu.'
          ] },
          { title: 'Exemple fictif : traitement nocturne de bordereaux', paragraphs: [
            'Exemple fictif : une association veut extraire chaque nuit les totaux de bordereaux reçus dans un dossier partagé. Si les fichiers restent sur un poste local et que la connexion Internet est instable, un mini-ordinateur local peut répondre au besoin à condition d’être maintenu et sauvegardé. Si le processus doit être supervisé à distance et les fichiers sont déjà dans un service cloud approuvé, un traitement hébergé peut réduire les dépendances au domicile.',
            'Le choix n’est pas une promesse de résultat : l’association liste d’abord données permises, délai acceptable, personne responsable des incidents, fréquence des sauvegardes et méthode de reprise. Elle teste le chemin retenu sur des documents autorisés avant de traiter des documents réels, puis vérifie que les fichiers temporaires et journaux ne conservent pas plus d’informations que nécessaire.'
          ] },
          { title: 'Une grille de décision réutilisable', checklist: [
            'Accès aux sources locales : indispensable, fréquent ou exceptionnel ?',
            'Disponibilité requise et procédure manuelle de secours définies ?',
            'Qui applique les mises à jour, surveille et restaure les sauvegardes ?',
            'Données, contrat, localisation, accès d’administration et sortie du service vérifiés ?',
            'Coûts récurrents et temps d’exploitation estimés sur un horizon réaliste ?'
          ], paragraphs: [
            'Choisissez local si la proximité des ressources et le contrôle direct compensent la responsabilité d’exploitation et si quelqu’un peut maintenir l’équipement. Choisissez le cloud lorsque les exigences de disponibilité, l’accès distant et les services gérés apportent une valeur claire et que les conditions de données et de dépendance sont acceptables. Une option hybride peut convenir, mais augmente les interfaces à maintenir.',
            'Ne migrez pas un processus avant de savoir comment revenir en arrière. Conservez une copie des configurations nécessaires, désignez un responsable, documentez l’accès d’urgence et révisez les coûts après un cycle d’usage représentatif. Si les données sont sensibles ou réglementées, faites valider l’architecture et le contrat par les personnes compétentes.'
          ] }
        ],
        takeaway: 'Choisissez l’hébergement à partir des exigences de disponibilité, de l’accès aux données et des responsabilités que quelqu’un peut réellement assumer. Comparez aussi le coût d’exploitation et le plan de reprise.',
        service: { href: '/pilotage-projet-complexe/', label: 'Découvrir une approche structurée des projets numériques' }
      },
      en: {
        slug: 'host-automation-at-home-or-in-cloud', title: 'Should you host automation at home or in the cloud?',
        description: 'Compare availability, maintenance, responsibilities, backups, and connectivity before choosing a host.', category: 'Security & reliability',
        introduction: 'Home hosting can keep an automation close to local files and devices; a cloud service may remain available while a desktop is off. Neither choice is automatically more reliable, cheaper, or safer. The decision depends on run frequency, connectivity, maintenance skills, data, and recovery needs. Comparing full operating cost and responsibility avoids focusing only on a server price or subscription.',
        sources: [cloudCNIL, processorCNIL, cloudFramework],
        sections: [
          { title: 'Start with the automation’s requirements', sourceUrls: [cloudCNIL.url], paragraphs: [
            'Write down when it must run, acceptable downtime, the data it handles, and the applications it must reach. A script processing one document weekly differs from a service responding to every order. Data sensitivity, preferred location, and retention period may rule out some options.',
            'CNIL recommends assessing security needs and including cloud services in risk analysis and continuity and recovery plans. The same thinking applies on premises: decide who updates the system, checks backups, manages access, and responds to an outage.'
          ] },
          { title: 'Compare responsibilities and operations', sourceUrls: [processorCNIL.url, cloudFramework.url], paragraphs: [
            'At home, the owner often manages hardware, updates, power, connectivity, and recovery. In cloud hosting, the provider manages some layers, but the customer remains responsible for accounts, configuration, access, and sometimes backups or logs. The precise division depends on the service and contract; “cloud” does not mean the provider handles everything.',
            'If a service processes personal data for an organization, provider selection and contract duties need specific review. CNIL recommends documenting safeguards, responsibilities, incidents, and data return or deletion. Those formalities may not apply the same way to personal use, but service terms still matter.'
          ] },
          { title: 'Full cost includes time and downtime', paragraphs: [
            'Do not count only the monthly price. For local hosting, estimate hardware, power, replacement, connectivity backup, and maintenance time. For cloud hosting, include compute, storage, traffic, backups, monitoring, logs, data transfer, and migration effort. Some costs appear only as usage grows or when leaving the service.',
            'Add the cost of interruption to the process: can work wait, or must it run on time? Critical automation may need redundancy, alerts, and tested recovery wherever it is hosted. Cloud architecture can support reliability, but it does not create a sound recovery process by itself.'
          ] },
          { title: 'Hypothetical example: nightly processing of delivery slips', paragraphs: [
            'Hypothetical example: a nonprofit wants to extract totals each night from delivery slips in a shared folder. If files stay on a local computer and Internet access is unreliable, a small local machine may fit, provided someone maintains and backs it up. If remote oversight matters and files already live in an approved cloud service, hosted processing may reduce dependence on a home connection.',
            'This choice is not a performance claim. The nonprofit first lists permitted data, acceptable delay, incident owner, backup frequency, and recovery method. It tests the chosen path on authorized documents before real processing, then checks that temporary files and logs do not retain more information than needed.'
          ] },
          { title: 'A reusable decision grid', checklist: [
            'Is local-resource access essential, frequent, or occasional?',
            'Are required availability and manual fallback defined?',
            'Who updates, monitors, and restores backups?',
            'Have data terms, contract, location, admin access, and exit options been checked?',
            'Are recurring costs and operating time estimated over a realistic period?'
          ], paragraphs: [
            'Choose local when proximity and direct control outweigh operating responsibility and someone can maintain the equipment. Choose cloud when availability, remote access, or managed services add clear value and data and dependency terms are acceptable. A hybrid option may work but adds interfaces to maintain.',
            'Do not move a process before knowing how to roll back. Keep needed configuration copies, name an owner, document emergency access, and review cost after a representative usage cycle. For sensitive or regulated data, have qualified people review the architecture and contract.'
          ] }
        ],
        takeaway: 'Choose a host based on availability, data access, and responsibilities someone can truly own. Compare operating cost and recovery plans as well.',
        service: { href: '/en/project-leadership/', label: 'Explore a structured approach to digital projects' }
      }
    }
  },
  {
    id: 'local-service-exposure', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'exposer-service-local-controles', title: 'Exposer un service local sans exposer tout son poste',
        description: 'Distinguer un accès privé d’une publication Internet et placer identité, portée minimale et révocation autour d’un tunnel.', category: 'Sécurité & fiabilité',
        introduction: 'Un service qui écoute sur un ordinateur local peut être utile pour un test, un tableau de bord ou une intégration. Le rendre accessible à distance ne consiste pas seulement à rendre son port joignable : il faut définir qui peut l’atteindre, par quel chemin, avec quelle identité et comment l’accès sera retiré. Les tunnels et proxies peuvent éviter certaines ouvertures entrantes directes, mais un nom public ou un tunnel chiffré ne protège pas automatiquement l’application exposée.',
        sources: [tunnelRoute, privateApp, funnel],
        sections: [
          { title: 'Distinguer accès privé et service public', sourceUrls: [privateApp.url, funnel.url], paragraphs: [
            'Commencez par classer les personnes visées. Si seuls les membres d’une équipe ou certains appareils doivent se connecter, privilégiez une architecture d’accès privé qui vérifie l’identité et limite les destinations. Si n’importe quel navigateur doit atteindre le service, il s’agit d’une publication publique et il faut concevoir l’application comme un service Internet exposé.',
            'Les documentations de Tailscale distinguent son accès de partage privé de Funnel, qui rend un service local joignable par toute personne possédant l’URL. Cloudflare documente aussi des applications privées et des routes publiques vers des services locaux. Ces produits ont leurs propres contrôles ; leurs noms de fonction ne prouvent ni qu’une application est authentifiée ni qu’une politique est correctement configurée.'
          ] },
          { title: 'Un tunnel protège le transport, pas toutes les décisions d’accès', sourceUrls: [tunnelRoute.url, funnel.url], paragraphs: [
            'Un tunnel peut établir un chemin chiffré entre un relais et le service local, sans ouvrir directement un port entrant sur le routeur. Cette propriété réduit certains risques réseau, mais l’application peut encore manquer d’authentification, accepter des actions dangereuses ou exposer des données. Un nom difficile à deviner n’est pas une identité et ne doit pas servir de contrôle d’accès.',
            'Il faut aussi savoir où le chiffrement se termine, qui termine le TLS et quelles métadonnées ou journaux sont produits. Les détails dépendent du fournisseur et de la configuration. Vérifiez les pages du produit utilisé et le modèle de menace ; ne transposez pas les garanties annoncées pour un mécanisme à un autre service ou mode de publication.'
          ] },
          { title: 'Réduire la portée avant de partager', paragraphs: [
            'N’exposez qu’un service dédié, avec un compte non privilégié et les seules données nécessaires. Évitez de faire pointer un proxy vers une interface d’administration, le bureau complet ou un répertoire général de fichiers. Retirez les données de démonstration sensibles, les secrets d’environnement et les fonctionnalités de diagnostic avant toute ouverture à d’autres utilisateurs.',
            'Pour un accès privé, établissez une règle explicite : quelles identités, quels appareils, quelles heures ou quelles ressources sont autorisés ? Pour une publication publique, ajoutez authentification adaptée, validation des entrées, mises à jour et journaux proportionnés. Si le service n’a pas été conçu pour des visiteurs inconnus, rendez-le accessible uniquement aux personnes authentifiées ou ne le publiez pas.'
          ] },
          { title: 'Exemple fictif : partager une prévisualisation temporaire', paragraphs: [
            'Exemple fictif : une développeuse veut montrer une prévisualisation à trois collègues pendant une journée. L’option la moins exposée consiste à utiliser un accès privé avec identité et durée convenues. Si le choix produit une URL accessible publiquement, elle traite le service comme public, retire les données réelles et place une authentification avant le contenu. Elle note le propriétaire et désactive le partage après la revue.',
            'Le critère de réussite proposé est que les trois collègues autorisés puissent consulter la prévisualisation, tandis qu’un navigateur sans identité n’obtient pas le contenu sensible. Ce test ne remplace pas un audit et ne prouve pas que tous les chemins sont bloqués ; il vérifie une exigence élémentaire avant un partage limité.'
          ] },
          { title: 'Prévoir l’expiration et la révocation', sourceUrls: [privateApp.url, funnel.url], checklist: [
            'Nommer le propriétaire du service et de la règle d’accès.',
            'Définir les utilisateurs, ressources et durée autorisés.',
            'Vérifier l’accès depuis un compte autorisé et un compte non autorisé.',
            'Documenter comment couper le tunnel ou retirer la politique immédiatement.',
            'Supprimer les données temporaires et examiner les journaux après la période prévue.'
          ], paragraphs: [
            'Un service temporaire reste temporaire seulement si quelqu’un sait qu’il existe et qu’une date de fermeture est prévue. Préparez une méthode de révocation qui ne dépend pas de l’application elle-même : couper la route, désactiver la règle d’identité ou arrêter le service local, selon l’architecture. Gardez un moyen de contrôle côté fournisseur si le poste devient inaccessible.',
            'Cet article ne configure aucun service et ne recommande pas un fournisseur en particulier. Les règles de publication évoluent, les noms de produits changent et une configuration effective dépend de l’offre, de la politique et du réseau. Vérifiez la documentation actuelle, faites relire les exigences sensibles et ne publiez pas un service qui ne peut pas être retiré rapidement.'
          ] }
        ],
        takeaway: 'Décidez d’abord si l’accès doit être privé ou public. Limitez service, identité et données, vérifiez un refus sans identité et planifiez la révocation avant d’activer un tunnel.',
        service: { href: '/pilotage-projet-complexe/', label: 'Découvrir une approche structurée des projets numériques' }
      },
      en: {
        slug: 'expose-a-local-service-safely', title: 'Expose a local service without exposing the whole computer',
        description: 'Separate private access from Internet publishing, then add identity, least scope, and revocation around a tunnel.', category: 'Security & reliability',
        introduction: 'A service running on a local computer can help with a test, dashboard, or integration. Remote access is more than making a port reachable: decide who can connect, through which path, with what identity, and how access will be removed. Tunnels and proxies can avoid some direct inbound openings, but a public hostname or encrypted tunnel does not automatically protect the exposed application.',
        sources: [tunnelRoute, privateApp, funnel],
        sections: [
          { title: 'Separate private access from public service', sourceUrls: [privateApp.url, funnel.url], paragraphs: [
            'Start by identifying the audience. If only a team or selected devices should connect, prefer private access that verifies identity and limits destinations. If any browser should reach the service, it is a public service and should be designed as Internet-facing.',
            'Tailscale documentation distinguishes private device access from Funnel, which makes a local service reachable by anyone with its URL. Cloudflare also documents private apps and public routes to local services. These products have their own controls; a feature name does not prove that an application is authenticated or a policy is configured correctly.'
          ] },
          { title: 'A tunnel protects transport, not every access decision', sourceUrls: [tunnelRoute.url, funnel.url], paragraphs: [
            'A tunnel can create an encrypted path between a relay and a local service without directly opening an inbound router port. This reduces some network risks, but the application may still lack authentication, allow dangerous actions, or expose data. A hard-to-guess URL is not an identity and should not be an access control.',
            'Also determine where encryption ends, who terminates TLS, and what metadata or logs are produced. Details depend on provider and configuration. Check the relevant product documentation and threat model; do not transfer one mechanism’s claims to another mode or service.'
          ] },
          { title: 'Reduce scope before sharing', paragraphs: [
            'Expose only a dedicated service, using a nonprivileged account and the data it needs. Avoid routing to an admin console, full desktop, or broad file directory. Remove sensitive demo data, environment secrets, and diagnostic features before opening access to others.',
            'For private access, make an explicit rule: which identities, devices, times, and resources are allowed? For public publishing, add suitable authentication, input validation, updates, and proportionate logs. If a service was not designed for unknown visitors, make it available only to authenticated people or do not publish it.'
          ] },
          { title: 'Hypothetical example: share a temporary preview', paragraphs: [
            'Hypothetical example: a developer wants to show a preview to three colleagues for one day. The least exposed option is private access with agreed identities and duration. If a public URL is chosen, treat the service as public, remove real data, and put authentication in front of the content. Record an owner and disable the share after review.',
            'A proposed acceptance check is that the three authorized colleagues can view the preview while a browser without an identity cannot access sensitive content. This is not an audit and cannot prove every path is blocked; it checks one basic requirement before limited sharing.'
          ] },
          { title: 'Plan expiry and revocation', sourceUrls: [privateApp.url, funnel.url], checklist: [
            'Name the service owner and access-policy owner.',
            'Define allowed users, resources, and duration.',
            'Check access from an authorized and unauthorized account.',
            'Document how to stop the tunnel or remove policy immediately.',
            'Delete temporary data and review logs after the planned period.'
          ], paragraphs: [
            'A temporary service stays temporary only when someone knows it exists and has a shutdown date. Prepare a revocation method that does not depend on the application itself: remove the route, disable the identity rule, or stop the local service as appropriate. Keep provider-side control in case the computer becomes unavailable.',
            'This article does not configure a service or endorse a particular provider. Publishing rules change, product names evolve, and effective settings depend on plan, policy, and network. Check current documentation, review sensitive requirements, and do not publish a service that cannot be withdrawn promptly.'
          ] }
        ],
        takeaway: 'Decide first whether access should be private or public. Limit the service, identity, and data; check denial without identity and plan revocation before enabling a tunnel.',
        service: { href: '/en/project-leadership/', label: 'Explore a structured approach to digital projects' }
      }
    }
  },
  {
    id: 'hidden-website-compromise', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'detecter-site-web-compromis-spam-seo', title: 'Une page d’accueil normale peut cacher un site compromis',
        description: 'Réagir aux pages de spam ou redirections cachées en croisant Search Console, fichiers, comptes et journaux avec un professionnel.', category: 'Sécurité & fiabilité',
        introduction: 'Un site peut sembler normal à son propriétaire tout en servant des pages indésirables à certains visiteurs ou moteurs de recherche. Une extension compromise, un compte éditeur détourné ou un fichier modifié peut ajouter du spam ou des redirections sans changer visiblement la page d’accueil. Un résultat étrange dans un moteur ne prouve pas à lui seul une intrusion, mais mérite une vérification structurée. Le but est de confirmer le signal, réduire l’exposition si nécessaire et faire restaurer le site depuis un état connu comme fiable.',
        sources: [googleHacked, googleReport, cnilGuide],
        sections: [
          { title: 'Prendre les signaux comme des indices à vérifier', sourceUrls: [googleHacked.url, googleReport.url], paragraphs: [
            'Signaux possibles : pages indexées que l’équipe ne reconnaît pas, redirections inattendues, titres de recherche sans rapport, nouveaux comptes administrateur, alertes du navigateur ou modifications non planifiées. Chaque indice peut avoir plusieurs causes : cache, erreur de déploiement, contenu généré, extension défectueuse ou compromission. Il faut comparer les URLs, l’état côté serveur et les comptes avant d’attribuer une cause.',
            'Google Search Central recommande de consulter le rapport Security Issues et de corriger ou retirer les pages piratées détectées. Cet outil parle de signaux visibles par Google ; l’absence d’alerte ne prouve pas que le système est sain. L’indexation et l’état de sécurité du site sont deux observations différentes.'
          ] },
          { title: 'Éviter une « réparation » par robots.txt seul', paragraphs: [
            'Masquer une URL dans robots.txt peut influencer l’exploration, mais ne supprime pas le code qui la sert, les accès persistants ni les données éventuellement exposées. Une page malveillante peut rester accessible par lien direct. Corriger l’indexation sans traiter la cause risque de faire réapparaître le contenu ou de laisser les visiteurs face au problème.',
            'Avant tout changement, notez les URLs, messages, heures et alertes disponibles. Dans un contexte professionnel, avertissez l’hébergeur et la personne responsable du site. Ne supprimez pas au hasard des fichiers, comptes ou journaux : cela peut casser le service et compliquer l’analyse. Une personne qualifiée peut choisir une isolation ou un retour à une sauvegarde saine selon l’architecture.'
          ] },
          { title: 'Exemple fictif : vérifier une page inattendue dans les résultats', paragraphs: [
            'Exemple fictif : un propriétaire de boutique trouve dans les résultats une URL contenant un texte de jeu-concours qu’il ne reconnaît pas. Il enregistre la requête et l’URL, vérifie si elle répond sur le site et consulte les comptes et changements récents via son prestataire. Si le contenu est présent, il demande à l’hébergeur de sécuriser le site et de vérifier les fichiers et extensions avant de demander un réexamen d’indexation.',
            'Résultat attendu de cet exercice : un dossier de faits observés et un responsable d’escalade, pas une conclusion sur le vecteur ni une promesse de nettoyage. Aucun lien suspect ne doit être ouvert depuis un poste non protégé ; l’équipe peut transmettre les informations au support par un canal de confiance.'
          ] },
          { title: 'Parcours défensif avec le propriétaire technique', sourceUrls: [cnilGuide.url], checklist: [
            'Conserver le signal observé et l’heure sans diffuser de données personnelles.',
            'Demander au responsable du site ou à l’hébergeur de vérifier comptes, changements, fichiers et extensions.',
            'Changer les accès depuis un terminal sain et révoquer les sessions inconnues selon la procédure.',
            'Rétablir depuis une version connue comme fiable et mettre à jour les composants concernés.',
            'Après correction, vérifier les URLs touchées et utiliser les outils officiels de réexamen.'
          ], paragraphs: [
            'La CNIL rappelle les mesures générales de sécurité des données, comme la gestion des habilitations, la journalisation, les sauvegardes et la revue du fournisseur. Selon les données du site et le statut de l’organisme, une exposition peut nécessiter une analyse complémentaire et des notifications appropriées. La décision revient au responsable compétent ; un article général ne détermine pas les obligations d’un incident précis.',
            'Après remise en état, inventoriez les comptes privilégiés, retirez ceux qui ne sont plus utiles, appliquez les mises à jour et contrôlez les sauvegardes. Cherchez le point d’entrée avec le prestataire, sans publier des détails techniques sensibles. Vérifiez ensuite que la page publique reflète le contenu attendu et que les pages injectées ne sont plus servies.'
          ] },
          { title: 'Réparer le site et réparer sa visibilité sont deux tâches', sourceUrls: [googleHacked.url, googleReport.url], paragraphs: [
            'La résolution sur le serveur doit précéder la demande de réexamen destinée au moteur de recherche. Un site nettoyé peut conserver temporairement des résultats anciens ou des alertes, tandis qu’une URL cachée dans l’index peut rester vulnérable. Suivez la procédure de la plateforme après confirmation du propriétaire technique que le problème a été corrigé.',
            'Ce parcours n’est pas une procédure forensique complète et ne prétend pas prouver l’absence de persistance. Si des comptes, paiements ou informations personnelles sont concernés, faites intervenir les responsables sécurité, juridiques et de protection des données. Gardez la communication publique factuelle et limitée aux éléments confirmés.'
          ] }
        ],
        takeaway: 'Un résultat de recherche inhabituel est un signal, pas un diagnostic. Documentez-le, faites vérifier le site par son responsable technique, rétablissez un état fiable, puis traitez l’indexation séparément.',
        service: { href: '/sites-web-premium/', label: 'Découvrir l’approche de création et maintenance de sites' }
      },
      en: {
        slug: 'spot-a-compromised-website', title: 'A normal-looking homepage can hide a compromised website',
        description: 'Respond to spam pages or hidden redirects by checking Search Console, files, accounts, and logs with a qualified maintainer.', category: 'Security & reliability',
        introduction: 'A site can look normal to its owner while serving unwanted pages or redirects to some visitors or search engines. A compromised plugin, hijacked editor account, or changed file may add spam without visibly changing the homepage. One strange search result does not prove an intrusion, but it merits structured checking. The goal is to confirm the signal, reduce exposure if needed, and have the site restored from a known-good state.',
        sources: [googleHacked, googleReport, cnilGuide],
        sections: [
          { title: 'Treat signals as clues to check', sourceUrls: [googleHacked.url, googleReport.url], paragraphs: [
            'Possible signals include unrecognized indexed pages, unexpected redirects, unrelated search titles, new administrator accounts, browser alerts, or unplanned changes. Each can have several causes: cache, deployment error, generated content, a faulty extension, or compromise. Compare URLs, server state, and accounts before assigning a cause.',
            'Google Search Central recommends checking its Security Issues report and fixing or removing hacked pages it finds. This tool reports signals visible to Google; no alert does not prove a site is clean. Indexing and site security are different observations.'
          ] },
          { title: 'Do not treat robots.txt as a repair', paragraphs: [
            'Hiding a URL in robots.txt can affect crawling, but it does not remove code serving the page, persistent access, or potentially exposed data. A malicious page may remain reachable by direct link. Fixing indexing without addressing the cause can let content return or leave visitors exposed.',
            'Before changing anything, record URLs, messages, times, and available alerts. At work, notify the host and site owner. Do not randomly delete files, accounts, or logs: this can break the service and complicate analysis. A qualified maintainer can choose isolation or restoration from a trusted backup based on the architecture.'
          ] },
          { title: 'Hypothetical example: check an unexpected search result', paragraphs: [
            'Hypothetical example: a shop owner finds a result URL containing contest text they do not recognize. They record the query and URL, check whether the page is served, and ask their maintainer to review accounts and recent changes. If the content exists, they ask the host to secure the site and check files and extensions before requesting an indexing review.',
            'The expected exercise output is a record of observed facts and an escalation owner, not a conclusion about the entry point or a promise of cleanup. Do not open suspicious links from an unprotected workstation; send information to support through a trusted channel.'
          ] },
          { title: 'Defensive steps with the technical owner', sourceUrls: [cnilGuide.url], checklist: [
            'Record the signal and time without spreading personal data.',
            'Ask the site owner or host to check accounts, changes, files, and extensions.',
            'Change access from a clean device and revoke unknown sessions through the proper process.',
            'Restore a known-good version and update affected components.',
            'After repair, recheck affected URLs and use official review tools.'
          ], paragraphs: [
            'CNIL’s general data-security guidance covers access management, logging, backups, and provider review. Depending on site data and the organization’s role, an exposure may require further assessment and appropriate notices. The responsible people must decide; a general article cannot determine obligations for a specific incident.',
            'After restoration, inventory privileged accounts, remove unnecessary ones, apply updates, and check backups. Work with the maintainer to find the entry point without publishing sensitive technical details. Then verify that public pages show expected content and injected pages are no longer served.'
          ] },
          { title: 'Repair the site and repair search visibility separately', sourceUrls: [googleHacked.url, googleReport.url], paragraphs: [
            'Server-side remediation should come before a search-engine review request. A clean site may temporarily retain old results or warnings, while an unindexed URL may still be vulnerable. Follow the platform process after the technical owner confirms remediation.',
            'This is not a full forensic procedure and cannot prove the absence of persistence. If accounts, payments, or personal information are involved, bring in security, legal, and privacy leads. Keep public statements factual and limited to confirmed information.'
          ] }
        ],
        takeaway: 'An unusual search result is a signal, not a diagnosis. Record it, have the technical owner check the site, restore a trusted state, then handle indexing separately.',
        service: { href: '/en/premium-websites/', label: 'Explore website creation and maintenance' }
      }
    }
  },
  {
    id: 'credential-theft-response', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'reponse-vol-identifiants-sessions-mfa', title: 'Vol d’identifiants : organiser les premières mesures de réponse',
        description: 'Sécuriser les comptes depuis un canal sain, révoquer les sessions, renouveler les secrets et distinguer mesures immédiates et investigation.', category: 'Sécurité & fiabilité',
        introduction: 'Quand un mot de passe ou un jeton semble compromis, le réinitialiser est nécessaire mais pas toujours suffisant. Une session déjà ouverte peut rester active, une adresse de récupération peut avoir changé ou le terminal utilisé pour la réinitialisation peut encore être surveillé. La réponse doit être organisée : choisir un canal fiable, sécuriser d’abord les comptes de reprise, invalider les accès inconnus, protéger l’authentification multifacteur et signaler l’incident aux responsables concernés. Ces étapes réduisent le risque sans prétendre identifier l’auteur ou établir exactement quelles données ont été vues.',
        sources: [accountHelp, processorCNIL, incidentResponse],
        sections: [
          { title: 'Commencer par un canal et un terminal auxquels on fait confiance', sourceUrls: [accountHelp.url], paragraphs: [
            'Si l’appareil peut être infecté ou contrôlé, évitez d’y saisir les nouveaux secrets. Utilisez un appareil jugé sain et accédez au service par l’adresse officielle, tapée ou enregistrée indépendamment du message reçu. Pour un compte professionnel, contactez l’équipe informatique par un canal distinct de la boîte ou du compte suspect.',
            'Notez les faits utiles avant modification si cela ne retarde pas la réduction du risque : alertes, heures, sessions inconnues et changements de paramètres. Cybermalveillance recommande de conserver des captures des appareils ou connexions non reconnus avant de les déconnecter. Cela aide à partager un signal précis, sans constituer une collecte forensique complète.'
          ] },
          { title: 'Révoquer les sessions et protéger les comptes de récupération', sourceUrls: [accountHelp.url], paragraphs: [
            'Après avoir sécurisé l’accès, vérifiez les appareils, sessions et applications connectées. Déconnectez les sessions inconnues à l’aide des commandes officielles du service. Réinitialisez le mot de passe compromis et les autres comptes où il a été réutilisé ; un mot de passe unique réduit les conséquences d’une fuite entre services.',
            'Vérifiez aussi l’adresse courriel et le numéro de récupération, les règles de transfert de messages, les facteurs MFA et les clés d’accès enregistrées. Si l’attaquant peut contrôler le canal de récupération, un nouveau mot de passe seul ne rétablit pas la maîtrise du compte. Les options de révocation varient selon les services ; suivez la documentation du fournisseur.'
          ] },
          { title: 'MFA aide, mais ne remplace pas la révocation', paragraphs: [
            'L’authentification multifacteur ajoute un contrôle au moment de certaines connexions. Après un incident, réinitialisez ou remplacez les facteurs compromis selon la procédure du service, puis retirez les méthodes que vous ne reconnaissez pas. Ne communiquez pas les codes de validation à une personne qui vous contacte, même si elle prétend appartenir au support.',
            'La réponse peut inclure des jetons d’application, des sessions persistantes, des appareils approuvés ou des clés API. Tous ne sont pas visibles dans le même écran. Dans une organisation, les administrateurs doivent révoquer les accès à la portée appropriée, examiner les comptes liés et consigner qui a effectué chaque changement.'
          ] },
          { title: 'Exemple fictif : un compte de messagerie a une connexion inconnue', paragraphs: [
            'Exemple fictif : une personne reçoit une alerte de connexion à une ville où elle n’est pas. Elle ne clique pas sur le lien de l’alerte ; elle ouvre l’application officielle sur un appareil sain, vérifie l’activité, sauvegarde les détails visibles, ferme les sessions inconnues, change le mot de passe unique et vérifie les méthodes de récupération et règles de transfert. Elle prévient ensuite ses contacts si des messages frauduleux ont été envoyés.',
            'Résultat attendu : reprendre le contrôle observable du compte et ouvrir un signalement si des éléments restent anormaux. L’exercice n’établit pas d’où provenait l’accès ni si des données ont été copiées. Si le compte protège d’autres services, la même vérification s’étend aux comptes concernés.'
          ] },
          { title: 'Escalader sans confondre réponse et investigation', sourceUrls: [processorCNIL.url, incidentResponse.url], checklist: [
            'Avertir le support ou l’équipe sécurité par un canal qui n’utilise pas le compte suspect.',
            'Lister comptes, sessions, appareils et facteurs MFA à examiner.',
            'Préserver les notifications et heures utiles sans modifier les journaux à l’aveugle.',
            'Identifier les services liés : paiement, stockage, messagerie et comptes administrateurs.',
            'Évaluer si des données personnelles ou obligations de notification sont concernées avec les responsables compétents.'
          ], paragraphs: [
            'Pour une entreprise, la CNIL rappelle l’importance de responsabilités définies, d’une journalisation appropriée, de la gestion des habilitations et des règles de signalement avec les sous-traitants. Si des données personnelles peuvent être touchées, le responsable désigné doit évaluer la situation selon le cadre applicable. Un employé ne devrait pas improviser une notification juridique ou supprimer des journaux.',
            'Des signes d’infection sur l’appareil demandent une réponse distincte : sollicitez l’équipe compétente plutôt que de réinstaller ou nettoyer au hasard. NIST SP 800-61 révision 3 inscrit la réponse aux incidents dans la gestion des risques de l’organisation, avec préparation, détection, réponse et récupération. Cette référence fournit un cadre, pas un diagnostic de votre poste. Suivez le plan applicable et consignez les décisions avant toute opération susceptible de modifier les informations utiles.'
          ] }
        ],
        takeaway: 'Réinitialiser le mot de passe n’est qu’une étape. Depuis un appareil sain, révoquez les sessions, contrôlez les moyens de récupération et MFA, protégez les comptes liés, puis signalez l’incident aux responsables.',
        service: { href: '/pilotage-projet-complexe/', label: 'Découvrir une approche structurée des projets numériques' }
      },
      en: {
        slug: 'respond-to-stolen-credentials', title: 'Stolen credentials: organize the first response steps',
        description: 'Secure accounts through a trusted channel, revoke sessions, replace secrets, and separate immediate response from investigation.', category: 'Security & reliability',
        introduction: 'When a password or token may be compromised, resetting it is necessary but may not be enough. An existing session may remain active, a recovery address may have changed, or the device used for the reset may still be monitored. Organize the response: choose a trusted channel, secure recovery accounts, invalidate unknown access, protect multifactor authentication, and notify the right people. These steps reduce risk without claiming to identify an attacker or determine exactly what was viewed.',
        sources: [accountHelp, processorCNIL, incidentResponse],
        sections: [
          { title: 'Use a channel and device you trust', sourceUrls: [accountHelp.url], paragraphs: [
            'If a device may be infected or controlled, do not enter new secrets there. Use a device believed to be clean and reach the service through its official address, entered or saved independently from the alert. For a work account, contact IT through a channel separate from the suspect mailbox or account.',
            'Record useful facts before changing settings when it does not delay risk reduction: alerts, times, unknown sessions, and setting changes. Cybermalveillance recommends saving screenshots of unrecognized devices or connections before disconnecting them. This helps communicate a clear signal; it is not a full forensic collection.'
          ] },
          { title: 'Revoke sessions and secure recovery accounts', sourceUrls: [accountHelp.url], paragraphs: [
            'Once access is secured, review devices, sessions, and connected applications. Sign out unknown sessions using the service’s official controls. Reset the compromised password and any other accounts where it was reused; unique passwords limit cross-service impact.',
            'Also check recovery email and phone, forwarding rules, MFA factors, and saved passkeys. If an attacker controls recovery, a new password alone does not restore account control. Revocation options vary; follow the provider’s documentation.'
          ] },
          { title: 'MFA helps but does not replace revocation', paragraphs: [
            'Multifactor authentication adds a check for some sign-ins. After an incident, reset or replace compromised factors through the service process and remove methods you do not recognize. Never share verification codes with someone who contacts you, even if they claim to be support.',
            'The response may also involve app tokens, persistent sessions, trusted devices, or API keys. They may not all appear on the same screen. In an organization, administrators should revoke access at the appropriate scope, review related accounts, and record who made each change.'
          ] },
          { title: 'Hypothetical example: an email account shows an unknown sign-in', paragraphs: [
            'Hypothetical example: someone gets a sign-in alert for a city where they are not present. They do not click the alert link; they open the official app on a clean device, review activity, save visible details, sign out unknown sessions, change the unique password, and check recovery methods and forwarding rules. They warn contacts if fraudulent messages were sent.',
            'Expected result: regain observable account control and report anything still abnormal. The exercise does not establish the source of access or whether data was copied. If the mailbox protects other services, extend the review to those accounts.'
          ] },
          { title: 'Escalate without confusing response with investigation', sourceUrls: [processorCNIL.url, incidentResponse.url], checklist: [
            'Notify IT or security through a channel that does not rely on the suspect account.',
            'List accounts, sessions, devices, and MFA factors to review.',
            'Preserve useful alerts and times without blindly changing logs.',
            'Identify linked services such as payment, storage, email, and admin accounts.',
            'Ask responsible staff to assess whether personal data or notice duties are involved.'
          ], paragraphs: [
            'For organizations, CNIL emphasizes defined responsibilities, appropriate logging, access management, and incident-reporting rules with processors. If personal data may be affected, the designated owner should assess the situation under applicable rules. Employees should not improvise legal notices or delete logs.',
            'Signs of device infection require a separate response: ask the responsible team rather than cleaning or reinstalling at random. NIST SP 800-61 revision 3 places incident response within organizational risk management, covering preparation, detection, response and recovery. It provides a framework, not a diagnosis of your device. Follow the applicable plan and record decisions before operations that could change useful information.'
          ] }
        ],
        takeaway: 'A password reset is only one step. From a clean device, revoke sessions, check recovery methods and MFA, secure linked accounts, and notify the responsible team.',
        service: { href: '/en/project-leadership/', label: 'Explore a structured approach to digital projects' }
      }
    }
  },
  {
    id: 'ocr-automation-quality', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'ocr-automatisation-interface-qualite', title: 'Automatiser une application sans API : rendre l’OCR contrôlable',
        description: 'Construire une automatisation OCR observable avec capture, zones, associations, contrôles métier et confirmation humaine.', category: 'Sécurité & fiabilité',
        introduction: 'Quand une application n’offre pas d’API adaptée, une automatisation peut repérer du texte à l’écran ou dans un document pour remplir une interface. Cette approche est fragile : mise à l’échelle, fenêtre active, langue, contraste et contenu variables changent ce que l’OCR détecte. La fiabilité ne se résume donc pas à savoir si un mot a été reconnu. Il faut garder une trace de ce qui a été capturé, vérifier que chaque valeur correspond au bon champ et demander une confirmation avant une action coûteuse ou irréversible.',
        sources: [ocrPower, ocrConfidence, cnilGuide],
        sections: [
          { title: 'Séparer capture, lecture et action', sourceUrls: [ocrPower.url], paragraphs: [
            'Une chaîne contrôlable distingue au moins trois opérations : capturer une zone autorisée, extraire du texte et décider quoi faire avec les valeurs. L’OCR peut retourner des mots sans comprendre leur rôle métier. Un montant visible peut être un total, un sous-total, une remise ou une référence. L’automatisation doit associer la valeur à son libellé et à son emplacement attendu avant toute saisie.',
            'La documentation Power Automate distingue des moteurs OCR et leurs paramètres, dont la langue et la taille de l’image. Elle note que certains facteurs de mise à l’échelle peuvent rendre les résultats erronés. Ces options décrivent ce produit ; elles ne garantissent pas un comportement identique dans un autre outil ou sur une autre interface.'
          ] },
          { title: 'Valider les valeurs avec des règles métier', sourceUrls: [ocrConfidence.url], paragraphs: [
            'Un score de confiance est une indication issue du système, pas une validation comptable ou humaine. Microsoft distingue notamment la confiance du type de document, d’un champ et de la lecture OCR, et suggère une revue humaine pour les scénarios critiques. Les scores doivent être interprétés dans le produit, le modèle et le format de document concernés ; un seuil générique ne se transfère pas automatiquement.',
            'Ajoutez des contrôles indépendants simples : date dans une plage attendue, numéro de document non vide, devise reconnue, total cohérent avec les lignes si les règles le permettent, et présence du fournisseur attendu. Un contrôle arithmétique peut détecter une incohérence, mais ne confirme pas que le document lui-même est authentique ou exact.'
          ] },
          { title: 'Exemple fictif : saisir un bordereau autorisé', paragraphs: [
            'Exemple fictif : une équipe autorisée traite des bordereaux de livraison reçus dans un dossier convenu. Le flux capture uniquement la page utile, extrait la date, la référence et le nombre de colis, puis vérifie que les champs sont présents et dans les plages prévues. Si le numéro est coupé ou que la confiance du champ est faible selon un seuil mesuré sur un jeu autorisé, le flux s’arrête et place le document en revue.',
            'Le résultat attendu est soit une saisie avec aperçu et confirmation humaine, soit une exception accompagnée du document et des valeurs détectées. Aucun document client réel n’est utilisé dans cet exemple. Les jeux d’essai doivent être autorisés, minimisés et conservés le temps nécessaire ; ne réutilisez pas des documents de projets privés ou sans consentement.'
          ] },
          { title: 'Garder l’humain dans les décisions à impact', sourceUrls: [cnilGuide.url], checklist: [
            'Utiliser une fenêtre, un écran et un jeu de documents explicitement autorisés.',
            'Associer chaque valeur OCR à un champ par son contexte, pas par sa seule position.',
            'Arrêter en cas de fenêtre inattendue, valeur manquante ou règle métier incohérente.',
            'Afficher les valeurs détectées et l’action proposée avant une écriture ou un envoi.',
            'Limiter captures d’écran, journaux et copies temporaires aux besoins de diagnostic.'
          ], paragraphs: [
            'Une validation humaine est particulièrement utile lorsque la sortie modifie une facture, un paiement, une commande ou un dossier officiel. Elle doit être une vraie possibilité de corriger ou de refuser, pas un bouton de confirmation automatique. Pour les tâches à faible impact, un échantillon de contrôle ou une comparaison au document source peut convenir si le risque le permet.',
            'La CNIL recommande de réduire et de protéger les données personnelles, notamment en maîtrisant les accès, les sauvegardes et les traitements confiés à des tiers. Une capture d’écran peut contenir plus d’informations que le champ visé. Concevez les journaux pour noter l’étape et le résultat sans enregistrer inutilement les documents complets.'
          ] },
          { title: 'Évaluer avant d’automatiser davantage', sourceUrls: [ocrPower.url, ocrConfidence.url], paragraphs: [
            'Constituez un jeu d’essai autorisé qui couvre documents propres, scans inclinés, champs manquants, variantes de format et caractères ambigus. Comparez la valeur extraite à la vérité vérifiée par une personne pour chaque champ, puis examinez séparément les erreurs qui changeraient une décision. Une moyenne de reconnaissance élevée peut masquer une erreur grave sur un identifiant ou un montant.',
            'Commencez en mode observation ou proposition, sans saisie automatique, puis n’activez l’écriture que pour les cas dont les critères sont satisfaits. Documentez les versions de l’application et les règles de tolérance. Si le fournisseur change ou le formulaire évolue, reprenez une validation. L’automatisation visuelle convient mal aux interfaces changeantes, aux documents non autorisés ou aux décisions où aucune personne ne peut examiner les exceptions.'
          ] }
        ],
        takeaway: 'Faites de l’OCR une étape observable, vérifiez l’association champ-valeur par des règles indépendantes et réservez la confirmation humaine aux décisions à impact. Arrêtez plutôt que deviner.',
        service: { href: '/ia-automatisation/', label: 'Découvrir l’approche IA et automatisation' }
      },
      en: {
        slug: 'make-ocr-automation-controllable', title: 'Automating an app without an API: make OCR controllable',
        description: 'Build observable OCR automation with capture, regions, field mapping, business checks, and human confirmation.', category: 'Security & reliability',
        introduction: 'When an application has no suitable API, automation may read text on screen or in a document and fill an interface. This is fragile: scaling, active windows, language, contrast, and changing content affect OCR results. Reliability is more than recognizing a word. Keep a record of what was captured, verify each value belongs to the right field, and require confirmation before costly or irreversible actions.',
        sources: [ocrPower, ocrConfidence, cnilGuide],
        sections: [
          { title: 'Separate capture, reading, and action', sourceUrls: [ocrPower.url], paragraphs: [
            'A controllable workflow separates at least three operations: capture an authorized region, extract text, and decide what to do with values. OCR can return words without understanding their business role. A visible amount may be a total, subtotal, discount, or reference. The automation must map a value to its expected label and location before entry.',
            'Power Automate documentation describes OCR engines and settings including language and image size. It notes that some scaling choices can cause errors. These settings describe that product; they do not guarantee the same behavior in another tool or interface.'
          ] },
          { title: 'Validate values with business rules', sourceUrls: [ocrConfidence.url], paragraphs: [
            'A confidence score is a system estimate, not accounting or human validation. Microsoft distinguishes document-type, field, and OCR reading confidence and suggests human review for critical scenarios. Interpret scores within the specific product, model, and document format; a generic threshold does not transfer automatically.',
            'Add independent simple checks: date in an expected range, nonempty document number, recognized currency, totals consistent with lines where rules allow, and expected supplier. Arithmetic can reveal an inconsistency, but does not establish that the document is authentic or correct.'
          ] },
          { title: 'Hypothetical example: enter an authorized delivery slip', paragraphs: [
            'Hypothetical example: an authorized team processes delivery slips in an agreed folder. The workflow captures only the needed page, extracts the date, reference, and package count, then checks required fields and expected ranges. If the number is clipped or field confidence is low under a threshold measured on an authorized sample, the workflow stops and sends the document for review.',
            'The expected result is either a proposed entry with preview and human confirmation or an exception showing the document and detected values. No real customer document is used here. Test sets should be authorized, minimized, and retained only as needed; do not reuse private-project documents or documents without consent.'
          ] },
          { title: 'Keep people in consequential decisions', checklist: [
            'Use only explicitly authorized windows, screens, and document sets.',
            'Map each OCR value to a field by context, not position alone.',
            'Stop on an unexpected window, missing value, or inconsistent business rule.',
            'Show detected values and proposed action before writing or sending.',
            'Limit screenshots, logs, and temporary copies to diagnostic needs.'
          ], paragraphs: [
            'Human approval is especially useful when output changes an invoice, payment, order, or official record. It should allow correction or rejection, not merely provide an automatic confirmation button. For low-impact tasks, sampling or comparison with the source may be adequate if risk allows.',
            'CNIL recommends minimizing and protecting personal data, including controlling access, backups, and processor activity. A screenshot may contain more information than the target field. Design logs to record the step and outcome without unnecessarily storing full documents.'
          ] },
          { title: 'Evaluate before automating more', sourceUrls: [ocrPower.url, ocrConfidence.url], paragraphs: [
            'Build an authorized test set covering clean documents, tilted scans, missing fields, format variants, and ambiguous characters. Compare extracted values with human-verified truth by field, then separately review errors that could change a decision. A high average recognition score can hide a serious error in an identifier or amount.',
            'Start in observation or proposal mode without automated entry. Enable writing only for cases meeting criteria. Record application versions and tolerance rules. When a provider changes or the form changes, validate again. Visual automation is a poor fit for changing interfaces, unauthorized documents, or decisions whose exceptions no person can review.'
          ] }
        ],
        takeaway: 'Make OCR observable, check field mapping with independent rules, and require human confirmation for consequential decisions. Stop instead of guessing.',
        service: { href: '/en/ai-automation/', label: 'Explore AI and automation' }
      }
    }
  },
  {
    id: 'ai-answer-verification', preparedAt: '2026-10-29', status: 'review', copy: {
      fr: {
        slug: 'verifier-reponse-donnees-ia', title: 'Une réponse assurée n’est pas une preuve : vérifier les données d’une IA',
        description: 'Transformer une réponse d’IA en affirmations vérifiables, remonter aux sources et contrôler unités, dates et contexte.', category: 'Sécurité & fiabilité',
        introduction: 'Une réponse fluide peut mélanger une information exacte, une approximation et un détail fabriqué sans signal visible. La confiance affichée par le ton ou un score de génération ne constitue pas une preuve. La vérification doit porter sur des affirmations distinctes et remonter à des sources capables de soutenir chacune d’elles. Les unités, dates, versions et conditions d’application comptent autant que le nom d’une source. Une méthode pratique transforme le texte en décisions contrôlables et prévoit l’abstention lorsque les pièces manquent.',
        sources: [owaspOutput, nistSynthetic, cnilGuide],
        sections: [
          { title: 'Découper la réponse en affirmations séparées', sourceUrls: [owaspOutput.url], paragraphs: [
            'Commencez par extraire les phrases qui influencent une décision : un chiffre, une date, une règle, une capacité produit ou une recommandation. Une phrase peut contenir plusieurs affirmations. Les contrôles diffèrent selon la nature de chacune : une valeur financière demande une source et une période ; une règle de sécurité demande une documentation applicable au produit et à sa version ; une interprétation exige de distinguer fait et opinion.',
            'L’OWASP identifie le traitement inadéquat des sorties de modèle comme un risque lorsque du contenu généré est transmis à d’autres composants sans validation suffisante. Même lorsqu’un humain lit la réponse, la même discipline aide : ne pas convertir une suggestion en action sensible avant de contrôler les données qui la justifient.'
          ] },
          { title: 'Remonter à la source primaire et vérifier le contexte', paragraphs: [
            'Une citation dans le texte n’est qu’un pointeur. Ouvrez la page ou le document, trouvez le passage exact et demandez-vous s’il soutient la proposition entière ou seulement un fragment. Une source institutionnelle peut expliquer son propre processus, mais ne pas confirmer une conclusion externe. Une page de fournisseur est primaire sur son interface documentée, pas nécessairement sur un effet indépendant.',
            'Contrôlez la date de publication et de mise à jour, le pays ou la juridiction, la version du produit, la population concernée et les hypothèses. Vérifiez qu’un lien mène à l’éditeur annoncé plutôt qu’à une copie. Si la source est inaccessible ou son contenu ne correspond pas à la phrase, marquez l’affirmation comme non vérifiée au lieu de combler le vide avec une autre réponse générée.'
          ] },
          { title: 'Contrôler unités, calculs et ambiguïtés', paragraphs: [
            'Les erreurs plausibles sont souvent des erreurs de contexte : euros confondus avec dollars, montant mensuel présenté comme annuel, pourcentage relatif assimilé à des points, heure locale interprétée en UTC ou « peut » transformé en « garantit ». Recalculez les résultats simples à partir des données d’entrée et gardez les unités visibles dans la note de décision.',
            'Pour les chiffres importants, cherchez une confirmation indépendante lorsque c’est possible, mais veillez à ce qu’elle parle de la même période et du même indicateur. Deux pages qui reprennent une dépêche unique ne représentent pas forcément deux confirmations indépendantes. Si les sources divergent, consignez précisément la différence et réduisez le niveau de certitude.'
          ] },
          { title: 'Exemple fictif : contrôler une estimation de facture', paragraphs: [
            'Exemple fictif : un assistant estime qu’une facture de 1 200 € avec une remise de 10 % puis une taxe de 20 % totalise 1 296 €. Avant d’approuver, la personne vérifie la base de calcul, l’ordre d’application et la règle de taxe sur le document officiel ou la politique comptable pertinente. Si la remise s’applique avant taxe, le calcul est 1 080 € puis 216 € de taxe, soit 1 296 € ; cela ne prouve toutefois pas que les taux s’appliquent juridiquement à cette facture.',
            'Le contrôle sépare arithmétique et règle métier. L’arithmétique peut être recalculée ; l’applicabilité doit être justifiée par une source compétente. Si la facture réelle, la juridiction ou le statut fiscal n’est pas précisé, la bonne sortie est une question ou une abstention, pas un chiffre présenté comme validé.'
          ] },
          { title: 'Fiche de vérification avant d’agir', sourceUrls: [nistSynthetic.url, cnilGuide.url], checklist: [
            'Quelle affirmation précise justifie l’action ?',
            'Quelle source primaire soutient cette affirmation et quelle limite a-t-elle ?',
            'Les unités, dates, version, territoire et hypothèses correspondent-ils au cas ?',
            'Peut-on reproduire le calcul ou vérifier le document d’origine ?',
            'Quelle conséquence aurait une erreur et qui doit approuver ?',
            'Que doit-on faire si la preuve est absente, contradictoire ou périmée ?'
          ], paragraphs: [
            'NIST examine les limites des approches de transparence et de détection du contenu synthétique. Cela rappelle qu’un détecteur ou un indice de provenance ne prouve pas la véracité du contenu. Pour une réponse textuelle, la preuve vient plutôt de documents sources adaptés, d’un calcul reproductible, d’un relevé d’origine ou d’une personne responsable du domaine.',
            'Traitez aussi les données fournies avec prudence : retirez les identifiants et détails personnels qui ne sont pas nécessaires à la vérification. Une réponse factuelle peut être correcte tout en ayant été produite à partir d’informations qui ne devaient pas être transmises. La vérification de vérité et la protection des données sont deux contrôles distincts.'
          ] }
        ],
        takeaway: 'Vérifiez les affirmations une à une contre des sources primaires, avec unités, dates et hypothèses visibles. Si la preuve ne suffit pas au niveau de risque, abstenez-vous et demandez une revue.',
        service: { href: '/ia-automatisation/', label: 'Découvrir l’approche IA et automatisation' }
      },
      en: {
        slug: 'verify-data-in-an-ai-answer', title: 'A confident answer is not evidence: verify an AI’s data',
        description: 'Turn an AI answer into checkable claims, trace them to sources, and verify units, dates, and context.', category: 'Security & reliability',
        introduction: 'A fluent answer can mix accurate information, approximation, and invented detail without a visible signal. Confident tone or a generation score is not evidence. Verification should address separate claims and trace each to a source that can support it. Units, dates, versions, and conditions matter as much as the source name. A practical method turns prose into checkable decisions and allows abstention when evidence is missing.',
        sources: [owaspOutput, nistSynthetic, cnilGuide],
        sections: [
          { title: 'Split the answer into individual claims', sourceUrls: [owaspOutput.url], paragraphs: [
            'Start by extracting statements that affect a decision: a number, date, rule, product capability, or recommendation. One sentence may contain several claims. Controls differ by claim: a financial value needs a source and period; a security rule needs documentation for the relevant product and version; an interpretation requires separating fact from opinion.',
            'OWASP identifies improper handling of model outputs as a risk when generated content is passed to other components without adequate validation. The same discipline helps even when a person reads the answer: do not turn a suggestion into a consequential action before checking the data behind it.'
          ] },
          { title: 'Trace claims to primary sources and check context', paragraphs: [
            'A citation is only a pointer. Open the page or document, find the relevant passage, and ask whether it supports the whole claim or only one part. An institution may explain its own process without proving an external conclusion. A vendor page is primary for its documented interface, but not necessarily for independent effects.',
            'Check publication and update dates, country or jurisdiction, product version, affected population, and assumptions. Confirm the link leads to the named publisher, not a copy. If the source is unavailable or does not support the sentence, mark the claim unverified instead of filling the gap with another generated answer.'
          ] },
          { title: 'Check units, calculations, and ambiguity', paragraphs: [
            'Plausible mistakes are often context errors: euros confused with dollars, monthly amounts presented as annual, percentages confused with percentage points, local time read as UTC, or “may” turned into “guarantees.” Recalculate simple results from inputs and keep units visible in the decision record.',
            'For important numbers, seek independent confirmation when possible, but make sure it covers the same period and measure. Two pages repeating one wire story are not necessarily two independent confirmations. If sources differ, record the precise difference and lower certainty.'
          ] },
          { title: 'Hypothetical example: check an invoice estimate', paragraphs: [
            'Hypothetical example: an assistant estimates that a €1,200 invoice with a 10% discount followed by 20% tax totals €1,296. Before approval, the reviewer checks the calculation basis, order, and tax rule against an official document or relevant accounting policy. If the discount applies before tax, the calculation is €1,080 plus €216 tax, or €1,296; this does not prove those rates legally apply to that invoice.',
            'The check separates arithmetic from business rules. Arithmetic can be recalculated; applicability must be supported by a competent source. If the real invoice, jurisdiction, or tax status is unknown, ask a question or abstain instead of presenting a validated figure.'
          ] },
          { title: 'A verification card before taking action', sourceUrls: [nistSynthetic.url, cnilGuide.url], checklist: [
            'Which specific claim justifies the action?',
            'Which primary source supports it, and what is that source’s limit?',
            'Do units, dates, version, location, and assumptions match the case?',
            'Can the calculation be reproduced or the original record checked?',
            'What would an error cost, and who must approve?',
            'What happens if evidence is missing, conflicting, or stale?'
          ], paragraphs: [
            'NIST reviews limits of transparency and synthetic-content detection approaches. A detector or provenance signal does not prove truth. For a text answer, evidence is more likely to come from appropriate source documents, reproducible calculations, an original record, or a responsible domain expert.',
            'Handle supplied data carefully too: remove identifiers and personal details that are unnecessary for verification. An answer can be factually correct while based on information that should not have been shared. Truth verification and data protection are separate controls.'
          ] }
        ],
        takeaway: 'Check claims one by one against primary sources, with units, dates, and assumptions visible. If evidence is not strong enough for the risk, abstain and request review.',
        service: { href: '/en/ai-automation/', label: 'Explore AI and automation' }
      }
    }
  }
];
