// setInterval irá rodar uma função N vezes
// despois de X milissegundos

const timeOut = 1000;
const checkInterval = () => console.log("Checking!!");
let interval = setInterval(checkInterval, timeOut);

setTimeout(() => clearInterval(interval), 4000);