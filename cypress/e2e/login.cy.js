///<reference types="cypress" />
import faker from 'faker-br'
import home_page from '../support/pages/home_page';

const user_data = require('../fixtures/user_login.json')

const screens = ['desktop', 'iphone-6', 'iphone-x']
screens.forEach((element) => { 
    describe('LOGIN', () => {
        beforeEach('Acessando a página de login', () => {
            
            if(element != 'desktop'){
                cy.viewport(element)
            }
            home_page.acessarPaginaLogin()
        });
    
        it('Login com senha errada', () => {
            cy.preencherCPF(user_data.user_cpf)
            cy.preencherSenha(user_data.user_senha_invalida)
            cy.fazerLogin()
            cy.modalMensagemErro('Usuário ou Senha incorretos')
            cy.okModalMensagemErro()
        });
        
        it('Login com cpf errado', () => {
            cy.preencherCPF(user_data.user_cpf_invalido)
            cy.preencherSenha(user_data.user_senha) 
            cy.mensagemCpfInvalido('CPF Inválido!')
            cy.fazerLogin()
        });
    
        it('Login com sucesso', () => {
            cy.preencherCPF(user_data.user_cpf)
            cy.preencherSenha(user_data.user_senha)
            cy.fazerLogin()
        });
    
        it('Não preencher campos', () => {
            cy.fazerLogin()
            cy.campoObrigatorio('Campo obrigatório!')
            cy.campoObrigatorio('É obrigatório informar a Senha')
        });
    
    });
})
