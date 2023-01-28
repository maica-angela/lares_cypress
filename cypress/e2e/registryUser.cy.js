import { amendNoticeReg } from '../support/amendNoticeRegistry.cy';
import { searchCertReg } from '../support/searchCertRegistry.cy';
import { searchNoticeReg } from '../support/searchNoticeRegistry.cy';
import { terminateNoticeReg } from '../support/terminateNoticeRegistry.cy';



describe('Given that I login to Registry User ', () => {
  it('passes', () => {
    cy.viewport(1024, 768);
    const site1 = new site();
    const signin = new login();
    cy.visit(site1.qa)
    //login to register   
    cy.contains('Login').click();
    cy.get(signin.username).type(signin.username1);
    cy.get(signin.password).type(signin.password1);
  
    cy.intercept({
      method: 'POST',
      url: 'https://cognito-idp.ap-southeast-1.amazonaws.com/',
      //  middleware: true
    }).as('login');
    cy.get(signin.submit).click();

    cy.wait('@login',{ timeout: 30000} );

    //
    // searchNoticeReg();
    // searchCertReg();

    amendNoticeReg();
    //terminateNoticeReg();
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