
export function successPayment() {
    const testdata = new testData();

    cy.wait(10000);
    cy.xpath(testdata.payNow).click();
    cy.wait(5000);
    cy.xpath(testdata.x).should('be.visible').type('maica');
    cy.xpath(testdata.y).should('be.visible').type('9169227895');
    cy.xpath(testdata.z).should('be.visible').type('maica.urlanda@bcstechnology.com.au');
    cy.wait(3000);
    //paymaya
    /*   cy.contains('Wallet').click();
       cy.wait(7000);
       //  it('navigates', () => { cy.visit(clickQR) })
       cy.forceVisit(testdata.clickQR).click();
       cy.wait(10000);
       cy.contains('Back to Merchant').click();
       cy.wait(5000);
       cy.contains('Close').click();
   */
    //mastercard -- there's recaptcha here, also, if own debit, need to wait for OTP
    cy.contains('Debit').click();
    cy.wait(7000);
    //  it('navigates', () => { cy.visit(clickQR) })
    cy.xpath('//*[@id="cardNumber"]').type('5123456789012346');
    cy.xpath('//*[@id="expiryDate"]').type('1225');
    cy.xpath('//*[@id="cvv"]').type('111');
    cy.wait(5000);
    cy.contains('Complete Order').click();
    cy.wait(10000);

    cy.contains('Close').click();
    ////*[@id="__layout"]/section/main/div/div/div[5]/div[2]/button
    cy.wait(5000);
}
class testData {
    x = '//*[@id="__layout"]/section/main/div/div/div[3]/div[1]/div/div[1]/div/div/input';
    y = '//*[@id="__layout"]/section/main/div/div/div[3]/div[2]/div/div/div/div/div/div[2]/input';
    z = '//*[@id="__layout"]/section/main/div/div/div[3]/div[1]/div/div[2]/div/div/input';

    payNow = '//*[@id="__layout"]/section/main/div/div/div[3]/div/button';
}
