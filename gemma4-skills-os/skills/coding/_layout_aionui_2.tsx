---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: mobile/app/(tabs)/settings/_layout.tsx
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function SettingsLayout() {
  const { t } = useTranslation();
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: t('settings.title') }} />
    </Stack>
  );
}
