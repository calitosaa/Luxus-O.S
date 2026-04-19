---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/loki-mode/benchmarks/results/2026-01-05-00-49-17/humaneval-solutions/137.py
license: MIT
category: skills/general
imported_at: 2026-04-19
---

def compare_one(a, b):
    """
    Create a function that takes integers, floats, or strings representing
    real numbers, and returns the larger variable in its given variable type.
    Return None if the values are equal.
    Note: If a real number is represented as a string, the floating point might be . or ,

    compare_one(1, 2.5) ➞ 2.5
    compare_one(1, "2,3") ➞ "2,3"
    compare_one("5,1", "6") ➞ "6"
    compare_one("1", 1) ➞ None
    """
    def to_float(x):
        if isinstance(x, str):
            return float(x.replace(",", "."))
        return float(x)
    
    val_a = to_float(a)
    val_b = to_float(b)
    
    if val_a == val_b:
        return None
    elif val_a > val_b:
        return a
    else:
        return b