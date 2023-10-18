export default{
    realizarLogin(){
        cy.visit('/entrar')
        cy.get('#w_login_campo_cpf')
            .click()
            .type('02792595140')
        cy.get('#w_login_campo_senha')
            .click()
            .type('16181234')
        cy.get('#w_login_btn_entrar')
            .click()
    }
    

}