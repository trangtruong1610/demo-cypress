const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "oqymk6",
  e2e: {
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "reporter": "junit",
  "reporterOptions": {
    "mochaFile": "results/my-test-output.xml",
    "toConsole": true
  },
  "video": false,
  "chromeWebSecurity": false
},


);

