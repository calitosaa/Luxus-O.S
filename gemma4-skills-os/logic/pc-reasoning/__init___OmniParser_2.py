---
source_repo: https://github.com/microsoft/OmniParser
source_file: omnitool/gradio/tools/__init__.py
license: MIT
category: logic/pc-reasoning
imported_at: 2026-04-19
---

from .base import ToolResult
from .collection import ToolCollection
from .computer import ComputerTool
from .screen_capture import get_screenshot

__ALL__ = [
    ComputerTool,
    ToolCollection,
    ToolResult,
    get_screenshot,
]
