import { amendNoticeReg } from '../support/amendNoticeRegistry.cy';
import { searchCertReg } from '../support/searchCertRegistry.cy';
import { searchNoticeReg } from '../support/searchNoticeRegistry.cy';
import { terminateNoticeReg } from '../support/terminateNoticeRegistry.cy';



describe('Given that I login to Registry User ', () => {
  it('passes', () => {
    const site1 = new site();
    const signin = new login();
    cy.visit(site1.qa)
    //login to register   
    cy.contains('Login').click();
    cy.get(signin.username).type(signin.username1);
    cy.get(signin.password).type(signin.password1);
    cy.wait(30000);
    cy.get(signin.submit).click();
    cy.wait(5000);

    searchNoticeReg();
    // searchCertReg();

    // amendNoticeReg();
    //  terminateNoticeReg();
  })
  class login {
    username = 'input[type=text]';
    username1 = 'freya001';
    password = 'input[autocomplete=new-password]';
    password1 = 'Percival@321';
    submit = 'button[type=submit]';
  }
  class site {
    qa = 'https://lares-frontend-qa.apps.bcstechnology.com.au/';
  }
})