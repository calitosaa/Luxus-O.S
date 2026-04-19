---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: .opencode/commands/promote.md
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

---
description: Promote project instincts to global scope
agent: everything-claude-code:build
---

# Promote Command

Promote instincts in continuous-learning-v2: $ARGUMENTS

## Your Task

Run:

```bash
python3 "${CLAUDE_PLUGIN_ROOT}/skills/continuous-learning-v2/scripts/instinct-cli.py" promote $ARGUMENTS
```

If `CLAUDE_PLUGIN_ROOT` is unavailable, use:

```bash
python3 ~/.claude/skills/continuous-learning-v2/scripts/instinct-cli.py promote $ARGUMENTS
```

