const express = require('express');
const app = express();
app.set("view engine", "ejs");



const itens = [
    {
        title: "D",
        message: "Desenvolver aplicações/serviços de forma fácil!"
    },
    {
        title: "E",
        message: "EJS usa JavaScript para redenrizar HTML!"
    },
    {
        title: "M",
        message: "Muito fácil de usar!"
    },
    {
        title: "A",
        message: "Ação"
    },
    {
        title: "I",
        message: "install ejs"
    },
    {
        title: "S",
        message: "Sintaxe simples"
    }

]
const subtitle = "Uma linguagem de modelagem para criação de páginas HTML, utilizando JS!"
app.get('/', (req, res) => {res.render('pages/index',{
    qualitys: itens,
    subtitle: subtitle,})}
);

app.get('/sobre', (req, res) => {res.render('pages/about')}
);

app.listen(8080);
console.log(`Servidor Rodando
para pará-lo => Ctrl + C`);