---
source_repo: https://github.com/ruvnet/ruflo
source_file: .claude/commands/memory/memory-persist.md
license: MIT
category: skills/memory
imported_at: 2026-04-19
---

# memory-persist

Persist memory across sessions.

## Usage
```bash
npx claude-flow memory persist [options]
```

## Options
- `--export <file>` - Export to file
- `--import <file>` - Import from file
- `--compress` - Compress memory data

## Examples
```bash
# Export memory
npx claude-flow memory persist --export memory-backup.json

# Import memory
npx claude-flow memory persist --import memory-backup.json

# Compressed export
npx claude-flow memory persist --export memory.gz --compress
```
