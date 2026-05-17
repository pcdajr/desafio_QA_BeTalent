
describe('Tela de produtos - Saucedemo', () => {

   beforeEach(() => {
    cy.visit('/'); // antes do caso teste, visitando a url.
   });

   it('Testando outro usuário para escolher produtos e add to cart', () => {

    cy.get('[data-test="username"]').type("problem_user");   //inserindo nome
    cy.get('[data-test="password"]').type("secret_sauce");    //inserindo senha   
    cy.get('[data-test="login-button"]').click();             //clicando


     cy.get('[data-test^="add-to-cart"]').each((elemento, indice) => {  
           const comparador = (indice +1);     
          
           cy.wrap(elemento).should("be.visible").and("have.text",'Add to cart').click();

            cy.get('[data-test="shopping-cart-badge"]')
            .should("exist")
            .and("be.visible")            
            .and('have.text',comparador.toString());

        });


    });

});