///<reference types="cypress" />
//botão
const botaoEntrar = '.v-btn__content'
const botaoOkModal = '.swal2-confirm'

//campos de dados
const campoCPF = 'input[name="cpf"]'
const campoSenha = 'input[name="senha"]'

//modal
const modalMensagemErro = '#swal2-content'

//mensagem campo obrigatório
const mensagemCampoObrigatorio = '.v-messages__message'

//---------------------------------------------------------------
//ELEMENTOS CLICKS
Cypress.Commands.add('fazerLogin', () => { 
    cy.get(botaoEntrar)
        .contains('Entrar')
        .click()
});

Cypress.Commands.add('okModalMensagemErro', () => { 
    cy.get(botaoOkModal)
        .contains('OK')
        .click()
});

//ELEMENTOS TYPE
Cypress.Commands.add('preencherCPF', (cpf) => {
    cy.get(campoCPF)
        .click()
        .type(cpf)
});

Cypress.Commands.add('preencherSenha', (senha) => {
    cy.get(campoSenha)
        .click()
        .type(senha)
});

//ELEMNTO MODAL
Cypress.Commands.add('modalMensagemErro', (mensagem) => { 
    cy.get(modalMensagemErro)
        .should('be.visible')
        .should('have.text',mensagem)
});

//ELEMENTOS VALIDAÇÕES
Cypress.Commands.add('mensagemCpfInvalido', (mensagem) => { 
    cy.get(mensagemCampoObrigatorio)
        .should('be.visible')
        .should('have.text',mensagem)
});

Cypress.Commands.add('campoObrigatorio', (mensagem) => { 
    cy.get(mensagemCampoObrigatorio)
        .should('be.visible')
        .should('include.text',mensagem)
});
