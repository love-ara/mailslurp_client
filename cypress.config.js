module.exports = {
  e2e: {
    baseUrl: "https://prod-support.enum.africa/",
    
    watchForFileChanges: false,
    defaultCommandTimeout: 30000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    viewportHeight: 800,
    viewportWidth: 1400,
    testIsolation: false,
        setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
