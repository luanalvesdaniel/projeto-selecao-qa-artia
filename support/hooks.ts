import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';
import fs from 'fs';
import path from 'path';

export let browser: Browser;
export let context: BrowserContext;
export let page: Page;

setDefaultTimeout(60 * 1000);

Before(async function () {
  const isHeadless = process.env.HEADLESS !== 'false';

  browser = await chromium.launch({ headless: isHeadless });

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
  const videoPath = video ? await video.path() : null;

  await browser?.close();

  if (scenario.result?.status === 'FAILED' && videoPath) {
    const targetPath = `videos/${scenario.pickle.name.replace(/\s+/g, '_')}.webm`;
    fs.renameSync(videoPath, targetPath);
    console.log(`Vídeo salvo em: ${targetPath}`);
  } else if (videoPath && fs.existsSync(videoPath)) {
    fs.unlinkSync(videoPath);
  }
});
