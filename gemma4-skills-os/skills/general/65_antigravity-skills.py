---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/loki-mode/benchmarks/results/humaneval-loki-solutions/65.py
license: MIT
category: skills/general
imported_at: 2026-04-19
---

# HumanEval/65
# Loki Mode Multi-Agent Solution
# Attempts: 1
# Passed: True

def circular_shift(x, shift):
    """Circular shift the digits of the integer x, shift the digits right by shift
    and return the result as a string.
    If shift > number of digits, return digits reversed.
    >>> circular_shift(12, 1)
    "21"
    >>> circular_shift(12, 2)
    "12"
    """
    digits = str(x)
    if shift > len(digits):
        return digits[::-1]
    return digits[-shift:] + digits[:-shift]