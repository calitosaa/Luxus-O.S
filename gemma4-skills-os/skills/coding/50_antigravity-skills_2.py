---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: skills/loki-mode/benchmarks/results/humaneval-loki-solutions/50.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

# HumanEval/50
# Loki Mode Multi-Agent Solution
# Attempts: 3
# Passed: False

def decode_shift(s: str):
    """
    takes as input string encoded with encode_shift function. Returns decoded string.
    """
    return "".join([chr(((ord(ch) - 5 - ord("a")) % 26) + ord("a")) for ch in s])