# Antispam validation receipt — 2026-10-29

EPIC #64. Session mode: manual. Initial main SHA:
`2878726ba4ae7d7618ab4f3b42c22667a19bb5a5`.
Issue PRs target `epic/64-antispam-contact`. Integration does not close an issue.

## Local evidence

Environment: Windows x64, Node 24.20.0, portable PHP 8.5.12, Composer 2.11.0,
Chromium from Playwright 1.64.1. PHP/Composer downloads were checksum-checked
against their official download pages. No system-wide PHP installation changed.

- `npm ci`: PASS without force or skipped platform checks after the incompatible
  explicit WASM dependency was made optional.
- `npm run check`: PASS; final check repeated after deployment tooling changes.
- `npm run build`: PASS, 30 static pages after compatible dependency fixes.
- `php tests/contact/run.php`: PASS, **64 assertions**, including one-mail-per-proof
  and global quota enforced across eight simultaneous PHP processes, and scheduled cleanup.
- `npm run test:contact:http`: PASS, **26 assertions**, including JS/PHP protocol
  compatibility, direct endpoint protection, no-cache, replay, limits, spoofed
  forwarding header, actual SQLite lock failure, production loader and missing config.
- `npm run test:contact:browser`: PASS, **16 assertions**, real proof solving and
  backend verification for FR/EN, keyboard submit, mail failure, retained text,
  retry with fresh proof, back navigation, no cookies, no external HTTP requests,
  missing Web Crypto and disabled-JS fallback. Viewport 390x844; this is an
  emulation, not evidence from a physical modest phone or a screen-reader audit.
- Deployment CLI checks: PASS, private path enforcement, exclusive configuration
  creation without printing/overwriting secrets, two-connection SQLite locking,
  maintenance and explicit remaining release gates.
- Packaging: PASS, public/private layout and required Composer autoload, three
  public PHP endpoints, version manifest and checksums; diagnostic dirty artifact
  distinguished from the final clean artifact.
- `npm audit --audit-level=moderate`: PASS, zero advisories at verification time.
  Nine baseline advisories were resolved by compatible lockfile updates.
- `composer audit --locked`: PASS at installation; repeated for final candidate.
  Composer validation emits advisory warnings for a missing project license and
  the deliberately exact dependency pin; it returns exit code 0.

All positive automated tests use an injected test transport. No test sent a real
message to the production inbox. The production app has no HTTP/env mail bypass.

## Review of the security boundary

The signed payload is cryptographically verified and expired before its signature
identifier is atomically inserted in a private SQLite transaction. A second
concurrent request cannot reach the mail adapter with the same proof. Counting
and generation budgets are shared by workers. Only REMOTE_ADDR is used; raw
addresses and contact values are not persisted in app state/logs. Secret and
storage failures fail closed. The package never includes a provisioned config.

ALTCHA's widget and PHP library licenses are retained. Core PoW imposes a cost;
it does not prove humanity or guarantee a measured spam-reduction rate.

## Remaining external gates

- Actual OVH PHP/Apache extensions, filesystem and cross-process locking.
- Proxy address mapping and quota/global budget calibration on the real host.
- Apache body limit and no-cache headers through the actual proxy/CDN.
- Private config permissions and the hourly cleanup schedule.
- Physical phone p95 and keyboard/screen-reader FR/EN review.
- Actual preproduction mail reception and mail-domain configuration.
- Exact candidate/base SHA CI and required final review/integration.
- Production J+1/J+7 observations, false positives and receipt checks.

These gates remain open. No production deployment or completion claim is made.

