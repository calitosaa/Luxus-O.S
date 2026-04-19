---
source_repo: https://github.com/anthropics/anthropic-cookbook
source_file: managed_agents/example_data/iterate/README.md
license: MIT
category: agents/general
imported_at: 2026-04-19
---

# Iterate, get the tests green

A `calc.py` with three planted bugs and a `test_calc.py` with three assertions that catch them. Used by `CMA_iterate_fix_failing_tests.py`.

The interesting bug is `test_mean`: `mean()` calls `add` and `divide` internally, so it goes green on its own once the other two are fixed. An agent that edits `mean()` directly is over-fixing.
