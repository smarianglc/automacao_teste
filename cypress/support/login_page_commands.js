///<reference types="cypress" />
const elements = {
    buttons:{
        botaoEntrar: '.v-btn__content',
        botaoOkModal: '.swal2-confirm'
    },
    filds:{
        campoCPF: 'input[name="cpf"]',
        campoSenha: 'input[name="senha"]'
    },
    mensages:{
        modalMensagemErro: '#swal2-content',
        mensagemCampoObrigatorio: '.v-messages__message'
    },
}

//---------------------------------------------------------------
//ELEMENTOS CLICKS
Cypress.Commands.add('fazerLogin', () => { 
    cy.get(elements.buttons.botaoEntrar)
        .contains('Entrar')
        .click()
});

Cypress.Commands.add('okModalMensagemErro', () => { 
    cy.get(elements.buttons.botaoOkModal)
        .contains('OK')
        .click()
});

//ELEMENTOS TYPE
Cypress.Commands.add('preencherCPF', (cpf) => {
    cy.get(elements.filds.campoCPF)
        .click()
        .type(cpf)
});

Cypress.Commands.add('preencherSenha', (senha) => {
    cy.get(elements.filds.campoSenha)
        .click()
        .type(senha)
});

//ELEMNTO MODAL
Cypress.Commands.add('modalMensagemErro', (mensagem) => { 
    cy.get(elements.mensages.modalMensagemErro)
        .should('be.visible')
        .should('have.text',mensagem)
});

//ELEMENTOS VALIDAÇÕES
Cypress.Commands.add('mensagemCpfInvalido', (mensagem) => { 
    cy.get(elements.mensages.mensagemCampoObrigatorio)
        .should('be.visible')
        .should('have.text',mensagem)
});

Cypress.Commands.add('campoObrigatorio', (mensagem) => { 
    cy.get(elements.mensages.mensagemCampoObrigatorio)
        .should('be.visible')
        .should('include.text',mensagem)
});

Cypress.Commands.add('realizarLogin', (cpf, senha) => {
    cy.get(elements.filds.campoCPF)
        .click()
        .type(cpf)

    cy.get(elements.filds.campoSenha)
        .click()
        .type(senha)
    
    cy.get(elements.buttons.botaoEntrar)
        .contains('Entrar')
        .click()
})
