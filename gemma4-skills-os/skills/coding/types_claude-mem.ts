---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/services/integrations/types.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Integration Types - Shared types for IDE integrations
 */

export interface CursorMcpConfig {
  mcpServers: {
    [name: string]: {
      command: string;
      args?: string[];
      env?: Record<string, string>;
    };
  };
}

export type CursorInstallTarget = 'project' | 'user' | 'enterprise';
export type Platform = 'windows' | 'unix';

export interface CursorHooksJson {
  version: number;
  hooks: {
    beforeSubmitPrompt?: Array<{ command: string }>;
    afterMCPExecution?: Array<{ command: string }>;
    afterShellExecution?: Array<{ command: string }>;
    afterFileEdit?: Array<{ command: string }>;
    stop?: Array<{ command: string }>;
  };
}
