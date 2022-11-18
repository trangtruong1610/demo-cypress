const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin")

module.exports = defineConfig({
  projectId: "oqymk6",
  e2e: {
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
    },
  },
//  "reporter": "junit",
//  "reporterOptions": {
//    "mochaFile": "results/my-test-output.xml",
//    "toConsole": true
//  },
"reporter": "mochawesome",
"reporterOptions": {
    "charts": true,
    "html": true,
    "json": true,
    "reportFilename": "report",
    "overwrite": true
},

  "video": true,
  "chromeWebSecurity": false
},

);

