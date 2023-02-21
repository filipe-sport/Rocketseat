/*
Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, 
são dependentes de condições e podem entregar valores diferentes com base nelas.

Funciona da seguinte forma;

condição ? valor1 : valor2
*/

// Café da manhã top
let pao = true
let queijo = false

let niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

console.log("---".repeat(10));

pao = true
queijo = false

niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

console.log("---".repeat(10));

// Maior de 18

let idade = 18;

let canDrive = (idade >= 18) ? "Can drive": "Can´t drive"
console.log(canDrive)