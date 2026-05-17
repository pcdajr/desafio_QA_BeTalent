describe('Página de login Saucedemo', () => {

   beforeEach(() => {
    cy.visit('/'); 
  });

   

  it('Usuário sob performance deve demorar mais que 5 segundos ', () => { 

    const tempoInicial = Date.now();      // Utilizando essa forma pois não tem API é um configuração no site do Saucedemo

    cy.get('[data-test="username"]').type("performance_glitch_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    
    cy.get('https://www.saucedemo.com/inventory.html').should('be.visible').then(()=>{

    const tempoFinal = date.now();
    const delta = tempoFinal - tempoInicial; 

    cy.log("Tempo de login:"+ delta + "ms");    // Uma gambiarra compativel com o site :/ Por enquanto kkkkk.
    expect(delta).to.be.greaterThan(5000);    

    });
      
  })
}) 