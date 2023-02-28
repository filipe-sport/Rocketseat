// CRIANDO SERVER (para instalar os node_modules rodar => npm i express)
const express = require('express');

const app = express();
app.listen('3030') // verificar sempre a disponibilidade de porta


// MIDDLEWARE (SEMPRE será usado em POST, PUT)
app.use(express.json())

// REQUISIÇÃO GET
app.route('/').get ((req,res) => res.send(req.query.name))

// REQUISIÇÃO POST
app.route('/').post((req,res) => res.send(req.body));

// REQUISIÇÃO GET
app.route('/:parametro').get((req,res) => res.send(req.params.parametro))

/*
No Navegador:

- http://localhost:3030/?name=Filipe - como foi passado como req o parametro name, a informação que será passada como atributo, será mostrada no corpo (body)
- tambem pode-se ser feita sem uso da variável http://localhost:3030/Filipe
- e ainda passando no body da requisição no insomnia
{
    "name": "Filipe"
}
*/


// PARAR O SERVIDOR 
// Apertar Ctrl + C