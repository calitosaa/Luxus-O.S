---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/mcp/.claude/commands/optimization/parallel-execute.md
license: MIT
category: conectores-mcp/general
imported_at: 2026-04-19
---

# parallel-execute

Execute tasks in parallel for maximum efficiency.

## Usage
```bash
npx claude-flow optimization parallel-execute [options]
```

## Options
- `--tasks <file>` - Task list file
- `--max-parallel <n>` - Maximum parallel tasks
- `--strategy <type>` - Execution strategy

## Examples
```bash
# Execute task list
npx claude-flow optimization parallel-execute --tasks tasks.json

# Limit parallelism
npx claude-flow optimization parallel-execute --tasks tasks.json --max-parallel 5

# Custom strategy
npx claude-flow optimization parallel-execute --strategy adaptive
```
