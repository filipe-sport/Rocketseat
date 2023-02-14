# Funções

* Funções Independentes

- Deverá ter ao menos 1 argumento
- Deverá retornar algo
- Nada que acontecer dentro do escopo, afeta o mundo externo
    - Dados imutáveis
    - Não guarda estado
- Não se faz uso de loops (for, while), mas se houver necessidade de tal, usaremos recursão (a função chama ela mesma)

* Funções Puras

- Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento
- Não deverá sofrer nenhuma interferância do mundo externo a ela
- Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente
- Não terá nenhum efeito colateral no código
    - Não irá modificar nenhum dado
    - Não ira guardar nenhum estado

* First-Class Functions
- Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções.
- A função poderá ser entendida como uma variável.
    
* High-Order Funcions
* Compisição de Funções