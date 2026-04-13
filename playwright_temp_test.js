const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  const filePath = 'c:\\Users\\admin1\\Music\\موفع خبراء\\--main\\index.html';
  const fileUrl = 'file:///' + filePath.replace(/\\/g, '/');
  console.log('Navigating to:', fileUrl);
  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'c:\\Users\\admin1\\Music\\موفع خبراء\\--main\\screenshot.png', fullPage: true });
  console.log('Screenshot saved to: c:\\Users\\admin1\\Music\\موفع خبراء\\--main\\screenshot.png');
  await browser.close();
})();