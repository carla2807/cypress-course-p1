/// <reference types = 'cypress' />
/// <reference types = 'cypress-xpath' />

describe('Test Contact Us form via Automation Test Store', () => {
  before(function () {
    cy.fixture('userDetails').as('user'); //cree fixture, userDetails es el json creado
  });

  beforeEach(() => {
    cy.visit(
      Cypress.env('automation_teststore') + '/index.php?rt=content/contact'
    );
  });
  it('Should be able to sumbit a successful submision via Contact Us form', () => {
    //cy.visit('https://automationteststore.com');
    //cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.get("a[href$='contact']")
      .click({ multiple: true })
      .then(function (linkText) {
        console.log('Click on link text' + linkText.text());
      });
    //user es el alias creado en el fixture
    cy.get('@user').then((user) => {
      cy.get('#ContactUsFrm_first_name').type(user.first_name);
      cy.get('#ContactUsFrm_email').type(user.email);
    });

    cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email'); //por atributo name que tiene valor email
    cy.get('#ContactUsFrm_enquiry').type(
      'Do you provide additional discount on bulk orders'
    );
    cy.get('button[title="Submit"]').click();
    cy.get('.mb40 > :nth-child(3)').should(
      'have.text',
      'Your enquiry has been successfully sent to the store owner!'
    );
    cy.log('Test has completed');
  });
});
