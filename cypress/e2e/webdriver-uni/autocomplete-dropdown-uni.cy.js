/// <reference types = 'Cypress' />
/// <reference types = 'cypress-xpath' />

describe('Verify autocomplete dropdown list via webdriveruni', () => {
  it('Select specific produc via autocomplete list', () => {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#autocomplete-textfield')
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.xpath('//input[contains(@name,"food-item")]').type('A');
    cy.get('#myInputautocomplete-list > *')
      .each(($el, index, $list) => {
        const prod = $el.text(); // use metodo jquery para extraer texto y lo almaceno en prod
        const productToSelect = 'Avacado'; // cree producToSelect y almaceno
        if (prod == productToSelect) {
          //$el.click();
          $el.trigger('click');
          cy.get('#submit-button').click();
          cy.url().should('include', productToSelect);
        }
        //desafio
      })
      .then(() => {
        cy.xpath('//input[contains(@name,"food-item")]').type('g');
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
          const prod = $el.text(); // use metodo jquery para extraer texto y lo almaceno en prod
          const productToSelect = 'Grapes'; // cree producToSelect y almaceno
          if (prod == productToSelect) {
            //$el.click();
            $el.trigger('click');
            cy.get('#submit-button').click();
            cy.url().should('include', productToSelect);
          }
        });
      });
  });
});
