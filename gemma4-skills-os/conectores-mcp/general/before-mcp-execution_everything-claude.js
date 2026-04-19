---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: .cursor/hooks/before-mcp-execution.js
license: MIT
category: conectores-mcp/general
imported_at: 2026-04-19
---

#!/usr/bin/env node
const { readStdin } = require('./adapter');
readStdin().then(raw => {
  try {
    const input = JSON.parse(raw);
    const server = input.server || input.mcp_server || 'unknown';
    const tool = input.tool || input.mcp_tool || 'unknown';
    console.error(`[ECC] MCP invocation: ${server}/${tool}`);
  } catch {}
  process.stdout.write(raw);
}).catch(() => process.exit(0));
