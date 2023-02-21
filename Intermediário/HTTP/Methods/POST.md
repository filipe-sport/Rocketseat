# Method
-  o método POST, que vem do inglês to post, que serve para publicar ou cadastrar um recurso.
- Ele não é seguro nem idempotente, pois muda informações no servidor e não receberá a mesma resposta de uma mesma requisição.
- o verbo POST tem Body tanto na requisição quanto na resposta, pode ser usado em formulários e é cacheable.

- usa-se da seguinte forma: $curl -d '{"id": 2,   "title": "json-server-2","author": "Filipe"}' -H "Content-type: application/json" -X POST http://localhost:3000/posts