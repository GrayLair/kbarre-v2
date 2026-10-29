# OVH contact antispam — deployment and operations

EPIC #64; operations #69. This runbook prepares a release. No production access,
deployment or real mail test has been performed by the coding task.

## Layout and prerequisites

The website remains static. `npm run package:contact` produces a new, never
overwritten directory under `release/<sha>-<timestamp>/`:

```text
release/<sha>-<timestamp>/
  www/                      # Astro output and three public PHP entry files
  kbarre-contact/            # application + locked Composer vendor + CLI
  manifest.json             # source SHA, dirty flag, hashes; no credentials
```

OVH document root must point to `www` only. The `kbarre-contact` sibling, its
`config.php`, and sibling `contact-state` are private. Do not copy the application,
Composer vendor, config, state or source repository inside the webroot. A release
with `source_dirty: true` is a local diagnostic artifact, not a production candidate.

Require PHP 8.1+ (a currently supported host version is preferred), mbstring and
PDO SQLite. Check the web SAPI and CLI use the intended PHP version and extensions.
SQLite must support reliable locking on the actual host filesystem; a passing
Windows/Linux development test is not OVH evidence. No untested flat-file fallback.

The default public loader expects `../kbarre-contact/bootstrap.php`. For a different
layout, set `KBARRE_CONTACT_BOOTSTRAP` and optional `KBARRE_CONTACT_CONFIG` through
server configuration, never form fields or query strings. The app and config/state
must resolve outside DOCUMENT_ROOT. A symlinked database is refused.

## Reproduce validation from a source checkout

Install PHP/Composer and Node 24, then:

```sh
npm ci
composer install --working-dir=server/contact --no-dev --no-interaction --prefer-dist
npm run check
npm run build
npm run test:contact:php
npm run test:contact:http
npx playwright install --with-deps chromium
npm run test:contact:browser
npm run test:contact:deployment
npm audit --audit-level=moderate
composer audit --working-dir=server/contact --locked
npm run package:contact
```

The Node test scripts accept `PHP_BINARY` when PHP is not on PATH. Tests use synthetic
data and an injected PHP mail adapter; the production app has no test-mode HTTP/env
switch. Negative HTTP tests also execute the real public loader without reaching
mail(). Browser screenshots go to ignored `output/playwright/`.

The GitHub workflow runs the full suite on PHP 8.1, 8.4 and 8.5 for the final PR to
main. Intermediate issue PRs use their recorded local targeted results. No failing
check or required approval may be bypassed.

## Provision and verify preproduction

1. Build a clean exact SHA and retain its manifest. Transfer the public and private
   portions to a preproduction host with the same PHP/Apache/filesystem settings.
2. Set owner-only permissions on the private application and state directories.
   Initialize configuration with the private CLI (substitute real absolute paths):

```sh
umask 077
php /home/ACCOUNT/kbarre-contact/bin/init.php /home/ACCOUNT/www
php /home/ACCOUNT/kbarre-contact/bin/preflight.php /home/ACCOUNT/kbarre-contact/config.php /home/ACCOUNT/www
```

   Initialization refuses to overwrite an existing config/secret and prints no
   secret. It creates sibling contact-state. Preserve both config and state across
   releases; do not reinitialize at each deploy. Set config permissions 0600 and
   private directory permissions 0700. Adjust recipient to a controlled inbox in
   preproduction and review sender permissions. Do not put credentials in tickets.
3. Preflight verifies extensions, private paths, challenge creation, and contention
   between two SQLite connections. Its `release_ready: false` deliberately reminds
   the operator that it cannot prove mail reception, real mobile accessibility or
   multi-process/filesystem behavior on the actual host.
4. Exercise concurrent requests with one proof on that host: at most one mail
   adapter invocation; confirm quotas persist across PHP workers and restart.
   Also exercise unavailable/full storage and unavailable secret/dependencies.
   Failures must return 503 with no unprotected send or false confirmation.
5. Check unknown/private URLs disclose neither source nor secret. Verify Apache
   enforces the 32 KiB LimitRequestBody rule and that challenge responses remain
   no-store through every proxy/CDN. A PHP dev server does not verify .htaccess.
6. Review REMOTE_ADDR behind any actual reverse proxy. Current code ignores
   Forwarded and X-Forwarded-For. If all visitors share a proxy address, stop the
   rollout and implement an explicit trusted-proxy contract instead of trusting
   arbitrary headers. Calibrate shared-IP/NAT behavior and global budgets.
7. Measure resolution p95 on a reference modest phone (target <=3 s) and PHP
   verification p95 (target <=100 ms). Tune only reviewed config values; rerun
   compatibility, limits and browser tests after changes.
8. Use keyboard and a screen reader for FR/EN success/errors/renewal. Verify JS
   disabled and crypto unsupported keep e-mail/phone available. Test long-lived
   tabs, multiple tabs, back navigation and network loss after send.
9. Submit one controlled legitimate message in each language and verify actual
   mailbox reception, sender/reply-to and relevant mail records. A true mail()
   result means local transport acceptance, never guaranteed final delivery.

## Maintenance, logs and metrics

Configure the host scheduler to run once an hour using the verified CLI binary:

```text
<PHP_CLI_ABSOLUTE_PATH> /home/ACCOUNT/kbarre-contact/bin/maintain.php /home/ACCOUNT/kbarre-contact/config.php /home/ACCOUNT/www
```

This is a command to configure in the host scheduler, not a job installed by this
task. Counters expire after 10 minutes, proofs after 20 minutes; expired entries
are removed on a bounded database write or this hourly cleanup. Verify the job
succeeds and alerts on failure. Retention depends on that scheduler running when
there is no traffic. The SQLite file may retain free pages; its size is bounded
by configured accepted-attempt budgets, not raw attack volume.

App logs contain request ID, action, status, reason and elapsed milliseconds.
`mail_accepted` is transport acceptance, `honeypot` is a neutral discard. No raw IP,
email, name, phone, message or payload is logged by the app. Hosting access logs
are separate: review their access and retention with OVH. Keep application logs
private, propose seven-day retention and confirm actual host configuration.

Starting thresholds: alert on any bootstrap/storage/delivery 503, persistent
cleanup failure or sustained global 429 budget exhaustion. Record counts by
reason and latency, not payloads. Investigate potential false positives using
voluntary feedback/direct contact; do not build content profiling or record form
values in analytics.

Review the config's provisional 20 challenges/10 min/IP, 5 POSTs/10 min/IP,
200 global challenges/10 min and 100 global POSTs/10 min against actual traffic.
All POST attempts count, including invalid fields/proofs. This limits abuse,
without pretending an IP represents one person or that PoW proves humanity.

## Production switch and rollback

Do not deploy until preproduction gates, exact-head exhaustive CI and required
reviews pass. Coordinate an explicit short contact maintenance window: temporarily
serve 503 with direct-contact alternatives while updating the endpoint, private
app and frontend. Keep no old unprotected contact endpoint reachable. Transfer
versioned assets before the new HTML; preserve private config and database.
Then run controlled FR/EN smoke/reception checks and re-enable the form.

Network timeout after a send is ambiguous: the request may have reached the mail
transport. The UI asks the visitor to contact directly before resending; do not
auto-retry mail on their behalf. A new explicit attempt gets a new proof.

Rollback preserves the secret and state and restores a known protected code
version. If none exists yet, keep sending disabled with e-mail/phone alternatives.
The initial unprotected contact.php is not an acceptable silent fallback.

J+1 and J+7: review volume, rejection reasons, system errors, latency, actual
receipt of controlled probes and reported false positives. Correct any known lost
legitimate request before completion. Keep the EPIC/issues open until final main
integration, host validation, reception and observation evidence are recorded.

