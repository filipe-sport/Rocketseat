// CRIANDO SERVER
const express = require('express');
const res = require('express/lib/response');
const app = express();
app.listen('3000')

// ROTA GET
// app.route('/').get((req,res) => res.send('hello'))
app.route('/sobre').get((req,res) => res.send('hello sobre'))

// MIDDLEWARE (SEMPRE será usado em POST, PUT)
app.use(express.json())


// ROTA POST
app.route('/').post((req,res) => res.send(req.body))

//ROTA PUT (PUT - serve pra editar requisições)
let author = "Filipe"
app.route('/').get((req,res) => res.send(author))
app.route('/').put((req,res) => {
    author = req.body.author
    res.send(author)
})
