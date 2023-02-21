/*
A estrutura de repetição for tem a seguinte sintaxe:

for(inicialização de uma variável; condição de continuação para o loop; expressão final)

*/

for (let i = 0; i < 10; i++) {
    if(i===5){
        break;
    }
    console.log(i);
    
}

console.log("====".repeat(10));

for (let j = 10; j > 0; j--) {
    if(j===5){
        continue;
    }
    console.log(j);
    
}