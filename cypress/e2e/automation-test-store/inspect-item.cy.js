/// <reference types= 'Cypress' />
/// <reference types = 'cypress-xpath'/>

describe('Inspect Automation Test Store items using chain of commands ', () => {
  it('Click on the first item using item text', () => {
    cy.visit('https://automationteststore.com');
    cy.xpath('//a[contains(@title, "Skinsheen Bronzer Stick")]')
      .click()
      .then(function (itemHeaderText) {
        console.log('Selected the following item:' + itemHeaderText.text());
      });
    //cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click();//ALTERNATIVA
  });
  it('Click on the first item using index', () => {
    cy.visit('https://automationteststore.com');
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
  });
});
