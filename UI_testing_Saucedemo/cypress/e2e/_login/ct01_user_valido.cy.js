
describe('Página de login Saucedemo', () => {

   beforeEach(() => {
    cy.visit('/'); // antes do caso teste, visitando a url.
  });

  it('Login válido', () => {

    cy.get('[data-test="username"]').type("standard_user");   //inserindo nome
    cy.get('[data-test="password"]').type("secret_sauce");    //inserindo senha   
    cy.get('[data-test="login-button"]').click();             //clicando

    
    cy.get('[data-test="inventory-container"]').should('exist').and('be.visible'); // verificando se aparece container da prócima página.
  })

}) 