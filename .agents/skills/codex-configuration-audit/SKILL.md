---
name: codex-configuration-audit
description: Audit Codex skills, agents, instructions, and MCP dependencies for compatibility, scope, discoverability, and safe operation.
---

# Codex Configuration Audit

Use when adding, migrating, or reviewing Codex configuration. Check skill discovery paths,
frontmatter, naming, descriptions, implicit-routing risks, referenced tools, and whether
instructions are specific enough to change behavior without duplicating generic model
capability. Check custom agents for a narrow role, appropriate sandbox, and inheritance
of parent permissions.

Identify Copilot- or vendor-specific assumptions, stale models, hidden external
dependencies, conflicting guidance, and excessive catalog size. Recommend minimal
compatible changes and a small set of representative prompts to validate routing. Do not
change global configuration or install dependencies unless explicitly requested.
