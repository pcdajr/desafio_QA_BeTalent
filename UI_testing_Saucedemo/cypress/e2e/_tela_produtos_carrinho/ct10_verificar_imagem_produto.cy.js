
describe('Tela de produtos - Saucedemo', () => {

   beforeEach(() => {
    cy.visit('/'); // antes do caso teste, visitando a url.
   });

   it('Validando imagens dos produtos na loja', () => {

    cy.get('[data-test="username"]').type("problem_user");   //inserindo nome
    cy.get('[data-test="password"]').type("secret_sauce");    //inserindo senha   
    cy.get('[data-test="login-button"]').click();             //clicando


     const conteudo = [] ;

     cy.get('[data-test$="-img"]').each((elemento) => {   
        
        conteudo.push(elemento.attr('src'));  // adicionando cada imagem de cada elemento pelo atributo na lista. 
    }).then(() =>{
        expect(new Set(conteudo).size).to.be.greaterThan(1); // o push de itens iguais faz se sobreescrever restando apenas uma ao final da iteração.                                                 // o greaterThan espera que o tamanho da lista
                                                          // seja  maior que 1, caso contrario há duplicatas.
    });                                                    // logo 1 é bug, e se forem igual em tamanho tudo certo, mostra que todas imagens são unicas

    });

});