/// <reference types="cypress" />
describe('LOGIN', () => {

    it.only('Verificar elemento visivel', () => {
        cy.visit('/')
            .get('.flex .h-full')
        
        //MENU
        cy.get('.text-caption-lg')
            .contains('DEMO')    

        cy.get('.ph-list-light')
            .click()

        cy.contains('Entrar')
            .click()

        //PÁGINA LOGIN
        cy.get('.texto-descricao')
            .should('be.visible')
        
        cy.get('.texto-descricao')
            .should('be.visible')
            .should('include.text',' Entre ou cadastre-se para participar!')
    });


});