
export function registerInd() {
    const testdata = new testData();

    cy.contains('Register').click();
    cy.contains('Individual User').click();
    cy.wait(5000);
    cy.xpath(testdata.a).type('user0001');
    cy.xpath(testdata.b).type('asdfasdf');
    cy.xpath(testdata.c).type('first name');
    cy.xpath(testdata.d).type('middle name');
    cy.xpath(testdata.e).type('last name');
    cy.xpath(testdata.f).type('street address');
    cy.xpath(testdata.g).type('Percival@123');
    cy.xpath(testdata.h).type('Percival@123');
    cy.xpath(testdata.i).type('maica@yopmail.com');
    cy.xpath(testdata.j).type('9169227896');
    cy.xpath(testdata.k).click();

    //  cy.contains('I\'m not a robot').click();
    cy.xpath(testdata.l).click();
    cy.contains('Submit').click();
    cy.contains('Confirm').click();
    cy.wait(30000);
    cy.xpath().type();
    cy.xpath().type();
    cy.xpath().type();
}


class testData {
    a = '//*[@id="__layout"]/section/main/div/div/div/form/div/div[1]/div[1]/div/input';
    b = '//*[@id="__layout"]/section/main/div/div/div/form/div/div[1]/div[3]/div/input';
    c = '//*[@id="__layout"]/section/main/div/div/div/form/div/div[1]/div[4]/div/input';
    d = '//*[@id="__layout"]/section/main/div/div/div/form/div/div[1]/div[5]/div/input';
    e = '//*[@id="__layout"]/section/main/div/div/div/form/div/div[1]/div[6]/div/input';
    f = '//*[@id="__layout"]/section/main/div/div/div/form/div/div[1]/div[7]/div/input';
    g = '//*[@id="password"]';
    h = '//*[@id="__layout"]/section/main/div/div/div/form/div/div[2]/div[2]/div/div/input';
    i = '//*[@id="__layout"]/section/main/div/div/div/form/div/div[2]/div[3]/div/input';
    j = '//*[@id="__layout"]/section/main/div/div/div/form/div/div[2]/div[4]/div/div/div[2]/input';
    k = '//*[@id="__layout"]/section/main/div/div/div/form/div/div[2]/div[6]/div/label/span[1]';
    l = '//*[@id="recaptcha-anchor-label"]';
    m = '';
    n = '';
    o = '';
    p = '';
}