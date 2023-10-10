const usuario_dado = require('../fixtures/usuario_entrar.json')
describe("TELA DE COMPRAS", () => {

    beforeEach("Realizar login", () => {
        cy.visit('/entrar')
        cy.preencherCampoCPF(usuario_dado.user_cpf)
        cy.preencherCampoSenha(usuario_dado.user_senha)
        cy.fazerLogin()
        cy.url()
    })

    it("Realizar compra com saldo", () => {
        //cy.ComprarSupresinha()
        //cy.url().should('include', '/comprar?escolha=surpresinha')
        cy.OpcaoSaldo()
        cy.url().should('include', '/comprar/sucesso')
    })

    it("Realizar compra com cartão de credito", () => {
        
    })
})