---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/pages/conversation/utils/newConversationName.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2026 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Force new-session entry points to start from the localized default title.
 */
export function applyDefaultConversationName<T extends object>(
  conversation: T,
  defaultName: string
): Omit<T, 'name'> & { name: string } {
  return {
    ...conversation,
    name: defaultName,
  };
}
