---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: skills/loki-mode/benchmarks/results/2026-01-05-00-49-17/humaneval-solutions/163.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

def generate_integers(a, b):
    """
    Given two positive integers a and b, return the even digits between a
    and b, in ascending order.

    For example:
    generate_integers(2, 8) => [2, 4, 6, 8]
    generate_integers(8, 2) => [2, 4, 6, 8]
    generate_integers(10, 14) => []
    """
    lower = min(a, b)
    upper = max(a, b)
    even_digits = [2, 4, 6, 8]
    return [d for d in even_digits if lower <= d <= upper]