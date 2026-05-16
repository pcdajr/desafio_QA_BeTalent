## Sugestões de melhoria


### Autenticação

-Retornar 401 Unauthorized ou 403 Forbidden para credenciais inválidas\
-Evitar retorno 200 OK em falhas de autenticação\
-Adotar token dinâmico com expiração\
-Melhorar rastreabilidade das alterações feitas em reservas.

### Criação de reserva
-Validar campos obrigatórios antes da persistência.\
-Retornar 400 Bad Request para payload inválido.\
-Impedir totalprice negativo.\
-Impedir totalprice: null.\
-Impedir checkout anterior ao checkin.\
-Retornar mensagens claras de erro para o consumidor da API.


### Consulta de reservas
-Revisar comportamento do filtro por datas.\
-Documentar se os filtros por data são inclusivos ou exclusivos.\
-Padronizar retorno para IDs inválidos, como letras ou números -negativos.


### Atualização parcial
-Corrigir atualização parcial de campos aninhados em bookingdates.\
-Preservar valores não enviados no payload.\
-Impedir que campos omitidos sejam convertidos para NaN.\
-Revisar documentação do endpoint de atualização parcial.


### Exclusão de reserva
-Retornar 200 OK, 202 Accepted ou 204 No Content após exclusão.\
-Evitar retorno 201 Created em operação DELETE.\
-Documentar claramente o mecanismo de autenticação recomendado.