 **ESSA MATRIZ DE RESULTADO FOI FEITA POR MIM EM TESTANDO A INTERFACE, NAVEGANDO MANUALMENTE.** 


## CENÁRIO 01

<img width="1218" height="400" alt="01" src="https://github.com/user-attachments/assets/55aaddd9-637b-48ac-b9ab-b084271c81f0" />

## CENÁRIO 02

<img width="1157" height="439" alt="Cena 2" src="https://github.com/user-attachments/assets/0ccc1946-a393-43ce-b60a-f2652d577d92" />

## CENÁRIO 03

<img width="1192" height="448" alt="03" src="https://github.com/user-attachments/assets/ae46fd31-c45b-4186-98f6-457067718874" />



## Ranking das Funcionalidades com Maior Impacto de Bugs

| Ranking | Funcionalidade | Total de casos | FAIL | % Erro real | Classificação do risco | Justificativa |
| :---: | :--- | :---: | :---: | :---: | :---: | :--- |
| **1º** | Pagamento (Checkout) | 5 | 3 | 60,00% | **ALTO (Crítico)** | Erros graves de integridade e validação de dados. O sistema aceita dados inválidos em campos obrigatórios (CT14) e quebra a entrada de teclado do usuário com contas problemáticas (CT15 e CT16), impedindo a conclusão segura da compra. |
| **2º** | Lista de Produtos | 5 | 3 | 60,00% | **ALTO** | Gargalos funcionais e visuais expressivos na experiência de e-commerce. Apresenta falhas na limitação de adição de itens (CT09), renderização incorreta de imagens (CT10) e quebra total de ordenação/filtros (CT11) com usuários de teste específicos. |
| **3º** | Login / Autenticação | 6 | 1 | 16,67% | **MÉDIO** | A maior parte das validações básicas de segurança e restrição de acesso passou com êxito. O único ponto crítico reside na degradação de performance não-funcional (Glitch de tempo) ao autenticar o usuário sob estresse (CT06). |