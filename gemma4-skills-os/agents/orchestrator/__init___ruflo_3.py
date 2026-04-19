---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/benchmark/src/swarm_benchmark/optimization/__init__.py
license: MIT
category: agents/orchestrator
imported_at: 2026-04-19
---

"""
Optimization module for swarm benchmark performance enhancements.

This module provides real optimization capabilities including:
- Parallel execution optimization
- Caching mechanisms
- Resource pooling
- Batch processing
- Connection pooling
"""

from .engine import (
    OptimizedBenchmarkEngine,
    OptimizedExecutor,
    CircularBuffer,
    TTLMap,
    AsyncFileManager
)

__all__ = [
    "OptimizedBenchmarkEngine",
    "OptimizedExecutor", 
    "CircularBuffer",
    "TTLMap",
    "AsyncFileManager"
]