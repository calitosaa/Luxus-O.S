---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: skills/loki-mode/benchmarks/results/humaneval-loki-solutions/121.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

# HumanEval/121
# Loki Mode Multi-Agent Solution
# Attempts: 1
# Passed: True

def solution(lst):
    """Given a non-empty list of integers, return the sum of all of the odd elements that are in even positions.
    

    Examples
    solution([5, 8, 7, 1]) ==> 12
    solution([3, 3, 3, 3, 3]) ==> 9
    solution([30, 13, 24, 321]) ==>0
    """
    return sum(x for x in lst[::2] if x % 2 == 1)