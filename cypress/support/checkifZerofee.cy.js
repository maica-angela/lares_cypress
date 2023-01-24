
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
                cy.wait(10000);

               // cy.wait('@transactionNumber').its('response.body').then((body) => {
                  //    const bodyData = JSON.parse(body)
               //   expect(body).to.have.property('transactionId')
                //   cy.wrap(body.transactionId).as('transactionNumber')
               //    cy.log(body)
             // });

                cy.xpath(testdata.zeroFee).click();
                cy.log('Passed');




            }

        })

}

class testData{
    zeroFee = '//*[@id="modalNoticeConfirmSubmit___BV_modal_body_"]/div[2]/button';
}