---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/acp/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

// src/process/acp/index.ts

export type {
  AgentConfig,
  AuthRequiredData,
  ConfigSnapshot,
  ContextUsage,
  ModelSnapshot,
  ModeSnapshot,
  PermissionUIData,
  PromptContent,
  RuntimeOptions,
  SessionCallbacks,
  SessionSignal,
  SessionStatus,
  SignalEvent,
} from './types';

export type { AcpSessionRow, IAcpSessionRepository } from '../services/database/IAcpSessionRepository';
export { AcpError, type AcpErrorCode } from './errors/AcpError';
export { normalizeError } from './errors/errorNormalize';
export type { AcpClient, ClientFactory } from './infra/IAcpClient';
export type { ForkSessionParams } from './infra/AcpProtocol';
export { noopMetrics, type AcpMetrics } from './metrics/AcpMetrics';
export { AcpRuntime } from './runtime/AcpRuntime';
export { AcpSession, type SessionOptions } from './session/AcpSession';

// Compatibility adapter (Phase 1 migration)
export { AcpAgentV2 } from './compat';
