/// <reference types = 'Cypress' />
/// <reference types = 'cypress-xpath' />

describe('Verify radio buttons via webdriveruni', () => {
  it('Check specific radio buttons', () => {
    cy.visit('/');
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.xpath('//div[contains(@class, "thumbnail")]');
    cy.get('.thumbnail').eq(2);
    cy.get('#radio-buttons').find("[type='radio']").first().check();
    cy.get('#radio-buttons').find("[type='radio']").eq(1).check();
  });

  it('Validate the states of specific radio buttons', () => {
    cy.visit('/');
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.xpath('//div[contains(@class, "thumbnail")]');
    cy.get('.thumbnail').eq(3);
    cy.get("[value='lettuce']").should('not.be.checked');
    cy.get("[value='pumpkin']").should('be.checked'); //valida que se checkee
    cy.get("[value='lettuce']").check();
    cy.get("[value='lettuce']").should('be.checked');
    cy.get("[value='pumpkin']").should('not.be.checked');
    cy.get("[value='cabbage']").should('be.disabled');
  });
});
