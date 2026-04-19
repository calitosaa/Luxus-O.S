---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/benchmark/src/swarm_benchmark/swe_bench/__init__.py
license: MIT
category: agents/orchestrator
imported_at: 2026-04-19
---

"""SWE-Bench integration for Claude Flow benchmarking."""

from .engine import SWEBenchEngine
from .evaluator import SWEBenchEvaluator
from .datasets import SWEBenchDataset
from .optimizer import SWEBenchOptimizer
from .metrics import SWEBenchMetrics

__all__ = [
    'SWEBenchEngine',
    'SWEBenchEvaluator', 
    'SWEBenchDataset',
    'SWEBenchOptimizer',
    'SWEBenchMetrics'
]

__version__ = "1.0.0"