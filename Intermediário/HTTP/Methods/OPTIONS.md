# OPTIONS
-  o método OPTIONS é um verbo HTTP que irá nos dar informações sobre a disponibilidade de métodos da requisição;
    - Ex: $curl -X OPTIONS http://localhost:3000/posts -i => Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE
