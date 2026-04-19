---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/.claude/commands/monitoring/swarm-monitor.md
license: MIT
category: agents/orchestrator
imported_at: 2026-04-19
---

# swarm-monitor

Real-time swarm monitoring.

## Usage
```bash
npx claude-flow swarm monitor [options]
```

## Options
- `--interval <ms>` - Update interval
- `--metrics` - Show detailed metrics
- `--export` - Export monitoring data

## Examples
```bash
# Start monitoring
npx claude-flow swarm monitor

# Custom interval
npx claude-flow swarm monitor --interval 5000

# With metrics
npx claude-flow swarm monitor --metrics
```
