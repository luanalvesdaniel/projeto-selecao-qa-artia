// support/hooks.ts
import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';
import fs from 'fs';

export let browser: Browser;
export let context: BrowserContext;
export let page: Page;

setDefaultTimeout(60 * 1000); // aumenta timeout para garantir tempo de gravação

Before(async function (scenario) {
  browser = await chromium.launch({ headless: false });

  context = await browser.newContext({
    recordVideo: {
      dir: 'videos/', // pasta onde os vídeos serão salvos
      size: { width: 1280, height: 720 } // opcional
    }
  });

  page = await context.newPage();
});

After(async function (scenario) {
  const video = await page.video();

  await browser?.close();

  // Salvar vídeo com nome do cenário, se falhar
  if (scenario.result?.status === 'FAILED' && video) {
    const videoPath = await video.path();
    const targetPath = `videos/${scenario.pickle.name.replace(/\s+/g, '_')}.webm`;
    fs.renameSync(videoPath, targetPath);
    console.log(`🎥 Vídeo salvo em: ${targetPath}`);
  }
});
