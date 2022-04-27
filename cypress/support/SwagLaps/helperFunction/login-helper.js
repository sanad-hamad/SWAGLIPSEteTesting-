const loginLocator={
    "username":'[data-test="username"]',
    "password":'[data-test="password"]',
    "loginButton":'[data-test="login-button"]',
    "errorContainer":'[data-test="error"]'
}

const verifyInValidLoginMsg=(MSG)=>{
  cy.contains(loginLocator.errorContainer,MSG)
    .should('be.visible')
}

const clickLoginButton=()=>{
    cy.get(loginLocator.loginButton)
      .click()
}

const verifyLoginSuccessfully=()=>{
 cy.url()
   .should('include','inventory.html')
}

const cleanUp=()=>{
    cy.get(loginLocator.username)
      .clear()
   cy.get(loginLocator.password)
     .clear()

}



export{cleanUp,
    verifyInValidLoginMsg,
       clickLoginButton,
       loginLocator,
       verifyLoginSuccessfully,
      }