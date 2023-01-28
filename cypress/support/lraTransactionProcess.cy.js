

export function lraTransaction() {

    const testdata = new testData();
    const fileUpload = "C:/Cypress/cypress/fixtures/pdf/How Democracies Die - Steven Levitsky.pdf";
    const dayjs = require('dayjs')

    cy.xpath(testdata.reasonType).click({ force: true });
    cy.contains('Admin').click();

    cy.xpath(testdata.orderCaseNo).type('test');
    cy.xpath(testdata.issuedBy).type('test');

    cy.log(dayjs().format('YYYY/MM/DD'))
    cy.xpath(testdata.issuedDate).type(dayjs().format('YYYY/MM/DD'));

    cy.xpath(testdata.remarks).type('test');
    cy.get('input[type="file"]').selectFile(fileUpload).trigger('input');
    //  cy.get('input[type="submit"]').click({force: true});
    // cy.get('#uploaded-files').contains('How Democracies Die - Steven Levitsky.pdf');
   // cy.intercept({
  //      method: 'POST',
  //      url: 'https://api.personalpropertyregistry.lra.gov.ph/qa/lares/ppsa/notices/search-transaction',
  //      //  middleware: true
 //   }).as('submitLRA');
    cy.xpath(testdata.submit).click();

    cy.wait('@submitLRA', { timeout: 100000 });

    cy.contains('Okay').click();


    //  cy.intercept({
    //      method: 'POST',
    //     url: 'https://api.personalpropertyregistry.lra.gov.ph/qa/lares/ppsa/notices/search-transaction',
    //      //  middleware: true
    // }).as('transactionNumber');
    // 



    /*  cy.wait(7000);
      cy.wait('@transactionNumber').its('response.body').then((body) => {
          expect(body).to.have.property('transactionId')
          cy.wrap(body.transactionId).as('transactionNumber')
      });
      */

}

class testData {
    reasonType = '//*[@id="modalAmendmentRemarks___BV_modal_body_"]/form/div[1]/div/div/div/div/div[2]';
    orderCaseNo = '//*[@id="modalAmendmentRemarks___BV_modal_body_"]/form/div[2]/div/div/div/input';
    issuedBy = '//*[@id="modalAmendmentRemarks___BV_modal_body_"]/form/div[3]/div/div/div/input';
    issuedDate = '//*[@id="modalAmendmentRemarks___BV_modal_body_"]/form/div[4]/div/div/div/div/div/input';
    remarks = '//*[@id="modalAmendmentRemarks___BV_modal_body_"]/form/div[5]/div/div/div/textarea';
    submit = '//*[@id="modalAmendmentRemarks___BV_modal_body_"]/form/div[8]/button/span';

}