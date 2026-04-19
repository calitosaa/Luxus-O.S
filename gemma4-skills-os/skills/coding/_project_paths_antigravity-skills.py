---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: tools/scripts/_project_paths.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

from __future__ import annotations

from pathlib import Path


def find_repo_root(start_path: str | Path) -> Path:
    current = Path(start_path).resolve()
    if current.is_file():
        current = current.parent

    for candidate in (current, *current.parents):
        if (candidate / "package.json").is_file() and (candidate / "README.md").is_file():
            return candidate

    raise FileNotFoundError(f"Could not find repository root from {start_path!r}")
