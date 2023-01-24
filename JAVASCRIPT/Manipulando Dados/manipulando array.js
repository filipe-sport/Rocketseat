/*
Existem várias maneiras de manipular arrays, como: 
- o método push(), que adiciona um elemento no final do array, 
- o método unshift(), que adiciona um elemento no começo do array, 
- o método pop(), que retira um elemento do final do array, 
- o método shift(), que retira um elemento do começo do array, 
- o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, 
- o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover
- o método indexOff(), que encontra o index do valor que recebe como argumento em um array.
*/

let techs = ['html', 'css','js'];

//adicionar item no fim
techs.push("nodejs")
console.log('----'.repeat(10));

//adicionar item no começo
techs.unshift("sql")
console.log('----'.repeat(10));

//remover item no fim
techs.pop()
console.log('----'.repeat(10));

//remover item no começo
techs.shift()
console.log('----'.repeat(10));

//pegar somente alguns elementos do array
console.log(techs.slice(1,2))
console.log(techs.slice(0,2))
console.log(techs.slice(2,3))
console.log('----'.repeat(10));

//remover 1 ou mais itens em qualquer posição do array
techs.splice(1,1)
console.log(techs)
console.log('----'.repeat(10));

//encontrar a posição de um elemento no array
// lembrando que está em um novo array depois do splice
let index = techs.indexOf('js') 
console.log(index);
techs.splice(index,1)
console.log(techs)