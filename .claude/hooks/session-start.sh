#!/bin/bash
set -euo pipefail

# Only run in remote (web) sessions
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Set up PYTHONPATH for logic/ Python modules
echo 'export PYTHONPATH="${CLAUDE_PROJECT_DIR}/gemma4-skills-os/logic:${PYTHONPATH:-}"' >> "$CLAUDE_ENV_FILE"

# Set skill and agent root paths for convenience
echo 'export SKILLS_ROOT="${CLAUDE_PROJECT_DIR}/gemma4-skills-os/skills"' >> "$CLAUDE_ENV_FILE"
echo 'export AGENTS_ROOT="${CLAUDE_PROJECT_DIR}/gemma4-skills-os/agents"' >> "$CLAUDE_ENV_FILE"
echo 'export WORKFLOWS_ROOT="${CLAUDE_PROJECT_DIR}/gemma4-skills-os/workflows"' >> "$CLAUDE_ENV_FILE"

echo "Session environment ready. Repo: ${CLAUDE_PROJECT_DIR}"
