---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: docs/tr/rules/typescript/hooks.md
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
# TypeScript/JavaScript Hooks

> Bu dosya [common/hooks.md](../common/hooks.md) dosyasını TypeScript/JavaScript'e özgü içerikle genişletir.

## PostToolUse Hooks

`~/.claude/settings.json` içinde yapılandır:

- **Prettier**: Edit'ten sonra JS/TS dosyalarını otomatik formatla
- **TypeScript check**: `.ts`/`.tsx` dosyalarını düzenledikten sonra `tsc` çalıştır
- **console.log uyarısı**: Düzenlenen dosyalarda `console.log` hakkında uyar

## Stop Hooks

- **console.log audit**: Session bitmeden önce değiştirilen tüm dosyalarda `console.log` kontrolü yap
