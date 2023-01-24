export function forgotPassword() {

    const testdata = new testData();

    cy.contains('Login').click();
    cy.contains('Forgot Password?').click();

    cy.xpath(testdata.a).type('username1');
    cy.xpath(testdata.b).type('Percival@123');
    cy.xpath(testdata.c).type('Percival@123');
    // cy.wait(30000);
    //  cy.xpath(testdata.d).click();
    cy.xpath(testdata.e).click();
    cy.wait(30000);
  //  cy.xpath().type('');
    cy.contains('Submit').click();
    cy.wait(5000);
}

class testData {
    a = '//*[@id="SetPassword___BV_modal_body_"]/form/div[1]/div/input';
    b = '//*[@id="password"]';
    c = '//*[@id="SetPassword___BV_modal_body_"]/form/div[3]/div/div/input';
    //  d = '//*[@id="recaptcha-anchor-label"]';
    e = '//*[@id="SetPassword___BV_modal_body_"]/form/div[5]/a';


}