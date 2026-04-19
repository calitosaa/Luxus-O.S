---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: skills/loki-mode/benchmarks/results/humaneval-loki-solutions/34.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

# HumanEval/34
# Loki Mode Multi-Agent Solution
# Attempts: 1
# Passed: True

def unique(l: list):
    """Return sorted unique elements in a list
    >>> unique([5, 3, 5, 2, 3, 3, 9, 0, 123])
    [0, 2, 3, 5, 9, 123]
    """
    return sorted(set(l))