// setTimeout vai rodar uma função depois de X milissegundos

const timeOut = 3000;
const finished = () => console.log("Done!");

// console.log(setTimeout(finished, timeOut));

let timer = setTimeout(finished, timeOut);
clearTimeout(timer);
