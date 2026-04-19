---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/benchmark/src/swarm_benchmark/core/__init__.py
license: MIT
category: agents/orchestrator
imported_at: 2026-04-19
---

"""Core benchmarking framework components."""

from .models import (
    # Core models
    Task, Agent, Result, Benchmark, BenchmarkConfig,
    # Metrics
    BenchmarkMetrics, PerformanceMetrics, QualityMetrics, ResourceUsage,
    # Enums
    TaskStatus, AgentStatus, ResultStatus, StrategyType, CoordinationMode, AgentType
)
from .benchmark_engine import BenchmarkEngine
from .optimized_benchmark_engine import OptimizedBenchmarkEngine
from .task_scheduler import TaskScheduler, SchedulingAlgorithm, SchedulingMetrics
from .result_aggregator import ResultAggregator
from .parallel_executor import (
    ParallelExecutor, BatchExecutor, ExecutionMode, 
    ResourceLimits, ExecutionMetrics, ResourceMonitor
)
from .orchestration_manager import (
    OrchestrationManager, OrchestrationConfig, ProgressTracker
)

__all__ = [
    # Core models
    "Task",
    "Agent", 
    "Result",
    "Benchmark",
    "BenchmarkConfig",
    # Metrics
    "BenchmarkMetrics",
    "PerformanceMetrics", 
    "QualityMetrics",
    "ResourceUsage",
    # Enums
    "TaskStatus",
    "AgentStatus", 
    "ResultStatus",
    "StrategyType",
    "CoordinationMode",
    "AgentType",
    # Core components
    "BenchmarkEngine",
    "OptimizedBenchmarkEngine",
    "TaskScheduler",
    "SchedulingAlgorithm",
    "SchedulingMetrics",
    "ResultAggregator",
    # Parallel execution
    "ParallelExecutor",
    "BatchExecutor",
    "ExecutionMode",
    "ResourceLimits",
    "ExecutionMetrics",
    "ResourceMonitor",
    # Orchestration
    "OrchestrationManager",
    "OrchestrationConfig",
    "ProgressTracker",
]