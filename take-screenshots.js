import { chromium } from 'playwright';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function takeScreenshots() {
  // Start a simple HTTP server
  const server = spawn('npx', ['http-server', 'dist', '-p', '8080', '-c-1'], {
    cwd: __dirname,
    stdio: 'pipe'
  });

  // Wait for server to start
  await new Promise(resolve => setTimeout(resolve, 3000));

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  const page = await context.newPage();
  
  try {
    // Navigate to the app
    await page.goto('http://localhost:8080', { waitUntil: 'networkidle' });
    
    // Wait for React to render
    await page.waitForTimeout(2000);
    
    // Select English
    console.log('Selecting language...');
    await page.click('button:has-text("English")');
    await page.waitForTimeout(1000);
    
    // Take light mode screenshots
    console.log('Taking light mode screenshots...');
    await page.screenshot({ path: 'screenshot-light-home.png', fullPage: false });
    
    await page.evaluate(() => window.scrollTo(0, 800));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'screenshot-light-about.png', fullPage: false });
    
    await page.evaluate(() => window.scrollTo(0, 1600));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'screenshot-light-skills.png', fullPage: false });
    
    await page.evaluate(() => window.scrollTo(0, 2800));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'screenshot-light-experience.png', fullPage: false });
    
    await page.evaluate(() => window.scrollTo(0, 4500));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'screenshot-light-projects.png', fullPage: false });
    
    await page.evaluate(() => window.scrollTo(0, 6000));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'screenshot-light-contact.png', fullPage: false });
    
    // Full page screenshot
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'screenshot-light-full.png', fullPage: true });
    
    // Switch to dark mode
    console.log('Switching to dark mode...');
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.click('button[aria-label="Toggle theme"]');
    await page.waitForTimeout(1000);
    
    // Take dark mode screenshots
    console.log('Taking dark mode screenshots...');
    await page.screenshot({ path: 'screenshot-dark-home.png', fullPage: false });
    
    await page.evaluate(() => window.scrollTo(0, 800));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'screenshot-dark-about.png', fullPage: false });
    
    await page.evaluate(() => window.scrollTo(0, 1600));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'screenshot-dark-skills.png', fullPage: false });
    
    await page.evaluate(() => window.scrollTo(0, 2800));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'screenshot-dark-experience.png', fullPage: false });
    
    await page.evaluate(() => window.scrollTo(0, 4500));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'screenshot-dark-projects.png', fullPage: false });
    
    await page.evaluate(() => window.scrollTo(0, 6000));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'screenshot-dark-contact.png', fullPage: false });
    
    // Full page screenshot
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'screenshot-dark-full.png', fullPage: true });
    
    console.log('Screenshots saved successfully!');
    
  } catch (error) {
    console.error('Error taking screenshots:', error);
  } finally {
    await browser.close();
    server.kill();
  }
}

takeScreenshots().catch(console.error);
