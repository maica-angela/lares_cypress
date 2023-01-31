
export function checkifZero() {

    const testdata = new testData();

    cy.xpath('//*[@id="sectionTransactions"]/div/div[3]/form/div[1]/div[3]/div')
        .invoke('val').then(val => {
            const loanTotal = val
            cy.log(loanTotal);

            if (loanTotal > 0) {
                successPayment();

            }
            else {
               // cy.wait(10000);

                cy.xpath(testdata.zeroFee).click( { timeout: 30000 });
                cy.log('Passed');

                //  cy.intercept({
                //        method: 'POST',
                //      url: 'https://api.personalpropertyregistry.lra.gov.ph/qa/lares/ppsa/notices/create-initial-notice',
                //       //  middleware: true
                //   }).as('okay');
                //   cy.xpath(testdata.submit).click();
                //   cy.wait('@okay', { timeout: 30000 });

                //https://api.personalpropertyregistry.lra.gov.ph/qa/lares/ppsa/notices/amend

                // cy.wait('@transactionNumber').its('response.body').then((body) => {
                //    const bodyData = JSON.parse(body)
                //   expect(body).to.have.property('transactionId')
                //   cy.wrap(body.transactionId).as('transactionNumber')
                //    cy.log(body)
                // });





            }

        })

}

class testData {
    zeroFee = '//*[@id="modalNoticeConfirmSubmit___BV_modal_body_"]/div[2]/button';
}