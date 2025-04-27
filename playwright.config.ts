import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  timeout: 15000,
  projects: [
    {
      name: 'Desktop 1920x1080',
      use: { viewport: { width: 1920, height: 1080 } },
    },
    {
      name: 'Tablet 768x1024',
      use: { viewport: { width: 768, height: 1024 } },
    },
    {
      name: 'Mobile 375x667',
      use: { viewport: { width: 375, height: 667 } },
    },
  ],
});
