
describe('Tela de produtos - Saucedemo', () => {

 
   beforeEach(() => {
    cy.visit('/'); // antes do caso teste, visitando a url.
  });

  it('Remover itens do carrinho e testar notificação da quantidade no cart', () => {

    cy.get('[data-test="username"]').type("standard_user");   //inserindo nome
    cy.get('[data-test="password"]').type("secret_sauce");    //inserindo senha   
    cy.get('[data-test="login-button"]').click();             //clicando



  //ADICIONANDO ITENS AO CARRINHO NOVAMENTE PARA TESTAR A REMOÇÃO.
    cy.get('[data-test^="add-to-cart"]').each((elemento, indice) => { 
           const comparador = (indice +1);     
          
           cy.wrap(elemento).should("be.visible").and("have.text",'Add to cart').click();

            cy.get('[data-test="shopping-cart-badge"]')
            .should("exist")
            .and("be.visible")            
            .and('have.text',comparador.toString());
            

          });


// REMOVENDO ITENS DO CARRINHO
           
           
    cy.get('[data-test^="remove"]').each((elemento, indice) => { 
            
            cy.wrap(elemento)
              .should("be.visible")
              .and("have.text",'Remove')    
              .click();

     });     
    
    
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist');


    
  });

});