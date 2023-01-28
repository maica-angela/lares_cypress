import { amendNoticeReg } from "./amendNoticeRegistry.cy";
import { lraTransaction } from "./lraTransactionProcess.cy";
import { searchCertReg } from "./searchCertReg.cy";

export function searchCertRegPage() {
  const testdata = new testData();

 //cy.contains('Search the Registry').click();
 // cy.contains('Proceed').click();
  cy.contains('Transaction History').click();
  cy.xpath(testdata.searchRegistry).click();
  cy.xpath(testdata.b).click({ force: true });
  cy.contains('Processed').click();
  cy.xpath(testdata.a).click({ force: true });
  cy.get('span.multiselect__option').eq(1).should('have.text', 'Search').click({ force: true });
  cy.xpath(testdata.find).click({ force: true });
  cy.wait(2000);
  cy.xpath(testdata.firstView).click({ force: true });
  cy.wait(5000);

}

class testData {
  okay = '//*[@id="modalQueryPostSubmit___BV_modal_body_"]/div[2]/button';

  a = '//*[@id="__layout"]/section/main/div/div/div[1]/form/div[1]/div[1]/div/div/div/div[1]';
  b = '//*[@id="__layout"]/section/main/div/div/div[1]/form/div[1]/div[2]/div/div/div/div[2]/span';
  c = '//*[@id="__layout"]/section/main/div/div/div[2]/div/div/div[2]/div/div[2]/a/span[6]/div/a';
  contactName = '//*[@id="modalEmailRecipients___BV_modal_body_"]/div[1]/div/div/input';
  emailAddress = '//*[@id="modalEmailRecipients___BV_modal_body_"]/div[2]/div/div/input';
  mobNumber = '//*[@id="modalEmailRecipients___BV_modal_body_"]/div[3]/div/div/div/div[2]/input';

  okay = '//*[@id="modalQueryConfirmSubmit___BV_modal_body_"]/div[2]/button';

  searchRegistry = '//*[@id="__layout"]/section/main/div/ul/li[2]/a';
  firstView = '//*[@id="__layout"]/section/main/div/div/div[2]/div/div/div[2]/div/div[2]/a/span[6]/div/a';

  find = '//*[@id="__layout"]/section/main/div/div/div[1]/form/div[2]/div[3]/div/div/button';
  searchtype = '#__layout > section > main > div > div > div.form-default.search-filter.pl-5.pr-5.pt-5.pb-3 > form > div:nth-child(1) > div.col.col-sm-6.col-lg-4.pr-2 > div > div > div > div.multiselect__tags > span';



}