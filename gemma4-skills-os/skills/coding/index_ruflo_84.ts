---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/shared/src/plugins/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Plugins System - ADR-004 Implementation
 *
 * Plugin architecture for extending Claude Flow functionality.
 *
 * @module v3/shared/plugins
 */

// Types
export type {
  PluginConfig,
  PluginContext,
  PluginEvent,
  PluginEventHandler,
  ClaudeFlowPlugin,
  PluginMetadata,
  IPluginRegistry,
  IPluginLoader,
} from './types.js';

// Official Plugins
export {
  HiveMindPlugin,
  createHiveMindPlugin,
  type HiveMindConfig,
  type CollectiveDecision,
  type EmergentPattern,
  MaestroPlugin,
  createMaestroPlugin,
  type MaestroConfig,
  type WorkflowStep,
  type Workflow,
  type OrchestrationResult,
} from './official/index.js';
