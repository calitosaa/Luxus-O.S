---
source_repo: https://github.com/openai/openai-cookbook
source_file: examples/agents_sdk/sandboxed-code-migration/repo_fixtures/support_reply_service/tests/test_client.py
license: MIT
category: agents/general
imported_at: 2026-04-19
---

from __future__ import annotations

from types import SimpleNamespace
from unittest import TestCase

from customer_support_bot.client import complete_support_prompt


class FakeChatCompletions:
    def __init__(self) -> None:
        self.calls = []

    def create(self, **kwargs):
        self.calls.append(kwargs)
        return SimpleNamespace(
            choices=[
                SimpleNamespace(
                    message=SimpleNamespace(content="Draft from legacy chat wrapper")
                )
            ]
        )


class FakeOpenAIClient:
    def __init__(self) -> None:
        self.chat = SimpleNamespace(completions=FakeChatCompletions())


class CompleteSupportPromptTests(TestCase):
    def test_calls_chat_completions_with_support_messages(self) -> None:
        client = FakeOpenAIClient()
        messages = [
            {"role": "system", "content": "Draft concise support replies."},
            {"role": "user", "content": "Case CS-123: My shipment is late."},
        ]

        text = complete_support_prompt(
            client,
            model="gpt-5.4-mini",
            messages=messages,
        )

        self.assertEqual(text, "Draft from legacy chat wrapper")
        call = client.chat.completions.calls[0]
        self.assertEqual(call["model"], "gpt-5.4-mini")
        self.assertEqual(call["messages"], messages)
        self.assertEqual(call["temperature"], 0)
