---
source_repo: https://github.com/PrefectHQ/fastmcp
source_file: examples/skills/sample_skills/code-review/SKILL.md
license: Apache-2.0
category: logic/mcp-protocol
imported_at: 2026-04-19
---

---
description: Review code for quality, maintainability, and correctness
version: "1.0.0"
tags: [code, review, quality]
---

# Code Review Skill

This skill guides you through conducting thorough code reviews.

## Review Checklist

When reviewing code, consider:

### Correctness
- Does the code do what it's supposed to do?
- Are edge cases handled?
- Are there any obvious bugs?

### Maintainability
- Is the code easy to understand?
- Are variable and function names descriptive?
- Is there appropriate documentation?

### Performance
- Are there any obvious performance issues?
- Are expensive operations cached when appropriate?
- Are database queries efficient?

### Security
- Is user input validated?
- Are there any injection vulnerabilities?
- Are secrets properly managed?

## Giving Feedback

- Be specific and actionable
- Explain *why* something should change
- Suggest alternatives, don't just criticize
- Acknowledge good work too
