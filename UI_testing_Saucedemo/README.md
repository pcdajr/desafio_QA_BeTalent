
---

# README — Sauce Demo com Cypress

```md
# Teste Prático QA - UI Testing Sauce Demo com Cypress

Este projeto faz parte de um desafio prático para uma vaga de QA e tem como objetivo validar a aplicação **Sauce Demo**
por meio de testes de interface automatizados utilizando **Cypress**.
A aplicação Sauce Demo simula uma plataforma de e-commerce, permitindo testar fluxos como login,
listagem de produtos, ordenação, carrinho, checkout, navegação e logout.

---

## Aplicação testada
**Sauce Demo**
URL:
https://www.saucedemo.com/

## Objetivo dos testes

Validar os principais fluxos da plataforma Sauce Demo, cobrindo os requisitos obrigatórios do desafio:

Login com diferentes tipos de usuários;
Ordenação de produtos;
Fluxo completo de compra;
Remoção de itens do carrinho;
Navegação entre páginas;
Logout;
Testes automatizados com Cypress.
```

# 🧪 Automação de Testes E2E - SauceDemo

Este projeto contém a automação dos testes de ponta a ponta (E2E) para o site [SauceDemo](https://www.saucedemo.com/), cobrindo os fluxos de Autenticação, Lista de Produtos e Checkout (Pagamento). Os testes foram desenvolvidos utilizando **Cypress** e os relatórios são gerados automaticamente com o **Mochawesome**.

---

## 🚀 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (Versão 18 ou superior)
* Um editor de código (ex: [VS Code](https://code.visualstudio.com/))
* Além desses requisitos acima é necessário ter o projeto clonado na sua máquina.

Após isso, entre na pasta *desafio_QA_BeTalent\UI_testing_Saucedemo* e rode os seguintes comandos:

    1.`npm i` no projeto 

    2.`npm run cypress:open` para abrir com a interface cypress ou `npx cypress run` para rodar sem interface visual

Com isso as evidências serão regeradas e os resultados, códigos, vídeos e screenshots serão atualizadas na pasta 
*desafio_QA_BeTalent\UI_testing_Saucedemo\cypress*

## 🚀 Documentação de plano de teste

A documentação contendo o levantamento de cenários, estratégia e modelagem está presente na pasta *UI_testing_Saucedemo\plano_de_teste*

Além dos testes automatizados, foram realizados alguns testes manuais e exploratórios presentes em *UI_testing_Saucedemo\manual_test*

