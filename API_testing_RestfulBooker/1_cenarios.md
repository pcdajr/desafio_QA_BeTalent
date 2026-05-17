# BDD e Estórias de Usuário - API Restful Booker

## Objetivo

Este documento descreve as estórias de usuário e os cenários em BDD para a API Restful Booker, considerando os testes realizados nas funcionalidades de autenticação, criação, consulta, atualização parcial e exclusão de reservas.

Os cenários abaixo representam o comportamento esperado da API. Quando o comportamento real divergiu do esperado, a divergência foi registrada no relatório de bugs.

---

# 1. Funcionalidade: Autenticação

## Estória de usuário

Como consumidor da API,  
quero autenticar minhas credenciais,  
para obter um token de acesso e executar operações protegidas com segurança.

## Critérios de aceite

- Deve ser possível gerar um token com usuário e senha válidos.
- Não deve ser possível autenticar com senha inválida.
- Não deve ser possível autenticar com nome de usuário inválido.
- Credenciais inválidas devem retornar status HTTP adequado, como `401 Unauthorized` ou `403 Forbidden`.

## BDD

```gherkin
Funcionalidade: Autenticação na API Restful Booker
  Como consumidor da API
  Quero autenticar minhas credenciais
  Para obter um token de acesso e executar operações protegidas

  Cenário: Autenticar com usuário e senha válidos
    Dado que eu possuo um usuário "admin"
    E uma senha "password123"
    Quando eu enviar uma requisição POST para "/auth"
    Então a API deve retornar status 200
    E deve retornar um token em formato de string

  Cenário: Tentar autenticar com senha inválida
    Dado que eu possuo um usuário "admin"
    E informo uma senha inválida "teste"
    Quando eu enviar uma requisição POST para "/auth"
    Então a API deve negar a autenticação
    E deve retornar status 401 ou 403
    E deve informar que as credenciais são inválidas

  Cenário: Tentar autenticar com nome de usuário inválido
    Dado que eu informo um usuário inválido "teste"
    E uma senha "password123"
    Quando eu enviar uma requisição POST para "/auth"
    Então a API deve negar a autenticação
    E deve retornar status 401 ou 403
    E deve informar que as credenciais são inválidas

2. Funcionalidade: Criação de reserva
Estória de usuário

Como consumidor da API,
quero criar uma reserva informando os dados necessários,
para registrar uma hospedagem no sistema.

Critérios de aceite
Deve ser possível criar uma reserva com todos os campos obrigatórios válidos.
A API deve gerar um bookingid ao criar uma reserva com sucesso.
A API não deve permitir criação com campos obrigatórios ausentes.
A API não deve permitir totalprice nulo.
A API não deve permitir totalprice negativo.
A API não deve permitir checkout anterior ao checkin.
Payloads inválidos devem retornar 400 Bad Request, não 500 Internal Server Error.

Funcionalidade: Criação de reserva
  Como consumidor da API
  Quero criar uma reserva
  Para registrar uma hospedagem no sistema

  Cenário: Criar reserva com dados válidos
    Dado que eu informo firstname "Paulo"
    E lastname "Andrade"
    E totalprice 111
    E depositpaid true
    E checkin "2026-05-14"
    E checkout "2026-05-16"
    E additionalneeds "Breakfast"
    Quando eu enviar uma requisição POST para "/booking"
    Então a API deve criar a reserva
    E deve retornar status 200 ou 201
    E deve retornar um bookingid

  Cenário: Criar reserva com totalprice nulo
    Dado que eu informo uma reserva com totalprice null
    Quando eu enviar uma requisição POST para "/booking"
    Então a API deve impedir a criação da reserva
    E deve retornar status 400
    E deve informar que o campo totalprice é inválido

  Cenário: Criar reserva com totalprice negativo
    Dado que eu informo uma reserva com totalprice -111
    Quando eu enviar uma requisição POST para "/booking"
    Então a API deve impedir a criação da reserva
    E deve retornar status 400
    E deve informar que o valor de totalprice deve ser positivo

  Cenário: Criar reserva com checkout anterior ao checkin
    Dado que eu informo checkin "2026-05-14"
    E checkout "2026-05-10"
    Quando eu enviar uma requisição POST para "/booking"
    Então a API deve impedir a criação da reserva
    E deve retornar status 400
    E deve informar que checkout não pode ser anterior ao checkin

3. Funcionalidade: Validação de campos obrigatórios
Estória de usuário

Como consumidor da API,
quero ser informado quando enviar uma reserva com dados obrigatórios ausentes,
para corrigir o payload antes de tentar criar a reserva novamente.

Critérios de aceite
A API deve validar a ausência de firstname.
A API deve validar a ausência de lastname.
A API deve validar a ausência de totalprice.
A API deve validar a ausência de depositpaid.
A API deve validar a ausência de bookingdates.
A API deve validar a ausência de bookingdates.checkin.
A API deve validar a ausência de bookingdates.checkout.
Campos obrigatórios ausentes devem retornar 400 Bad Request.

BDD

Funcionalidade: Validação de campos obrigatórios na criação de reserva
  Como consumidor da API
  Quero receber mensagens adequadas quando campos obrigatórios estiverem ausentes
  Para corrigir o payload enviado

  Esquema do Cenário: Criar reserva sem campo obrigatório
    Dado que eu preparo um payload de criação de reserva
    E removo o campo obrigatório "<campo>"
    Quando eu enviar uma requisição POST para "/booking"
    Então a API deve impedir a criação da reserva
    E deve retornar status 400
    E deve informar que o campo "<campo>" é obrigatório

    Exemplos:
      | campo                  |
      | firstname              |
      | lastname               |
      | totalprice             |
      | depositpaid            |
      | bookingdates           |
      | bookingdates.checkin   |
      | bookingdates.checkout  |

4. Funcionalidade: Consulta de reservas
Estória de usuário

Como consumidor da API,
quero consultar reservas cadastradas,
para visualizar informações de reservas existentes ou localizar reservas por filtros.

Critérios de aceite
Deve ser possível consultar a lista de IDs de reservas.
Deve ser possível consultar uma reserva existente por ID.
A API deve retornar 404 Not Found ao consultar uma reserva inexistente.
A API deve tratar IDs inválidos ou negativos de forma adequada.
Deve ser possível filtrar reservas por firstname e lastname.
Deve ser possível filtrar reservas por checkin e checkout.

BDD
Funcionalidade: Consulta de reservas
  Como consumidor da API
  Quero consultar reservas cadastradas
  Para visualizar informações de reservas existentes

  Cenário: Consultar lista de reservas
    Quando eu enviar uma requisição GET para "/booking"
    Então a API deve retornar status 200
    E deve retornar uma lista de objetos contendo bookingid

  Cenário: Consultar reserva existente por ID
    Dado que existe uma reserva criada
    E eu possuo o bookingid dessa reserva
    Quando eu enviar uma requisição GET para "/booking/{bookingid}"
    Então a API deve retornar status 200
    E deve retornar os dados da reserva

  Cenário: Consultar reserva inexistente
    Dado que eu informo um bookingid inexistente
    Quando eu enviar uma requisição GET para "/booking/{bookingid}"
    Então a API deve retornar status 404

  Cenário: Consultar reserva usando ID com caractere não numérico
    Dado que eu informo o ID "h"
    Quando eu enviar uma requisição GET para "/booking/h"
    Então a API deve retornar status 400 ou 404
    E não deve retornar dados de reserva

  Cenário: Consultar reserva usando ID negativo
    Dado que eu informo o ID "-1"
    Quando eu enviar uma requisição GET para "/booking/-1"
    Então a API deve retornar status 400 ou 404
    E não deve retornar dados de reserva

  Cenário: Consultar reservas por firstname e lastname
    Dado que existem reservas cadastradas para firstname "Paulo"
    E lastname "Cesar"
    Quando eu enviar uma requisição GET para "/booking?firstname=Paulo&lastname=Cesar"
    Então a API deve retornar status 200
    E deve retornar uma lista de reservas compatíveis com o filtro

  Cenário: Consultar reservas por checkin e checkout
    Dado que existem reservas cadastradas entre checkin "2027-01-01" e checkout "2027-01-05"
    Quando eu enviar uma requisição GET para "/booking?checkin=2027-01-01&checkout=2027-01-05"
    Então a API deve retornar status 200
    E deve retornar uma lista de reservas compatíveis com o período informado

5. Funcionalidade: Atualização parcial de reserva
Estória de usuário

Como consumidor da API,
quero atualizar parcialmente os dados de uma reserva,
para alterar apenas as informações necessárias sem reenviar todo o objeto.

Critérios de aceite
Deve ser possível alterar somente totalprice.
Deve ser possível alterar somente firstname.
Deve ser possível alterar somente lastname.
Deve ser possível alterar somente depositpaid.
Deve ser possível alterar o objeto bookingdates completo.
Deve ser possível alterar somente bookingdates.checkin sem corromper bookingdates.checkout.
Deve ser possível alterar somente bookingdates.checkout sem corromper bookingdates.checkin.
Deve ser possível alterar somente additionalneeds.
Campos não enviados no PATCH devem ser preservados.

BDD
Funcionalidade: Atualização parcial de reserva
  Como consumidor da API
  Quero atualizar parcialmente os dados de uma reserva
  Para alterar apenas os campos necessários

  Contexto:
    Dado que existe uma reserva cadastrada
    E eu possuo um token válido
    E eu possuo o bookingid da reserva

  Cenário: Atualizar somente totalprice
    Dado que eu informo totalprice 130 no payload
    Quando eu enviar uma requisição PATCH para "/booking/{bookingid}"
    Então a API deve retornar status 200
    E deve retornar totalprice atualizado para 130
    E deve manter os demais campos inalterados

  Cenário: Atualizar somente firstname
    Dado que eu informo firstname "Joaquina" no payload
    Quando eu enviar uma requisição PATCH para "/booking/{bookingid}"
    Então a API deve retornar status 200
    E deve retornar firstname atualizado para "Joaquina"
    E deve manter os demais campos inalterados

  Cenário: Atualizar somente lastname
    Dado que eu informo lastname "Ferreira" no payload
    Quando eu enviar uma requisição PATCH para "/booking/{bookingid}"
    Então a API deve retornar status 200
    E deve retornar lastname atualizado para "Ferreira"
    E deve manter os demais campos inalterados

  Cenário: Atualizar somente depositpaid
    Dado que eu informo depositpaid false no payload
    Quando eu enviar uma requisição PATCH para "/booking/{bookingid}"
    Então a API deve retornar status 200
    E deve retornar depositpaid atualizado para false
    E deve manter os demais campos inalterados

  Cenário: Atualizar bookingdates completo
    Dado que eu informo checkin "2030-01-01"
    E checkout "2030-01-05"
    Quando eu enviar uma requisição PATCH para "/booking/{bookingid}"
    Então a API deve retornar status 200
    E deve retornar bookingdates.checkin atualizado
    E deve retornar bookingdates.checkout atualizado

  Cenário: Atualizar somente bookingdates.checkin
    Dado que eu informo apenas bookingdates.checkin "2030-01-01"
    Quando eu enviar uma requisição PATCH para "/booking/{bookingid}"
    Então a API deve retornar status 200
    E deve atualizar bookingdates.checkin
    E deve manter bookingdates.checkout com o valor anterior
    E bookingdates.checkout não deve ser retornado como NaN

  Cenário: Atualizar somente bookingdates.checkout
    Dado que eu informo apenas bookingdates.checkout "2030-01-05"
    Quando eu enviar uma requisição PATCH para "/booking/{bookingid}"
    Então a API deve retornar status 200
    E deve atualizar bookingdates.checkout
    E deve manter bookingdates.checkin com o valor anterior
    E bookingdates.checkin não deve ser retornado como NaN

  Cenário: Atualizar somente additionalneeds
    Dado que eu informo additionalneeds "lunch"
    Quando eu enviar uma requisição PATCH para "/booking/{bookingid}"
    Então a API deve retornar status 200
    E deve retornar additionalneeds atualizado para "lunch"
    E deve manter os demais campos inalterados

6. Funcionalidade: Exclusão de reserva
Estória de usuário

Como consumidor da API,
quero excluir uma reserva existente utilizando autenticação válida,
para remover reservas que não devem mais permanecer cadastradas.

Critérios de aceite
Deve ser possível excluir uma reserva com token válido no header Cookie.
Deve ser possível excluir uma reserva com Basic Auth válido.
Não deve ser possível excluir uma reserva com token inválido.
Não deve ser possível excluir uma reserva com Basic Auth inválido.
Após a exclusão, a reserva não deve mais ser encontrada.
A API deve retornar status adequado para exclusão, como 200 OK, 202 Accepted ou 204 No Content.

BDD
Funcionalidade: Exclusão de reserva
  Como consumidor da API
  Quero excluir uma reserva existente
  Para remover reservas que não devem mais permanecer cadastradas

  Contexto:
    Dado que existe uma reserva cadastrada
    E eu possuo o bookingid da reserva

  Cenário: Excluir reserva com token válido no Cookie
    Dado que eu possuo um token válido
    E informo o token no header Cookie
    Quando eu enviar uma requisição DELETE para "/booking/{bookingid}"
    Então a API deve excluir a reserva
    E deve retornar status 200, 202 ou 204

  Cenário: Impedir exclusão com token inválido no Cookie
    Dado que eu informo um token inválido no header Cookie
    Quando eu enviar uma requisição DELETE para "/booking/{bookingid}"
    Então a API deve impedir a exclusão
    E deve retornar status 401 ou 403

  Cenário: Excluir reserva com Basic Auth válido
    Dado que eu possuo credenciais válidas em Basic Auth
    Quando eu enviar uma requisição DELETE para "/booking/{bookingid}"
    Então a API deve excluir a reserva
    E deve retornar status 200, 202 ou 204

  Cenário: Confirmar exclusão após DELETE com Basic Auth
    Dado que uma reserva foi excluída com Basic Auth
    Quando eu enviar uma requisição GET para "/booking/{bookingid}"
    Então a API deve retornar status 404
    E não deve retornar os dados da reserva

  Cenário: Confirmar exclusão após DELETE com token no Cookie
    Dado que uma reserva foi excluída com token no Cookie
    Quando eu enviar uma requisição GET para "/booking/{bookingid}"
    Então a API deve retornar status 404
    E não deve retornar os dados da reserva

  Cenário: Impedir exclusão com Basic Auth inválido
    Dado que eu informo credenciais inválidas em Basic Auth
    Quando eu enviar uma requisição DELETE para "/booking/{bookingid}"
    Então a API deve impedir a exclusão
    E deve retornar status 401 ou 403


7. Funcionalidade: Segurança e rastreabilidade
Estória de usuário

Como responsável pela segurança da API,
quero que operações sensíveis sejam autenticadas e rastreáveis,
para evitar alterações indevidas e permitir auditoria das ações executadas.

Critérios de aceite
Operações de alteração e exclusão devem exigir autenticação válida.
Tokens inválidos devem ser rejeitados.
A origem das alterações deve ser rastreável.
O uso de tokens fixos deve ser avaliado com o P.O. e time técnico.
A criação de reservas sem autenticação deve ser analisada em contexto real de negócio.

BDD

Funcionalidade: Segurança e rastreabilidade
  Como responsável pela segurança da API
  Quero que operações sensíveis sejam autenticadas e rastreáveis
  Para evitar alterações indevidas e permitir auditoria

  Cenário: Impedir alteração de reserva sem autenticação válida
    Dado que existe uma reserva cadastrada
    E eu não possuo autenticação válida
    Quando eu tentar alterar a reserva
    Então a API deve impedir a alteração
    E deve retornar status 401 ou 403

  Cenário: Impedir exclusão de reserva sem autenticação válida
    Dado que existe uma reserva cadastrada
    E eu não possuo autenticação válida
    Quando eu tentar excluir a reserva
    Então a API deve impedir a exclusão
    E deve retornar status 401 ou 403

  Cenário: Avaliar criação de reserva sem autenticação
    Dado que o endpoint de criação de reserva não exige token
    Quando qualquer consumidor chamar o endpoint com dados válidos
    Então a API permite a criação da reserva
    Mas esse comportamento deve ser avaliado com o P.O. em um cenário real de negócio


8. Funcionalidade: Contrato HTTP e documentação
Estória de usuário

Como consumidor da API,
quero que a documentação e os status codes estejam corretos,
para integrar com a API de forma previsível e segura.

Critérios de aceite
A documentação deve apresentar o método HTTP correto para cada endpoint.
Atualização parcial deve utilizar PATCH.
Atualização total deve utilizar PUT.
Exclusão não deve retornar 201 Created.
Falhas de autenticação não devem retornar 200 OK.
Payloads inválidos não devem retornar 500 Internal Server Error.

BDD

Funcionalidade: Contrato HTTP e documentação da API
  Como consumidor da API
  Quero que métodos, status codes e documentação estejam corretos
  Para integrar com a API de forma previsível

  Cenário: Retornar status adequado para credenciais inválidas
    Dado que eu envio credenciais inválidas
    Quando eu chamar o endpoint de autenticação
    Então a API deve retornar status 401 ou 403
    E não deve retornar status 200

  Cenário: Retornar status adequado para payload inválido
    Dado que eu envio um payload inválido na criação de reserva
    Quando eu chamar o endpoint POST "/booking"
    Então a API deve retornar status 400
    E não deve retornar status 500

  Cenário: Retornar status adequado para exclusão
    Dado que eu excluo uma reserva com autenticação válida
    Quando a exclusão for realizada com sucesso
    Então a API deve retornar status 200, 202 ou 204
    E não deve retornar status 201

  Cenário: Documentar corretamente atualização parcial
    Dado que a documentação apresenta o endpoint de atualização parcial
    Quando o consumidor copiar o cURL da documentação
    Então o método HTTP deve ser PATCH
    E a chamada deve funcionar sem necessidade de correção manual

9. Resumo das funcionalidades cobertas

| Funcionalidade               | Estória de usuário |                      Cenários BDD |
| ---------------------------- | -----------------: | --------------------------------: |
| Autenticação                 |                Sim |                                 3 |
| Criação de reserva           |                Sim |                                 4 |
| Campos obrigatórios          |                Sim | 1 scenario outline com 7 exemplos |
| Consulta de reservas         |                Sim |                                 7 |
| Atualização parcial          |                Sim |                                 8 |
| Exclusão de reserva          |                Sim |                                 6 |
| Segurança e rastreabilidade  |                Sim |                                 3 |
| Contrato HTTP e documentação |                Sim |                                 4 |


