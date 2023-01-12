/// <reference types="Cypress" />
/// <reference types = 'cypress-xpath' />

describe('Traversing DOM elements in Cypress', () => {
  beforeEach(() => {
    //permite aplicar para todos los test
    cy.visit('/');
    cy.get('#data-table').invoke('removeAttr', 'target').click({ force: true });
  });
  it('children() to get the children of DOM elements', () => {
    cy.xpath('//ol[contains(@class, "traversal-breadcrumb")]')
      .children('.active') //obtengo clase hija que es .active
      .should('contain', 'Contact Us');
  });

  it('closest() to validate the closest ancestor DOM element', () => {
    cy.xpath('//div[contains(@class, "thumbnail")]').eq(2);
    cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group');
  });

  it('eq() to retrieve a specific element based on index', () => {
    cy.xpath('//div[contains(@class, "thumbnail")]').eq(7);
    cy.get('.traversal-drinks-list > *').eq(2).should('have.text', 'Milk');
  });

  it('filter() to retrieve DOM elements that match a specific selector', () => {
    cy.xpath('//div[contains(@class, "thumbnail")]').eq(5);
    cy.get('.btn-group-toggle > *')
      .filter('.active') //filtra por clase .active
      .should('contain', 'Button-1'); // valida el boton 1
  });

  it('find() to retrieve DOM elements of a given selector', () => {
    cy.xpath('//div[contains(@class, "thumbnail")]').eq(3);
    cy.get('.traversal-pagination')
      .find('li')
      .find('a')
      .should('have.length', 7);
  });

  it('first() to retrieve the first DOM element within elements ', () => {
    cy.xpath('//div[contains(@class, "thumbnail")]').eq(4);
    cy.get('.traversal-table > tbody > tr > td ')
      .first()
      .should('contain', 'Andy');
  });

  it('last() to retrieve the last DOM element within elements', () => {
    cy.xpath('//div[contains(@class, "thumbnail")]').eq(4);
    cy.get('.traversal-table > tbody > tr > td ')
      .last()
      .should('contain', 'Scott');
  });

  it('nextAll() to get all of the next sibling DOM elements within elements', () => {
    cy.xpath('//div[contains(@class, "thumbnail")]').eq(7);
    cy.get('.traversal-drinks-list > *')
      .contains('Tea') //valida Tea
      .nextAll() // tomar los tres elementos que le siguen
      .should('have.length', '3');
  });

  it('nextUntil() to get all of the next sibling DOM elements within elements until another element', () => {
    cy.xpath('//div[contains(@class, "thumbnail")]').eq(7);
    cy.get('.traversal-drinks-list > *');
    cy.get('#coffee').nextUntil('#milk');
  });

  it('not() to remove DOM element(s) from the set of elements', () => {
    cy.get('.traversal-button-states > button')
      .not('.disabled')
      .should('not.have.class', 'disabled');
  });

  it('parent() To get parent DOM element of elements', () => {
    cy.xpath('//mark[contains(@class, "traversal-mark")]')
      .parent()
      .should('contain', 'Lorem ipsum dolor sit amet');
  });

  it('parents() to get parents DOM element of elements', () => {
    cy.get('.traversal-cite').parents().should('match', 'blockquote');
  });

  it('prev() to get the previous sibling DOM element within elements', () => {
    cy.get('.traversal-drinks-list > *')
      .eq(4)
      .should('have.text', 'Sugar')
      .prev()
      .contains('Espresso');
  });

  it('prevAll() to get all previous sibling DOM elements within elements', () => {
    cy.xpath('//ul[contains(@class, "traversal-job-list")]').children('.menu');
    cy.get('.sales').prevAll().should('have.length', 2); //valida que seleccione Sales
  });

  it('prevUntil() to get all previous sibling DOM elements within elements until other element', () => {
    cy.xpath('//ul[contains(@class, "traversal-food-list")]');
    cy.get('#veggie').prevUntil('#fruits').should('have.length', 5); // valida que se seleccione Vegetables
  });

  it.only('siblings() To get all sibling DOM elements of elements', () => {
    cy.get('.traversal-button-other-states .active')
      .siblings()
      .should('have.length', 3);
  });
});
