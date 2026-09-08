---
name: github-code-scanning
description: Configure, review, or troubleshoot GitHub CodeQL scanning and SARIF results when the repository's GitHub security setup is in scope.
---

# GitHub Code Scanning

Use for an explicit request about CodeQL workflows, CodeQL CLI analysis, SARIF results, or
GitHub code-scanning alerts. First inspect the repository workflow, languages, build path,
and available GitHub configuration. Do not use for a general application security review;
use `security-review` instead.

Choose the smallest viable setup and preserve existing workflow conventions. Verify the
minimum permissions needed to read code and upload security events before proposing a
workflow change. Treat CLI installation, credential use, workflow edits, SARIF uploads, and
alert dismissal as separate actions requiring the user's request and available permission.

Report the observed configuration, affected languages and build assumptions, exact evidence
for any failure, and the smallest safe next change. Do not claim an alert is fixed until a
new analysis confirms it.
