// CRIANDO SERVER (para instalar os node_modules rodar => npm i express)
const express = require('express');

const app = express();
app.listen('3030') // verificar sempre a disponibilidade de porta

// MIDDLEWARE - SEMPRE que estiver trabalhando com o corpo de requisição, recebendo algo pelo body, usa-se o MIDDLEWARE
app.use(express.json());

// // REQUISIÇÃO GET
// app.route('/').get ((req,res) => res.send("ola"))

// REQUISIÇÃO POST
//app.route('/').post((req,res) => res.send(req.body.nome))
// app.route('/').post((req,res) => 
// {
//     const {nome, cidade} = req.body
//     res.send(`meu nome é ${nome} e minha cidade é ${cidade}`)
// })

app.route('/').post((req,res) => 
{
   res.send(req.body.tecnologias)
})


// PARAR O SERVIDOR 
// Apertar Ctrl + C