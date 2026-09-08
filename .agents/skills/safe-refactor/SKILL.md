---
name: safe-refactor
description: Plan or perform behavior-preserving refactoring with evidence, narrow scope, and proportionate regression checks.
---

# Safe Refactor

Use for improving structure, duplication, naming, modularity, or maintainability while
preserving intended behavior. First identify the behavior and tests that protect it.

Prefer small reversible transformations. Keep API, data, and observable behavior stable
unless the user explicitly asks otherwise. Explain any required contract changes before
making them. Validate only the affected behavior plus checks justified by the change.
Stop and surface a design decision if the requested cleanup would alter product behavior.
