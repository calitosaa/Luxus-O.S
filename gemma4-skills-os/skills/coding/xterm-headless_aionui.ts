---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/common/utils/shims/xterm-headless.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

// Use a path that won't be caught by the @xterm/headless alias
// eslint-disable-next-line @typescript-eslint/no-var-requires
const xtermHeadless = require('@xterm/headless/lib-headless/xterm-headless.js');
const Terminal = xtermHeadless.Terminal;

export { Terminal };
export default { Terminal };
