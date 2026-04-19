---
source_repo: https://github.com/openai/openai-cookbook
source_file: examples/agents_sdk/sandboxed-code-migration/tests/conftest.py
license: MIT
category: agents/general
imported_at: 2026-04-19
---

from __future__ import annotations

import sys
from pathlib import Path

EXAMPLE_ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(EXAMPLE_ROOT))
