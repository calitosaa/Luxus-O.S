---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: .cursor/hooks/before-tab-file-read.js
license: MIT
category: skills/files
imported_at: 2026-04-19
---

#!/usr/bin/env node
const { readStdin } = require('./adapter');
readStdin().then(raw => {
  try {
    const input = JSON.parse(raw);
    const filePath = input.path || input.file || '';
    if (/\.(env|key|pem)$|\.env\.|credentials|secret/i.test(filePath)) {
      console.error('[ECC] BLOCKED: Tab cannot read sensitive file: ' + filePath);
      process.exit(2);
    }
  } catch {}
  process.stdout.write(raw);
}).catch(() => process.exit(0));
