export function registerJuri(){
    const testdata = new testData();

    cy.contains('Register').click();
    cy.contains('Juridical Entity').click();
    cy.wait(5000);
    cy.xpath(testdata.a).type('user0001');
    cy.xpath(testdata.b).type('Percival@123');
    cy.xpath(testdata.c).type('Percival@123');
    cy.xpath(testdata.d).type('First Name');
    cy.xpath(testdata.e).type('Middle Name');
    cy.xpath(testdata.f).type('Last Name');
    cy.xpath(testdata.g).type('maica@yopmail.com');
    cy.xpath(testdata.h).type('9169227896');
    cy.xpath(testdata.i).type('12345678');
    cy.xpath(testdata.j).type('idnumber1');
    cy.xpath(testdata.k).type('Street Address');
    cy.xpath(testdata.l).type('Company Name');
    cy.xpath(testdata.m).type('CompanyRegNum');
    cy.xpath(testdata.n).type('12345678');
    cy.xpath(testdata.o).type('Company Street Address');

    cy.xpath(testdata.p).click();
    cy.xpath(testdata.q).click();
    cy.contains('Submit').click();
 
    cy.contains('Confirm').click();
    cy.wait(30000);
}

class testData {
    a = '//*[@id="__layout"]/section/main/div/div/div/form/div[1]/div[2]/div[1]/div/input';
    b = '//*[@id="password"]';
    c = '//*[@id="__layout"]/section/main/div/div/div/form/div[1]/div[2]/div[3]/div/div/input';
    d = '//*[@id="__layout"]/section/main/div/div/div/form/div[1]/div[2]/div[4]/div/input';
    e = '//*[@id="__layout"]/section/main/div/div/div/form/div[1]/div[2]/div[5]/div/input';
    f = '//*[@id="__layout"]/section/main/div/div/div/form/div[1]/div[2]/div[6]/div/input';
    g = '//*[@id="__layout"]/section/main/div/div/div/form/div[1]/div[2]/div[7]/div/input';
    h = '//*[@id="__layout"]/section/main/div/div/div/form/div[1]/div[2]/div[8]/div/div/div[2]/input';
    i = '//*[@id="__layout"]/section/main/div/div/div/form/div[1]/div[3]/div[1]/div/div/div[2]/input';
    j = '//*[@id="__layout"]/section/main/div/div/div/form/div[1]/div[3]/div[3]/div/input';
    k = '//*[@id="__layout"]/section/main/div/div/div/form/div[1]/div[3]/div[4]/div/input';
    l = '//*[@id="__layout"]/section/main/div/div/div/form/div[2]/div[2]/div[1]/div/input';
    m = '//*[@id="__layout"]/section/main/div/div/div/form/div[2]/div[2]/div[4]/div/input';
    n = '//*[@id="__layout"]/section/main/div/div/div/form/div[2]/div[2]/div[5]/div/div/div[2]/input';
    o = '//*[@id="__layout"]/section/main/div/div/div/form/div[2]/div[3]/div[1]/div/input';
    p = '//*[@id="__layout"]/section/main/div/div/div/form/div[2]/div[3]/div[7]/div/label/span[1]';
    q='//*[@id="__layout"]/section/main/div/div/div/form/div[2]/div[3]/div[7]/div/label/span[1]';

}