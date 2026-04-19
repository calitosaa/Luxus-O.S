---
source_repo: https://github.com/anthropics/anthropic-cookbook
source_file: managed_agents/example_data/orchestrate/src/url_utils.py
license: MIT
category: agents/general
imported_at: 2026-04-19
---

import re


def slugify(s: str) -> str:
    s = s.encode("ascii", "ignore").decode()
    s = re.sub(r"[^\w\s-]", "", s).strip().lower()
    return re.sub(r"[\s_-]+", "-", s)


def normalize_path(path: str) -> str:
    return "/" + "/".join(p for p in path.split("/") if p)
