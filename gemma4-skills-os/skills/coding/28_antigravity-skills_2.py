---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: skills/loki-mode/benchmarks/results/humaneval-loki-solutions/28.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

# HumanEval/28
# Loki Mode Multi-Agent Solution
# Attempts: 1
# Passed: True

from typing import List


def concatenate(strings: List[str]) -> str:
    """ Concatenate list of strings into a single string
    >>> concatenate([])
    ''
    >>> concatenate(['a', 'b', 'c'])
    'abc'
    """
    return ''.join(strings)