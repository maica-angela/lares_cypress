import { addNotice } from '../support/createNotice.js';
import { amendNoticePub } from '../support/amendNoticespec.cy';
import { terminateNoticePub } from '../support/terminateNotice.cy';
import { registerInd } from '../support/registerIndspec.cy';
import { registerJuri } from '../support/registerJurispec.cy';
import { forgotPassword } from '../support/forgotPassspec.cy';
import { searchNoticePub } from '../support/searchNoticespec.cy.js';
import { searchCertPublic } from '../support/searchCertspec.cy.js';


describe('Given that I logged in on Public User ', () => {
  it('passes', () => {
    cy.viewport(1024, 768);
    const site1 = new site();
    const signin = new login();
    cy.visit(site1.qa)

    // registerInd(); test
    //   registerJuri();
    //  forgotPassword();

    //login to public   

    cy.contains('Login').click();
    cy.get(signin.username).type(signin.username1);
    cy.get(signin.password).type(signin.password1);
   // cy.wait(30000);
    cy.get(signin.submit).click();
    cy.wait(20000);

    addNotice();
    searchNoticePub();

   // terminateNoticePub();
  })
  class login {
    username = 'input[type=text]';
    username1 = 'galadriel01';
    password = 'input[autocomplete=new-password]';
    password1 = 'Percival@321';
    submit = 'button[type=submit]';
  }
  class site {
    qa = 'https://lares-frontend-qa.apps.bcstechnology.com.au/';

  }
})
