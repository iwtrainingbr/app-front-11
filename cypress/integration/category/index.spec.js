describe('testar pagina de cidade', () => {
    before(() => {
      cy.visit('http://localhost:3000');
    });
  
    it ('Testar se tá na pagina de categoria', () => {
      cy.contains('we match');
  
      
        cy.get('[data-cy="btn-menu"]').click();
    
  
      cy.get('[data-cy="categorias"]').click();
  
      cy.contains('listar categorias');
  
      cy.contains('musica');
    });
  
  
  });
  