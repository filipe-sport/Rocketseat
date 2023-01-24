// function expression
// function anonymous

// parameters (parâmetros)
const sum = function (num1, num2){
    // console.log(num1 + num2);
    let total = num1 + num2;
    return total;
};

sum(2, 3);
sum(4, 8);

console.log("-----".repeat(10));

let number1 = 34;
let number2 = 25;

sum(number1, number2)

console.log(`O número 1 é ${number1}`);
console.log(`O número 2 é ${number2}`);
console.log(`A soma é ${sum(number1, number2)}`);

console.log("-----".repeat(10));

// Função é um liquidificador

function fazerSuco (fruta1, fruta2){
    return "Suco de : "+ fruta1 + " e " + fruta2;
}

const copo = fazerSuco("banana", "maçã")
console.log(copo);