---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/shared/src/hooks/safety/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * V3 Safety Hooks - Index
 *
 * TypeScript conversions of V2 shell hooks for:
 * - Bash command safety
 * - File organization enforcement
 * - Git commit formatting
 *
 * @module v3/shared/hooks/safety
 */

// Bash safety hook
export {
  BashSafetyHook,
  createBashSafetyHook,
} from './bash-safety.js';

export type {
  BashSafetyResult,
  CommandRisk,
} from './bash-safety.js';

// File organization hook
export {
  FileOrganizationHook,
  createFileOrganizationHook,
} from './file-organization.js';

export type {
  FileOrganizationResult,
  FormatterRecommendation,
  LinterRecommendation,
  OrganizationIssue,
} from './file-organization.js';

// Git commit hook
export {
  GitCommitHook,
  createGitCommitHook,
} from './git-commit.js';

export type {
  GitCommitResult,
  CommitType,
  CommitValidationIssue,
} from './git-commit.js';
