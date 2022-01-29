describe('testar pagina de configuração', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it ('should change to dark mode', () => {
    cy.contains('we match');
    cy.get('[data-cy="btn-menu"]').click();
    cy.get('[data-cy="btn-config"]').click();
    cy.get('[data-cy="btn-dark-mode"]').click();
    cy.get('[data-cy="navbar"]')
       .should('have.css', 'background-color')
       .and('eq', 'rgba(0, 0, 0, 0)')
  });


});
