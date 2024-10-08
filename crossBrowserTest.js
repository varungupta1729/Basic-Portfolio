const { chromium, firefox, webkit } = require('playwright');

(async () => {

  const url = 'http://localhost:3000'; 

  
  const screenWidth = 1440; 
  const screenHeight = 750;

  
  const browserChromium = await chromium.launch({ headless: false });
  const pageChromium = await browserChromium.newPage();
  await pageChromium.setViewportSize({ width: screenWidth, height: screenHeight });
  await pageChromium.goto(url);
  console.log('Opened in Chromium');

  
  const browserFirefox = await firefox.launch({ headless: false });
  const pageFirefox = await browserFirefox.newPage();
  await pageFirefox.setViewportSize({ width: screenWidth, height: screenHeight });
  await pageFirefox.goto(url);
  console.log('Opened in Firefox');

 
  const browserWebkit = await webkit.launch({ headless: false });
  const pageWebkit = await browserWebkit.newPage();
  await pageWebkit.setViewportSize({ width: screenWidth, height: screenHeight });
  await pageWebkit.goto(url);
  console.log('Opened in WebKit (Safari)');

  
  await new Promise(resolve => {
    console.log('Press any key to exit...');
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('data', () => {
      process.stdin.setRawMode(false);
      process.stdin.pause();
      resolve();
    });
  });
})();
