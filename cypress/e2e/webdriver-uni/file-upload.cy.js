///<reference types ='Cypress' />
/// <reference types = 'cypress-xpath' />

describe('Test File Upload via webdriveruni', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#file-upload')
      .invoke('removeAttr', 'target')
      .click({ force: true });
  });

  it('Upload a file..', () => {
    cy.xpath('//*[@id="myFile"]').selectFile('cypress/fixtures/laptop.png');
    cy.get('[type="submit"]').click();
  });

  it.only('Upload no file..', () => {
    cy.get('[type="submit"]').click();
  });
});
