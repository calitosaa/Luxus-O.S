---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: src/llm/providers/__init__.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

"""Provider adapters for multiple LLM backends."""

from llm.providers.claude import ClaudeProvider
from llm.providers.openai import OpenAIProvider
from llm.providers.ollama import OllamaProvider
from llm.providers.resolver import get_provider, register_provider

__all__ = (
    "ClaudeProvider",
    "OpenAIProvider",
    "OllamaProvider",
    "get_provider",
    "register_provider",
)
