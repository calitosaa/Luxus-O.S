---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: skills/skill-comply/scripts/utils.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

"""Shared utilities for skill-comply scripts."""

from __future__ import annotations


def extract_yaml(text: str) -> str:
    """Extract YAML from LLM output, stripping markdown fences if present."""
    lines = text.strip().splitlines()
    if lines and lines[0].startswith("```"):
        lines = lines[1:]
    if lines and lines[-1].startswith("```"):
        lines = lines[:-1]
    return "\n".join(lines)
