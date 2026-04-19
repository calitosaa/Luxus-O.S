---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: skills/loki-mode/benchmarks/results/2026-01-05-00-49-17/humaneval-solutions/33.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

def sort_third(l: list):
    """This function takes a list l and returns a list l' such that
    l' is identical to l in the indicies that are not divisible by three, while its values at the indicies that are divisible by three are equal
    to the values of the corresponding indicies of l, but sorted.
    >>> sort_third([1, 2, 3])
    [1, 2, 3]
    >>> sort_third([5, 6, 3, 4, 8, 9, 2])
    [2, 6, 3, 4, 8, 9, 5]
    """
    # Extract values at indices divisible by 3
    third_values = [l[i] for i in range(0, len(l), 3)]
    # Sort them
    third_values.sort()
    
    # Build result list
    result = l.copy()
    for i, val in enumerate(third_values):
        result[i * 3] = val
    
    return result