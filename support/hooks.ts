import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';

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
    viewport,
    recordVideo: {
      dir: 'videos/',
      size: { width: viewport.width, height: viewport.height }
    }
  });
  
  page = await context.newPage();
});

const fs = require('fs');
const path = require('path');

After(async function (scenario) {
  const video = await page.video();
  const videoPath = video ? await video.path() : null;

  await browser?.close();

  if (scenario.result?.status === 'FAILED' && video) {
    const targetPath = path.join('videos', `${scenario.pickle.name.replace(/\s+/g, '_')}.webm`);
    await video.saveAs(targetPath);
    console.log(`Vídeo salvo em: ${targetPath}`);
  } else if (videoPath && fs.existsSync(videoPath)) {
    setTimeout(() => {
      try {
        fs.unlinkSync(videoPath);
      } catch (err) {
        console.error('Erro ao deletar vídeo:', err);
      }
    }, 1000);
  }
});
