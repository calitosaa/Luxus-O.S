---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/loki-mode/benchmarks/results/humaneval-loki-solutions/61.py
license: MIT
category: skills/general
imported_at: 2026-04-19
---

# HumanEval/61
# Loki Mode Multi-Agent Solution
# Attempts: 1
# Passed: True

def correct_bracketing(brackets: str):
    """ brackets is a string of "(" and ")".
    return True if every opening bracket has a corresponding closing bracket.

    >>> correct_bracketing("(")
    False
    >>> correct_bracketing("()")
    True
    >>> correct_bracketing("(()())")
    True
    >>> correct_bracketing(")(()")
    False
    """
    counter = 0
    for char in brackets:
        if char == "(":
            counter += 1
        elif char == ")":
            counter -= 1
        if counter < 0:
            return False
    return counter == 0