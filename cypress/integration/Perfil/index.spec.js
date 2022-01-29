describe('testar pagina de listar perfil', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it ('Testar se tá na pagina inicial', () => {
    cy.contains('we match');

    cy.get('[data-cy="btn-menu"]').click({force: true});

    cy.contains('Perfis').click();

    cy.contains('Saiba mais');

    cy.contains('Descartar');
  });


});
