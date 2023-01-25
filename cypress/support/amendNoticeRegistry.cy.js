import { lraTransaction } from "./lraTransactionProcess.cy";

export function amendNoticeReg() {

    const testdata = new testData();

    //search by Notice Registration
    cy.contains('Search the Registry').click();
    cy.contains('Proceed').click();
    cy.contains('Search Notice').click();
  //  cy.contains('Proceed').click();
    cy.xpath(testdata.e).click();

    cy.xpath(testdata.f).type('N230100019915');
    cy.xpath(testdata.searchReg).click();
    cy.wait(5000);

    lraTransaction();
    cy.xpath(testdata.process).click({ force: true });
    cy.contains('Processed').click();
    cy.wait(5000);
    cy.xpath(testdata.a).click({ force: true });
    cy.get('span.multiselect__option').eq(1).should('have.text', 'Search').click({ force: true });
    cy.xpath(testdata.find).click({ force: true });

    //cy.xpath(testdata.firstView).click({ force: true });
    //  cy.wait(3000);

    cy.contains('Amend').click();
    cy.xpath(testdata.clickAmend).click({ force: true });
    cy.contains('Proceed').click();
    cy.contains('Amend').click();
    //add creditor
    cy.xpath(testdata.cardheader1).click();
    cy.contains('Add Creditor').click();
    cy.wait(3000);
    cy.xpath(testdata.j).type('test123');
    cy.xpath(testdata.k).type('123');
    cy.xpath(testdata.l).type('test123');
    cy.xpath(testdata.m).type('test123');
    cy.xpath(testdata.n).type('test123');
    cy.xpath(testdata.o).type('maica@yopmail.com');
    cy.xpath(testdata.p).type('09169227894');
    cy.xpath(testdata.q).type('123456');
    cy.wait(4000);
    cy.xpath(testdata.savebutton1).click();

    cy.xpath(testdata.idTypeCreditor)
        .click({ force: true });
    cy.contains('Valid')
        .click({ force: true });

    cy.xpath(testdata.provinceGrantor)
        .click({ force: true });
    cy.contains('Bulacan')
        .click({ force: true });

    cy.xpath(testdata.townGrantor)
        .click({ force: true });
    cy.contains('San Miguel')
        .click({ force: true });
    cy.wait(4000);
    cy.xpath(testdata.savebutton1).click();
    cy.wait(5000);

    cy.xpath(testdata.cardheader3).click();

    cy.contains('Save').click();
    cy.wait(5000);
    cy.contains('I confirm that a signed security agreement is in place.').click();
    cy.contains('Submit').click();
    cy.contains('I acknowledge that the information provided is true and correct and I/We agree to the Terms and Conditions and Privacy Policy set by this Registry.')
        .click();
    cy.contains('Confirm').click();
    cy.wait(3000);
    //  cy.contains('Preview Assessment Details').click();
    //  cy.xpath(testdata.download1);
    // cy.wait(5000);
    //cy.xpath(testdata.close1);
    // cy.wait(3000);

    lraTransaction();
}


class testData {
    searchReg = '//*[@id="__layout"]/section/main/div/div/div[1]/div[2]/div/form/div/div[2]/div/div/button';
    process = '//*[@id="__layout"]/section/main/div/div/div[1]/form/div[1]/div[2]/div/div/div/div[2]/span';
    a = '//*[@id="__layout"]/section/main/div/div/div[1]/form/div[1]/div[1]/div/div/div/div[1]';
    b = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[1]/div/div[2]/div/div[1]/div/input';
    c = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[1]/div/div[2]/div/div[2]/div/input';
    d = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[1]/div/div[2]/div/div[3]/div/input';
    e = '//*[@id="__layout"]/section/main/div/div/div[1]/div[1]/div[2]/label/span[1]';
    f = '//*[@id="__layout"]/section/main/div/div/div[1]/div[2]/div/form/div/div[1]/div/div';
    g = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[2]/div/div[1]/div[2]/div[2]/input';
    h = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[2]/div/div[2]/div/div[2]/input';
    j = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[1]/div/div[1]/div[2]/div[2]/div/input';
    h = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[1]/div/div[2]/div/div[1]/div/input';
    k = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[1]/div/div[2]/div/div[1]/div/input';
    l = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[1]/div/div[2]/div/div[2]/div/input';
    m = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[1]/div/div[2]/div/div[3]/div/input';
    n = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[1]/div/div[1]/div[1]/div/input';
    o = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[2]/div/div[1]/div[1]/div/input';
    p = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[2]/div/div[1]/div[2]/div[2]/input';
    q = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[2]/div/div[2]/div/div[2]/input';
    r = '//*[@id="modalCollateral___BV_modal_body_"]/form/div[2]/div[1]/div[1]/div/div/input';
    s = '//*[@id="modalCollateral___BV_modal_body_"]/form/div[2]/div[1]/div[2]/div/div/input';
    t = '//*[@id="modalCollateral___BV_modal_body_"]/form/div[2]/div[2]/div[1]/div/div/input';
    u = '//*[@id="modalCollateral___BV_modal_body_"]/form/div[2]/div[2]/div[2]/div/div/input';
    v = '//*[@id="modalCollateral___BV_modal_body_"]/form/div[2]/div[3]/div/div/div/textarea';
    w = '//*[@id="modalLoan___BV_modal_body_"]/form/div[2]/div[1]/div/div/input';
    x = '//*[@id="__layout"]/section/main/div/div/div[3]/div[1]/div[1]/div/input';
    y = '//*[@id="__layout"]/section/main/div/div/div[3]/div[2]/div/div/input';
    z = '//*[@id="__layout"]/section/main/div/div/div[3]/div[1]/div[2]/div/div/div[2]/input';
    cardheader1 = '//*[@id="__layout"]/section/main/div/div/div[4]/a';
    cardheader2 = '//*[@id="__layout"]/section/main/div/div/div[5]/a';
    cardheader3 = '//*[@id="__layout"]/section/main/div/div/div[6]/a';
    savebutton1 = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[3]/div/button';
    savebutton2 = '//*[@id="modalCollateral___BV_modal_body_"]/form/div[3]/button';
    confirm = '//*[@id="modalSummary___BV_modal_body_"]/div[2]/div/button';
    download1 = '//*[@id="modalSummary___BV_modal_body_"]/div[2]/div[1]/button';
    close1 = '//*[@id="modalSummary___BV_modal_body_"]/div[2]/div[2]/button/span';
    clickQR = '//*[@id="expressCheckout"]/div/div[2]/button[2]/img';

    idnumber = 'test123';
    firstname = 'maica';
    middlename = 'angela';
    lastname = 'urlanda';
    email = 'maica@yopmail.com';
    number1 = '09169227893';

    idTypeGrantor = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[1]/div/div[1]/div[2]/div[1]/div/div/div[2]/span';
    provinceGrantor = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[1]/div/div[2]/div[1]/div/div/div[2]';
    townGrantor = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[1]/div/div[2]/div[2]/div';

    idTypeDebtor = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[1]/div/div[1]/div[2]/div[1]/div/div/div[2]';
    provinceDebtor = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[1]/div/div[2]/div[1]/div/div/div[2]';
    townGrantor = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[1]/div/div[2]/div[2]/div';

    idTypeCreditor = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[1]/div/div[1]/div[2]/div[1]/div/div/div[1]';
    provinceCreditor = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[1]/div/div[2]/div[1]/div/div/div[2]';
    townCreditor = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[1]/div/div[2]/div[2]/div';

    endDate = '//*[@id="sectionTransactions"]/div/div[3]/form/div[2]/div[2]/div/div/div/input';

    confirmNotice = '//*[@id="modalSummary___BV_modal_body_"]/div[2]/div/button';

    zeroFee = '//*[@id="modalNoticeConfirmSubmit___BV_modal_body_"]/div[2]/button';

    clickAmend = '//*[@id="__layout"]/section/main/div/div/div[2]/div/div/div[2]/div/div[2]/a/span[8]/div/a[2]';
}

