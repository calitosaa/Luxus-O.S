---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/common/types/fileSnapshot.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

export type FileChangeOperation = 'create' | 'modify' | 'delete';

/** A single file's change status */
export type FileChangeInfo = {
  filePath: string;
  relativePath: string;
  operation: FileChangeOperation;
};

/** Comparison result with staged/unstaged separation (git-repo mode) */
export type CompareResult = {
  staged: FileChangeInfo[];
  unstaged: FileChangeInfo[];
};

/** Snapshot metadata returned by init and getInfo */
export type SnapshotInfo = {
  mode: 'git-repo' | 'snapshot';
  branch: string | null;
};
