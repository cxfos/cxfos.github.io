import { test, expect } from '@playwright/test';

test.describe('Portfolio Verification', () => {
  test.setTimeout(120000);

  test('take screenshots of all sections in light and dark mode', async ({ page }) => {
    await page.goto('http://localhost:8080');

    // Select English language
    await page.click('button:has-text("English")');
    await page.waitForSelector('#home');

    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

    // --- Light Mode ---
    await page.evaluate(() => document.documentElement.classList.remove('dark'));
    await page.waitForTimeout(500);

    for (const section of sections) {
      const locator = page.locator(`#${section}`);
      await locator.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await page.screenshot({ path: `screenshot-${section}-light.png`, fullPage: true });
    }

    // --- Dark Mode ---
    await page.evaluate(() => document.documentElement.classList.add('dark'));
    await page.waitForTimeout(500);

    for (const section of sections) {
      const locator = page.locator(`#${section}`);
      await locator.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await page.screenshot({ path: `screenshot-${section}-dark.png`, fullPage: true });
    }
  });
});
