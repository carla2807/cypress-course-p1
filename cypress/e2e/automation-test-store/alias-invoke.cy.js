/// <reference types = "Cypress" />

describe('Alias and invoke', () => {
  it('Validate a specific hair care product', () => {
    cy.visit('https://automationteststore.com');
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
    cy.get('.fixed_wrapper .prdocutname')
      .eq(0) // el indice 0 indica el primer elemento del array de los headers(Seaweed Conditioner)
      .invoke('text')
      .as('productThumbnail'); // productThumbnail nombre cualquiera
    cy.get('@productThumbnail').its('length').should('be.gt', 5);
    cy.get('@productThumbnail').should('include', 'Seaweed Conditioner');
  });

  //Ejercicio
  it('Validate product thumbnail', () => {
    cy.visit('https://automationteststore.com');
    cy.get('.thumbnail').as('productThumbnail');
    cy.get('@productThumbnail').should('have.length', 16);
    cy.get('@productThumbnail')
      .find('.productcart')
      .invoke('attr', 'title')
      .should('include', 'Add to Cart');
  });

  //Combining Alias, Invoke, Variables
  it.only('Calculate total of normal and sale products', () => {
    cy.visit('https://automationteststore.com');
    cy.get('.thumbnail').as('productThumbnail'); //Crea alias productThumbnail para iterar todos los productos con la clase thumbnail
    // cy.get('@productThumbnail') //encuentra la clase
    //   .find('.oneprice') //devuelve los elementos que no tienen descuento
    //   .each(($el, index, $list) => {
    //     cy.log($el.text());
    //   });
    cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');
    var itemsTotal = 0; //Crea itemsTotal

    cy.get('@itemPrice').then(($linkText) => {
      var itemsPriceTotal = 0; //Crea itemsPriceTotal
      var itemPrice = $linkText.split('$'); //Creo itemPrice
      var i; // Creo i para iterar en el for
      for (i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemsPriceTotal += Number(itemPrice[i]); //itemsPriceTotal guarda itemPrice y luego permite iterar
        //1° iteracion almacena $29.50 hasta que añade todos los precios
      }
      itemsTotal += itemsPriceTotal; //itemsTotal guardar el total de los productos iterados en for
      cy.log('Non sale price total: ' + itemsPriceTotal); //Se muestra el total
    });
    //
    cy.get('@saleItemPrice')
      .then(($linkText) => {
        var itemsPriceTotal = 0;
        var saleItemPrice = $linkText.split('$');
        var i;
        for (i = 0; i < saleItemPrice.length; i++) {
          cy.log(saleItemPrice[i]);
          itemsPriceTotal += Number(saleItemPrice[i]);
        }
        itemsTotal += itemsPriceTotal;
        cy.log('Sale price items total: ' + itemsPriceTotal);
      })
      .then(() => {
        cy.log('The total price of all products: ' + itemsTotal);
        expect(itemsTotal).to.equals(625.6);
      });
  });
});
