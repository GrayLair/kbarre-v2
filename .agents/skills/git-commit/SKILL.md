---
name: git-commit
description: Inspect a Git change and prepare a precise conventional commit, staging and committing only when the user explicitly requests it.
---

# Git Commit

Use when the user asks to prepare or create a commit. Inspect status and the relevant diff
first, including staged and unstaged changes. Preserve unrelated user changes.

Propose a concise Conventional Commit message that describes the actual change and calls
out breaking behavior when evidenced. Before staging or committing, identify the exact
files and ask for direction if the intended scope is ambiguous. Never amend, force-push,
or alter Git configuration unless explicitly requested.
