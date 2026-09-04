const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });
  
  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'load' });
  
  console.log('Waiting for 3 seconds to ensure images load...');
  await page.waitForTimeout(3000);
  
  console.log('Taking full page screenshot...');
  await page.screenshot({ path: 'local-screenshot.png', fullPage: true });
  
  await browser.close();
  console.log('Done! Screenshot saved to local-screenshot.png');
})();
