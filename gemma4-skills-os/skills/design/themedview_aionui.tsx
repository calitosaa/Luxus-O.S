---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: mobile/src/components/ui/ThemedView.tsx
license: MIT
category: skills/design
imported_at: 2026-04-19
---

import { View, type ViewProps } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...rest }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  return <View style={[{ backgroundColor }, style]} {...rest} />;
}
