import { successPayment } from '../support/payment.cy';
import { amendNoticePub } from './amendNoticespec.cy';
import { checkifZero } from './checkifZerofee.cy';
import { terminateNoticePub } from './terminateNotice.cy';

export function addNotice() {
    cy.viewport(1024, 768);
    const testdata = new testData();
    //create notice
    cy.contains('My Notices').click();
    cy.contains('Create Notice').click();
    cy.contains('Proceed').click();

    //add grantor
    cy.contains('Add Grantor').click();
    cy.wait(3000);
    cy.xpath(testdata.idTypeGrantor)
        .click({ force: true });
    cy.contains('SSS')
        .click({ force: true });

    cy.xpath(testdata.a).type(testdata.idnumber);
    cy.xpath(testdata.b).type(testdata.firstname);
    cy.xpath(testdata.c).type(testdata.middlename);
    cy.xpath(testdata.d).type(testdata.lastname);
    cy.xpath(testdata.e).type(testdata.idnumber);

    cy.xpath(testdata.provinceGrantor)
        .click({ force: true });
    cy.contains('Bulacan')
        .click({ force: true });

    cy.xpath(testdata.townGrantor)
        .click({ force: true });
    cy.contains('San Miguel')
        .click({ force: true });

    cy.xpath(testdata.f).type(testdata.email);
    cy.xpath(testdata.g).type(testdata.number1);
    cy.wait(3000);
    cy.xpath(testdata.savebutton1).click();

    //add creditor
    cy.xpath(testdata.cardheader1).click();
    cy.contains('Add Creditor').click();
    cy.wait(3000);
    cy.xpath(testdata.idTypeCreditor)
        .click({ force: true });
    cy.contains('GSIS')
        .click({ force: true });

    cy.xpath(testdata.j).type('test123');
    cy.xpath(testdata.k).type('123');
    cy.xpath(testdata.l).type('test123');
    cy.xpath(testdata.m).type('test123');
    cy.xpath(testdata.n).type('test123');
    cy.xpath(testdata.o).type(testdata.email);
    cy.xpath(testdata.p).type('09169227894');
    cy.xpath(testdata.q).type('123456');

    cy.xpath(testdata.provinceCreditor)
        .click({ force: true });
    cy.contains('Bulacan')
        .click({ force: true });

    cy.xpath(testdata.townCreditor)
        .click({ force: true });
    cy.contains('San Miguel')
        .click({ force: true });

    cy.wait(4000);
    cy.xpath(testdata.savebutton1).click();

    //add collateral information
    cy.xpath(testdata.cardheader2).click();
    cy.contains('Add Collateral').click();
    cy.wait(3000);
    cy.xpath(testdata.r).type('123456');
    cy.xpath(testdata.s).type('123456');
    cy.xpath(testdata.t).type('123456');
    cy.xpath(testdata.u).type('123456');
    cy.xpath(testdata.v).type('123456');
    cy.wait(3000);
    cy.xpath(testdata.savebutton2).click();

    //add load amount
    cy.xpath(testdata.cardheader3).click();
    cy.contains('Add Loan Amount').click();
    cy.wait(3000);
    cy.xpath(testdata.w).type('1');
    cy.contains('Save').click();

    cy.xpath(testdata.endDate, { timeout: 3000 }).should('be.visible').type('20231231');
    // cy.contains('30').click({ force: true });

    cy.wait(5000);
    cy.contains('I confirm that a signed security agreement is in place.').click();
    cy.contains('Submit').click();
    cy.contains('I acknowledge').click();
    cy.wait(2000);
    cy.xpath(testdata.confirmNotice).click({ force: true });

    cy.intercept({
        method: 'POST',
        url: 'https://api.personalpropertyregistry.lra.gov.ph/qa/lares/ppsa/notices/create-initial-notice',
        //  middleware: true
    }).as('transactionNumber');

    checkifZero();

    amendNoticePub();
}
class testData {
    a = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[1]/div/div[1]/div[2]/div[2]/div/input';
    b = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[1]/div/div[2]/div/div[1]/div/input';
    c = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[1]/div/div[2]/div/div[2]/div/input';
    d = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[1]/div/div[2]/div/div[3]/div/input';
    e = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[1]/div/div[1]/div[1]/div/input';
    f = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[2]/div/div[1]/div[1]/div/input';
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
    email = 'maica.urlanda@bcstechnology.com.au';
    number1 = '09169227893';

    idTypeGrantor = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[1]/div/div[1]/div[2]/div[1]/div/div/div[2]/span';
    provinceGrantor = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[1]/div/div[2]/div[1]/div/div/div[2]';
    townGrantor = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[1]/div/div[2]/div[2]/div';

    idTypeDebtor = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[1]/div/div[1]/div[2]/div[1]/div/div/div[2]';
    provinceDebtor = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[1]/div/div[2]/div[1]/div/div/div[2]';
    townGrantor = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[1]/div/div[2]/div[2]/div';

    idTypeCreditor = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[1]/div/div[1]/div[2]/div[1]/div/div/div[2]';
    provinceCreditor = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[1]/div/div[2]/div[1]/div/div/div[2]';
    townCreditor = '//*[@id="modalStakeholder___BV_modal_body_"]/form/div[2]/div[1]/div/div[2]/div[2]/div';

    endDate = '//*[@id="sectionTransactions"]/div/div[3]/form/div[2]/div[2]/div/div/div/input';

    confirmNotice = '//*[@id="modalSummary___BV_modal_body_"]/div[2]/div/button';

    zeroFee = '//*[@id="modalNoticeConfirmSubmit___BV_modal_body_"]/div[2]/button';
}

