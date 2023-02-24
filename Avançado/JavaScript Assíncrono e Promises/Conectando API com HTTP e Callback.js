const http = require('https');
const API = "https://jsonplaceholder.typecode.com/users?+limit=2";
http.get(API, res => {
    console.log(res.statusCode);
})
console.log("Conectando API");