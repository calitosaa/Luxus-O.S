---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/cli/.claude/commands/analysis/token-usage.md
license: MIT
category: skills/reasoning
imported_at: 2026-04-19
---

# token-usage

Analyze token usage patterns and optimize for efficiency.

## Usage
```bash
npx claude-flow analysis token-usage [options]
```

## Options
- `--period <time>` - Analysis period (1h, 24h, 7d, 30d)
- `--by-agent` - Break down by agent
- `--by-operation` - Break down by operation type

## Examples
```bash
# Last 24 hours token usage
npx claude-flow analysis token-usage --period 24h

# By agent breakdown
npx claude-flow analysis token-usage --by-agent

# Export detailed report
npx claude-flow analysis token-usage --period 7d --export tokens.csv
```
