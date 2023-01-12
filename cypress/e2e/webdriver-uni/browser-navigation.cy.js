/// <reference types = 'Cypress' />

describe('Validate webdriveruni homepage links', () => {
  it('Confirm links redirect to the correct pages', () => {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    cy.url().should('include', 'contactus');

    cy.go('back'); //vuelve para atras
    cy.reload();
    cy.url().should('include', 'http://www.webdriveruniversity.com');

    cy.go('forward'); //va hacia delante de nuevo
    cy.url().should('include', 'contactus');

    cy.go('back');
    cy.reload();
    cy.get('#login-portal')
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.url().should('include', 'Login-Portal');
    cy.go('back');
  });

  //desafio
  it.only('Confirm link redirect to To do List', () => {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#to-do-list').invoke('removeAttr', 'target').click({ force: true });
    cy.url().should('include', 'index'); //cy.url().should('include', 'To-Do-List');ALTERNATIVA
    cy.go('back');
    cy.reload();
  });
});
