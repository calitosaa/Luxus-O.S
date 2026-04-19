---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/loki-mode/examples/todo-app-generated/backend/src/db/schema.sql
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

CREATE TABLE IF NOT EXISTS todos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  completed INTEGER DEFAULT 0,
  createdAt TEXT,
  updatedAt TEXT
);
