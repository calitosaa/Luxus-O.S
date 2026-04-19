---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: skills/loki-mode/benchmarks/results/humaneval-loki-solutions/26.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

# HumanEval/26
# Loki Mode Multi-Agent Solution
# Attempts: 1
# Passed: True

from typing import List
from collections import Counter


def remove_duplicates(numbers: List[int]) -> List[int]:
    """ From a list of integers, remove all elements that occur more than once.
    Keep order of elements left the same as in the input.
    >>> remove_duplicates([1, 2, 3, 2, 4])
    [1, 3, 4]
    """
    counts = Counter(numbers)
    return [num for num in numbers if counts[num] == 1]