---
source_repo: https://github.com/openai/openai-cookbook
source_file: examples/agents_sdk/sandboxed-code-migration/repo_fixtures/case_summary_service/case_summary_service/client.py
license: MIT
category: agents/general
imported_at: 2026-04-19
---

from __future__ import annotations

from typing import Any


def complete_summary_prompt(
    client: Any,
    *,
    model: str,
    messages: list[dict[str, str]],
) -> str:
    completion = client.chat.completions.create(
        model=model,
        messages=messages,
        temperature=0,
    )
    return completion.choices[0].message.content
