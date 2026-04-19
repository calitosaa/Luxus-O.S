---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: docs/tr/rules/golang/hooks.md
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

> Bu dosya [common/hooks.md](../common/hooks.md) dosyasını Go'ya özgü içerikle genişletir.

## PostToolUse Hooks

`~/.claude/settings.json` içinde yapılandır:

- **gofmt/goimports**: Edit'ten sonra `.go` dosyalarını otomatik formatla
- **go vet**: `.go` dosyalarını düzenledikten sonra statik analiz çalıştır
- **staticcheck**: Değiştirilen paketlerde genişletilmiş statik kontroller çalıştır
