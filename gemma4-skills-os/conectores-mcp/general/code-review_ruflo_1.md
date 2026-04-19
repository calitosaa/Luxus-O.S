---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/mcp/.claude/commands/github/code-review.md
license: MIT
category: conectores-mcp/general
imported_at: 2026-04-19
---

# code-review

Automated code review with swarm intelligence.

## Usage
```bash
npx claude-flow github code-review [options]
```

## Options
- `--pr-number <n>` - Pull request to review
- `--focus <areas>` - Review focus (security, performance, style)
- `--suggest-fixes` - Suggest code fixes

## Examples
```bash
# Review PR
npx claude-flow github code-review --pr-number 456

# Security focus
npx claude-flow github code-review --pr-number 456 --focus security

# With fix suggestions
npx claude-flow github code-review --pr-number 456 --suggest-fixes
```
