---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/benchmark/tests/fixtures/__init__.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

"""Test fixtures for claude-flow benchmarking"""

from .test_data import (
    TestDataGenerator,
    sample_web_api_project,
    sample_data_pipeline_project,
    sample_ml_project,
    test_prompts,
    performance_scenarios,
    code_samples
)

__all__ = [
    'TestDataGenerator',
    'sample_web_api_project',
    'sample_data_pipeline_project', 
    'sample_ml_project',
    'test_prompts',
    'performance_scenarios',
    'code_samples'
]