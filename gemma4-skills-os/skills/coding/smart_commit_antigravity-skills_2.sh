---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills/skills/git-pushing/scripts/smart_commit.sh
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

#!/bin/bash
set -e

# Default commit message if none provided
MESSAGE="${1:-chore: update code}"

# Add all changes
git add .

# Commit with the provided message
git commit -m "$MESSAGE"

# Get current branch name
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Push to remote, setting upstream if needed
git push -u origin "$BRANCH"

echo "✅ Successfully pushed to $BRANCH"
