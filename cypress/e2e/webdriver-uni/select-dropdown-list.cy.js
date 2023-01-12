/// <reference types = 'Cypress' />
/// <reference types = 'cypress-xpath' />

describe('Interact with dropdown lists via webdriveruni', () => {
  it('Select specific values via select dropdown list', () => {
    cy.visit('/');
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.xpath('//div[contains(@class, "thumbnail")]');
    cy.get('.thumbnail').eq(0);
    cy.get('#dropdowm-menu-1').select('c#');
    cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng'); //selecciona por valor
    cy.get('#dropdowm-menu-3').select('jquery').contains('JQuery'); //selecciona por texto

    //desafio--> Maven based on value, TestNG based on Text
    cy.get('#dropdowm-menu-2').select('maven');
    cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven');

    cy.get('#dropdowm-menu-2').select('testng').contains('TestNG');
  });
});
