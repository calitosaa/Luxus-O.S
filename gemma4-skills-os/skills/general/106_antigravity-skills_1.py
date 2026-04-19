---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/loki-mode/benchmarks/results/2026-01-05-00-49-17/humaneval-solutions/106.py
license: MIT
category: skills/general
imported_at: 2026-04-19
---

def f(n):
    """ Implement the function f that takes n as a parameter,
    and returns a list of size n, such that the value of the element at index i is the factorial of i if i is even
    or the sum of numbers from 1 to i otherwise.
    i starts from 1.
    the factorial of i is the multiplication of the numbers from 1 to i (1 * 2 * ... * i).
    Example:
    f(5) == [1, 2, 6, 24, 15]
    """
    result = []
    for i in range(1, n + 1):
        if i % 2 == 0:
            # factorial of i
            factorial = 1
            for j in range(1, i + 1):
                factorial *= j
            result.append(factorial)
        else:
            # sum of numbers from 1 to i
            result.append(sum(range(1, i + 1)))
    return result