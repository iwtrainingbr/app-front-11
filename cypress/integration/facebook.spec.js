describe('testar login do facebook', () => {
  before(() => {
    cy.visit('https://facebook.com');
  });

  it ('', () => {
    cy.visit('/login')
    //code
  });

  it ('Testar formulario login', () => {
    cy.contains('Facebook');

    cy.wait(3000);

    cy.get('[id="email"]').type('eriko@email.com');
    cy.get('[id="pass"]').type('12345678');

    cy.get('button[name="login"]').click();

  });


});
