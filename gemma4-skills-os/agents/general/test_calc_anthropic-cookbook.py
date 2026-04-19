---
source_repo: https://github.com/anthropics/anthropic-cookbook
source_file: managed_agents/example_data/iterate/test_calc.py
license: MIT
category: agents/general
imported_at: 2026-04-19
---

import pytest
from calc import add, divide, mean


def test_add():
    assert add(2, 3) == 5


def test_divide():
    assert divide(10, 2) == 5
    with pytest.raises(ValueError):
        divide(10, 0)


def test_mean():
    assert mean([2, 4, 6]) == 4
