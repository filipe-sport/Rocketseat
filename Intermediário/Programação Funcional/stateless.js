/*
Stateless

- Não guarda estado
- A função só conhece dados entregues a ela
- A resposta não poderá variar
*/

let number = 2;

function square (){
    return number * number;
}
//Guardando estado para ser reutilizada
number = square() 

// stateless function
const square = n => n * n;
// faz o que tem que ser feito e não é reutilizda