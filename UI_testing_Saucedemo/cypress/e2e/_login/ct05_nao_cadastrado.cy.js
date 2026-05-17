describe('Página de login Saucedemo', () => {

   beforeEach(() => {
    cy.visit('/'); 
  });

  it('Usuário Fake - sem cadastrado no sistema', () => { 
    cy.get('[data-test="username"]').type("paulo");
    cy.get('[data-test="password"]').type("1234");
    
    cy.get('[data-test="login-button"]').click();

    // capturando o elemento, verificando se tem a mensagem e se é vísivel.

    cy.get('[data-test="error"]')       // Encontrando mensagem do usuário não cadastrado no sistema.
      .should('be.visible')
      .and('contain','Epic sadface: Username and password do not match any user in this service'); 
                                     
    
  })
}) 