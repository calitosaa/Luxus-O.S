---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/ui/viewer/constants/timing.ts
license: MIT
category: skills/design
imported_at: 2026-04-19
---

/**
 * Timing constants in milliseconds
 * All timeout and interval durations used throughout the UI
 */
export const TIMING = {
  /** SSE reconnection delay after connection error */
  SSE_RECONNECT_DELAY_MS: 3000,

  /** Stats refresh interval for worker status polling */
  STATS_REFRESH_INTERVAL_MS: 10000,

  /** Duration to display save status message before clearing */
  SAVE_STATUS_DISPLAY_DURATION_MS: 3000,
} as const;
