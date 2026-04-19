---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: commands/hookify-configure.md
license: MIT
category: skills/general
imported_at: 2026-04-19
---

---
description: Enable or disable hookify rules interactively
---

Interactively enable or disable existing hookify rules.

## Steps

1. Find all `.claude/hookify.*.local.md` files
2. Read the current state of each rule
3. Present the list with current enabled / disabled status
4. Ask which rules to toggle
5. Update the `enabled:` field in the selected rule files
6. Confirm the changes
