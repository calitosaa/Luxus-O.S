---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: scripts/lib/install-targets/codex-home.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

const { createInstallTargetAdapter } = require('./helpers');

module.exports = createInstallTargetAdapter({
  id: 'codex-home',
  target: 'codex',
  kind: 'home',
  rootSegments: ['.codex'],
  installStatePathSegments: ['ecc-install-state.json'],
  nativeRootRelativePath: '.codex',
});
