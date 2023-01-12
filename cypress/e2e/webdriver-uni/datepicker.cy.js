/// <reference types = 'Cypress' />

describe('Test Datapicker via webdriveruni', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#datepicker').invoke('removeAttr', 'target').click({ force: true });
    cy.get('#datepicker').click();
  });
  it('Select date from the datepicker', () => {
    // let date = new Date();
    // date.setDate(date.getDate()); //obtiene dia actual, 8
    // cy.log(date.getDate());

    // let datew = new Date();
    // datew.setDate(datew.getDate() + 5); // suma 5 al dia actual, obtiene 13
    // cy.log(datew.getDate());

    var date = new Date();
    date.setDate(date.getDate() + 86); // suma 1 al dia actual

    var futureYear = date.getFullYear(); //obtiene el año
    var futureMonth = date.toDateString('default', { month: 'long' }); //obtiene el mes
    var futureDay = date.getDate(); //obtener el dia futuro

    cy.log('Future to select:' + futureYear);
    cy.log('Future month to select:' + futureMonth);
    cy.log('Future Date to select:' + futureDay);

    function selectMonthAndYear() {
      //con first selecciona el mes
      cy.get('.datepicker-dropdown')
        .find('.datepicker-switch')
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get('.next').first().click();
            selectMonthAndYear();
          }
        })
        .then(() => {
          cy.get('.datepicker-dropdown')
            .find('.datepicker-switch')
            .first()
            .then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                cy.get('.next').first().click();
                selectMonthAndYear();
              }
            });
        });
    }

    function selectFutureDay() {
      cy.get('[class="day"]').contains(futureDay).click();
    }

    selectMonthAndYear();
    selectFutureDay();
  });
});
