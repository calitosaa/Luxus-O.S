---
source_repo: https://github.com/openai/openai-cookbook
source_file: examples/agents_sdk/sandboxed-code-migration/repo_fixtures/case_summary_service/README.md
license: MIT
category: agents/general
imported_at: 2026-04-19
---

# Case summary service

Small offline fixture for the sandboxed migration cookbook.

The pre-migration service wraps a Chat Completions call and uses it to summarize
internal case notes. Tests use fakes; they should never call the network.
