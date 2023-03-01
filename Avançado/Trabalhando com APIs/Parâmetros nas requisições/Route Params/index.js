// CRIANDO SERVER (para instalar os node_modules rodar => npm i express)
const express = require('express');

const app = express();

app.listen('3030') // verificar sempre a disponibilidade de porta

// MIDDLEWARE - SEMPRE que estiver trabalhando com o corpo de requisição, recebendo algo pelo body, usa-se o MIDDLEWARE
app.use(express.json());

app.route('/').get((req,res) => res.send('Hello World'))
app.route('/:variavel').get((req,res) => res.send(req.params.variavel))

app.route('/sobre/:variavel1').get((req,res) => res.send(req.params.variavel1))
 

// PARAR O SERVIDOR 
// Apertar Ctrl + C