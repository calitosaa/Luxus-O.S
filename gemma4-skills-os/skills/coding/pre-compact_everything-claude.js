---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: .cursor/hooks/pre-compact.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

#!/usr/bin/env node
const { readStdin, runExistingHook, transformToClaude } = require('./adapter');
readStdin().then(raw => {
  const claudeInput = JSON.parse(raw || '{}');
  runExistingHook('pre-compact.js', transformToClaude(claudeInput));
  process.stdout.write(raw);
}).catch(() => process.exit(0));
