//3 PASSO - criar as ações da page
<reference type="cypress"/>

export default {
    accessLogin(){
        cy.visit('/')
            .get('.flex .h-full')

        cy.get('.text-caption-lg')
            .contains('DEMO')

        cy.get('.ph-list-light')
            .click()

        cy.contains('Entrar')
            .click()
    }
}