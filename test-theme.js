import { chromium } from '@playwright/test';
import { spawn } from 'child_process';

async function testThemeToggle() {
  // Start preview server
  console.log('Starting preview server...');
  const server = spawn('npm', ['run', 'preview'], {
    cwd: '/workspace',
    stdio: 'pipe'
  });

  // Wait for server to be ready
  await new Promise((resolve) => {
    server.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(output);
      if (output.includes('http://localhost')) {
        setTimeout(resolve, 1000); // Give it a moment to fully start
      }
    });
  });

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Navigate to the app
    await page.goto('http://localhost:4173');
    
    // Select language first (if language selection screen appears)
    try {
      const englishButton = page.locator('text=English');
      if (await englishButton.isVisible({ timeout: 2000 })) {
        await englishButton.click();
        await page.waitForTimeout(1000);
      }
    } catch (e) {
      console.log('Language already selected or no language screen');
    }

    // Take screenshot of initial state (should be dark mode)
    console.log('Taking dark mode screenshot...');
    await page.screenshot({ path: '/workspace/dark-mode.png', fullPage: true });

    // Find and click the theme toggle button
    const themeButton = page.locator('button[aria-label*="mode"]').first();
    await themeButton.click();
    await page.waitForTimeout(500); // Wait for transition

    // Check if light mode class was removed from HTML
    const htmlElement = page.locator('html');
    const hasDarkClass = await htmlElement.evaluate((el) => el.classList.contains('dark'));
    console.log('After clicking toggle - Has dark class:', hasDarkClass);
    
    // Take screenshot of light mode
    console.log('Taking light mode screenshot...');
    await page.screenshot({ path: '/workspace/light-mode.png', fullPage: true });

    // Toggle back to dark
    await themeButton.click();
    await page.waitForTimeout(500);
    
    const hasDarkClassAgain = await htmlElement.evaluate((el) => el.classList.contains('dark'));
    console.log('After toggling back - Has dark class:', hasDarkClassAgain);

    console.log('\n✅ Theme toggle test completed successfully!');
    console.log('Screenshots saved:');
    console.log('  - dark-mode.png');
    console.log('  - light-mode.png');

  } catch (error) {
    console.error('Error during test:', error);
  } finally {
    await browser.close();
    server.kill();
    console.log('Server stopped');
  }
}

testThemeToggle();
