---
source_repo: https://github.com/openai/openai-cookbook
source_file: examples/object_oriented_agentic_approach/resources/object_oriented_agents/core_classes/chat_messages.py
license: MIT
category: agents/general
imported_at: 2026-04-19
---

# object_oriented_agents/core_classes/chat_messages.py
from typing import List, Dict

class ChatMessages:
    """
    Stores all messages in a conversation (developer, user, assistant).
    """

    def __init__(self, developer_prompt: str):
        self.messages: List[Dict[str, str]] = []
        self.add_developer_message(developer_prompt)

    def add_developer_message(self, content: str) -> None:
        self.messages.append({"role": "developer", "content": content})

    def add_user_message(self, content: str) -> None:
        self.messages.append({"role": "user", "content": content})

    def add_assistant_message(self, content: str) -> None:
        self.messages.append({"role": "assistant", "content": content})

    def get_messages(self) -> List[Dict[str, str]]:
        return self.messages