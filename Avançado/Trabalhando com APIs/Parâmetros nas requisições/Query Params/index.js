// CRIANDO SERVER (para instalar os node_modules rodar => npm i express)
const express = require('express');

const app = express();
app.listen('3030') // verificar sempre a disponibilidade de porta

//Query params é a inclusão do simbolo de ? na URL
//app.route('/').get((req,res) => res.send(req.query))
//app.route('/').get((req,res) => res.send(req.query.nome))
//app.route('/about/user').get((req,res) => res.send(req.query)) //localhost:3030/about/user?nome=Filipe
app.route('/about/user').get((req,res) => res.send(req.query.id)) // esperando um id; localhost:3030?nome=Filipe&id=12345 - mesmo se colocar uma multipla query, só será mostrado o id

// PARAR O SERVIDOR 
// Apertar Ctrl + C