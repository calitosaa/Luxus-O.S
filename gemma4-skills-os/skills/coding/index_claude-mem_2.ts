---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/services/integrations/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Integrations module - IDE integrations (Cursor, Gemini CLI, OpenCode, Windsurf, etc.)
 */

export * from './types.js';
export * from './CursorHooksInstaller.js';
export * from './GeminiCliHooksInstaller.js';
export * from './OpenCodeInstaller.js';
export * from './WindsurfHooksInstaller.js';
export * from './OpenClawInstaller.js';
export * from './CodexCliInstaller.js';
export * from './McpIntegrations.js';
