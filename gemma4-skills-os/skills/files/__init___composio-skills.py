---
source_repo: https://github.com/ComposioHQ/awesome-claude-skills
source_file: document-skills/pptx/ooxml/scripts/validation/__init__.py
license: Apache-2.0
category: skills/files
imported_at: 2026-04-19
---

"""
Validation modules for Word document processing.
"""

from .base import BaseSchemaValidator
from .docx import DOCXSchemaValidator
from .pptx import PPTXSchemaValidator
from .redlining import RedliningValidator

__all__ = [
    "BaseSchemaValidator",
    "DOCXSchemaValidator",
    "PPTXSchemaValidator",
    "RedliningValidator",
]
