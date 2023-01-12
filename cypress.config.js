const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    baseUrl: 'http://www.webdriveruniversity.com',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    env: {
      first_name: 'Joe',
      webdriveruni_home: 'http://www.webdriveruniversity.com',
      automation_teststore: 'https://automationteststore.com',
    },
  },
});
