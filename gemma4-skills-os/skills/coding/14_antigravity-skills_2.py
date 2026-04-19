---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: skills/loki-mode/benchmarks/results/humaneval-loki-solutions/14.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

# HumanEval/14
# Loki Mode Multi-Agent Solution
# Attempts: 1
# Passed: True

from typing import List


def all_prefixes(string: str) -> List[str]:
    """ Return list of all prefixes from shortest to longest of the input string
    >>> all_prefixes('abc')
    ['a', 'ab', 'abc']
    """
    return [string[:i] for i in range(1, len(string) + 1)]