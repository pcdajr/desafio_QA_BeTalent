const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "822322",
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://www.saucedemo.com/', // adicionando aqui para não repetir em todos os scripts dos casos testes.
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
      video: true,
      reporter: 'mochawesome',
      reporterOptions: {
      reportDir: 'cypress/results',      
      overwrite: false,
      html: true,
      json: true,
      timestamp: "mmddyyyy_HHMMss" }
      
  },

});
