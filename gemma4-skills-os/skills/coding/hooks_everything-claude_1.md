---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: rules/golang/hooks.md
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

---
paths:
  - "**/*.go"
  - "**/go.mod"
  - "**/go.sum"
---
# Go Hooks

> This file extends [common/hooks.md](../common/hooks.md) with Go specific content.

## PostToolUse Hooks

Configure in `~/.claude/settings.json`:

- **gofmt/goimports**: Auto-format `.go` files after edit
- **go vet**: Run static analysis after editing `.go` files
- **staticcheck**: Run extended static checks on modified packages
