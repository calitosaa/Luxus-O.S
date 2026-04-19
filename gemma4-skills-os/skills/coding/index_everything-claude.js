---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: scripts/lib/skill-evolution/index.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

'use strict';

const provenance = require('./provenance');
const versioning = require('./versioning');
const tracker = require('./tracker');
const health = require('./health');
const dashboard = require('./dashboard');

module.exports = {
  ...provenance,
  ...versioning,
  ...tracker,
  ...health,
  ...dashboard,
  provenance,
  versioning,
  tracker,
  health,
  dashboard,
};
