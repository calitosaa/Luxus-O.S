---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: docs/tr/rules/golang/testing.md
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
# Go Testing

> Bu dosya [common/testing.md](../common/testing.md) dosyasını Go'ya özgü içerikle genişletir.

## Framework

**Table-driven testler** ile standart `go test` kullan.

## Race Detection

Daima `-race` flag'i ile çalıştır:

```bash
go test -race ./...
```

## Coverage

```bash
go test -cover ./...
```

## Referans

Detaylı Go test pattern'leri ve helper'lar için skill: `golang-testing` dosyasına bakın.
