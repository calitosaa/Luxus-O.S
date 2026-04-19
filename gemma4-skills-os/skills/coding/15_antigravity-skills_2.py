---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: skills/loki-mode/benchmarks/results/humaneval-loki-solutions/15.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

# HumanEval/15
# Loki Mode Multi-Agent Solution
# Attempts: 1
# Passed: True

def string_sequence(n: int) -> str:
    """ Return a string containing space-delimited numbers starting from 0 upto n inclusive.
    >>> string_sequence(0)
    '0'
    >>> string_sequence(5)
    '0 1 2 3 4 5'
    """
    return ' '.join(str(i) for i in range(n + 1))