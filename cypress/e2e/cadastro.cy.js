const usuario_dado = require('../fixtures/usuario_cadastro.json')
import faker from "faker-br";

const randomCpf = faker.br.cpf();
const randomEmail = faker.internet.email();
const confEmail = randomEmail;
const randomCelular = faker.phone.phoneNumber();

describe('Tela Cadastro', () => {
    
    beforeEach('Acessar tela de cadastro', () => {
        cy.visit('/entrar/cadastro')
    })

    it('Cadastro com sucesso', () => {
        cy.preencherCPF(randomCpf)
        cy.preencherNome(usuario_dado.nome)
        cy.abrirMenuSexo()
        cy.selecionarSexo()
        cy.preencherEmail(randomEmail)
        cy.preencherConfirmarEmail(confEmail)
        cy.preencherCelular(randomCelular)
        cy.preencherDataNascimento(usuario_dado.dataNasc)
        cy.preencherCep(usuario_dado.cep)
        cy.preencherNumero(usuario_dado.numero)
        cy.preencherSenha(usuario_dado.senha)
        cy.preencherConfSenha(usuario_dado.senha)
        cy.SelecionarCheckboxAceito()
        cy.ConcluirCadastro()
        //cy.screenshot()
        cy.url().should('include', '/comprar')
    })

    it('Não preencher os campos', () => {
        cy.ConcluirCadastro()
        cy.mensageemCampoObrigatorio('Campo obrigatório!')
    })

    it('CPF já cadastrado', () => {
        cy.preencherCPF(usuario_dado.cpf_cadastrado)
        cy.fecharModalCpfCadastrado()
        cy.url().should('include', '/entrar')
    })
})