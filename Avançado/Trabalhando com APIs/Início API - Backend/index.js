// CRIANDO SERVER (para instalar os node_modules rodar => npm i express)
const express = require('express');

const app = express();
app.listen('3030') // verificar sempre a disponibilidade de porta

// REQUISIÇÃO GET
// app.route('/').get((req,res) => res.send('hello'))
app.route('/sobre').get((req,res) => res.send('hello sobre'))

// MIDDLEWARE (SEMPRE será usado em POST, PUT)
app.use(express.json())


// REQUISIÇÃO POST
app.route('/').post((req,res) => res.send(req.body))

// REQUISIÇÃO PUT (PUT - serve pra editar requisições)
let author = "Filipe"
app.route('/').get((req,res) => res.send(author))
app.route('/').put((req,res) => {
    author = req.body.author
    res.send(author)
})

// REQUISIÇÃO DELETE
app.route('/:identificador').delete((req,res) => {
    res.send(req.params.identificador)
})

// PARAR O SERVIDOR 
// Apertar Ctrl + C