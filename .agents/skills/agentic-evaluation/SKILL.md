---
name: agentic-evaluation
description: Design a repeatable evaluation for an AI-agent workflow using realistic tasks, measurable outcomes, and failure analysis.
---

# Agentic Evaluation

Use for evaluating an AI agent, tool-calling workflow, prompt, or automation. Define the
target behavior, representative task set, success criteria, safety constraints, and cost
or latency limits before choosing a grader.

Use deterministic checks where possible; use model-based judging only with a transparent
rubric and sampled human review. Separate benchmark data from development examples, record
failures by category, and make conclusions proportional to sample size. Do not claim model
improvement without comparative evidence.
