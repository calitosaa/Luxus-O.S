---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/swarm/src/coordination/index.ts
license: MIT
category: agents/orchestrator
imported_at: 2026-04-19
---

/**
 * Coordination Components
 * Agent registry, task orchestration, and swarm hub
 */

export {
  AgentRegistry,
  createAgentRegistry,
  type IAgentRegistry,
} from './agent-registry.js';

export {
  TaskOrchestrator,
  createTaskOrchestrator,
  type ITaskOrchestrator,
  type TaskSpec,
} from './task-orchestrator.js';

export {
  SwarmHub,
  createSwarmHub,
  type ISwarmHub,
} from './swarm-hub.js';
