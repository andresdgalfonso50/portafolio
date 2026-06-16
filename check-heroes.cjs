const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const cases = [
    { name: 'xentral', url: '/#/app-web', file: 'hero-xentral.png' },
    { name: 'app', url: '/#/app', file: 'hero-app.png' },
    { name: 'ecommerce', url: '/#/ecommerce', file: 'hero-ecom.png' }
  ];

  for (const c of cases) {
    const failed = [];
    page.on('response', r => { if (r.status() >= 400 && (r.url().includes('hero') || r.url().includes('card'))) failed.push(r.status() + ' ' + r.url()); });
    await page.goto('http://127.0.0.1:5173' + c.url);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // Check all hero images
    const heroImgs = await page.evaluate(() => {
      return Array.from(document.images).filter(i =>
        i.src.includes('hero-') || i.src.includes('home-celulares')
      ).map(i => ({
        s: i.src.split('/').pop(),
        nw: i.naturalWidth,
        nh: i.naturalHeight,
        cw: i.clientWidth,
        ch: i.clientHeight,
        complete: i.complete,
        loading: i.loading,
        alt: i.alt
      }));
    });
    console.log('=== ' + c.name.toUpperCase() + ' ===');
    console.log('Failed requests:', failed);
    heroImgs.forEach(i => console.log(' ', JSON.stringify(i)));
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'C:/Users/yalfonso/AppData/Local/Temp/opencode/' + c.file });
  }

  await browser.close();
})();
