---
source_repo: https://github.com/openclaw/openclaw
source_file: src/gateway/server-methods/CLAUDE.md
license: Apache-2.0
category: logic/openclaw
imported_at: 2026-04-19
---

# Gateway Server Methods Notes

- Pi session transcripts are a `parentId` chain/DAG; never append Pi `type: "message"` entries via raw JSONL writes (missing `parentId` can sever the leaf path and break compaction/history). Always write transcript messages via `SessionManager.appendMessage(...)` (or a wrapper that uses it).
