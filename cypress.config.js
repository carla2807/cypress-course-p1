const { defineConfig } = require('cypress');
const fs = require('fs-extra');
const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default;

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log('No custom config file found.');
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      // implement node event listeners here
      const file = config.env.configFile || '';

      return getConfigurationByFile(file);
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
