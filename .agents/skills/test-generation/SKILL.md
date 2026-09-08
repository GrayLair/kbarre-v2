---
name: test-generation
description: Add or improve focused automated tests that verify a requested behavior using the repository's existing test framework and conventions.
---

# Test Generation

Use when the user asks to add, repair, or improve tests. Inspect existing tests, fixtures,
test commands, and conventions before choosing a framework or test shape.

Test observable behavior and meaningful edge cases introduced by the change. Prefer
deterministic tests with local fixtures over mocks that merely mirror implementation.
Avoid arbitrary coverage targets and do not introduce a new test framework unless asked or
required. Run the narrowest relevant test command, then report what ran and any remaining
coverage gap.
