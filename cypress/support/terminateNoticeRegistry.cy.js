import { lraTransaction } from "./lraTransactionProcess.cy";

export function terminateNoticeReg(){

     cy.contains('My Notices').click();
     //search last paid transaction
     cy.contains('Terminate').click();
     cy.contains('Proceed').click();
     cy.contains('View').click();
     cy.wait(3000);
     cy.contains('Cancel').click();
     cy.contains('I hereby confirm').click();
     cy.contains('Terminate').click();
 
     cy.wait(5000);
     lraTransaction();
}