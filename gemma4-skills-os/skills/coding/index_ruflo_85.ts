---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/shared/src/plugins/official/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Official Plugins - ADR-004 Implementation
 *
 * Exports all official @claude-flow plugins.
 *
 * @module v3/shared/plugins/official
 */

export {
  HiveMindPlugin,
  createHiveMindPlugin,
  type HiveMindConfig,
  type CollectiveDecision,
  type EmergentPattern,
} from './hive-mind-plugin.js';

export {
  MaestroPlugin,
  createMaestroPlugin,
  type MaestroConfig,
  type WorkflowStep,
  type Workflow,
  type OrchestrationResult,
} from './maestro-plugin.js';
