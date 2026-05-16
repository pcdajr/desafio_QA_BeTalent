
## Ranking das funcionalidades com maior impacto de bugs

| Ranking | Funcionalidade              | Total de casos | FAIL | % Erro real | Classificação do risco | Justificativa                                                                                                                                                                                                                                                              |
| ------: | --------------------------- | -------------: | ---: | ----------: | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|       1 | Criação de reserva          |             11 |   10 |      90,91% | Crítico                | É a funcionalidade com maior concentração de falhas. A API cria reservas com dados inválidos ou retorna `500 Internal Server Error` para entradas que deveriam ser tratadas como `400 Bad Request`.                                                                        |
|       2 | Login                       |              3 |    2 |      66,67% | Alto                   | Os cenários negativos de autenticação retornam `200 OK` mesmo com credenciais inválidas. Apesar de a API retornar `"Bad credentials"`, o status code não representa corretamente uma falha de autenticação.                                                                |
|       3 | Atualização parcial — PATCH |              8 |    2 |      25,00% | Médio/Alto             | A maioria dos campos é atualizada corretamente, mas há falha relevante em campos aninhados de data. Ao atualizar somente `bookingdates.checkin` ou somente `bookingdates.checkout`, o outro campo passa a ser retornado como `NaN`, indicando risco de corrupção de dados. |
|       4 | Exclusão de reserva         |              6 |    0 |       0,00% | Médio                  | Não houve falha funcional, pois as reservas foram excluídas corretamente. Porém, dois cenários foram classificados como `PASS com observação` porque a API retorna `201 Created` em uma operação de exclusão, o que é semanticamente inadequado para `DELETE`.             |
|       5 | Consulta de reservas        |              7 |    1 |      14,29% | Baixo/Médio            | A funcionalidade apresentou bom comportamento geral, com apenas uma falha relacionada ao filtro por datas. O impacto é menor porque a maior parte das consultas funciona corretamente.                                                                                     |

Risco = Impacto x Probabilidade


## Definição de impacto e prioridades

| Impacto | Quando aplicar                                                                                                                                           |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Baixo   | Problemas pequenos, que não afetam o fluxo principal nem dados importantes.                                                                              |
| Médio   | Problemas que afetam comportamento esperado, mas sem impedir o uso principal da funcionalidade.                                                          |
| Alto    | Problemas que afetam segurança, regras importantes, consistência dos dados ou integração com consumidores da API.                                        |
| Crítico | Problemas que permitem dados inválidos, quebram regras centrais de negócio, causam erro interno ou podem comprometer a confiabilidade da funcionalidade. |









## Resumo Final atualizado

| Indicador                      |                                   Valor |
| ------------------------------ | --------------------------------------: |
| Total de casos considerados    |                                      35 |
| PASS                           |                                      18 |
| PASS com observação            |                                       2 |
| FAIL                           |                                      15 |
| Taxa geral de acerto funcional |                                  57,14% |
| Taxa geral de erro             |                                  42,86% |
| Funcionalidade mais crítica    |                      Criação de reserva |
| Funcionalidade mais estável    |                     Exclusão de reserva |
| Principal risco identificado   | Validações fracas na criação de reserva |
| Segundo maior risco            | Status code incorreto em login inválido |
| Risco técnico relevante        |     Corrupção de datas no PATCH parcial |



