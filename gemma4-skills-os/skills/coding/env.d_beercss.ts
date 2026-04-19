---
source_repo: https://github.com/beercss/beercss
source_file: src/env.d.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare let page: any;
declare let hljs: any;
