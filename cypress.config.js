const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://lares-frontend-qa.apps.bcstechnology.com.au/',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});


