---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: skills/loki-mode/benchmarks/results/humaneval-loki-solutions/47.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

# HumanEval/47
# Loki Mode Multi-Agent Solution
# Attempts: 1
# Passed: True

def median(l: list):
    """Return median of elements in the list l.
    >>> median([3, 1, 2, 4, 5])
    3
    >>> median([-10, 4, 6, 1000, 10, 20])
    15.0
    """
    sorted_l = sorted(l)
    n = len(sorted_l)
    mid = n // 2
    if n % 2 == 1:
        return sorted_l[mid]
    else:
        return (sorted_l[mid - 1] + sorted_l[mid]) / 2