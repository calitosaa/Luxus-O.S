---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/src/execution/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Execution Layer - Agentic-Flow Integration
 * Entry point for multi-provider agent execution
 */

export { AgentExecutor, type AgentExecutionOptions, type AgentExecutionResult } from './agent-executor.js';
export { ProviderManager, type ProviderConfig, type ExecutionConfig } from './provider-manager.js';

// Convenience exports
import { AgentExecutor } from './agent-executor.js';
import { ProviderManager } from './provider-manager.js';

export function createExecutor(hooksManager?: any) {
  return new AgentExecutor(hooksManager);
}

export function createProviderManager() {
  return new ProviderManager();
}
