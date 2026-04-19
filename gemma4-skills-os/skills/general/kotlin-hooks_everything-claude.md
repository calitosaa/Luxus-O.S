---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: .cursor/rules/kotlin-hooks.md
license: MIT
category: skills/general
imported_at: 2026-04-19
---

---
description: "Kotlin hooks extending common rules"
globs: ["**/*.kt", "**/*.kts", "**/build.gradle.kts"]
alwaysApply: false
---
# Kotlin Hooks

> This file extends the common hooks rule with Kotlin-specific content.

## PostToolUse Hooks

Configure in `~/.claude/settings.json`:

- **ktfmt/ktlint**: Auto-format `.kt` and `.kts` files after edit
- **detekt**: Run static analysis after editing Kotlin files
- **./gradlew build**: Verify compilation after changes
