---
source_repo: https://github.com/ruvnet/ruflo
source_file: .agents/skills/swarm-orchestration/scripts/swarm-start.sh
license: MIT
category: skills/general
imported_at: 2026-04-19
---

#!/bin/bash
# Swarm Orchestration - Start Script
# Initialize swarm with default anti-drift settings

set -e

echo "Initializing hierarchical swarm..."
npx @claude-flow/cli swarm init \
  --topology hierarchical \
  --max-agents 8 \
  --strategy specialized

echo "Swarm initialized successfully"
npx @claude-flow/cli swarm status
