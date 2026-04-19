---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/types.d.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*?raw' {
  const content: string;
  export default content;
}

declare module 'unocss';
