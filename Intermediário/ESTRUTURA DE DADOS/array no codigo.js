const pilotos = [
    "Senna",        //posição [0]
    "Prost",        //posição [1]
    "Schumacher",   //posição [2]
    "Hamilton"      //posição [3]
]

console.log(pilotos[0])

console.log(pilotos[3])

console.log(pilotos.length)

for (let piloto of pilotos) {
    console.log(piloto);
}

// adicionar elemento
pilotos.push("Alonso")
console.log(pilotos);

// encontrar um elemento
const senna = pilotos.find(piloto => piloto === "Senna")
console.log(senna)

// deletar um elemento
pilotos.splice(1, 1)
console.log(pilotos);