---
source_repo: https://github.com/aaronsb/google-workspace-mcp
source_file: src/server/index.ts
license: MIT
category: conectores-mcp/google-workspace
imported_at: 2026-04-19
---

export { createServer, startServer } from './server.js';
export { toolSchemas, getToolSchema } from './tools.js';
export type { ToolSchema } from './tools.js';
export { handleToolCall } from './handler.js';
