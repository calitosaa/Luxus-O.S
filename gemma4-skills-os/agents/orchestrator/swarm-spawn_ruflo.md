---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/cli/.claude/commands/swarm/swarm-spawn.md
license: MIT
category: agents/orchestrator
imported_at: 2026-04-19
---

# swarm-spawn

Spawn agents in the swarm.

## Usage
```bash
npx claude-flow swarm spawn [options]
```

## Options
- `--type <type>` - Agent type
- `--count <n>` - Number to spawn
- `--capabilities <list>` - Agent capabilities

## Examples
```bash
npx claude-flow swarm spawn --type coder --count 3
npx claude-flow swarm spawn --type researcher --capabilities "web-search,analysis"
```
