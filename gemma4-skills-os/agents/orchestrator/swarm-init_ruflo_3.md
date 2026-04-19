---
source_repo: https://github.com/ruvnet/ruflo
source_file: .claude/commands/swarm/swarm-init.md
license: MIT
category: agents/orchestrator
imported_at: 2026-04-19
---

# swarm-init

Initialize a new swarm with specified topology.

## Usage
```bash
npx claude-flow swarm init [options]
```

## Options
- `--topology <type>` - Swarm topology (mesh, hierarchical, ring, star)
- `--max-agents <n>` - Maximum agents
- `--strategy <type>` - Distribution strategy

## Examples
```bash
npx claude-flow swarm init --topology mesh
npx claude-flow swarm init --topology hierarchical --max-agents 8
```
