---
source_repo: https://github.com/beercss/beercss
source_file: src/shared/interfaces.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

export interface ITheme {
  dark: string,
  light: string,
  selected: string,
}

export interface ILayout {
  theme: ITheme,
  isDark: boolean,
  showCssVariables: boolean,
  isLoaded: boolean,
}

export interface IInstallEvent extends Event {
  prompt: () => Promise<void>,
}
