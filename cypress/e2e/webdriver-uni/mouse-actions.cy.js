/// <reference types = 'Cypress' />
/// <reference types = 'cypress-xpath' />

describe('Test mouse action', () => {
  it('Scroll element into view', () => {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#actions')
      .scrollIntoView()
      .invoke('removeAttr', 'target')
      .click({ force: true });
  });
  it('Be able to drag and drop a draggable item', () => {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#actions')
      .scrollIntoView()
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.get('#draggable').trigger('mousedown', { which: 1 });
    cy.xpath('//div[contains(@id, "droppable")]')
      .trigger('mousemove')
      .trigger('mouseup', { force: true });
  });

  it('Be able to perform a double mouse click', () => {
    cy.visit('/');
    cy.get('#actions')
      .scrollIntoView()
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.reload();
    cy.xpath('//div[contains(@id, "double-click")]').dblclick();
  });

  it.only('Be able to hold down the left mouse click button on a given element', () => {
    cy.visit('/');
    cy.get('#actions')
      .scrollIntoView()
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.reload();
    cy.xpath('//div[contains(@id, "click-box")]')
      .trigger('mousedown', {
        which: 1,
      })
      .then(($element) => {
        expect($element).to.have.css('background-color', 'rgb(0, 255, 0)');
      });
  });
});
