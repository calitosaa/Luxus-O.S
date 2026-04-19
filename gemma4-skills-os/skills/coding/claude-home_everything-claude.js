---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: scripts/lib/install-targets/claude-home.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

const { createInstallTargetAdapter } = require('./helpers');

module.exports = createInstallTargetAdapter({
  id: 'claude-home',
  target: 'claude',
  kind: 'home',
  rootSegments: ['.claude'],
  installStatePathSegments: ['ecc', 'install-state.json'],
  nativeRootRelativePath: '.claude-plugin',
});
