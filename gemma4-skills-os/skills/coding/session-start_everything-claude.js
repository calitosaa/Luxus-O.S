---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: .cursor/hooks/session-start.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

#!/usr/bin/env node
const { readStdin, runExistingHook, transformToClaude, hookEnabled } = require('./adapter');
readStdin().then(raw => {
  const input = JSON.parse(raw || '{}');
  const claudeInput = transformToClaude(input);
  if (hookEnabled('session:start', ['minimal', 'standard', 'strict'])) {
    runExistingHook('session-start.js', claudeInput);
  }
  process.stdout.write(raw);
}).catch(() => process.exit(0));
