---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/hooks/hook-response.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Standard hook response for all hooks.
 * Tells Claude Code to continue processing and suppress the hook's output.
 *
 * Note: SessionStart uses context-hook.ts which constructs its own response
 * with hookSpecificOutput for context injection.
 */
export const STANDARD_HOOK_RESPONSE = JSON.stringify({
  continue: true,
  suppressOutput: true
});
