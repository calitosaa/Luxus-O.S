---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: docs/zh-CN/rules/golang/testing.md
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

# Go 测试

> 本文档在 [common/testing.md](../common/testing.md) 的基础上扩展了 Go 特定的内容。

## 框架

使用标准的 `go test` 并采用 **表格驱动测试**。

## 竞态检测

始终使用 `-race` 标志运行：

```bash
go test -race ./...
```

## 覆盖率

```bash
go test -cover ./...
```

## 参考

查看技能：`golang-testing` 以获取详细的 Go 测试模式和辅助工具。
