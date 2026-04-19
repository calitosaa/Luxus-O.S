---
source_repo: https://github.com/ruvnet/ruflo
source_file: .claude/commands/agents/agent-capabilities.md
license: MIT
category: agents/general
imported_at: 2026-04-19
---

# agent-capabilities

Matrix of agent capabilities and their specializations.

## Capability Matrix

| Agent Type | Primary Skills | Best For |
|------------|---------------|----------|
| coder | Implementation, debugging | Feature development |
| researcher | Analysis, synthesis | Requirements gathering |
| tester | Testing, validation | Quality assurance |
| architect | Design, planning | System architecture |

## Querying Capabilities
```bash
# List all capabilities
npx claude-flow agents capabilities

# For specific agent
npx claude-flow agents capabilities --type coder
```
