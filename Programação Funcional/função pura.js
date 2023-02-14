// Função Impura

//Exemplo 1: depende de dado externo que não passado como parâmetro
function calculateCincumference(radius){
    return Math.PI * (radius + radius)
}
// Math e PI não foram passados como argumentos e isso pode gerar problemas 

// Exemplo 2: está alterando um dado externo
let person = {
    name: "Filipe César",
    age: "jovem"
}

function changeName (name){
    person.name = name;
}

// Função Pura
//Exemplo 1
const calculateCircunference = function (pi, radius){
    return pi * (radius + radius)
}

//com arrow function
const calculateNewCircunference = (pi, radius) => pi * (radius + radius)

// Exemplo 2
const changePersonName = (person, name) => ({...person, name})
