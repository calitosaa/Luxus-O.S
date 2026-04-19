---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/mcp/.claude/commands/github/pr-enhance.md
license: MIT
category: conectores-mcp/general
imported_at: 2026-04-19
---

# pr-enhance

AI-powered pull request enhancements.

## Usage
```bash
npx claude-flow github pr-enhance [options]
```

## Options
- `--pr-number <n>` - Pull request number
- `--add-tests` - Add missing tests
- `--improve-docs` - Improve documentation
- `--check-security` - Security review

## Examples
```bash
# Enhance PR
npx claude-flow github pr-enhance --pr-number 123

# Add tests
npx claude-flow github pr-enhance --pr-number 123 --add-tests

# Full enhancement
npx claude-flow github pr-enhance --pr-number 123 --add-tests --improve-docs
```
