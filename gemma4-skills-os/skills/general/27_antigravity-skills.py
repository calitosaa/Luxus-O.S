---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/loki-mode/benchmarks/results/humaneval-loki-solutions/27.py
license: MIT
category: skills/general
imported_at: 2026-04-19
---

# HumanEval/27
# Loki Mode Multi-Agent Solution
# Attempts: 1
# Passed: True

def flip_case(string: str) -> str:
    """ For a given string, flip lowercase characters to uppercase and uppercase to lowercase.
    >>> flip_case('Hello')
    'hELLO'
    """
    return string.swapcase()