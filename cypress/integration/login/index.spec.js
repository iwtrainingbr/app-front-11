describe('testar pagina de login', () => {
    before(() => {
      cy.visit('http://localhost:3000/Login');
    });
  
    it ('Testar se tá na pagina inicial', () => {
      cy.contains('Entrar no We Macth!');
  
        cy.get('[data-cy="usu"]').click({force: true});

        cy.get('[data-cy="usu"]').type('mikael@email.com');
        cy.get('[data-cy="pass"]').type('12345678');

  
        cy.get('[data-cy="avançar"]').click();
    });
  
  
  });