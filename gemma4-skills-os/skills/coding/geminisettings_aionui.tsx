---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/pages/settings/GeminiSettings.tsx
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
import GeminiModalContent from '@/renderer/components/settings/SettingsModal/contents/GeminiModalContent';
import SettingsPageWrapper from './components/SettingsPageWrapper';

const GeminiSettings: React.FC = () => {
  return (
    <SettingsPageWrapper>
      <GeminiModalContent />
    </SettingsPageWrapper>
  );
};

export default GeminiSettings;
