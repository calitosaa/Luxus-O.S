---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/mcp/.claude/commands/analysis/performance-report.md
license: MIT
category: conectores-mcp/general
imported_at: 2026-04-19
---

# performance-report

Generate comprehensive performance reports for swarm operations.

## Usage
```bash
npx claude-flow analysis performance-report [options]
```

## Options
- `--format <type>` - Report format (json, html, markdown)
- `--include-metrics` - Include detailed metrics
- `--compare <id>` - Compare with previous swarm

## Examples
```bash
# Generate HTML report
npx claude-flow analysis performance-report --format html

# Compare swarms
npx claude-flow analysis performance-report --compare swarm-123

# Full metrics report
npx claude-flow analysis performance-report --include-metrics --format markdown
```
