import {validLoginCase,invalidLoginCase} from "../../Assert/login/dataSet"
import {verifyInValidLoginMsg,cleanUp,clickLoginButton,verifyLoginSuccessfully} from "../../support/SwagLaps/helperFunction/login-helper"
const errorMsgWithBlankcredntial="Epic sadface: Username is required"
describe('verify login', () => {
    before(()=>{
        cy.visit('/')
    })
    beforeEach(()=>{
      cleanUp()
    })
    it('Verify invalid login with a blank (username and password)', () => {
        clickLoginButton()
        verifyInValidLoginMsg(errorMsgWithBlankcredntial) 
    });
    invalidLoginCase.map((testCase)=>{
      it(testCase.testName, () => {
          cy.login(testCase)
          verifyInValidLoginMsg(testCase.errorMsg)
      });
    })
    it('Verify valid login with valid credential', () => {
        cy.login(validLoginCase)
        verifyLoginSuccessfully()
    });
 })