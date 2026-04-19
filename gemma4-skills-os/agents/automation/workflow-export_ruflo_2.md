---
source_repo: https://github.com/ruvnet/ruflo
source_file: .claude/commands/workflows/workflow-export.md
license: MIT
category: agents/automation
imported_at: 2026-04-19
---

# workflow-export

Export workflows for sharing.

## Usage
```bash
npx claude-flow workflow export [options]
```

## Options
- `--name <name>` - Workflow to export
- `--format <type>` - Export format
- `--include-history` - Include execution history

## Examples
```bash
# Export workflow
npx claude-flow workflow export --name "deploy-api"

# As YAML
npx claude-flow workflow export --name "test-suite" --format yaml

# With history
npx claude-flow workflow export --name "deploy-api" --include-history
```
