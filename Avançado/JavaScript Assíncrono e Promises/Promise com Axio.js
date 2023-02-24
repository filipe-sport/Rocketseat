const axios = require('axios');
    axios.get('https://api.github.com/users/maykbrito')
    .then(response => axios.get(response.data.repos_url)) // o response.data.repos_url volta como link 'api.github.com/users/maykbrito/repos
    .then (repos => console.log(repos.data))
    .catch(err => console.log(err))