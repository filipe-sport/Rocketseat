// Logical operators

// - dois valores booleanos, quando verificados,
// resultará em verdadeiro ou falso

let pao, queijo;


// AND &&
pao = true;
queijo = true;
console.log(pao && queijo);

console.log("----".repeat(10));

pao = true;
queijo = false;
console.log(pao && queijo);

console.log("----".repeat(10));

pao = false;
queijo = false;
console.log(pao && queijo);

console.log("----".repeat(10));
console.log("----".repeat(10));
// OR ||
pao = true;
queijo = true;
console.log(pao || queijo);

console.log("----".repeat(10));

pao = true;
queijo = false;
console.log(pao || queijo);

console.log("----".repeat(10));

pao = false;
queijo = false;
console.log(pao || queijo);

console.log("----".repeat(10));
console.log("----".repeat(10));

//NOT !

console.log(!pao);
console.log(!queijo);
