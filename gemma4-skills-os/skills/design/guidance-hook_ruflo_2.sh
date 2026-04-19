---
source_repo: https://github.com/ruvnet/ruflo
source_file: .claude/helpers/guidance-hook.sh
license: MIT
category: skills/design
imported_at: 2026-04-19
---

#!/bin/bash
# Capture hook guidance for Claude visibility
GUIDANCE_FILE=".claude-flow/last-guidance.txt"
mkdir -p .claude-flow

case "$1" in
  "route")
    npx agentic-flow@alpha hooks route "$2" 2>&1 | tee "$GUIDANCE_FILE"
    ;;
  "pre-edit")
    npx agentic-flow@alpha hooks pre-edit "$2" 2>&1 | tee "$GUIDANCE_FILE"
    ;;
esac
