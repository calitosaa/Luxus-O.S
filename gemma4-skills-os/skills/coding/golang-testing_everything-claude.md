---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: .cursor/rules/golang-testing.md
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

---
description: "Go testing extending common rules"
globs: ["**/*.go", "**/go.mod", "**/go.sum"]
alwaysApply: false
---
# Go Testing

> This file extends the common testing rule with Go specific content.

## Framework

Use the standard `go test` with **table-driven tests**.

## Race Detection

Always run with the `-race` flag:

```bash
go test -race ./...
```

## Coverage

```bash
go test -cover ./...
```

## Reference

See skill: `golang-testing` for detailed Go testing patterns and helpers.
