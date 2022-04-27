import {loginLocator} from "../helperFunction/login-helper"
Cypress.Commands.add('login',({username,password})=>{
    if(username)
    {
      cy.get(loginLocator.username)
        .type(username)
    }
    if(password)
    {
     cy.get(loginLocator.password)
       .type(password)
    }
   cy.get(loginLocator.loginButton)
     .click()

} );