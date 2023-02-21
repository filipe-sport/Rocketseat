/* 
Desafio:

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/
let receitas = [1600,1300,260,600];
let despesas = [510, 1800, 120, 600, 350, 500]

totalReceitas = function(){
    let total = 0
    for(let i=0; i<receitas.length; i++){
        total += receitas[i]
    }
    return total
}
totalDespesas = function(){
    let total = 0
    for(let j=0; j<despesas.length; j++){
        total += despesas[j]
    }
    return total
}
function totalGeral(){
    total = totalReceitas()-totalDespesas()
    result = (total<0) ? (`Saldo negativo no valor de: ${total}`) : (`Saldo positivo no valor de: ${total}`)
    console.log(result);
}
totalGeral()