a ferramenta JSON Server, que nos permite pegar respostas em formato JSON. Antes de tudo temos que já ter o Node.js instalado na máquina, depois disso podemos executar o comando npm install -g json-server, depois do comando terminar, crie um diretório chamado http-course e entre nele, crie o arquivo db.json copie as linhas de código:

{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
Agora pra iniciar o servidor, podemos usar o comando json-server --watch db.json e assim podemos acessar esses conteúdos.

- PARA FINALIZAR O SERVIDOR Ctrl + C