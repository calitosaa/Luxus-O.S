---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: .opencode/commands/instinct-status.md
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

---
description: Show learned instincts (project + global) with confidence
agent: everything-claude-code:build
---

# Instinct Status Command

Show instinct status from continuous-learning-v2: $ARGUMENTS

## Your Task

Run:

```bash
python3 "${CLAUDE_PLUGIN_ROOT}/skills/continuous-learning-v2/scripts/instinct-cli.py" status
```

If `CLAUDE_PLUGIN_ROOT` is unavailable, use:

```bash
python3 ~/.claude/skills/continuous-learning-v2/scripts/instinct-cli.py status
```

## Behavior Notes

- Output includes both project-scoped and global instincts.
- Project instincts override global instincts when IDs conflict.
- Output is grouped by domain with confidence bars.
- This command does not support extra filters in v2.1.
