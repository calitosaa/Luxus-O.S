---
source_repo: https://github.com/openai/openai-cookbook
source_file: examples/agents_sdk/sandboxed-code-migration/repo_fixtures/support_reply_service/README.md
license: MIT
category: agents/general
imported_at: 2026-04-19
---

# Customer Support Reply Bot

This tiny package drafts a support-agent reply with the OpenAI Python client.

The current implementation still uses Chat Completions through a small wrapper
in `customer_support_bot/client.py`. The migration target is in `MIGRATION.md`.
