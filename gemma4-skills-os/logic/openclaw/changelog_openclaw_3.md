---
source_repo: https://github.com/openclaw/openclaw
source_file: Swabble/CHANGELOG.md
license: Apache-2.0
category: logic/openclaw
imported_at: 2026-04-19
---

# Changelog

## 0.2.0 — 2025-12-23

### Highlights
- Added `SwabbleKit` (multi-platform wake-word gate utilities with segment-aware gap detection).
- Swabble package now supports iOS + macOS consumers; CLI remains macOS 26-only.

### Changes
- CLI wake-word matching/stripping routed through `SwabbleKit` helpers.
- Speech pipeline types now explicitly gated to macOS 26 / iOS 26 availability.
