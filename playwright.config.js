const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    headless: false, // Браузер теперь будет открываться
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ]
});
