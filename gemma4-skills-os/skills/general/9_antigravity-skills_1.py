---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/loki-mode/benchmarks/results/2026-01-05-00-49-17/humaneval-solutions/9.py
license: MIT
category: skills/general
imported_at: 2026-04-19
---

from typing import List, Tuple


def rolling_max(numbers: List[int]) -> List[int]:
    """ From a given list of integers, generate a list of rolling maximum element found until given moment
    in the sequence.
    >>> rolling_max([1, 2, 3, 2, 3, 4, 2])
    [1, 2, 3, 3, 3, 4, 4]
    """
    if not numbers:
        return []
    
    result = []
    current_max = numbers[0]
    
    for num in numbers:
        current_max = max(current_max, num)
        result.append(current_max)
    
    return result