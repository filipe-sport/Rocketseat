/*
for ... of
- Cria um loop a partir de uma variavel previa declarada
*/

let name = " Filipe"
let names = ["Cesar", "Felix", "Hora"]

for (let char of name) {
    console.log(char);
}

console.log("---".repeat(10));

for(name of names){
    console.log(name);
}
