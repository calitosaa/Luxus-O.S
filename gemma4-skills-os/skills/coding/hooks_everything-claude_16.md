---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: docs/zh-CN/rules/golang/hooks.md
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

# Go 钩子

> 本文件通过 Go 特定内容扩展了 [common/hooks.md](../common/hooks.md)。

## PostToolUse 钩子

在 `~/.claude/settings.json` 中配置：

* **gofmt/goimports**：编辑后自动格式化 `.go` 文件
* **go vet**：编辑 `.go` 文件后运行静态分析
* **staticcheck**：对修改的包运行扩展静态检查
