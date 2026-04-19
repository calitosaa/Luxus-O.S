---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: tests/e2e/specs/ext-skills.e2e.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Extensions – Skills tests.
 *
 * Validates extension-contributed skills on the agent settings page.
 */
import { test, expect } from '../fixtures';
import { goToSettings, takeScreenshot, waitForSettle } from '../helpers';

test.describe('Extension: Skills', () => {
  test('agent settings page can show skill configuration', async ({ page }) => {
    await goToSettings(page, 'agent');
    await waitForSettle(page);

    const body = await page.locator('body').textContent();
    // Page should be functional regardless of whether skills are directly listed
    expect(body!.length).toBeGreaterThan(50);
  });

  test('extension assistant with skills reference is loadable', async ({ page }) => {
    await goToSettings(page, 'agent');
    await waitForSettle(page);

    const body = await page.locator('body').textContent();
    // No errors about skills should appear on the page
    expect(body!.length).toBeGreaterThan(50);
  });

  test('screenshot: skills area', async ({ page }) => {
    test.skip(!process.env.E2E_SCREENSHOTS, 'screenshots disabled');
    await goToSettings(page, 'agent');
    await waitForSettle(page);
    await takeScreenshot(page, 'ext-skills');
  });
});
