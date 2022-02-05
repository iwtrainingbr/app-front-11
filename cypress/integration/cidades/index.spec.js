describe('testar pagina de cidade', () => {
  before(() => {
    cy.viewport('iphone-6');
    cy.visit('http://localhost:3000');
  });

  it ('Testar se tá na pagina inicial', () => {
    cy.contains('we match');

    // for (let i = 1; i <= 2000; i++) {
      cy.get('[data-cy="btn-menu"]').click({force: true});
    // }

    cy.contains('Cidades').click();

    cy.contains('Pagina de Cidades');

    cy.contains('fortaleza');
  });


});
