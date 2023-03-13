# Any

- Ao declarar uma variável no TypeScript o seu tipo por padrão será any. Mas devemos tomar um certo cuidado com essa tipagem que ela pode ser perigosa ao decorrer do nosso projeto, não é muito recomendada a sua utilização.

Exemplo:

let info: any;

info = [123];
info = 'João';
info = true;
info = 10.50;

Exemplo: 

function sum(a:any,b:any){
    return a + b;
}
console.log(sum(1,3)) // resultado = 4
console.log(sum("1", 3)) // resultado = 13