//- Cria loop em cima de OBJETO

let person = {
    name: "Filipe",
    age: 38,
    weight: 90.9
}

for (const key in person) {
        console.log(key)
        console.log(person[key])
    
}