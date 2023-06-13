# 1 PASSO - Criar os cenários 
Feature: Login
    comoEu  cliente
    Quero fazer Login na aplicação 
    Para fazer uma compra

    Scenario: Login com campo CPF vazio
        Given I am on Login screen
        When I click on Login button
        Then I see the message "Campo obrigatório!"

    Scenario: Login com campo Senha vazio
        Given I am on Login screen
        When I click on Login button
        Then I see the message "É obrigatório informar a Senha"

    Scenario: Login com CPF e SENHA informados corretos
        Given I am on login screen
        And I fill in CPF with "02792595140"
        And I fill in Senha with "16181234"
        When I click on Login button
        Then I see the message