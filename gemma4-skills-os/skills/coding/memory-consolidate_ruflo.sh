---
source_repo: https://github.com/ruvnet/ruflo
source_file: .agents/skills/memory-management/scripts/memory-consolidate.sh
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

#!/bin/bash
# Memory Management - Consolidate Script
# Optimize and consolidate memory

set -e

echo "Running memory consolidation..."
npx @claude-flow/cli hooks worker dispatch --trigger consolidate

echo "Memory consolidation complete"
npx @claude-flow/cli memory stats
