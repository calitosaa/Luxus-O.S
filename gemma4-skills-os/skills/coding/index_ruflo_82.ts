---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/shared/src/security/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Security Module
 *
 * Shared security utilities for V3 Claude Flow.
 *
 * @module v3/shared/security
 */

// Secure random generation
export {
  generateSecureId,
  generateUUID,
  generateSecureToken,
  generateShortId,
  generateSessionId,
  generateAgentId,
  generateTaskId,
  generateMemoryId,
  generateEventId,
  generateSwarmId,
  generatePatternId,
  generateTrajectoryId,
  secureRandomInt,
  secureRandomChoice,
  secureShuffleArray,
} from './secure-random.js';

// Input validation
export {
  validateInput,
  sanitizeString,
  validatePath,
  validateCommand,
  validateTags,
  isValidIdentifier,
  escapeForSql,
  type ValidationResult,
  type ValidationOptions,
} from './input-validation.js';
