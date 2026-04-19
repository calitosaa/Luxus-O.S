---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/loki-mode/benchmarks/results/humaneval-loki-solutions/135.py
license: MIT
category: skills/general
imported_at: 2026-04-19
---

# HumanEval/135
# Loki Mode Multi-Agent Solution
# Attempts: 1
# Passed: True

def can_arrange(arr):
    """Create a function which returns the largest index of an element which
    is not greater than or equal to the element immediately preceding it. If
    no such element exists then return -1. The given array will not contain
    duplicate values.

    Examples:
    can_arrange([1,2,4,3,5]) = 3
    can_arrange([1,2,3]) = -1
    """
    result = -1
    for i in range(1, len(arr)):
        if arr[i] < arr[i - 1]:
            result = i
    return result