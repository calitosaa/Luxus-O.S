---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/benchmark/src/swarm_benchmark/scenarios/__init__.py
license: MIT
category: agents/orchestrator
imported_at: 2026-04-19
---

"""
Benchmark scenarios package for executing real Claude Flow commands.
"""

from .real_benchmarks import RealSwarmBenchmark, RealHiveMindBenchmark, RealSparcBenchmark

__all__ = [
    'RealSwarmBenchmark',
    'RealHiveMindBenchmark', 
    'RealSparcBenchmark'
]