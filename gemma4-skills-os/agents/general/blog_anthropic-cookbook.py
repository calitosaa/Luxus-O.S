---
source_repo: https://github.com/anthropics/anthropic-cookbook
source_file: managed_agents/example_data/orchestrate/src/blog.py
license: MIT
category: agents/general
imported_at: 2026-04-19
---

from datetime import date

from .url_utils import normalize_path, slugify


def generate_post_url(title: str, published: date) -> str:
    slug = slugify(title)
    return normalize_path(f"/blog/{published.year}/{published.month:02d}/{slug}")


def generate_author_url(name: str) -> str:
    return normalize_path(f"/authors/{slugify(name)}")
