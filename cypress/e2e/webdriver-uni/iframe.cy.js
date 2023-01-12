/// <reference types = 'Cypress' />

describe('Handling Iframe & Modals', () => {
  it('Handle Iframe webdriveruni iframe and modal', () => {
    cy.visit('/');
    cy.get('#iframe').invoke('removeAttr', 'target').click({ force: true });
    cy.get('#frame').then(($iframe) => {
      const body = $iframe.contents().find('body');
      cy.wrap(body).as('iframe');
    });
    //@ de alias que se llama iframe
    cy.get('@iframe').find('#button-find-out-more').click();
    cy.get('@iframe').find('#myModal').as('modal');

    cy.get('@modal').should(($expectedText) => {
      const text = $expectedText.text();
      expect(text).to.include(
        'Welcome to webdriveruniversity.com we sell a wide range of electrical goods'
      );
    });
    cy.get('@modal').contains('Close').click();
  });
});
