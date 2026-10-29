# Installation OVH — 29 octobre 2026

L’accès SFTP déjà configuré a été réutilisé avec la clé hôte épinglée, sans
afficher le mot de passe. Les fichiers concernés ont été sauvegardés avant
modification. PHP 8.4 a été défini uniquement pour le site, sans changer le
réglage global du compte ou les autres dossiers.

Vérifié sur l’hébergement réel : PHP 8.4.27, PDO SQLite, mbstring, application
hors document root, création d’un challenge signé et stockage privé accessible.
Aucun message réel n’a été envoyé par l’agent : l’utilisateur effectue son essai
fonctionnel et confirme lui-même la réception.

## Adaptation du bootstrap pour ce PHP-FPM

SetEnv dans .htaccess n’était pas transmis à getenv(). Pour ce document root
imbriqué, une configuration PHP locale fournit donc le chemin de l’application
privée au chargeur existant, sans changer le protocole antispam.

```ini
; .user.ini du site — remplacer le chemin exemple, aucun secret ici
auto_prepend_file="/home/ACCOUNT/kbarre-contact/environment.php"
```

```php
<?php
// Fichier privé kbarre-contact/environment.php
putenv('KBARRE_CONTACT_BOOTSTRAP=' . __DIR__ . '/bootstrap.php');
```

L’accès HTTP à .user.ini est interdit par .htaccess. Préserver ces deux fichiers
avec config.php et l’état lors des prochains déploiements. Ne pas publier les
chemins réels ou identifiants du serveur.

Le nettoyage à chaque opération antispam est actif. La tâche horaire OVH reste
à configurer dans le gestionnaire : elle n’a pas été créée avec le seul accès
SFTP. Le texte de confidentialité décrit le nettoyage effectif sans annoncer
cette tâche comme installée.

L’EPIC reste ouvert jusqu’à la confirmation du test utilisateur, l’intégration
finale et le suivi d’exploitation. Les contrôles techniques ci-dessus ne sont
pas une preuve de réception d’un courrier ou d’efficacité mesurée contre le spam.

