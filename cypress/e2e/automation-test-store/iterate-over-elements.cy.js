/// <reference types = 'Cypress' />
describe('Iterate over elements', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com');
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
  });
  it('Log information of all hair care products', () => {
    // cy.visit('https://automationteststore.com');
    // cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
    //iterar lista de elementos de HAIR CARE por header
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
      cy.log('Index:' + index + ' : ' + $el.text());
    });
  });
  //iterar lista de elementos de HAIR CARE y valido  Curls to straight Shampoo
  it('Add specific product to basket', () => {
    // cy.visit('https://automationteststore.com');
    // cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

    // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
    //   if ($el.text().includes('Curls to straight Shampoo')) {
    //     cy.wrap($el).click();
    //   }
    // });
    cy.selectProduct('Curls to straight Shampoo');
  });

  it('Add another specific product to basket', () => {
    // cy.visit('https://automationteststore.com');
    // cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

    cy.selectProduct('Seaweed Conditioner'); //Reutilizacion de custom command
  });

  it('Add parfumee to basket', () => {
    cy.selectProduct('Eau Parfumee au The Vert Shampoo'); //
  });
});
