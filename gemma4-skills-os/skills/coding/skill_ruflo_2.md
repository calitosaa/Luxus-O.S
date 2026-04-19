---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/codex/.agents/skills/sparc-methodology/SKILL.md
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

---
name: sparc-methodology
description: >
  SPARC development workflow (Specification, Pseudocode, Architecture, Refinement, Completion).
  Use when: new features, complex implementations, architectural changes.
  Skip when: simple fixes, documentation, configuration.
---

# Sparc Methodology Skill

## Purpose
SPARC development workflow (Specification, Pseudocode, Architecture, Refinement, Completion).

## When to Trigger
- new features
- complex implementations
- architectural changes

## When to Skip
- simple fixes
- documentation
- configuration

## Commands

### Specification Phase
Define requirements and acceptance criteria

```bash
npx @claude-flow/cli hooks route --task "specification: [requirements]"
```

### Architecture Phase
Design system structure

```bash
npx @claude-flow/cli hooks route --task "architecture: [design]"
```



## Best Practices
1. Check memory for existing patterns before starting
2. Use hierarchical topology for coordination
3. Store successful patterns after completion
4. Document any new learnings
