# Dúvidas e Pontos de Atenção Levantados

Durante a execução dos testes da API Restful Booker, foram identificados alguns comportamentos que podem exigir alinhamento com o P.O. e/ou com o time técnico.

Alguns pontos podem estar relacionados ao fato de a API ser pública e voltada para testes, porém, em um cenário real de negócio, poderiam representar riscos de segurança, rastreabilidade ou inconsistência de documentação.

| Dúvida / Ponto a ser levantado | Motivo do questionamento | Origem | Com quem falar |
|---|---|---|---|
| Realmente deve ser possível criar uma reserva sem token ou login em nome de outra pessoa? | Ao criar uma reserva apenas chamando o endpoint, sem token ou autenticação, qualquer usuário poderia criar uma reserva em nome de outra pessoa. Em um cenário real, isso poderia representar um risco de segurança ou falta de rastreabilidade. | Endpoint de criação de reserva | P.O. |
| Para quem são destinados os endpoints de exclusão de reserva e de atualização parcial que aceitam o header `Authorization` com token fixo? | Caso esse token fixo esteja disponível para todos, pode não ser possível identificar de forma rápida e segura a origem das alterações feitas nas reservas. Nesse caso, poderia ser recomendado o uso de token dinâmico ou algum mecanismo de autenticação mais rastreável. Porém, se o token fixo for destinado a uma empresa, integração ou sistema específico que gerencia essas reservas, o uso pode ser justificável. | Endpoints de exclusão de reserva e atualização parcial da reserva | P.O. / Time técnico |
| A documentação do endpoint de atualização parcial deveria ser revisada, pois o cURL estava usando `PUT`, mas a chamada só funcionou corretamente com `PATCH`? | A atualização parcial normalmente deve utilizar o método `PATCH`, enquanto o `PUT` costuma ser usado para atualização total do recurso. Durante o teste, o cURL da documentação indicava `PUT`, porém a chamada só funcionou quando o método foi alterado manualmente para `PATCH`. Isso pode gerar confusão para quem consome a API. | Endpoint de atualização parcial de reserva na documentação | Time DEV |


## Observação

Os pontos acima não foram classificados diretamente como bugs funcionais, pois dependem de definição de negócio, arquitetura ou documentação oficial da API. No entanto, foram registrados como pontos de atenção por poderem impactar segurança, rastreabilidade, clareza de integração e manutenibilidade em um ambiente real.


## Dificuldades

Inicialmente no próprio entendimento dos testes em nivel de integração pois este projeto é minha primeira experiência após fazer testes de E2E. Estudar e aplicar os conhecimentos do syllabus, API, CRUD, métodos http e regra de negócio.