///<reference types="cypress" />
import faker from 'faker-br'

const user_data = require('../fixtures/user_login.json')
describe('LOGIN', () => {

    it('Login com senha errada', () => {
        cy.visit('/')
            .get('.flex .h-full')
        
        cy.get('.text-caption-lg')
            .contains('DEMO')    

        //MENU 
        cy.get('.ph-list-light')
            .click()

        cy.contains('Entrar')
            .click()

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
    
    it.only('Login com cpf errado', () => {
        cy.visit('/')
            .get('.flex .h-full')

        cy.get('.text-caption-lg')
            .contains('DEMO')

        //MENU 
        cy.get('.ph-list-light')
            .click()

        cy.contains('Entrar')
            .click()

        //FORMULARIO DE LOGIN
        cy.get('input[name="cpf"]')
            .click()
            .type(faker.br.cpf()) 

        cy.get('.v-messages__message')
            .should('be.visible')
            .should('have.text','CPF Inválido!')

        cy.get('input[name="senha"]')
            .click()
            .type(user_data.user_senha)

        cy.get('.v-btn__content')
            .contains('Entrar')
            .click()
    });

    it('Login com sucesso', () => {
        cy.visit('/')
            .get('.flex .h-full')
        
        //MENU
        cy.get('.text-caption-lg')
            .contains('DEMO')    

        cy.get('.ph-list-light')
            .click()

        cy.contains('Entrar')
            .click()

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
        cy.visit('/')
            .get('.flex .h-full')

        cy.get('.text-caption-lg')
            .contains('DEMO')

        //MENU
        cy.get('.ph-list-light')
            .click()

        cy.contains('Entrar')
            .click()

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