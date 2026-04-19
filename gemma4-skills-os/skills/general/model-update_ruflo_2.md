---
source_repo: https://github.com/ruvnet/ruflo
source_file: .claude/commands/training/model-update.md
license: MIT
category: skills/general
imported_at: 2026-04-19
---

# model-update

Update neural models with new data.

## Usage
```bash
npx claude-flow training model-update [options]
```

## Options
- `--model <name>` - Model to update
- `--incremental` - Incremental update
- `--validate` - Validate after update

## Examples
```bash
# Update all models
npx claude-flow training model-update

# Specific model
npx claude-flow training model-update --model agent-selector

# Incremental with validation
npx claude-flow training model-update --incremental --validate
```
