///<reference types="cypress" />
import faker from 'faker-br'

const user_data = require('../fixtures/user_login.json')
describe('LOGIN', () => {

    beforeEach('Acessando a página de login', () => {   
        //ACESSANDO A PÁGINA
        cy.visit('/')
            .get('.flex .h-full')
        
        cy.get('.text-caption-lg')
            .contains('DEMO')    

        //MENU 
        cy.get('.ph-list-light')
            .click()

        //PÁGINA DE LOGIN
        cy.contains('Entrar')
            .click()
    });

    it('Login com senha errada', () => {
        //FORMULARIO DE LOGIN
        cy.get('input[name="cpf"]')
            .click()
            .type(user_data.user_cpf) 
        
        cy.get('input[name="senha"]')
            .click()
            .type(user_data.user_senha_invalida)

        cy.get('.v-btn__content')
            .contains('Entrar')
            .click()

        //MENSAGEM DE ERRO
        cy.get('#swal2-content')
            .should('be.visible')
            .should('have.text','Usuário ou Senha incorretos')
        
        cy.get('.swal2-confirm')
            .contains('OK')
            .click()

    });
    
    it('Login com cpf errado', () => {
        //FORMULARIO DE LOGIN
        cy.get('input[name="cpf"]')
            .click()
            .type(user_data.user_cpf_invalido) 

        cy.get('input[name="senha"]')
            .click()
            .type(user_data.user_senha)

        cy.get('.v-messages__message')
            .should('be.visible')
            .should('have.text','CPF Inválido!')

        cy.get('.v-btn__content')
            .contains('Entrar')
            .click()
    });

    it('Login com sucesso', () => {
        //FORMULARIO DE LOGIN
        cy.get('input[name="cpf"]')
            .click()
            .type(user_data.user_cpf)
        
        cy.get('input[name="senha"]')
            .click()
            .type(user_data.user_senha)

        cy.get('.v-btn__content')
            .contains('Entrar')
            .click()
    });

    it('Não preencher campos', () => {
        //FORMULARIO DE LOGIN
        cy.get('.v-btn__content')
            .contains('Entrar')
            .click()

        cy.get('.v-messages__message')
            .should('be.visible')
            .should('include.text','Campo obrigatório!')

        cy.get('.v-messages__message')
            .should('be.visible')
            .should('include.text','É obrigatório informar a Senha')
    });

});