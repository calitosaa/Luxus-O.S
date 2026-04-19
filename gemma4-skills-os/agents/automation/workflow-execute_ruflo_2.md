---
source_repo: https://github.com/ruvnet/ruflo
source_file: .claude/commands/workflows/workflow-execute.md
license: MIT
category: agents/automation
imported_at: 2026-04-19
---

# workflow-execute

Execute saved workflows.

## Usage
```bash
npx claude-flow workflow execute [options]
```

## Options
- `--name <name>` - Workflow name
- `--params <json>` - Workflow parameters
- `--dry-run` - Preview execution

## Examples
```bash
# Execute workflow
npx claude-flow workflow execute --name "deploy-api"

# With parameters
npx claude-flow workflow execute --name "test-suite" --params '{"env": "staging"}'

# Dry run
npx claude-flow workflow execute --name "deploy-api" --dry-run
```
