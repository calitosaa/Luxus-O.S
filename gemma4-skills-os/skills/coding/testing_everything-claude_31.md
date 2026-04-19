---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: docs/tr/rules/python/testing.md
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

---
paths:
  - "**/*.py"
  - "**/*.pyi"
---
# Python Testing

> Bu dosya [common/testing.md](../common/testing.md) dosyasını Python'a özgü içerikle genişletir.

## Framework

Test framework'ü olarak **pytest** kullan.

## Coverage

```bash
pytest --cov=src --cov-report=term-missing
```

## Test Organizasyonu

Test kategorizasyonu için `pytest.mark` kullan:

```python
import pytest

@pytest.mark.unit
def test_calculate_total():
    ...

@pytest.mark.integration
def test_database_connection():
    ...
```

## Referans

Detaylı pytest pattern'leri ve fixture'lar için skill: `python-testing` dosyasına bakın.
