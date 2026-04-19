---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/swarm/src/application/index.ts
license: MIT
category: agents/orchestrator
imported_at: 2026-04-19
---

/**
 * Swarm Application Layer - Public Exports
 *
 * @module v3/swarm/application
 */

// Commands
export {
  SpawnAgentCommandHandler,
  TerminateAgentCommandHandler,
  type SpawnAgentInput,
  type SpawnAgentResult,
  type TerminateAgentInput,
  type TerminateAgentResult,
} from './commands/spawn-agent.command.js';

export {
  CreateTaskCommandHandler,
  CancelTaskCommandHandler,
  type CreateTaskInput,
  type CreateTaskResult,
  type CancelTaskInput,
  type CancelTaskResult,
} from './commands/create-task.command.js';

// Application Service
export {
  SwarmApplicationService,
  type SwarmConfig,
} from './services/swarm-application-service.js';
