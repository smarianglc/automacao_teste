const { defineConfig } = require("cypress");
//const {GoogleSocialLogin} = require('cypress-social-logins').plugins

module.exports = defineConfig({
  projectId: '18wc2c',
  e2e: {
    baseUrl:'https://hom-loja20.playdepremios.com.br',
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config){
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
       // GoogleSocialLogin: GoogleSocialLogin,
      })
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
  

