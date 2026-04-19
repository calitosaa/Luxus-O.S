---
source_repo: https://github.com/aaronsb/google-workspace-mcp
source_file: src/server/session/index.ts
license: MIT
category: conectores-mcp/google-workspace
imported_at: 2026-04-19
---

/**
 * Session module — lazy singleton for the session tracker.
 */

import { SessionTracker } from './tracker.js';

let _tracker: SessionTracker | undefined;

/** Get (or create) the singleton session tracker. */
export function getSessionTracker(): SessionTracker {
  if (!_tracker) _tracker = new SessionTracker();
  return _tracker;
}

export { SessionTracker } from './tracker.js';
export type { AccountSession, NextEvent } from './tracker.js';
export { sessionContext } from './context.js';
