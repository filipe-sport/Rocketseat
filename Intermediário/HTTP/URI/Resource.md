# URI - Uniform Resource Identifier (Identificador de Recurso Uniforme em português)

- Para entendermos como como chegar a um endereço, precisamos entender primeiramente como montar um endereço, para isso usamos o URI, que serve para identificar um recurso por seu nome ou sua localização.

- Identificando um recurso
    - Nome
    - Localização

# Recurso
- O recurso é o alvo do pedido HTTP, que é o alvo do pedido feito cliente.
- Um recurso pode ser qualquer coisa identificável, como uma entidade DIGITAL, como um email, uma entidade ABSTRATA, como uma sessão e até uma entidade FÍSICA, como um produto, usuários.
- Se podemos identificar, nomear, endereçar ou manipular, estamos falando de um recurso.

# URL - Uniform Resource Locator
- Um recurso pode ser encontrado pelo locator, localizador em português, ou pelo nome, para encontrar com o locator, utilizamos o URL, ou seja, toda URL é um URI, mas o contrário não é verdadeiro.
- Componente obrigatórios: 
    - Protocolo: https://, http://, mailto:
    - Domínio: youtube.com
- Componentes opicionais:
    - Subdominio: www
    - Path: /index.html
    - Parametros: ?v=vpYct2npKD8
    - Porta: :80 (http) :443 (https)
    - Âncora: /index.html#(âncora)

# URN - Uniform Resource Name
- Para encontrar um recurso pelo nome, ao invés da URL é utilizarmos a URN; 
- Um exemplo de URN é urn:isbn:0451450523 ou urn:oasis:names:specification:docbook:dtd:xml:4.1.2, porém a URL é bem mais usada na web.
