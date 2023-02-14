/*
// Gerando um número randômico
const random = (number, Math) => Math.floor(Math.random() * number);
// Note que o Math e o number só poderão ser usados no escopo da função pois foi declarado como argumento
*/

//Recursividade
// Ache o fatorial de um número
const factorial = x => {
    if (x===0){
        return 1;
    }
    return x * factorial (x - 1);
}

console.log(factorial(8))
