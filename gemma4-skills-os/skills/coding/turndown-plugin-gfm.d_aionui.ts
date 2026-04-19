---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/common/types/turndown-plugin-gfm.d.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

declare module 'turndown-plugin-gfm' {
  import type TurndownService from 'turndown';

  export function gfm(service: TurndownService): void;
  export function strikethrough(service: TurndownService): void;
  export function tables(service: TurndownService): void;
  export function taskListItems(service: TurndownService): void;
}
