---
name: security-review
description: Review a code change or codebase for evidenced security weaknesses in trust boundaries, data flow, secrets, dependencies, and access control.
---

# Security Review

Use for explicit security review, sensitive-data flows, authentication or authorization
changes, exposed-service changes, or before high-risk releases. Focus on the actual
languages, framework, deployment model, and reachable paths.

Trace untrusted input, identity, authorization decisions, secrets, external calls, and
sensitive output. Review dependencies using available local tooling when appropriate.
Rank findings by realistic severity, likelihood, and evidence; include the affected code,
attack precondition, impact, and smallest safe remediation. Do not modify files or reveal
secret values. State when a finding cannot be verified.
