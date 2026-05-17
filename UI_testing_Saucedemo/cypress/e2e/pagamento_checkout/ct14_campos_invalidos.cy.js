describe('Página de confirmação, pagamento/checkout', () => {

   beforeEach(() => {
    cy.visit('/'); 
  });

  it('Login válido', () => {

    cy.get('[data-test="username"]').type("standard_user");   
    cy.get('[data-test="password"]').type("secret_sauce");      
    cy.get('[data-test="login-button"]').click();
    
    //adicionando 2 produtos 
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();     
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

    //clicando no carrrinho
    cy.get('[data-test="shopping-cart-link"]').click();

    // clicando em checkout
    cy.get('[data-test="checkout"]').click(); 

    // garantindo clicks com campos preenchidos para a asserção.
    cy.get('[data-test="firstName"]').type('1234');
    cy.get('[data-test="lastName"]').type('5678');
    cy.get('[data-test="postalCode"]').type('ACF45@');
    cy.get('[data-test="continue"]').should('be.disabled');
    cy.get('.error-message-container').should('exist');

  })

}) 