const express = require('express');
const axios = require('axios');
const app = express();
app.listen('3030');
app.route('/').get((req,res) => {
    axios.get('https://api.github.com/users/filipe-cesar')
    .then(result => {
        res.send(`<img src="${result.data.avatar_url}"/>`)
      })
    .catch(error => {
    res.send(error);
    })
})