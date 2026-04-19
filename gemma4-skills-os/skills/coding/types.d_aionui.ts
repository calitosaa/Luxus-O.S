---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/types.d.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

declare module '@xterm/headless/lib-headless/xterm-headless.js';
declare module 'diff';

declare module 'cookie' {
  export type CookieParseOptions = {
    decode?: (value: string) => string;
  };

  export function parse(cookieHeader: string, options?: CookieParseOptions): Record<string, string>;
}
