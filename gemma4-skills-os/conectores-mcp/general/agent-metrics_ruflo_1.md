---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/mcp/.claude/commands/monitoring/agent-metrics.md
license: MIT
category: conectores-mcp/general
imported_at: 2026-04-19
---

# agent-metrics

View agent performance metrics.

## Usage
```bash
npx claude-flow agent metrics [options]
```

## Options
- `--agent-id <id>` - Specific agent
- `--period <time>` - Time period
- `--format <type>` - Output format

## Examples
```bash
# All agents metrics
npx claude-flow agent metrics

# Specific agent
npx claude-flow agent metrics --agent-id agent-001

# Last hour
npx claude-flow agent metrics --period 1h
```
