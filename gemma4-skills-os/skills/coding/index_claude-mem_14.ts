---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/cli/adapters/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import type { PlatformAdapter } from '../types.js';
import { claudeCodeAdapter } from './claude-code.js';
import { cursorAdapter } from './cursor.js';
import { geminiCliAdapter } from './gemini-cli.js';
import { rawAdapter } from './raw.js';
import { windsurfAdapter } from './windsurf.js';

export function getPlatformAdapter(platform: string): PlatformAdapter {
  switch (platform) {
    case 'claude-code': return claudeCodeAdapter;
    case 'cursor': return cursorAdapter;
    case 'gemini':
    case 'gemini-cli': return geminiCliAdapter;
    case 'windsurf': return windsurfAdapter;
    case 'raw': return rawAdapter;
    // Codex CLI and other compatible platforms use the raw adapter (accepts both camelCase and snake_case fields)
    default: return rawAdapter;
  }
}

export { claudeCodeAdapter, cursorAdapter, geminiCliAdapter, rawAdapter, windsurfAdapter };
