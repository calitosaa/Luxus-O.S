---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/cli/types.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

export interface NormalizedHookInput {
  sessionId: string;
  cwd: string;
  platform?: string;   // 'claude-code', 'cursor', 'gemini-cli', etc.
  prompt?: string;
  toolName?: string;
  toolInput?: unknown;
  toolResponse?: unknown;
  transcriptPath?: string;
  // Cursor-specific fields
  filePath?: string;   // afterFileEdit
  edits?: unknown[];   // afterFileEdit
  // Platform-specific metadata (source, reason, trigger, mcp_context, etc.)
  metadata?: Record<string, unknown>;
}

export interface HookResult {
  continue?: boolean;
  suppressOutput?: boolean;
  hookSpecificOutput?: {
    hookEventName: string;
    additionalContext: string;
    permissionDecision?: 'allow' | 'deny';
    permissionDecisionReason?: string;
    updatedInput?: Record<string, unknown>;
  };
  systemMessage?: string;
  exitCode?: number;
}

export interface PlatformAdapter {
  normalizeInput(raw: unknown): NormalizedHookInput;
  formatOutput(result: HookResult): unknown;
}

export interface EventHandler {
  execute(input: NormalizedHookInput): Promise<HookResult>;
}
