---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: docs/zh-CN/rules/rust/hooks.md
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

---
paths:
  - "**/*.rs"
  - "**/Cargo.toml"
---

# Rust 钩子

> 此文件扩展了 [common/hooks.md](../common/hooks.md)，包含 Rust 特定内容。

## PostToolUse 钩子

在 `~/.claude/settings.json` 中配置：

* **cargo fmt**：编辑后自动格式化 `.rs` 文件
* **cargo clippy**：编辑 Rust 文件后运行 lint 检查
* **cargo check**：更改后验证编译（比 `cargo build` 更快）
