import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';
import fs from 'fs';

export let browser: Browser;
export let context: BrowserContext;
export let page: Page;

setDefaultTimeout(60000);

Before(async function () {

  type Resolution = 'desktop' | 'tablet' | 'mobile';

  const resolutions: Record<Resolution, { width: number; height: number }> = {
    desktop: { width: 1920, height: 1080 },
    tablet: { width: 834, height: 1112 },
    mobile: { width: 390, height: 844 },
  };

  function getResolution(): Resolution {
    const res = process.env.RESOLUTION;
    if (res === 'desktop' || res === 'tablet' || res === 'mobile') return res;
    return 'desktop';
  }

  const viewport = resolutions[getResolution()];

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
