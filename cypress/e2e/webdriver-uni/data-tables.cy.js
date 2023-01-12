/// <reference types = 'Cypress' />

describe('Handling data via webdriveruni', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#data-table').invoke('removeAttr', 'target').click({ force: true });
  });
  it('Calculate and assert the total age of all users', () => {
    var userDetails = []; //creo array para iterar td con todos los datos
    let numb = 0;
    cy.get('#thumbnail-1 td')
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        //then para iterar td
        var i; // Creo i para iterar en el for
        for (i = 1; i < userDetails.length; i++) {
          if (Number(userDetails[i])) {
            numb += Number(userDetails[i]);
          }

          //cy.log(userDetails[i]);
        }
        cy.log('Found total age:' + numb);
        expect(numb).to.eq(322);
      });
  });

  it.only('Calculate and assert the age of a given based on last name', () => {
    cy.get('#thumbnail-1 tr td:nth-child(2)') //obtiene todos los last name en la 2° columna
      .each(($el, index, $list) => {
        // each va a iterar todos los last name, index permite que cuando llegue a woods sea 5
        const text = $el.text(); // $el extrae el texto
        if (text.includes('Woods')) {
          cy.get('#thumbnail-1 tr td:nth-child(2)')
            .eq(index) // es 5
            .next()
            .then(function (age) {
              const userAge = age.text();
              expect(userAge).to.eq('80');
            });
        }
      });
  });
});
