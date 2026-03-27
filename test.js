import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('pageerror', err => {
    console.log('::PAGE ERROR::', err.toString());
  });
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('::CONSOLE ERROR::', msg.text(), msg.location().url);
    }
  });

  page.on('requestfailed', request => {
    console.log('::REQUEST FAILED::', request.url(), request.failure().errorText);
  });
  
  page.on('response', response => {
    if (!response.ok()) {
      console.log('::BAD RESPONSE::', response.status(), response.url());
    }
  });

  console.log('Loading page http://localhost:3000/services/doors');
  try {
    await page.goto('http://localhost:3000/services/doors', { waitUntil: 'networkidle0' });
    const html = await page.evaluate(() => document.body.innerHTML);
    console.log('--- BODY HTML ---');
    console.log(html.substring(0, 1000));
    console.log('--- END HTML ---');
    console.log('Page loaded successfully.');
  } catch (e) {
    console.log('Nav Error:', e);
  }
  
  await browser.close();
})();
