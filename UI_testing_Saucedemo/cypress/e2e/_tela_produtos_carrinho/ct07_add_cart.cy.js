
describe('Tela de produtos - Saucedemo', () => {

   beforeEach(() => {
    cy.visit('/'); // antes do caso teste, visitando a url.
  });

  it('Adicionar itens ao carrinho e testar notificação da quantidade no cart', () => {

    cy.get('[data-test="username"]').type("standard_user");   //inserindo nome
    cy.get('[data-test="password"]').type("secret_sauce");    //inserindo senha   
    cy.get('[data-test="login-button"]').click();             //clicando


      /*****
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();  
        cy.get('[data-test="shopping-cart-badge"]')
         .should("exist")                               aqui foi meu 1º teste um por um, estaticamente."
         .and("be.visible")            
         .and('have.text','1')
      ******/

        cy.get('[data-test^="add-to-cart"]').each((elemento, indice) => { 
           const comparador = (indice +1);     
          
           cy.wrap(elemento).should("be.visible").and("have.text",'Add to cart').click();

            cy.get('[data-test="shopping-cart-badge"]')
            .should("exist")
            .and("be.visible")            
            .and('have.text',comparador.toString()); // verificando e convertendo o valor em texto.

              /* linha 23 Oolhando todos os elemento que contém add to cart,
               linha 24 fazendo um contator/flag, como aqui começa contando do zero é a velha story do n+1 (:
               linha 26 foi wrap pra envelopar o jquery retornado e clicando.
               linha 28 até 31 asserção para a notificação da quantidade no icone do carrinho depois dos
               verificando de incrementou.  Uhuuu  */ 
        
        });     

        cy.get('[data-test="shopping-cart-link"]').click();
    
  });

});