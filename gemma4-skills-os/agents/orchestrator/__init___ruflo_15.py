---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/benchmark/src/swarm_benchmark/claude_optimizer/__init__.py
license: MIT
category: agents/orchestrator
imported_at: 2026-04-19
---

"""
CLAUDE.md Optimizer Module

This module provides intelligent optimization of CLAUDE.md configurations
for different development use cases and performance targets.
"""

from .optimizer import ClaudeMdOptimizer, ProjectContext, PerformanceTargets, BenchmarkMetrics
from .templates import TemplateEngine
from .rules_engine import OptimizationRulesEngine, OptimizationRule

__all__ = [
    "ClaudeMdOptimizer",
    "ProjectContext", 
    "PerformanceTargets",
    "BenchmarkMetrics",
    "TemplateEngine", 
    "OptimizationRulesEngine",
    "OptimizationRule"
]

__version__ = "1.0.0"