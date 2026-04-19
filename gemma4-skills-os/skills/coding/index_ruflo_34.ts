---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/plugins/gastown-bridge/src/gupp/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * GUPP Module - Gastown Universal Propulsion Principle
 *
 * GUPP principle: "If work is on your hook, YOU MUST RUN IT"
 *
 * This module provides session persistence and work tracking
 * for the Gas Town Bridge plugin, ensuring work continuity
 * across session restarts and crashes.
 *
 * @module gastown-bridge/gupp
 * @version 0.1.0
 */

// ============================================================================
// Adapter Exports
// ============================================================================

export {
  // Main adapter class
  GuppAdapter,
  // Factory function
  createGuppAdapter,
  // Default export
  default,
  // Types
  type SessionManager,
  type GuppAdapterConfig,
  type ResumptionResult,
  type SessionStartCallback,
  type SessionEndCallback,
  type WorkSlungCallback,
  type WorkCompleteCallback,
} from './adapter.js';

// ============================================================================
// State Exports
// ============================================================================

export {
  // State management
  createEmptyState,
  createSession,
  createHookedWorkItem,
  // Disk persistence
  saveState,
  loadState,
  deleteState,
  // AgentDB persistence
  saveStateToAgentDB,
  loadStateFromAgentDB,
  // State merging
  mergeStates,
  // State utilities
  validateState,
  getPendingWork,
  getWorkNeedingResumption,
  touchSession,
  endSession,
  // Constants
  DEFAULT_STATE_PATH,
  AGENTDB_NAMESPACE,
  // Schemas
  GuppStateSchema,
  HookedWorkItemSchema,
  SessionInfoSchema,
  WorkItemStatusSchema,
  // Types
  type GuppState,
  type HookedWorkItem,
  type SessionInfo,
  type WorkItemStatus,
  type MergeStrategy,
  type AgentDBInterface,
} from './state.js';
