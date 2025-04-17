// support/hooks.ts
import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';
import fs from 'fs';

export let browser: Browser;
export let context: BrowserContext;
export let page: Page;

setDefaultTimeout(60 * 1000); 

Before(async function (scenario) {
  browser = await chromium.launch({ headless: true });

  context = await browser.newContext({
    recordVideo: {
      dir: 'videos/', 
      size: { width: 800, height: 600 } 
    }
  });

  page = await context.newPage();
});

After(async function (scenario) {
  const video = await page.video();

  await browser?.close();
  
  if (scenario.result?.status === 'FAILED' && video) {
    const videoPath = await video.path();
    const targetPath = `videos/${scenario.pickle.name.replace(/\s+/g, '_')}.webm`;
    fs.renameSync(videoPath, targetPath);
    console.log(`🎥 Vídeo salvo em: ${targetPath}`);
  }
});
