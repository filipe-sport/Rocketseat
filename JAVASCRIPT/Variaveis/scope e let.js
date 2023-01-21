/*
Const e Let são locais e só funcionam no escopo onde foram criadas
*/
let y = 0;
console.log('Valor do y antes do bloco?', y);

{
    y = 1;
    console.log("Valor do y dentro do bloco?", y);
}

console.log("Valor do y depois do bloco?", y);


const z = 0;
console.log('Valor do z antes do bloco?', z);

{
    z = 1; // vai dar erro pois está atualizando uma const
    console.log("Valor do z dentro do bloco?", z);
}

console.log("Valor do z depois do bloco?", z);