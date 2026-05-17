## **CONCLUSÃO DOS TESTES**
Com base na execução dos casos de teste nos módulos de Login, Pagamento e Lista de Produtos, foram identificados diversos defeitos críticos que impactam diretamente a experiência do usuário e a confiabilidade do sistema.


## **SUGESTOES DE MELHORIAS**


### 1. Pagamento e Checkout (Cenário 03 - Risco Crítico)

* **Feedback Visual de Erro em Tempo Real:** Adicionar tooltips informativas ou mensagens de erro específicas abaixo de cada campo inválido, impedindo que o usuário envie dados incorretos para a API simulada.

* **Implementar parte de pagamento**

### 2. Lista de Produtos e Vitrine (Cenário 02 - Risco Alto)
* **Tratamento de Exceções na Ordenação (Sorting Handlers):** Aplicar blocos de *try-catch* e logs de monitoramento (como Backtrace/Sentry) na função que manipula o array de produtos (A-Z, Z-A, Preços). O erro no **CT11** indica que a função de ordenação quebra ao receber dados sem o devido tratamento de tipos (ex: comparar strings como números).


### 3. Login e Autenticação (Cenário 01 - Risco Médio)

* **Padronização de Mensagens de Erro:** Internacionalizar e unificar o idioma de todas as tooltips de erro de autenticação para manter a consistência da experiência do usuário (UX).

* **Implementar o CRUD de Cadastro**


## **DIFICULDADES**
- Automatizar asserções para os filtros da loja com os elementos cypress, precisa aprofundar e pegar diretamente no javascript.

- Automatizar asserções por erro de imagem.

- Automatizar  validação por baixa perfomance no caso teste 06.

- Ter total entendimento do negócio sem presença de documentação, sem funcinalidade de criação de cadastro, sem presença de PO ou contato com cliente pra filtrar e refinar a regra de negócio e as ambiguidades.




