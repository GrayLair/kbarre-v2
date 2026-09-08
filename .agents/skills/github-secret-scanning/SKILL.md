---
name: github-secret-scanning
description: Configure or triage GitHub secret scanning and push-protection alerts when GitHub security settings or a suspected exposed credential are in scope.
---

# GitHub Secret Scanning

Use for explicit work on GitHub secret scanning, push protection, custom patterns, blocked
pushes, or secret-scanning alerts. Do not use to inspect or expose secret values, or to
bypass push protection. For a broader application-security request, report that this pack
covers only GitHub secret-scanning controls and let the parent select any available reviewer.

## Protected collection

Confirm the repository, alert context, and available GitHub permissions before querying an
alert. With GitHub REST endpoints that support it, set `hide_secret=true`; do not request or
print raw alert JSON. Retain only the alert number, type, state, validity when available, and
location metadata needed for the task. If the available tool cannot suppress literal values,
use already-redacted metadata or report the access limitation without attempting collection.

## Configuration

For configuration work, record the current availability and settings, verify the required
rights, make only the requested setting change, then re-read the resulting state. Treat push
protection, custom-pattern publication, alert dismissal, bypass requests, and any external
credential operation as consequential actions requiring an explicit user request.

## Triage and remediation

For an alert, distinguish confirmed exposure from an unverified signal. Prioritize revocation
or rotation of a confirmed credential, then removal from reachable code and an evidence-based
decision about history cleanup. Verify credential handling, code remediation, and alert state
separately; removing a value from code alone does not prove the alert is resolved. If access
is denied or tooling is absent, state what could not be verified and continue only with safe,
available evidence.

Report only masked identifiers and locations where possible. Explain the observed alert,
risk, recommended remediation, and verification required after the remediation. Never print
or copy a credential into chat, logs, commits, or generated files.
