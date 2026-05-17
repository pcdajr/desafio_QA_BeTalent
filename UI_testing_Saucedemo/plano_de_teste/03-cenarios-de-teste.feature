## CENÁRIO 01

Feature: BASEADO NO USER STORY 01 - US01
Scenario: LOGIN
PRÉ-CONDIÇÃO: USUÁRIO CADASTRADO NO SISTEMA

 Given Usuário na tela de login 
 When Insere o username/senha
 And Clica no botão de login para entrar
 Then Muda para página da loja com a lista de produtos

## CENÁRIO 02

Feature: BASEADO NO USER STORY 02 - US02
Scenario: ADICIONAR AO CARRINHO
PRÉ-CONDIÇÃO: USUÁRIO LOGADO NO SISTEMA
</br>
 Given Usuário na tela de produtos (loja)
 When Clica no botão "add to cart" do produto desejado
 And Clica no botão icone/botão carrinho(cart)
 Then Muda para página do carrinho

## CENÁRIO 03

Feature: BASEADO NO USER STORY 03 - US03 
Scenario: CHECKOUT/ FINALIZAÇÃO DE COMPRA 
PRÉ-CONDIÇÃO: CARRINHO PREENCHIDO COM PRODUTO SELECIONADO

 Given  Usuário na tela de informações/ dados de pagamento
 When  Insere entrada nos campos "Nome", "Sobrenome", "CEP"
 And Clica no botão "continue"
 Then Muda para página da overview/visão geral com a lista de produtos escolhida e clicar no botão "finish" 
