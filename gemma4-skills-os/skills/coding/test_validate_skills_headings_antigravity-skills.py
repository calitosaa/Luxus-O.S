---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: tools/scripts/tests/test_validate_skills_headings.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import os
import sys
from pathlib import Path

sys.path.append(str(Path(__file__).resolve().parents[1]))
from validate_skills import has_when_to_use_section

SAMPLES = [
    ("## When to Use", True),
    ("## Use this skill when", True),
    ("## When to Use This Skill", True),
    ("## Overview", False),
]

for heading, expected in SAMPLES:
    content = f"\n{heading}\n- item\n"
    assert has_when_to_use_section(content) is expected, heading

print("ok")
