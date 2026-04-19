---
source_repo: https://github.com/ruvnet/ruflo
source_file: .agents/skills/swarm-orchestration/scripts/swarm-monitor.sh
license: MIT
category: skills/general
imported_at: 2026-04-19
---

#!/bin/bash
# Swarm Orchestration - Monitor Script
# Real-time swarm monitoring

set -e

echo "Starting swarm monitor..."
npx @claude-flow/cli swarm status --watch --interval 5
