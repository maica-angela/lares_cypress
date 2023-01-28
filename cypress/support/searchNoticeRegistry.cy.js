import { lraTransaction } from "./lraTransactionProcess.cy";
import { searchCertReg } from "./searchCertReg.cy";


export function searchNoticeReg() {

    const testdata = new testData();
    cy.contains('Search the Registry').click();
    cy.contains('Proceed').click();
    //search by grantor, Individual
    cy.xpath(testdata.a).type('Maica');
    cy.xpath(testdata.b).type('Angela');
    cy.xpath(testdata.c).type('Urlanda');
    cy.xpath(testdata.d).type('idnumber1');
    cy.xpath(testdata.idType)
        .click({ force: true });
    cy.contains('SSS')
        .click({ force: true });
    cy.xpath(testdata.search).click();
    cy.wait(3000);
    lraTransaction();
    //search by Notice Registration
    //  cy.contains('Search the Registry').click();
    cy.contains('Search Notice').click();
    cy.contains('Proceed').click();
    cy.xpath(testdata.e).click();
    cy.xpath(testdata.f).type('N230100019982');
    cy.xpath(testdata.searchReg).click({ timeout: 10000 });
    lraTransaction();
    //search by collateral details, Motor Vehicle
    cy.contains('Search Notice').click();
    cy.contains('Proceed').click();
    cy.xpath(testdata.g).click();
    cy.xpath(testdata.h).type('chassis1');
    cy.xpath(testdata.searchCol).click();
    cy.wait(3000);
    lraTransaction();

    searchCertReg();
}

class testData {
    okay = '//*[@id="modalQueryPostSubmit___BV_modal_body_"]/div[2]/button';
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

    idType = '//*[@id="__layout"]/section/main/div/div/div[1]/div[2]/div/form/div/div[5]/div/div/div/div[2]';
    search = '//*[@id="__layout"]/section/main/div/div/div[1]/div[2]/div/form/div/div[7]/div/div/button/span';

    noticeReg = '//*[@id="__layout"]/section/main/div/div/div[1]/div[1]/div[2]/label/span[1]';

    searchReg = '//*[@id="__layout"]/section/main/div/div/div[1]/div[2]/div/form/div/div[2]/div/div/button/span';
    searchCol = '//*[@id="__layout"]/section/main/div/div/div[1]/div[2]/div/div/div[2]/form/div[2]/div/button/span';
}