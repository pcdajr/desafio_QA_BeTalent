# BDD e Estórias de Usuário - API Restful Booker

## Objetivo

Refinando e alinhando o entendimento sobre o sistema da API existente, sua finalidade, cliente final e o produto da regra de negócio.

---


##  AUTENTICAÇÃO DO USUÁRIO
  
  [Como] um usuário da API\
  [Quero] realizar a autenticação\
  [Para] obter um token de acesso às rotas protegidas\
  
 
  Cenário: Gerar token de autenticação com sucesso
    Dado que eu tenha as credenciais válidas "admin" e "password123"
    Quando eu enviar uma requisição POST para "/auth"
    Então o status code deve ser 200
    E o corpo da resposta deve conter um "token".



## CRIAR RESERVA

[Como] um sistema de reservas ou cliente final,\
[Quero] cadastrar uma nova reserva informando os dados do hóspede e do período,\
[Para] que a hospedagem seja registrada no sistema e o ID de confirmação seja gerado.\

 
  Cenário: Criar uma nova reserva com sucesso
    Dado que eu informe os dados de uma nova reserva:
      | firstname | lastname | totalprice | depositpaid | checkin    | checkout   |
      | "João"    | "Silva"  | 150        | true        | 2024-01-01 | 2024-01-05 |
    Quando eu enviar uma requisição POST para "/booking"
    Então o status code deve ser 200
    E a resposta deve conter o "bookingid" gerado




##  CONSULTAR RESERVA

[Como] um recepcionista ou administrador de hotel,\
[Quero] visualizar a lista de reservas existentes ou buscar os detalhes de uma reserva específica,\
[Para] que eu possa identificar os hóspedes e gerenciar o fluxo de entrada e saída do hotel.\


 
  Cenário: Listar todos os IDs de reservas
    Quando eu enviar uma requisição GET para "/booking"\
    Então o status code deve ser 200\
    E a resposta deve retornar uma lista de IDs\

 
  Cenário: Consultar uma reserva específica pelo ID
    Dado que eu possua o ID de uma reserva existente
    Quando eu enviar uma requisição GET para "/booking/{id}"
    Então o status code deve ser 200
    E os dados retornados devem corresponder aos da reserva




## ATUALIZAÇÃO TOTAL DE RESERVA

[Como] um administrador do sistema de reservas,\
[Quero] modificar os detalhes de uma reserva já existente (seja de forma total ),\
[Para] corrigir erros de digitação ou atualizar informações conforme a necessidade do cliente.\


  Cenário: Alterar todos os dados de uma reserva existente
    Dado que eu tenha um token de autenticação válido
    E que eu possua o ID de uma reserva "10"
    Quando eu enviar uma requisição PUT para "/booking/10" com novos dados
    Então o status code deve ser 200
    E os dados da reserva devem ser atualizados no sistema



## ATUALIZAÇÃO PARCIAL DE RESERVA

[Como] um administrador do sistema de reservas,\
[Quero] modificar os detalhes de uma reserva já existente (seja de forma parcial ),\
[Para] corrigir erros de digitação ou atualizar informações conforme a necessidade do cliente.\


Cenário: Alterar apenas o nome e sobrenome de uma reserva
    Dado que eu tenha um token de autenticação válido
    Quando eu enviar uma requisição PATCH para "/booking/10" com os campos:
      | firstname | "Maria" |
      | lastname  | "Souza" |
    Então o status code deve ser 200
    E apenas os campos enviados devem ter sido alterados



## EXCLUIR RESERVA

[Como] um usuário do sistema,\
[Quero] remover reservas que foram canceladas,\
[Para] que o inventário de quartos seja liberado e o banco de dados permaneça limpo.\


 
  Cenário: Remover uma reserva do sistema
    Dado que eu tenha um token de autenticação válido
    E que eu escolha uma reserva para exclusão
    Quando eu enviar uma requisição DELETE para "/booking/{id}"
    Então o status code deve ser 201
    E a reserva não deve mais ser encontrada em consultas futuras


  
