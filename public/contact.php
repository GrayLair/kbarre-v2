<?php
declare(strict_types=1);

/*
 * Lightweight contact endpoint for OVH shared hosting.
 * No database, cookie, third-party script or secret is required.
 */

const LEAD_RECIPIENT = 'contact@kbarre.fr';
const LEAD_SENDER = 'contact@kbarre.fr';

function exitWithError(int $status, string $message): void
{
    http_response_code($status);
    header('Content-Type: text/html; charset=UTF-8');
    header('X-Content-Type-Options: nosniff');
    echo '<!doctype html><html lang="fr"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">';
    echo '<title>Contact — Ꝃ’Barré</title><body style="font-family:system-ui,sans-serif;max-width:42rem;margin:12vh auto;padding:1.5rem;color:#17121f;background:#f7f3fa">';
    echo '<p style="color:#5e347c;font-weight:700;text-transform:uppercase;font-size:.75rem;letter-spacing:.1em">Formulaire de contact</p>';
    echo '<h1 style="font-size:2.5rem;line-height:1.05">' . htmlspecialchars($message, ENT_QUOTES, 'UTF-8') . '</h1>';
    echo '<p><a href="/contact" style="color:#452265;font-weight:700">Retour au formulaire</a></p></body></html>';
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    exitWithError(405, 'Cette page reçoit uniquement les demandes envoyées depuis le formulaire.');
}

// A bot filling this invisible field is acknowledged without creating an e-mail.
if (trim((string) ($_POST['website'] ?? '')) !== '') {
    header('Location: /merci', true, 303);
    exit;
}

$name = trim((string) ($_POST['name'] ?? ''));
$company = trim((string) ($_POST['company'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$phone = trim((string) ($_POST['phone'] ?? ''));
$requestType = trim((string) ($_POST['request_type'] ?? ''));
$budget = trim((string) ($_POST['budget'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));

$allowedRequestTypes = [
    'Formation IA',
    'Automatisation / agents',
    'Création musicale / média assistée par IA',
    'Pilotage de projet',
    'Site Web premium',
    'Communication numérique / réseaux sociaux',
    'Campagne d’acquisition / analytics',
    'Configuration ERP / outils métier',
    'Renfort / collaboration',
    'Recrutement',
    'AI training',
    'Automation / agents',
    'AI-assisted music / media creation',
    'Digital project management',
    'Website',
    'Digital communication / social media',
    'Acquisition campaign / analytics',
    'ERP / business tools configuration',
    'Collaboration',
    'Recruitment',
    'Autre',
    'Other',
];

if (
    strlen($name) < 2 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    !in_array($requestType, $allowedRequestTypes, true) ||
    strlen($message) < 20
) {
    exitWithError(422, 'Merci de renseigner votre nom, un e-mail valide, votre besoin et un message d’au moins 20 caractères.');
}

// Prevent header injection in all user-provided values that enter e-mail headers.
$safeEmail = preg_replace('/[\r\n]+/', '', $email);
$safeName = preg_replace('/[\r\n]+/', ' ', $name);

$lines = [
    'Nouvelle demande depuis kbarre.fr',
    '',
    'Nom : ' . $safeName,
    'Organisation : ' . ($company !== '' ? $company : 'Non renseignée'),
    'E-mail : ' . $safeEmail,
    'Téléphone : ' . ($phone !== '' ? $phone : 'Non renseigné'),
    'Type de demande : ' . $requestType,
    'Budget indicatif : ' . ($budget !== '' ? $budget : 'Non renseigné'),
    '',
    'Message :',
    $message,
];

$headers = [
    'From: KBarre.fr <' . LEAD_SENDER . '>',
    'Reply-To: ' . $safeEmail,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail(
    LEAD_RECIPIENT,
    'Nouveau contact - kbarre.fr',
    implode("\r\n", $lines),
    implode("\r\n", $headers)
);

if (!$sent) {
    exitWithError(503, 'L’envoi a échoué. Tu peux me joindre directement par e-mail ou téléphone.');
}

header('Location: /merci', true, 303);
exit;
