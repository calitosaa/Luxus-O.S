---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/common/types/codex/types/errorTypes.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

// Error types and interfaces for Codex
export interface CodexError extends Error {
  code: string;
  originalError?: Error | string;
  context?: string;
  retryCount?: number;
  timestamp?: Date;
  userMessage?: string;
  technicalDetails?: Record<string, unknown>;
}

export const ERROR_CODES = {
  // Network errors
  CLOUDFLARE_BLOCKED: 'CLOUDFLARE_BLOCKED',
  NETWORK_TIMEOUT: 'NETWORK_TIMEOUT',
  NETWORK_REFUSED: 'CONNECTION_REFUSED',
  NETWORK_UNKNOWN: 'NETWORK_UNKNOWN',

  // System errors
  SYSTEM_INIT_FAILED: 'SYSTEM_INIT_FAILED',
  SESSION_TIMEOUT: 'SESSION_TIMEOUT',
  PERMISSION_DENIED: 'PERMISSION_DENIED',

  // Input/Output errors
  INVALID_MESSAGE_FORMAT: 'INVALID_MESSAGE_FORMAT',
  INVALID_INPUT: 'INVALID_INPUT',

  // Generic
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
} as const;

export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];
