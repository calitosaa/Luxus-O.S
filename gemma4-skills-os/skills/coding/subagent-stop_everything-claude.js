---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: .cursor/hooks/subagent-stop.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

#!/usr/bin/env node
const { readStdin } = require('./adapter');
readStdin().then(raw => {
  try {
    const input = JSON.parse(raw);
    const agent = input.agent_name || input.agent || 'unknown';
    console.error(`[ECC] Agent completed: ${agent}`);
  } catch {}
  process.stdout.write(raw);
}).catch(() => process.exit(0));
