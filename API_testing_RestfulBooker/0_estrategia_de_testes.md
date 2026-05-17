# Documentação dos Cenários de Teste - API Restful Booker

## 1. Objetivo

Este documento descreve os cenários de teste executados na API Restful Booker, contemplando autenticação, criação, consulta, atualização parcial e exclusão de reservas.

Os cenários foram elaborados com base no desafio proposto para a vaga de QA, cobrindo:

- Autenticação básica;
- CRUD de reservas;
- Validação de campos obrigatórios;
- Tratamento de erros;
- Filtros e buscas;
- Testes negativos;
- Testes de segurança;
- Validação de status codes;
- Pontos de atenção relacionados ao contrato da API.

---

## 2. Informações gerais

| Item | Descrição |
|---|---|
| API testada | Restful Booker |
| Base URL | `{{BASE_URL}}` |
| Ferramenta utilizada | Postman |
| Formato da documentação | Markdown |
| Tipo de teste | Funcional, negativo, contrato HTTP e segurança |
| Variáveis utilizadas | `BASE_URL`, `TOKEN`, `BOOKING_ID` |

---

## 3. Critérios de status

| Status | Significado |
|---|---|
| PASS | O resultado real foi compatível com o resultado esperado. |
| FAIL | O resultado real divergiu do esperado. |
| PASS com observação | A funcionalidade principal funcionou, mas apresentou inconsistência técnica ou ponto de atenção. |

---

## 4. Critérios de prioridade

| Prioridade | Critério |
|---|---|
| Alta | Cenários que impactam fluxo principal, autenticação, segurança, dados críticos, criação, atualização ou exclusão de reservas. |
| Média | Cenários importantes de validação, filtros, entradas inválidas ou variações de campos obrigatórios. |
| Baixa | Cenários complementares ou de menor impacto para o funcionamento principal da API. |

---

# 5. Cenários 
