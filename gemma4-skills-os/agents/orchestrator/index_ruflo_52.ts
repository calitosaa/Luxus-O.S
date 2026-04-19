---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/swarm/src/domain/index.ts
license: MIT
category: agents/orchestrator
imported_at: 2026-04-19
---

/**
 * Swarm Domain Layer - Public Exports
 *
 * @module v3/swarm/domain
 */

// Entities
export {
  Agent,
  type AgentStatus,
  type AgentRole,
  type AgentProps,
} from './entities/agent.js';

export {
  Task,
  type TaskStatus,
  type TaskPriority,
  type TaskProps,
} from './entities/task.js';

// Repository Interfaces
export {
  type IAgentRepository,
  type AgentQueryOptions,
  type AgentStatistics,
} from './repositories/agent-repository.interface.js';

export {
  type ITaskRepository,
  type TaskQueryOptions,
  type TaskStatistics,
} from './repositories/task-repository.interface.js';

// Domain Services
export {
  CoordinationService,
  type LoadBalancingStrategy,
  type TaskAssignmentResult,
  type SwarmHealth,
} from './services/coordination-service.js';
