describe('Página de login Saucedemo', () => {

   beforeEach(() => {
    cy.visit('/'); 
  });

  it('Campos vazios - não deve entrar no sistema e aparecer balão de dicas', () => { 

    cy.get('[data-test="username"]').should('be.empty');   //garantindo os campos em vazios.  
    cy.get('[data-test="password"]').should('be.empty');

    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')       // Encontrando mensagem de erro de campos não preenchidos.
      .should('be.visible')
      .and('contain','Epic sadface: Username is required');      
    
  })
}) 