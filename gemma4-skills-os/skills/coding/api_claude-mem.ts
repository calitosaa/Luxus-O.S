---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/ui/viewer/constants/api.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * API endpoint paths
 * Centralized to avoid magic strings scattered throughout the codebase
 */
export const API_ENDPOINTS = {
  OBSERVATIONS: '/api/observations',
  SUMMARIES: '/api/summaries',
  PROMPTS: '/api/prompts',
  SETTINGS: '/api/settings',
  STATS: '/api/stats',
  PROCESSING_STATUS: '/api/processing-status',
  STREAM: '/stream',
} as const;
