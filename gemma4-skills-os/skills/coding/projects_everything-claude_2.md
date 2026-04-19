---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: .opencode/commands/projects.md
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

---
description: List registered projects and instinct counts
agent: everything-claude-code:build
---

# Projects Command

Show continuous-learning-v2 project registry and stats: $ARGUMENTS

## Your Task

Run:

```bash
python3 "${CLAUDE_PLUGIN_ROOT}/skills/continuous-learning-v2/scripts/instinct-cli.py" projects
```

If `CLAUDE_PLUGIN_ROOT` is unavailable, use:

```bash
python3 ~/.claude/skills/continuous-learning-v2/scripts/instinct-cli.py projects
```

