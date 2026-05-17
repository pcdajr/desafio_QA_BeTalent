# Documentação dos Cenários de Teste - API Restful Booker

## 1. Objetivo

Este documento descreve os cenários de teste executados na API Restful Booker, contemplando autenticação, criação, consulta, atualização parcial e exclusão de reservas.

Os cenários da etapa seguinte foram elaborados com base no desafio proposto para a vaga de QA, utilizando:

- Happy path;
- Caixa preta;
- Validação de campos obrigatórios;
- Testes negativos;
- Validação de status codes;
- Pontos de atenção relacionados ao contrato da API.
- Teste exploratório.\


link = https://restful-booker.herokuapp.com/apidoc/index.html


<img width="1271" height="784" alt="image" src="https://github.com/user-attachments/assets/0bee1b61-8053-4cf5-abe2-898c84dc195d" />

## Premissas assumidas

| Premissa                 | Descrição                                                                                                                               |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| API pública              | A Restful Booker é uma API pública usada para testes e estudos                                                                          |
| Dados voláteis           | Reservas podem ser alteradas ou removidas por outros usuários                                                                           |
| Criação sem autenticação | O endpoint de criação permite criar reserva sem token                                                                                   |
| Campos obrigatórios      | Foram considerados obrigatórios: `firstname`, `lastname`, `totalprice`, `depositpaid`, `bookingdates.checkin` e `bookingdates.checkout` |
| Campo opcional           | `additionalneeds` foi considerado opcional                                                                                              |
| Datas válidas            | Foi assumido que `checkout` não deve ser anterior ao `checkin`                                                                          |
| Preço válido             | Foi assumido que `totalprice` não deve aceitar valor negativo ou nulo                                                                   |
| PASS com observação      | Usado quando o fluxo funcional ocorreu, mas houve inconsistência técnica                                                                |

