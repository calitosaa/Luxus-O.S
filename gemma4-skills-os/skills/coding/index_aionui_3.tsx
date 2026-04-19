---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/pages/settings/AgentSettings/index.tsx
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import AgentModalContent from '@/renderer/components/settings/SettingsModal/contents/AgentModalContent';
import SettingsPageWrapper from '../components/SettingsPageWrapper';

const AgentSettings: React.FC = () => {
  return (
    <SettingsPageWrapper>
      <AgentModalContent />
    </SettingsPageWrapper>
  );
};

export default AgentSettings;
