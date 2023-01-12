/// <reference types = 'Cypress' />
/// <reference types = 'cypress-xpath'/>

describe('Handle js alerts', () => {
  it('Confirm js alerts contains the correct text', () => {
    cy.visit('/');
    cy.get('#popup-alerts')
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.xpath("//span[@id='button1']").click();
    cy.on('window:alert', (str) => {
      expect(str).to.eq('I am an alert box!'); //Lo obtengo del popup
    });
  });

  it('Validate js confirm alert box works correctly when clicking OK', () => {
    cy.visit('/');
    cy.get('#popup-alerts')
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.xpath("//span[@id='button4']").click();
    cy.on('window:alert', (str) => {
      return true; //Click en ok y regresa verdadero
    });
    cy.get('#confirm-alert-text').contains('You pressed OK!');
  });
  it('Validate js confirm alert box works correctly when clicking Cancel', () => {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#popup-alerts')
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.xpath("//span[@id='button4']").click();
    cy.on('window:confirm', (str) => {
      return false; //Click Cancel y regresa false
    });
    cy.get('#confirm-alert-text').contains('You pressed Cancel!');
  });

  it.only('Validate js confirm alert box using stub', () => {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#popup-alerts')
      .invoke('removeAttr', 'target')
      .click({ force: true });

    const stub = cy.stub();
    cy.on('window:confirm', stub);
    cy.xpath("//span[@id='button4']")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Press a button!');
      })
      .then(() => {
        return true;
      })
      .then(() => {
        cy.get('#confirm-alert-text').contains('You pressed OK!');
      });
  });
});
