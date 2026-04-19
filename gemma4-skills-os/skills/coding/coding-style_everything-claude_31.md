---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: docs/tr/rules/python/coding-style.md
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

---
paths:
  - "**/*.py"
  - "**/*.pyi"
---
# Python Kodlama Stili

> Bu dosya [common/coding-style.md](../common/coding-style.md) dosyasını Python'a özgü içerikle genişletir.

## Standartlar

- **PEP 8** konvansiyonlarını takip et
- Tüm fonksiyon imzalarında **type annotation'lar** kullan

## Immutability

Immutable veri yapılarını tercih et:

```python
from dataclasses import dataclass

@dataclass(frozen=True)
class User:
    name: str
    email: str

from typing import NamedTuple

class Point(NamedTuple):
    x: float
    y: float
```

## Formatlama

- Kod formatlama için **black**
- Import sıralama için **isort**
- Linting için **ruff**

## Referans

Kapsamlı Python idiom'ları ve pattern'leri için skill: `python-patterns` dosyasına bakın.
