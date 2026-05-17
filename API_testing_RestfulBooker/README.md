# Teste Prático QA - API Testing Restful Booker

Este projeto faz parte de um desafio prático para uma vaga de QA e tem como objetivo validar a API **Restful Booker**, contemplando autenticação, criação, consulta, atualização e exclusão de reservas.

Além dos testes funcionais, também foram avaliados cenários negativos, validação de campos obrigatórios, comportamento dos status codes, segurança básica, bugs, métricas, riscos e sugestões de melhoria.

---

## API testada

**Restful Booker**

Base URL:
https://restful-booker.herokuapp.com


## Objetivo dos testes

Validar os principais fluxos da API Restful Booker, cobrindo os requisitos obrigatórios do desafio:

Autenticação básica;
CRUD de reservas;
Validação de campos obrigatórios;
Filtros e buscas;
Tratamento de erros;
Testes negativos;
Testes de segurança;
Automação via scripts no Postman;
Análise de bugs;
Métricas e riscos;
Sugestões de melhoria.


## Estrutura do projeto

A pasta foi dividida em:

restful-booker-api/
│
├── README.md
│
├── docs/
│   ├── api-test-report.md
│   ├── api-test-cases.md
│   ├── api-bdd-user-stories.md
│   ├── bug-report.md
│   ├── metrics-and-risks.md
│   ├── questions-and-attention-points.md
│   └── improvement-suggestions.md
│
├── postman/
│   ├── restful-booker-collection.json
│   └── restful-booker-environment.json
│
└── evidence/
    └── api/
        ├── auth-token.png
        ├── login-invalid-password.png
        ├── create-booking-success.png
        ├── required-fields-validation.png
        ├── patch-bookingdates-checkin-nan.png
        ├── patch-bookingdates-checkout-nan.png
        ├── delete-booking.png
        └── get-after-delete.png

## Variáveis de ambiente

| Variável     | Descrição                             | Exemplo                                |
| ------------ | ------------------------------------- | -------------------------------------- |
| `BASE_URL`   | URL base da API                       | `https://restful-booker.herokuapp.com` |
| `TOKEN`      | Token retornado pelo endpoint `/auth` | Gerado automaticamente                 |
| `BOOKING_ID` | ID da reserva criada                  | Gerado automaticamente                 |

Os itens username e password não foram colocados nas variáveis de ambiente mas eles eram fixos então não teve problema na execução dos testes da API.

A collection contendo os endpoints necessários para testar a API estão presentes em /workspaces/desafio_QA_BeTalent/API_testing_RestfulBooker/postman/postman_collection.json e
as variáveis de ambiente citadas em 
para utiliza-las basta importar a collection e as variáveis de ambiente no postman ou alguma outra interface semelhante.

