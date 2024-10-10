import { test, expect } from '@playwright/test';

test('Verify title page', async ({ page }) => {
  await page.goto('https://api.octoperf.com/ui/access/login');

  // Expect a title of the page
  await expect(page).toHaveTitle(/Login - OctoPerf/);
});