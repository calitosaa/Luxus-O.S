---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/cli/adapters/raw.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import type { PlatformAdapter, NormalizedHookInput, HookResult } from '../types.js';

// Raw adapter passes through with minimal transformation - useful for testing
export const rawAdapter: PlatformAdapter = {
  normalizeInput(raw) {
    const r = raw as any;
    return {
      sessionId: r.sessionId ?? r.session_id ?? 'unknown',
      cwd: r.cwd ?? process.cwd(),
      prompt: r.prompt,
      toolName: r.toolName ?? r.tool_name,
      toolInput: r.toolInput ?? r.tool_input,
      toolResponse: r.toolResponse ?? r.tool_response,
      transcriptPath: r.transcriptPath ?? r.transcript_path,
      filePath: r.filePath ?? r.file_path,
      edits: r.edits,
    };
  },
  formatOutput(result) {
    return result;
  }
};
