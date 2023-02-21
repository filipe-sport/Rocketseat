# JavaScript como linguagem 
- Linguagem WEB
- Multiparadignma

# Programação Funcional

* É um paradigma de programação como a Orientação a Objetos
- Uma maneira de resolver problemas
- Organizar uma linha de raciocínio
- Entender uma nova maneira de abordar os problemas
- Algumas tecnologias tem como requisito


# Funções
- Pequenas tarefas dentro de uma função
- Abstrair um problema e isolar ele dentro da função
- Não modificar dados fora dela
- Pequenas e bem específicas no que fazem

# Características principais da função
- Um dado ( ou mais) entra em uma função e um novo dado sai dessa função
- Não altera dados
- Não guarda estado stateless

# Linguagens Funcionais
- JavaScript (multiparadigmas)
- PHP (multiparadigmas)
- Elixir (funcionais)
- Haskel (funcionais)

# Pontos Positivos
- Fácil manutenção
- Fácil uso de teste
    - Funções isoladas e consistentes
- Códigos mais confiáveis

# Princípios

* Paradigmas
- Programação Imperativa
- Programação Declarativa

* Dados
- Imutabilidade
- Stateless

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

- Funções que recebem funções como argumentos
- Funções que poderão retornar outras funções

* Composição de Funções

- Um encadeamento de funções
- Uma função que retorna um dado e vai para outra função, que retorna um dado e vai para outra função, que retorna ...


