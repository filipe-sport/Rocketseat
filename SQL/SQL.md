# SQL ( Banco de Dados)

- Repositório sistêmico de informações
- Local onde vai guardar informações de forma organizada

* Primary key: é o campo que por padrão, é um número, e tem como conteúdo um indentificador unico de informações.

* Regras para escrever nome de tabelas e de campos:
- Deve começar por uma letra do alfabeto
- Os caracteres seguintes não são permitidos () + - / ; = & | # > < ^ ' {} [] % ...
- Não pode conter espaços (pode-se separar com o uso de underline).
- Não pode conter acentuação.

# Beekeeker Studio
* Selecionando TODOS os dados de uma tabela específica

- SELECT * ( * = todos os dados) FROM (tabela do banco de dados)

* Selecionando CAMPOS específicos de uma tabela

- SELECT campo1 , campo2 ( selecionando campos específicos) FROM (tabela do banco de dados

* Selecionando todos os campos, WHERE (onde) tenha uma condição pré determinada (%)

- O operador LIKE é usado para "strings".

- SELECT * FROM (tabela) WHERE (campo) like '%(condição)%'

- Selecionando campos específicos, WHERE tenha condições pré determinadas

- SELECT campo1 , campo2 FROM tabela WHERE campo like "%condição%"

* Operadores Relacionais

- Os operadores relacionais serão usados com o comando WHERE. Ex: 
    - SELECT * FROM tabela WHERE campo = 2
    - SELECT * FROM tabela WHERE campo < ou <= 2
    - SELECT * FROM tabela WHERE campo > ou >= 2
    - SELECT * FROM tabela WHERE campo <> (não igual a) 2
    - SELECT * FROM tabela WHERE campo != (diferente de) 2

* Operadores Matemáticos
- Assim como os operadores relacionais, os operadores matemáticos obedecem o retorno das operações e são usados juntamente com o comando WHERE: 
    - SELECT * FROM tabela WHERE campo (2 - 1)
    - SELECT * FROM tabela WHERE campo (1 + 1)
    - SELECT * FROM tabela WHERE campo (1 * 1)
    - SELECT * FROM tabela WHERE campo (1 / 1)
    - SELECT * FROM tabela WHERE campo (3 % 2)

* Operadores Lógicos
    # AND
 - SELECT * FROM tabela WHERE  campo1 like "J%" AND campo2...
    # OR
 - SELECT * FROM tabela WHERE  campo1 like "% J %" OR campo2...
    # BETWEEN / NOT BETWEEN 
 - SELECT * FROM tabela WHERE  campo1 BETWEEN  (condição1) and (condição2)...
 - SELECT * FROM tabela WHERE  campo1 NOT BETWEEN  (condição1) and (condição2)...
    # IN / NOT IN
 - SELECT * FROM tabela WHERE campo IN (condição)
 - SELECT * FROM tabela WHERE campo NOT IN (condição)
    # IS NULL / IS NOT NULL
 - SELECT * FROM tabela WHERE campo IS NULL
 - SELECT * FROM tabela WHERE campo IS NOT NULL

   # INSER TO
 - INSERT INTO tabela(campo1, campo2,...) VALUES ("text/string", number, ...)
   # UPDATE
 - UPDATE tabela SET campo1 = ("text/string" ou number), campo2 = ("text/string" ou number),... WHERE (campo primary key) = "string"/number
 # Obs: SEMPRE USA-SE COM O WHERE
   # DELETE
 - DELETE FROM tabela WHERE (campo primary key) = "string"/number
 # Obs: SEMPRE USA-SE COM O WHERE