---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/components/settings/SettingsModal/settingsViewContext.tsx
license: MIT
category: skills/memory
imported_at: 2026-04-19
---

import React from 'react';

export type SettingsViewMode = 'modal' | 'page';

const SettingsViewModeContext = React.createContext<SettingsViewMode>('modal');

export const SettingsViewModeProvider = SettingsViewModeContext.Provider;

export const useSettingsViewMode = (): SettingsViewMode => {
  return React.useContext(SettingsViewModeContext);
};
