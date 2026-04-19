---
source_repo: https://github.com/openai/openai-cookbook
source_file: examples/gpt-5/prompt-optimization-cookbook/results_topk_baseline/run_21.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import re
from collections import Counter
from heapq import nsmallest

def _iter_tokens(s):
    # Yield lowercase ASCII [a-z0-9]+ tokens; non-matching chars are separators
    pattern = re.compile(r"[a-z0-9]+", flags=re.ASCII | re.IGNORECASE)
    for m in pattern.finditer(s):
        yield m.group(0).lower()

def compute_top_k(s, k_value):
    k_int = int(k_value)
    if k_int <= 0:
        return []
    counts = Counter()
    for tok in _iter_tokens(s):
        counts[tok] += 1
    if not counts:
        return []
    # Sort by count desc, then token asc; take top k
    return nsmallest(k_int, counts.items(), key=lambda t: (-t[1], t[0]))

# Expose result as a convenient global
top_k = compute_top_k(text, k)