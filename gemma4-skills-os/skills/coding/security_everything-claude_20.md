---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: docs/zh-CN/rules/typescript/security.md
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

---
paths:
  - "**/*.ts"
  - "**/*.tsx"
  - "**/*.js"
  - "**/*.jsx"
---

# TypeScript/JavaScript 安全

> 本文档扩展了 [common/security.md](../common/security.md)，包含了 TypeScript/JavaScript 特定的内容。

## 密钥管理

```typescript
// NEVER: Hardcoded secrets
const apiKey = "sk-proj-xxxxx"

// ALWAYS: Environment variables
const apiKey = process.env.OPENAI_API_KEY

if (!apiKey) {
  throw new Error('OPENAI_API_KEY not configured')
}
```

## 代理支持

* 使用 **security-reviewer** 技能进行全面的安全审计
