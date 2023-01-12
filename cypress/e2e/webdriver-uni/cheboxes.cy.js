/// <reference types = 'Cypress' />
/// <reference types = 'cypress-xpath' />

//desafio con hook before
describe('Verify checkboxes via webdriveruni', () => {
  before(function () {
    // cy.navigateTo_WebdriverUni_Homepage();
    // cy.get('#dropdown-checkboxes-radiobuttons')
    //   .invoke('removeAttr', 'target')
    //   .click({ force: true });
    cy.navigateTo_WebdriverUni_Checkbox_Page();
  });

  it('Uncheck option 3 and validate checkbox option 1', () => {
    // cy.visit('/');
    // cy.get('#dropdown-checkboxes-radiobuttons')
    //   .invoke('removeAttr', 'target')
    //   .click({ force: true });
    cy.xpath('//div[contains(@class, "thumbnail")]'); //selecciono la clase
    cy.get('.thumbnail').eq(1); //filtro por index, como quiero ir a checkboxes va indice 1
    cy.get('input[type=checkbox]').uncheck(['option-3']); //no checkea opcion 3
    cy.get('input[type=checkbox]').check('option-1'); //checkea la opcion 1
  });
  it('Check multiple checkboxes', () => {
    // cy.visit('/');
    // cy.get('#dropdown-checkboxes-radiobuttons')
    //   .invoke('removeAttr', 'target')
    //   .click({ force: true });
    cy.go('back'); //vuelve para atras
    cy.reload();
    cy.url().should('include', 'http://www.webdriveruniversity.com');
    cy.xpath('//div[contains(@class, "thumbnail")]');
    cy.get('.thumbnail').eq(1);
    //cy.get('input[type=checkbox]');
    //   .check(['option-1', 'option-2', 'option-3', 'option-4'])
    //   .should('be.checked');
    cy.get(':checkbox').not('[disabled]').check({ multiple: true });
  });
});
