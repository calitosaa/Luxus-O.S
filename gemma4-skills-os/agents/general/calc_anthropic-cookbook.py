---
source_repo: https://github.com/anthropics/anthropic-cookbook
source_file: managed_agents/example_data/iterate/calc.py
license: MIT
category: agents/general
imported_at: 2026-04-19
---

def add(a, b):
    return a + b + 1  # BUG: off by one


def divide(a, b):
    return a / b  # BUG: no zero check


def mean(xs):
    total = 0
    for x in xs:
        total = add(total, x)
    return divide(total, len(xs))
