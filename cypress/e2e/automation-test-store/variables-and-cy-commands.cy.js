/// <reference types= 'Cypress' />

describe('Verify variables, cypress commands and jquery commands ', () => {
  it('Navigating to specific product pages', () => {
    cy.visit('https://automationteststore.com');
    cy.get("a[href*='product/category&path=']").contains('Makeup').click(); //Recommended
    cy.get("a[href*='product/category&path=']").contains('Skincare').click();
  });

  it('Navigating to specific product pages', () => {
    cy.visit('https://automationteststore.com');
    cy.get("a[href*='product/category&path=']").contains('Makeup').click();
    cy.get('.maintext') //JQuery
      .contains('Makeup')
      .then(($headerText) => {
        const headerText = $headerText.text();
        cy.log('Found header text:' + headerText);
        expect(headerText).is.eq('Makeup');
      });
  });
  //Commands and chaining
  it.only('Navigating to specific product pages', () => {
    cy.visit('https://automationteststore.com');
    cy.xpath("//a[contains(@href, 'contact')]").click();
    // cy.contains('#ContactUsFrm', 'Contact Us Form')
    //   .find('#field_11')
    //   .should('contain', 'First name:');

    //JQuery
    cy.contains('#ContactUsFrm', 'Contact Us Form').then((text) => {
      const firstName = text.find('#field_11').text();
      expect(firstName).to.contain('First name');
      //desafio: lo mismo con los otros campos:Email,Enquiry
      const Email = text.find('#field_12').text();
      expect(Email).to.contain('Email');

      const Enquiry = text.find('#field_13').text();
      expect(Enquiry).to.contain('Enquiry');

      //Closure
      cy.get('#field_11').then((fnText) => {
        cy.log(fnText.text());
        cy.log(fnText);
      });
    });
  });
});
