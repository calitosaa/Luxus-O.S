---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: docs/zh-CN/rules/python/security.md
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

---
paths:
  - "**/*.py"
  - "**/*.pyi"
---

# Python 安全

> 本文档基于 [通用安全指南](../common/security.md) 扩展，补充了 Python 相关的内容。

## 密钥管理

```python
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.environ["OPENAI_API_KEY"]  # Raises KeyError if missing
```

## 安全扫描

* 使用 **bandit** 进行静态安全分析：
  ```bash
  bandit -r src/
  ```

## 参考

查看技能：`django-security` 以获取 Django 特定的安全指南（如适用）。
