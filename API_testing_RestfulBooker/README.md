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


```md
# Estrutura de Pastas - API Testing Restful Booker

```txt
API_testing_RestfulBooker/
│
├── evidencias/
│   ├── login/
│   │   └── ct_L1_L2_L3.md
│   ├── cancel_booking/
│   ├── edit_booking/
│   ├── find_booking/
│   └── new_booking/
│
├── postman/
│   ├── postman_collection.json
│   └── postman_environment.json
│
├── 0_estrategia_de_testes.md
├── 1_cenarios.feature
├── 2_resultado_dos_testes.md
├── 3_analise_de_bugs.md
├── 4_duvidas_dificuldades.md
├── 5_melhorias.md
└── README.md


## Descrição da estrutura 

```


| Caminho                      | Descrição                                                                    |
| ---------------------------- | ---------------------------------------------------------------------------- |
| `evidencias/`                | Pasta utilizada para armazenar as evidências dos testes executados.          |
| `evidencias/login/`          | Evidências dos testes de autenticação/login.                                 |
| `evidencias/cancel_booking/` | Evidências dos testes de exclusão/cancelamento de reserva.                   |
| `evidencias/edit_booking/`   | Evidências dos testes de atualização de reserva.                             |
| `evidencias/find_booking/`   | Evidências dos testes de consulta de reservas.                               |
| `evidencias/new_booking/`    | Evidências dos testes de criação de reservas.                                |
| `postman/`                   | Pasta com os arquivos exportados do Postman.                                 |
| `postman_collection.json`    | Collection com os requests da API Restful Booker.                            |
| `postman_environment.json`   | Environment com as variáveis utilizadas nos testes.                          |
| `0_estrategia_de_testes.md`  | Estratégia de testes da API.                                                 |
| `1_cenarios.md`              | Documentação dos cenários de teste.                                          |
| `2_resultado_dos_testes.md`  | Resultados da execução dos testes.                                           |
| `3_analise_de_bugs.md`       | Relatório e análise dos bugs encontrados.                                    |
| `4_duvidas_dificuldades.md`  | Dúvidas, dificuldades e pontos de atenção levantados durante os testes.      |
| `5_melhorias.md`             | Sugestões de melhoria para a API.                                            |
| `README.md`                  | Documentação principal do projeto, com instruções de execução e visão geral. |


## Variáveis de ambiente

| Variável     | Descrição                             | Exemplo                                |
| ------------ | ------------------------------------- | -------------------------------------- |
| `BASE_URL`   | URL base da API                       | `https://restful-booker.herokuapp.com` |
| `TOKEN`      | Token retornado pelo endpoint `/auth` | Gerado automaticamente                 |
| `BOOKING_ID` | ID da reserva criada                  | Gerado automaticamente                 |

Os itens username e password não foram colocados nas variáveis de ambiente mas eles eram fixos então não teve problema na execução dos testes da API.

A collection contendo os endpoints necessários para testar a API estão presentes em [/workspaces/desafio_QA_BeTalent/API_testing_RestfulBooker/postman/postman_collection.json](https://github.com/pcdajr/desafio_QA_BeTalent/blob/main/API_testing_RestfulBooker/postman/postman_collection.json) e
as variáveis de ambiente citadas em [/workspaces/desafio_QA_BeTalent/API_testing_RestfulBooker/postman/postman_environment.json](https://github.com/pcdajr/desafio_QA_BeTalent/blob/main/API_testing_RestfulBooker/postman/postman_environment.json)
para utiliza-las basta importar a collection e as variáveis de ambiente no postman ou alguma outra interface semelhante.

