///<reference types="cypress" />
Cypress.Commands.add('fazerLogin', () => { 
    cy.get('.v-btn__content')
        .contains('Entrar')
        .click()
});

Cypress.Commands.add('preencherCPF', (cpf) => {
    cy.get('input[name="cpf"]')
        .click()
        .type(cpf)
});

Cypress.Commands.add('preencherSenha', (senha) => {
    cy.get('input[name="senha"]')
        .click()
        .type(senha)
});

Cypress.Commands.add('modalMensagemErro', (mensagem) => { 
    cy.get('#swal2-content')
        .should('be.visible')
        .should('have.text',mensagem)
});

Cypress.Commands.add('okModalMensagemErro', () => { 
    cy.get('.swal2-confirm')
        .contains('OK')
        .click()
});
