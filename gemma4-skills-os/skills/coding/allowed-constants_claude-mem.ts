---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/services/server/allowed-constants.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

// Allowed values for /api/instructions security
export const ALLOWED_OPERATIONS = [
  'search',
  'context',
  'summarize',
  'import',
  'export'
];

export const ALLOWED_TOPICS = [
  'workflow',
  'search_params',
  'examples',
  'all'
];
