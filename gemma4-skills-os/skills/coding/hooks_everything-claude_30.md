---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: docs/tr/rules/python/hooks.md
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

---
paths:
  - "**/*.py"
  - "**/*.pyi"
---
# Python Hooks

> Bu dosya [common/hooks.md](../common/hooks.md) dosyasını Python'a özgü içerikle genişletir.

## PostToolUse Hooks

`~/.claude/settings.json` içinde yapılandır:

- **black/ruff**: Edit'ten sonra `.py` dosyalarını otomatik formatla
- **mypy/pyright**: `.py` dosyalarını düzenledikten sonra tip kontrolü çalıştır

## Uyarılar

- Düzenlenen dosyalarda `print()` ifadeleri hakkında uyar (bunun yerine `logging` modülü kullan)
