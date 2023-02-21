# DELETE
- o método DELETE serve para remover um recurso.
- pode ser respondido com o código 202, que não foi processado mas já foi aceito, 204, que significa que o recurso não existe e 200, que significa que o conteúdo foi deletado.
- Ele não é um método seguro, mas é idempotente, tem a possibilidade de receber Body tanto na requisição quanto na resposta, não é usado em formulários e não é cacheable.
- usa-se da seguinte forma: $curl -X DELETE http://localhost:3000/posts/2