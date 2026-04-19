---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/cli/.claude/helpers/statusline-hook.sh
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

# Claude Flow V3 Statusline Hook
# Add to your shell RC file (.bashrc, .zshrc, etc.)

# Function to get statusline
claude_flow_statusline() {
  local statusline_script="${CLAUDE_FLOW_DIR:-.claude}/helpers/statusline.cjs"
  if [ -f "$statusline_script" ]; then
    node "$statusline_script" 2>/dev/null || echo ""
  fi
}

# For bash PS1
# export PS1='$(claude_flow_statusline) \n\$ '

# For zsh RPROMPT
# export RPROMPT='$(claude_flow_statusline)'

# For starship (add to starship.toml)
# [custom.claude_flow]
# command = "node .claude/helpers/statusline.cjs 2>/dev/null"
# when = "test -f .claude/helpers/statusline.cjs"
