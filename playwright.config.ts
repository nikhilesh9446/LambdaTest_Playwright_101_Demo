import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'https://www.testmu.ai/selenium-playground/',
    headless: true,
    screenshot: 'on',
    video: 'on',
    trace: 'on',
  },
});