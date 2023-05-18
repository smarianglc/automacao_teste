const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6dk6i6',
  e2e: {
    baseUrl:'https://hom-prod-20.playservicos.com.br/',
    "reporter": "mochawesome",
    "reporterOptions":{
        "reportDir": "cypress/reports/mochawesome-report",
        "overwrite": true,
        "html": true,
        "json": false,
        "timestamp": "YYYYMMDD_HHmmss"
    },
  },
})
  

