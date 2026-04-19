---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/.claude/commands/hive-mind/hive-mind-spawn.md
license: MIT
category: skills/general
imported_at: 2026-04-19
---

# hive-mind-spawn

Spawn a Hive Mind swarm with queen-led coordination.

## Usage
```bash
npx claude-flow hive-mind spawn <objective> [options]
```

## Options
- `--queen-type <type>` - Queen type (strategic, tactical, adaptive)
- `--max-workers <n>` - Maximum worker agents
- `--consensus <type>` - Consensus algorithm
- `--claude` - Generate Claude Code spawn commands

## Examples
```bash
npx claude-flow hive-mind spawn "Build API"
npx claude-flow hive-mind spawn "Research patterns" --queen-type adaptive
npx claude-flow hive-mind spawn "Build service" --claude
```
