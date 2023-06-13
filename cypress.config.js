const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '18wc2c',
  e2e: {
    baseUrl:'https://hom-prod-20.playservicos.com.br/',
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config){
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    "reporterOptions":{
        "charts": true, 
        "reportTitle": 'Projeto para entender melhor',
        "reportDir": "cypress/reports/mochawesome-report", //futuramente posso retirar
        "overwrite": true,
        "html": true,
        "json": false,
        "timestamp": "YYYYMMDD_HHmmss"
    },
  },
})
  

