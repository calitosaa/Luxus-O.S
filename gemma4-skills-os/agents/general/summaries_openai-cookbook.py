---
source_repo: https://github.com/openai/openai-cookbook
source_file: examples/agents_sdk/sandboxed-code-migration/repo_fixtures/case_summary_service/case_summary_service/summaries.py
license: MIT
category: agents/general
imported_at: 2026-04-19
---

from __future__ import annotations

from case_summary_service.client import complete_summary_prompt


def summarize_case(
    client,
    *,
    model: str,
    case_notes: str,
) -> str:
    return complete_summary_prompt(
        client,
        model=model,
        messages=[
            {
                "role": "system",
                "content": "Summarize support case notes for a handoff.",
            },
            {
                "role": "user",
                "content": case_notes,
            },
        ],
    )
