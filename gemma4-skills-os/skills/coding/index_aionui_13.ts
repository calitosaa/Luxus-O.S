---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/team/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

// src/process/team/index.ts
export type {
  TTeam,
  TeamAgent,
  TeammateRole,
  TeammateStatus,
  WorkspaceMode,
  MailboxMessage,
  TeamTask,
  ITeamAgentStatusEvent,
} from './types';
export { TeamSession } from './TeamSession';
export { TeamSessionService } from './TeamSessionService';
export { SqliteTeamRepository } from './repository/SqliteTeamRepository';
