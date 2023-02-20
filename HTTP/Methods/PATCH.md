# PATCH
- o método PATCH serve para modificar parcialmente um recurso.
- Diferentemente do PUT, que é usado para modificar o recurso inteiro.
- Ele não é um verbo seguro nem idempotente, e recebe um Body tanto na requisição quanto resposta, não é usado em formulários e não é cacheable.
- usa-se da seguinte forma: $curl -d '{"title": "my-title"}' -H "Content-type: application/json" -X PATCH http://localhost:3000/posts/1