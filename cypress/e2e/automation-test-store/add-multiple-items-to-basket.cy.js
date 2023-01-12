/// <reference types = 'Cypress' />
/// <reference types = 'cypress-xpath' />

describe('Add multiple items to basket', () => {
  before(function () {
    cy.fixture('products.json').then(function (data) {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    cy.visit('https://automationteststore.com');
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
  });
  //productName es el objeto json
  //addProductToBasket es el commands
  // con forEach itero la lista que son los 3 productos del json
  it('Add specific to basket', () => {
    globalThis.data.productName.forEach(function (element) {
      cy.addProductToBasket(element);
    });
    cy.get('.dropdown-toggle > .fa').click();
  });
});
