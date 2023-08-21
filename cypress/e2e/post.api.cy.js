const { method } = require("cypress/types/bluebird")
const { fa } = require("faker-br/lib/locales")

describe("CADASTRO DE OBJETOS", () => {
    it('Cadastro de um novo objeto', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects/',
            failOnStatusCode: false


            });
    })
})