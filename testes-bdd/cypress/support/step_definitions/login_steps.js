//2 - Transformar o gherkin em método/açao
<reference type="cypress"/>
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"

Given("I am on Login screen", () => {
    home_page.accessLogin()

})

When("I click on Login button", () => {

})

Then("I see the message {string}", (message) => {
    
})


