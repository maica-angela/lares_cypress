import { lraTransaction } from "./lraTransactionProcess.cy";

export function terminateNoticeReg() {

     cy.contains('My Notices').click();

     cy.intercept({
          method: 'GET',
          // body: formData,
          url: 'https://api.personalpropertyregistry.lra.gov.ph/qa/lares/ppsa/notices/search-by-criteria?status=ACTIVE&pageNumber=1&pageSize=5&isTotalCountRequired=true'
     }).as('getnotices');

     cy.fixture('searchbycriteria.json').then((id) => {
          cy.intercept('GET', 'searchbycriteria.json')
          var noticeId = id.noticeRegistrationId
          cy.log(noticeId);
          //   cy.xpath('//*[@id="__layout"]/section/main/div/div/div[1]/form/div[2]/div[3]/div/div/input').
          //    type(noticeId);
     })

     //search first active transaction
     cy.xpath('//*[@id="__layout"]/section/main/div/div/div[2]/div/div/div[2]/div/div[2]/a/span[8]/div/a[3]')
          .click();
     cy.contains('Proceed').click();
     cy.contains('View').click();
     cy.wait(3000);
     cy.contains('Cancel').click();
     cy.contains('I hereby confirm').click();
     cy.contains('Terminate').click();

     cy.contains('I acknowledge').click();
     cy.xpath('//*[@id="modalSummary___BV_modal_body_"]/div[2]/div/button/span')
          .click();

     cy.wait(5000);
     cy.xpath('//*[@id="modalNoticeConfirmSubmit___BV_modal_body_"]/div[2]/button')
          .click();
     lraTransaction();
}