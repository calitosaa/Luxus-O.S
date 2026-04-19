---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: scripts/lib/install-targets/opencode-home.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

const { createInstallTargetAdapter } = require('./helpers');

module.exports = createInstallTargetAdapter({
  id: 'opencode-home',
  target: 'opencode',
  kind: 'home',
  rootSegments: ['.opencode'],
  installStatePathSegments: ['ecc-install-state.json'],
  nativeRootRelativePath: '.opencode',
});
