---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: tools/scripts/_safe_files.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

from __future__ import annotations

from pathlib import Path


def is_safe_regular_file(path: str | Path) -> bool:
    candidate = Path(path)
    try:
        return candidate.is_file() and not candidate.is_symlink()
    except OSError:
        return False
