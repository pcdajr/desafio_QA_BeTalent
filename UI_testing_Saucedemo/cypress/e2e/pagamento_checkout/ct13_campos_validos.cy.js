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

    // garantindo clicks com campos não preenchidos para a asserção.
    cy.get('[data-test="firstName"]').type('Paulo');
    cy.get('[data-test="lastName"]').type('Andrade');
    cy.get('[data-test="postalCode"]').type('55443789');
    cy.get('[data-test="continue"]').click();
    

    //Verificando a última página
    
    cy.get('[data-test="finish"]').should('be.visible').and('contain.text','Finish').click();

  })

}) 