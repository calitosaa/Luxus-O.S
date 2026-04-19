---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/loki-mode/benchmarks/results/humaneval-loki-solutions/161.py
license: MIT
category: skills/general
imported_at: 2026-04-19
---

# HumanEval/161
# Loki Mode Multi-Agent Solution
# Attempts: 1
# Passed: True

def solve(s):
    """You are given a string s.
    if s[i] is a letter, reverse its case from lower to upper or vise versa, 
    otherwise keep it as it is.
    If the string contains no letters, reverse the string.
    The function should return the resulted string.
    Examples
    solve("1234") = "4321"
    solve("ab") = "AB"
    solve("#a@C") = "#A@c"
    """
    has_letter = any(c.isalpha() for c in s)
    
    if not has_letter:
        return s[::-1]
    
    result = []
    for c in s:
        if c.isalpha():
            result.append(c.swapcase())
        else:
            result.append(c)
    
    return ''.join(result)