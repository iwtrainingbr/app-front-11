describe('testar pagina de cadastro', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it (' testar se está pagina inicia ', () => {
    cy.contains('we match');

    cy.wait(1000);
    cy.get('[data-cy="btn-menu"]').click();

    cy.wait(1000);
    cy.get('[data-cy="menu-cadastro"]').click();

    cy.wait(1000);
    cy.contains('FAÇA SEU CADASTRO');

    cy.wait(1000);
    cy.get('[id="nome"]').type('mariana');

    cy.wait(1000);
    cy.get('[id="email"]').type('mari@email.com');

    cy.wait(1000);
    cy.get('[id="telefone"]').type('85994081983');

    cy.wait(1000);
    cy.get('[id="senha"]').type('12345678');

    cy.wait(1000);
    cy.get('button[id="salvar"]').click();
  });


});
