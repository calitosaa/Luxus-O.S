---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: tools/scripts/release_cycle.sh
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

#!/bin/bash

set -e

echo "release_cycle.sh is now a thin wrapper around the scripted release workflow."
echo "Use \`npm run release:preflight\` directly for the supported entrypoint."

node tools/scripts/release_workflow.js preflight
