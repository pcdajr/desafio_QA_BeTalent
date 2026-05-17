# Documentação dos Cenários de Teste - API Restful Booker

## 1. Objetivo

Este documento tem como objetivo alinhar o entendimento sobre o comportamento esperado da API Restful Booker, sua finalidade, possíveis usuários, regras de negócio e principais fluxos funcionais.

Também descreve os cenários de teste elaborados e executados, contemplando autenticação, criação, consulta, atualização e exclusão de reservas.

Os cenários da etapa seguinte foram elaborados com base no desafio proposto para a vaga de QA, utilizando:

- Happy path;
- Caixa preta;
- Validação de campos obrigatórios;
- Testes negativos;
- Validação de status codes;
- Pontos de atenção relacionados ao contrato da API.
- Teste exploratório.


Link = https://restful-booker.herokuapp.com/apidoc/index.html


<img width="1271" height="784" alt="image" src="https://github.com/user-attachments/assets/0bee1b61-8053-4cf5-abe2-898c84dc195d" />

## Premissas assumidas

| Premissa                 | Descrição                                                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| API pública              | A Restful Booker é uma API pública utilizada para testes e estudos.                                                                                    |
| Dados voláteis           | As reservas podem ser criadas, alteradas ou removidas por outros usuários, pois a API é compartilhada publicamente.                                    |
| Criação sem autenticação | O endpoint de criação de reserva permite criar registros sem token de autenticação.                                                                    |
| Datas válidas            | Foi assumido que a data de `checkout` não deve ser anterior à data de `checkin`.                                                                       |
| Preço válido             | Foi assumido que o campo `totalprice` não deve aceitar valor negativo ou nulo.                                                                         |
| Campo opcional           | O campo `additionalneeds` foi considerado opcional.                                                                                                    |
| Campos obrigatórios      | Foram considerados obrigatórios os campos `firstname`, `lastname`, `totalprice`, `depositpaid`, `bookingdates.checkin` e `bookingdates.checkout`.      |
| PASS com observação      | Foi usado quando o fluxo funcional ocorreu corretamente, mas houve inconsistência técnica ou ponto de atenção, representado no relatório como `PASS*`. |
