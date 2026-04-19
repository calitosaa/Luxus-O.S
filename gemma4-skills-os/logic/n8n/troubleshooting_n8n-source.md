---
source_repo: https://github.com/n8n-io/n8n
source_file: packages/testing/playwright/docs/TROUBLESHOOTING.md
license: Apache-2.0
category: logic/n8n
imported_at: 2026-04-19
---

# Playwright Test Troubleshooting

Known issues and solutions for common test failures.

## 1. Hover/Tooltip Test Flakiness

**Problem:** Hover and tooltip tests become unreliable when running in parallel

**Root Cause:** When multiple tests run in parallel, the browser becomes overloaded and begins coalescing or delaying mouse events to maintain performance. Unlike page loads (which the browser commits to completing), hover interactions trigger chains of small, low-priority events that can be delayed or combined when the system is stressed.

**What happens under load:**
- Multiple mousemove/pointermove events get merged into single events
- The rendering pipeline (event → framework update → style → paint) gets backed up
- Tooltip appearances become unpredictable as the browser skips frames to catch up

**Solution:** Run these tests serially to prevent browser event loop overload
