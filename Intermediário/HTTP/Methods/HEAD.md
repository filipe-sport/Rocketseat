# HEAD
- o método HEAD é semelhante ao GET, porém é recebido somente o cabeçalho.
- Ele é um método seguro e idempotente, não tem Body nem no envio nem na resposta, não é usado em formulários e é cacheable.
- Ex: $curl -I http://localhost:3000/posts ou   $curl --head http://localhost:3000/posts