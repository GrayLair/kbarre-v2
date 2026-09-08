---
name: codebase-context-map
description: Map the files, entry points, dependencies, tests, and risks relevant to a requested code change before implementation.
---

# Codebase Context Map

Use for unfamiliar codebases, cross-cutting changes, or when the implementation owner
needs evidence before editing. Do not use for a question that can be answered from one
known file.

1. Restate the requested outcome and identify the observable behavior it affects.
2. Trace from entry points to the owning code, contracts, dependencies, and tests.
3. Distinguish files that must change from files that are only references.
4. Report uncertainty rather than guessing about uninspected paths.

Return: relevant files and symbols, execution/data flow, tests to run or extend, likely
risks, and the smallest next investigation or implementation step. Do not edit files.
