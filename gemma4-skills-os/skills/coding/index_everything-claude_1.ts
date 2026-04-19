---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: .opencode/plugins/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Everything Claude Code (ECC) Plugins for OpenCode
 *
 * This module exports all ECC plugins for OpenCode integration.
 * Plugins provide hook-based automation that mirrors Claude Code's hook system
 * while taking advantage of OpenCode's more sophisticated 20+ event types.
 */

export { ECCHooksPlugin, default } from "./ecc-hooks.js"

// Re-export for named imports
export * from "./ecc-hooks.js"
