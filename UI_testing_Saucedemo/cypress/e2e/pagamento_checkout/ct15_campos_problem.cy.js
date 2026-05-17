describe('Página de confirmação, pagamento/checkout', () => {

   beforeEach(() => {
    cy.visit('/'); 
  });

  it('user com problemas', () => {

    cy.get('[data-test="username"]').type("problem_user");   
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
    cy.get('[data-test="firstName"]').type('Ana');
    cy.get('[data-test="lastName"]').type('Paula');
    cy.get('[data-test="postalCode"]').type('55555555');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('exist').and('have.text','Error: First Name is required');
    cy.get('[data-test="error"]').should('exist').and('have.text','Error: Last Name is required');
    cy.get('[data-test="error"]').should('exist').and('have.text','Error: Postal Code is required');

  })

}) 