/*
Promise

- A promessa de que algo irá acontecer
- Poderá dar certo ou errado, mas irá acontecer

new Promise(()=>{})

*/
// let aceitar = false;
let aceitar = true;

console.log("Pedir o Uber");
const promessa = new Promise((resolve, reject) => {
    if (aceitar){
        return resolve("Pedido Aceito!!")
    }
    return reject ("Pedido Negado!!")
});

console.log("Aguardando..."); 
// mesmo que esse console.log() esteja depois ele aparecerá antes devido a Promise

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log("Finalizada!!"))