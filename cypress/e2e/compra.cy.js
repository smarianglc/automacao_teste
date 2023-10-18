const usuario_dado = require('../fixtures/user_login.json')
//import login_page from '../support/pages/login_page'
describe("TELA DE COMPRAS", () => {
    beforeEach("Realizar login", () => {
        cy.visit('/entrar')
        cy.realizarLogin(usuario_dado.user_cpf, usuario_dado.user_senha)
        //login_page.realizarLogin()
            // cy.visit('/entrar')
            // cy.preencherCampoCPF(usuario_dado.user_cpf)
            // cy.preencherCampoSenha(usuario_dado.user_senha)
            // cy.fazerLogin()
            // cy.url().should('include', '/comprar')
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