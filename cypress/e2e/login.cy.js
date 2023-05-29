///<reference types="cypress" />
import faker from 'faker-br'

const user_data = require('../fixtures/user_login.json')
describe('LOGIN', () => {

    beforeEach('Acessando a página de login', () => {   
        cy.acessarPaginaLogin()
    });

    it.only('Login com senha errada', () => {
        //FORMULARIO DE LOGIN
        cy.preencherCPF(user_data.user_cpf)
        cy.preencherSenha(user_data.user_senha_invalida)
        cy.fazerLogin()
        cy.modalMensagemErro('Usuário ou Senha incorretos')
        cy.okModalMensagemErro()
    });
    
    it('Login com cpf errado', () => {
        //FORMULARIO DE LOGIN
        cy.preencherCPF(user_data.user_cpf_invalido)
        cy.preencherSenha(user_data.user_senha) 

        cy.get('.v-messages__message')
            .should('be.visible')
            .should('have.text','CPF Inválido!')

        cy.fazerLogin()
    });

    it('Login com sucesso', () => {
        //FORMULARIO DE LOGIN
        cy.preencherCPF(user_data.user_cpf)
        cy.preencherSenha(user_data.user_senha)
        cy.fazerLogin()
    });

    it('Não preencher campos', () => {
        //FORMULARIO DE LOGIN
        cy.fazerLogin()

        cy.get('.v-messages__message')
            .should('be.visible')
            .should('include.text','Campo obrigatório!')

        cy.get('.v-messages__message')
            .should('be.visible')
            .should('include.text','É obrigatório informar a Senha')
    });

});