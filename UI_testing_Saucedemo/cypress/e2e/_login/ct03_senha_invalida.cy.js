describe('Página de login Saucedemo', () => {

   beforeEach(() => {
    cy.visit('/'); 
  });

  it('senha inválida - não deve entrar no sistema', () => {
    cy.get('[data-test="username"]').type("locked_out_user");
    cy.get('[data-test="password"]').type("error");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface: Username and password do not match any user in this service');
    
  })
}) 