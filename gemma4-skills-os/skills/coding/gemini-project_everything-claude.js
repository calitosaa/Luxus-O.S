---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: scripts/lib/install-targets/gemini-project.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

const { createInstallTargetAdapter } = require('./helpers');

module.exports = createInstallTargetAdapter({
  id: 'gemini-project',
  target: 'gemini',
  kind: 'project',
  rootSegments: ['.gemini'],
  installStatePathSegments: ['ecc-install-state.json'],
  nativeRootRelativePath: '.gemini',
});
