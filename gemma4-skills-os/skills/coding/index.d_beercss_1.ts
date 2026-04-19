---
source_repo: https://github.com/beercss/beercss
source_file: scoped/index.d.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

declare global {
  interface IBeerCssTheme {
    dark: string,
    light: string,
  }
  
  function ui(selector?: string | Element, options?: string | number | IBeerCssTheme): string | undefined | Promise<IBeerCssTheme>;
}

declare module "ui";

export interface IBeerCssTheme {
  dark: string,
  light: string,
}

export function ui(selector?: string | Element, options?: string | number | IBeerCssTheme): string | undefined | Promise<IBeerCssTheme>;

export default ui;