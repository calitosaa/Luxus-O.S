---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/loki-mode/benchmarks/results/2026-01-05-00-49-17/humaneval-solutions/34.py
license: MIT
category: skills/general
imported_at: 2026-04-19
---

def unique(l: list):
    """Return sorted unique elements in a list
    >>> unique([5, 3, 5, 2, 3, 3, 9, 0, 123])
    [0, 2, 3, 5, 9, 123]
    """
    return sorted(set(l))