---
name: multi-stage-dockerfile
description: Use when the user explicitly requests the multi stage dockerfile workflow or its closely related domain task.
---

# multi-stage-dockerfile

This is a Codex wrapper for the preserved source workflow. Follow the user's request, active
permissions, and available tools. Do not treat Copilot- or VS Code-specific tools in the
source material as requirements, and do not install packages or perform external writes
unless the current task authorizes them.

Read [the preserved source workflow](references/source/SKILL.md) only when its specialized
guidance is needed. Its scripts and references are archival inputs: inspect their assumptions
before use and prefer repository-supported tools when they differ from the active environment.
