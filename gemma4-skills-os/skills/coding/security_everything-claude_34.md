---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: docs/tr/rules/python/security.md
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

---
paths:
  - "**/*.py"
  - "**/*.pyi"
---
# Python Güvenlik

> Bu dosya [common/security.md](../common/security.md) dosyasını Python'a özgü içerikle genişletir.

## Secret Yönetimi

```python
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.environ["OPENAI_API_KEY"]  # Eksikse KeyError hatası verir
```

## Güvenlik Taraması

- Statik güvenlik analizi için **bandit** kullan:
  ```bash
  bandit -r src/
  ```

## Referans

Django'ya özgü güvenlik kuralları için (eğer uygulanabilirse) skill: `django-security` dosyasına bakın.
