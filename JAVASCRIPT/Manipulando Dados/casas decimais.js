/* 
- Para determinar uma quantia de casas decimais de um número pode-se usar o método toFixed() colocando como argumento quantas casas decimais o número terá. 
- Para mudar a formatação do número de separado por ponto para separado por vírgula é possível usar o método replace(".", ",").
- O resultado final será do tipo string, e a conversão para o tipo número não será possível por que a vírgula não é considerada parte de um número.
*/

let number = 12958128579306.390581630943
console.log(number.toFixed(2).replace(".", ",")); // Se colocar Number vai dar problema, NaN, pois numeros são identificados pelo ponto e não por vírgulas.
console.log(Number(number.toFixed(2)))