
Cypress.Commands.add('acessarPaginaLogin', () => { 
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
})