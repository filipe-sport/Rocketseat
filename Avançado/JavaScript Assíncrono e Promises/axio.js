// Para utilizar a biblioteca axios:
// - Primeiro verifica-se a instalação do axios pelo comando npm install axios;
// - Segundo, coloca-se o comando abaixo, contendo require;
const axios = require('axios')

axios.get('https://api.github.com/users/maykbrito')
    .then(res => {console.log(res.data)})