---
source_repo: https://github.com/taylorwilsdon/google_workspace_mcp
source_file: gdocs/managers/__init__.py
license: MIT
category: conectores-mcp/google-workspace
imported_at: 2026-04-19
---

"""
Google Docs Operation Managers

This package provides high-level manager classes for complex Google Docs operations,
extracting business logic from the main tools module to improve maintainability.
"""

from .table_operation_manager import TableOperationManager
from .header_footer_manager import HeaderFooterManager
from .validation_manager import ValidationManager
from .batch_operation_manager import BatchOperationManager

__all__ = [
    "TableOperationManager",
    "HeaderFooterManager",
    "ValidationManager",
    "BatchOperationManager",
]
