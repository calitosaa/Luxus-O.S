---
source_repo: https://github.com/openclaw/openclaw
source_file: extensions/open-prose/skills/prose/alts/shared-appendix.md
license: Apache-2.0
category: logic/openclaw
imported_at: 2026-04-19
---

---
role: reference
summary: Shared appendix for experimental OpenProse alternate registers.
status: draft
requires: prose.md
---

# OpenProse Alternate Register Appendix

Use this appendix with experimental register files such as `arabian-nights.md` and `homer.md`.

## Unchanged keywords

These keywords already work or are too functional to replace sensibly:

- `**...**` discretion markers
- `until`, `while`
- `map`, `filter`, `reduce`, `pmap`
- `max`
- `as`
- model names such as `sonnet`, `opus`, and `haiku`

## Comparison pattern

Use the translation map in each register file to rewrite the same functional sample programs:

- simple program
- parallel execution
- loop with condition
- error handling
- choice block
- conditionals

The goal is consistency, not one canonical wording.
Keep the functional version intact and rewrite only the register-specific aliases.
