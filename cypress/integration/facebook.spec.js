describe('testar login do facebook', () => {
  before(() => {
    cy.visit('https://facebook.com');
  });

  it ('Testar formulario login', () => {
    cy.contains('Facebook');

    cy.get('[id="email"]').type('eriko@email.com');
    cy.get('[id="pass"]').type('12345678');

    cy.get('button[name="login"]').click();

  });


});
