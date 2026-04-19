---
source_repo: https://github.com/openai/openai-cookbook
source_file: examples/gpt-5/prompt-optimization-cookbook/results_topk_baseline/run_08.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import re
import heapq
from typing import List, Tuple, Dict

# Expects globals: text (str) and k (int)

_token_re = re.compile(r'[a-z0-9]+')

def compute_top_k(src: str, top_n: int) -> List[Tuple[str, int]]:
    # Lowercase once, stream tokens via finditer to avoid building a full token list
    counts: Dict[str, int] = {}
    for m in _token_re.finditer(src.lower()):
        t = m.group(0)
        counts[t] = counts.get(t, 0) + 1

    if not counts:
        return []

    try:
        n = int(top_n)
    except Exception:
        n = 0
    if n <= 0:
        return []

    n = min(n, len(counts))
    # Smallest by (-count, token) => count desc, token asc
    return heapq.nsmallest(n, counts.items(), key=lambda kv: (-kv[1], kv[0]))

# Produce the required global
top_k = compute_top_k(text, k)