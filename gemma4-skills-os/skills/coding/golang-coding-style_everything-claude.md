---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: .cursor/rules/golang-coding-style.md
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

---
description: "Go coding style extending common rules"
globs: ["**/*.go", "**/go.mod", "**/go.sum"]
alwaysApply: false
---
# Go Coding Style

> This file extends the common coding style rule with Go specific content.

## Formatting

- **gofmt** and **goimports** are mandatory -- no style debates

## Design Principles

- Accept interfaces, return structs
- Keep interfaces small (1-3 methods)

## Error Handling

Always wrap errors with context:

```go
if err != nil {
    return fmt.Errorf("failed to create user: %w", err)
}
```

## Reference

See skill: `golang-patterns` for comprehensive Go idioms and patterns.
