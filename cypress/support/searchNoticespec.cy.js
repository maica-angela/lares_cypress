//import { successPayment } from "./support/payment.cy";
import { searchCertPublic } from "./searchCertspec.cy";

export function searchNoticePub() {

    const testdata = new testData();
    cy.contains('Search').click();
    cy.contains('Search Notice').click();
    cy.contains('Proceed').click();
    //search by grantor, Individual
    cy.xpath(testdata.a).type('First Name');
    cy.xpath(testdata.b).type('Middle Name');
    cy.xpath(testdata.c).type('Last Name');
    cy.xpath(testdata.d).type('idnumber1');
    cy.xpath(testdata.idType)
        .click({ force: true });
    cy.contains('ACR')
        .click({ force: true });
    cy.xpath(testdata.search).click();

    cy.intercept({
        method: 'POST',
        url: 'https://api.personalpropertyregistry.lra.gov.ph/qa/lares/ppsa/notices/search-transaction',
        //  middleware: true
    }).as('transactionNumber');

    cy.xpath('//*[@id="modalQueryConfirmSubmit___BV_modal_body_"]/div[2]/button')
        .invoke('val').then(val => {
            const loanTotal = val
            cy.log(loanTotal);
            if (loanTotal > 0) {
                //    successPayment();
            }
            else {
                cy.wait(7000);

                cy.wait('@transactionNumber').its('response.body').then((body) => {

                    expect(body).to.have.property('transactionId')
                    cy.wrap(body.transactionId).as('transactionNumber')


                });
            }
        })

        cy.xpath(testdata.okay).click();

    //search by Notice Registration
    cy.contains('Search Notice').click();
    cy.contains('Proceed').click();
    cy.xpath(testdata.e).click();
    cy.xpath(testdata.f).type('N230100019802');
    cy.xpath(testdata.searchReg).click();
    cy.wait(5000);
    cy.xpath(testdata.okay).click();

    //search by collateral details, Motor Vehicle
    cy.contains('Search Notice').click();
    cy.contains('Proceed').click();
    cy.xpath(testdata.g).click();
    cy.xpath(testdata.h).type('chassis1');
    cy.xpath(testdata.searchCol).click();
    cy.wait(5000);
    cy.xpath(testdata.okay).click();

    searchCertPublic();
   
}

class testData {
    a = '//*[@id="__layout"]/section/main/div/div/div[1]/div[2]/div/form/div/div[2]/div/div/input';
    b = '//*[@id="__layout"]/section/main/div/div/div[1]/div[2]/div/form/div/div[3]/div/div/input';
    c = '//*[@id="__layout"]/section/main/div/div/div[1]/div[2]/div/form/div/div[4]/div/div/input';
    d = '//*[@id="__layout"]/section/main/div/div/div[1]/div[2]/div/form/div/div[6]/div/div/input';

    e = '//*[@id="__layout"]/section/main/div/div/div[1]/div[1]/div[2]/label/span[1]';
    f = '//*[@id="__layout"]/section/main/div/div/div[1]/div[2]/div/form/div/div[1]/div/div/input';

    g = '//*[@id="__layout"]/section/main/div/div/div[1]/div[1]/div[3]/label/span[1]';
    h = '//*[@id="__layout"]/section/main/div/div/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/input';
    i = '';
    j = '';
    k = '';

    search = '//*[@id="__layout"]/section/main/div/div/div[1]/div[2]/div/form/div/div[7]/div/div/button/span';
    idType = '//*[@id="__layout"]/section/main/div/div/div[1]/div[2]/div/form/div/div[5]/div/div/div[1]/div[2]';


    okay = '//*[@id="modalQueryConfirmSubmit___BV_modal_body_"]/div[2]/button';

    searchReg = '//*[@id="__layout"]/section/main/div/div/div[1]/div[2]/div/form/div/div[2]/div/div/button/span';
    searchCol = '//*[@id="__layout"]/section/main/div/div/div[1]/div[2]/div/div/div[2]/form/div[2]/div/button';
}   