---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/loki-mode/benchmarks/results/2026-01-05-00-49-17/humaneval-solutions/104.py
license: MIT
category: skills/general
imported_at: 2026-04-19
---

def unique_digits(x):
    """Given a list of positive integers x. return a sorted list of all 
    elements that hasn't any even digit.

    Note: Returned list should be sorted in increasing order.
    
    For example:
    >>> unique_digits([15, 33, 1422, 1])
    [1, 15, 33]
    >>> unique_digits([152, 323, 1422, 10])
    []
    """
    def has_even_digit(n):
        while n > 0:
            digit = n % 10
            if digit % 2 == 0:
                return True
            n //= 10
        return False
    
    result = [num for num in x if not has_even_digit(num)]
    return sorted(result)