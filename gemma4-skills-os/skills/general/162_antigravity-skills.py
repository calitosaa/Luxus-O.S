---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/loki-mode/benchmarks/results/humaneval-loki-solutions/162.py
license: MIT
category: skills/general
imported_at: 2026-04-19
---

# HumanEval/162
# Loki Mode Multi-Agent Solution
# Attempts: 1
# Passed: True

def string_to_md5(text):
    """
    Given a string 'text', return its md5 hash equivalent string.
    If 'text' is an empty string, return None.

    >>> string_to_md5('Hello world') == '3e25960a79dbc69b674cd4ec67a72c62'
    """
    if text == '':
        return None
    import hashlib
    return hashlib.md5(text.encode()).hexdigest()