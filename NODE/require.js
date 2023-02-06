// MÓDULOS NATIVOS

const path = require('path');

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log("----".repeat(15));

// MEUS MÓDULOS 

const myModule = require('./exports')
console.log(myModule);

