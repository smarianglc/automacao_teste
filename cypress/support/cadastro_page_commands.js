/// <reference types="cypress" />
const elements ={
    filds: {
        campoNome: 'input[name="nome"]',
        campoCpf: 'input[name="cpf"]',
        campoEmail: 'input[name="email"]',
        campoConfirmarEmail: 'input[name="confEmail"]',
        campoCelular: 'input[name="celular"]',
        campoDataNascimento: 'input[name="dtNascimento"]',
        campoCep: 'input[name="cep"]',
        camNumero: 'input[name="numero"]',
        campoSenha: 'input[name="senha"]',
        campoConfirmarSenha: 'input[name="confSenha"]',
    },
    buttons:{
        menuSexo:'.v-select__selections',
        sexo:'.v-list-item__title',
        botaoConcCadastro: '.v-btn__content',
        botaoModalCpfCad: '.swal2-cancel.swal2-styled'
    },
    checkbox: {
        checkCadastro: '.v-input--selection-controls__ripple'
    },
    mesagens:{
        campoObrigatorio: '.v-messages__message',
        modalCpfCadastrado: '.swal2-html-container'
    }
}

//ELEMENTOS DE PREENCHIMENTO
Cypress.Commands.add('preencherNome', (nome) => {
    cy.get(elements.filds.campoNome)
        .click()
        .type(nome)
});

Cypress.Commands.add('preencherCPF', (cpf) => {
    cy.get(elements.filds.campoCpf)
        .click()
        .type(cpf)
});

Cypress.Commands.add('preencherEmail', (email) => {
    cy.get(elements.filds.campoEmail)
        .click()
        .type(email)
});

Cypress.Commands.add('preencherConfirmarEmail', (confEmail) => {
    cy.get(elements.filds.campoConfirmarEmail)
        .click()
        .type(confEmail)
});

Cypress.Commands.add('preencherCelular', (celular) => {
    cy.get(elements.filds.campoCelular)
        .click()
        .type(celular)
});

Cypress.Commands.add('preencherDataNascimento', (dataNascimento) => {
    cy.get(elements.filds.campoDataNascimento)
        .click()
        .type(dataNascimento)
});

Cypress.Commands.add('preencherCep', (cep) => {
    cy.get(elements.filds.campoCep)
        .click()
        .type(cep)
});

Cypress.Commands.add('preencherNumero', (numero) => {
    cy.get(elements.filds.camNumero)
        .click()
        .type(numero)
});
Cypress. Commands.add('preencherSenha', (senha) => {
    cy.get(elements.filds.campoSenha) 
        .click()
        .type(senha)
});

Cypress.Commands.add('preencherConfSenha', (confSenha) => {
    cy.get(elements.filds.campoConfirmarSenha)
        .click()
        .type(confSenha)
});
//------------------------------------------------------------
//ELEMENTOS DE CLICKS
Cypress.Commands.add('abrirMenuSexo', () => {
    cy.get(elements.buttons.menuSexo)
        .click()
});

Cypress.Commands.add('selecionarSexo', () => {
    cy.get(elements.buttons.sexo)
        .contains('Masculino')
        .click()
});

Cypress.Commands.add('ConcluirCadastro', () => {
    cy.get(elements.buttons.botaoConcCadastro)
        .contains('Cadastrar-se Gratuitamente')
        .click()
});

Cypress.Commands.add('SelecionarCheckboxAceito', () => {
    cy.get(elements.checkbox.checkCadastro)
        .click()
});

Cypress.Commands.add('fecharModalCpfCadastrado', () => {
    cy.get(elements.buttons.botaoModalCpfCad)
        .click()
})
//------------------------------------------------------------
//ELEMENTOS DE VERIFICAÇÃO
Cypress.Commands.add('MensagemCampoObrigatorio', (mensagem) => {
    cy.get(elements.mesagens.campoObrigatorio)
        .should('be.visible')
        .should('have.text', mensagem)
})

Cypress.Commands.add('MensagemModalCpfCadastrado', (mensagem1,mensagem2,mensagem3,cpf) => {
    //const regex = new RegExp(${cpf.replace(/\./g, '\\.')}-${cpf.slice(-2)});
    cy.get(elements.mesagens.modalCpfCadastado)
        .should('be.visible')
        .should('contain.text', mensagem1)
        .should('contain.text', cpf)
        .should('contain.text', mensagem2)
        .should('contain.text', mensagem3)
})