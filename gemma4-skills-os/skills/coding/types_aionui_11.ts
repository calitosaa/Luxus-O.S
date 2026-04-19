---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/pages/settings/AssistantSettings/types.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import type { AcpBackendConfig } from '@/common/types/acpTypes';

// Skill info type
export type SkillSource = 'builtin' | 'custom' | 'extension';

export type SkillInfo = {
  name: string;
  description: string;
  location: string;
  isCustom: boolean;
  source: SkillSource;
};

// External source type
export type ExternalSource = {
  name: string;
  path: string;
  source: string;
  skills: Array<{ name: string; description: string; path: string }>;
};

// Pending skill to import
export type PendingSkill = {
  path: string;
  name: string;
  description: string;
};

// Builtin auto-injected skill info
export type BuiltinAutoSkill = {
  name: string;
  description: string;
};

export type AssistantListItem = AcpBackendConfig & {
  _source?: string;
  _extensionName?: string;
  _kind?: string;
};
