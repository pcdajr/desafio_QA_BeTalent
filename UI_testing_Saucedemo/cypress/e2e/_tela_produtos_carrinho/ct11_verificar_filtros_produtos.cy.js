
describe('Tela de produtos - Saucedemo', () => {

   beforeEach(() => {
    cy.visit('/'); // antes do caso teste, visitando a url.
   });

   it('Validando filtros na lista de produtos', () => {

    cy.get('[data-test="username"]').type("error_user");   //inserindo nome
    cy.get('[data-test="password"]').type("secret_sauce");    //inserindo senha   
    cy.get('[data-test="login-button"]').click();             //clicando


    // Aqui só pelos valores dentro do <option> a lista suspensa no html, pelo elemento do cypress não consegui.

    cy.get('[data-test="product-sort-container"]').select('lohi');
    cy.contains('Sorting is broken! This error has been reported to Backtrace.').should('exist');

    cy.get('[data-test="product-sort-container"]').select('za');  
    cy.contains('Sorting is broken! This error has been reported to Backtrace.').should('exist');
    
    cy.get('[data-test="product-sort-container"]').select('az');
    cy.contains('Sorting is broken! This error has been reported to Backtrace.').should('exist');  
    
    cy.get('[data-test="product-sort-container"]').select('hilo');
    cy.contains('Sorting is broken! This error has been reported to Backtrace.').should('exist');

    });

});