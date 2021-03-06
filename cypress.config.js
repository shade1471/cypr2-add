const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ej6mg1",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    specPattern: "cypress/e2e/movie/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    viewportWidth: 1680,
    viewportHeight: 1050,
  },
});
