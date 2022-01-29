describe('testar pagina de login', () => {
    before(() => {
      cy.visit('http://localhost:3000');
    });

    it ('Testar se tá na pagina inicial', () => {
        cy.contains('we match');

        cy.get('[data-cy="btn-menu"]').click({force: true});

        cy.contains('Sair').click();

        cy.get('[data-cy="usu"]').type('talison@hotmail.com');
        cy.get('[data-cy="pass"]').type('12345678');

  
        cy.get('[data-cy="avançar"]').click();
    });
  
    it ('Testar se tá na pagina inicial', () => {
        cy.contains('we match');

        cy.get('[data-cy="btn-menu"]').click({force: true});

        cy.contains('Sair').click();

        cy.get('[data-cy="esqueceu"]').click();

        cy.get('[data-cy="email"]').type('talisonm@hotmail.com');

        cy.get('[data-cy="enviar"]').click();
    });

});   