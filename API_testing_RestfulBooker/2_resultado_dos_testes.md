## Critério de priorização

A prioridade dos casos de teste foi definida considerando o impacto no fluxo principal da API, risco de segurança, possibilidade de corrupção de dados e relevância da regra de negócio.

- **Alta:** cenários que impactam autenticação, criação, consulta, atualização ou exclusão de reservas, além de regras críticas como datas inválidas, preço negativo, campos essenciais e segurança.
- **Média:** cenários importantes de validação, filtros, entradas inválidas e variações de campos obrigatórios que não bloqueiam diretamente o fluxo principal.
- **Baixa:** cenários complementares ou de menor impacto para o funcionamento principal da API.

## LOGIN
<img width="1188" height="555" alt="image" src="https://github.com/user-attachments/assets/f07c2e7d-0f34-418f-8fe3-30dd582340af" />


##
## NEW RESERVATION

<img width="1486" height="714" alt="image" src="https://github.com/user-attachments/assets/292ebf23-2ac6-499e-a7d9-b2ea2fef4aec" />
<img width="1481" height="645" alt="image" src="https://github.com/user-attachments/assets/86d4b257-4b01-47b7-bf5c-b18287366e53" />
<img width="1481" height="735" alt="image" src="https://github.com/user-attachments/assets/efeb0e8a-5238-4820-ba30-323037e3d863" />
<img width="1483" height="224" alt="image" src="https://github.com/user-attachments/assets/d53c3405-eb80-4fe1-a438-e94194268a68" />


##
## FIND BOOKING

<img width="1588" height="753" alt="image" src="https://github.com/user-attachments/assets/09e5187a-6fdb-4391-9daa-02af432fbb50" />
<img width="1588" height="86" alt="image" src="https://github.com/user-attachments/assets/9af0e765-3144-4a09-a326-1325a87f94ce" />


##
## EDIT BOOKING

<img width="1562" height="803" alt="image" src="https://github.com/user-attachments/assets/200f9004-8a8d-44a8-96ce-6bcdf80a7e41" />
<img width="1564" height="249" alt="image" src="https://github.com/user-attachments/assets/2377c6cf-94b4-4405-a1e7-18e72c73e5f9" />
<img width="1409" height="677" alt="image" src="https://github.com/user-attachments/assets/cabb4a78-f44c-4a0c-95a2-b81be75406ef" />
<img width="1409" height="475" alt="image" src="https://github.com/user-attachments/assets/8c9cc1e7-b133-4d4f-865c-fd29c3fc38c4" />
<img width="1410" height="687" alt="image" src="https://github.com/user-attachments/assets/d8ae08e6-336e-4702-9f00-81994e624836" />
<img width="1409" height="244" alt="image" src="https://github.com/user-attachments/assets/cbf534a7-5445-4318-96ba-3c32c8459b97" />


##
## DELETE BOOKING

<img width="1033" height="771" alt="image" src="https://github.com/user-attachments/assets/48e2c940-3167-4f2e-b732-128c07576e3f" />


### Observação sobre o status PASS*

O status PASS* foi utilizado para cenários em que o comportamento funcional principal foi atendido, mas foi identificado algum ponto de atenção técnico.

Exemplo:

A reserva foi excluída corretamente;
A consulta posterior retornou 404 Not Found;
Porém, o endpoint DELETE retornou 201 Created, status code semanticamente inadequado para uma operação de exclusão.

Nesses casos, o cenário foi considerado funcionalmente aprovado, mas registrado com observação para análise do contrato da API.



