/*
- A expressão new, também denominada como left-hand-side expression. 
- Serve para criar um novo objeto usando as funções construtoras que temos por padrão no JavaScript.
*/

let date = new Date('2020-12-01')
console.log(date)

console.log("----".repeat(10));

let name = new String ("Filipe")
name.surName = "César"
let age = new Number(38)


console.log( name , age)
console.log(name.surName)