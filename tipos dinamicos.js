/* O/
JS é uma linguagem fracamente tipada e dinâmica
- Variáveis não precisam ter um tipo previamente definido;
- Podemos mudar o conteúdo da variável;
*/

let clima = "quente";
console.log(clima);

let temp;
console.log(temp);

let numero = 0;
console.log(typeof numero);

clima = true;
console.log(clima);
console.log(typeof clima);

const idade = 38;
console.log(idade);
idade = 36; //irá resultar em erro, pois não se pode reatribuir valor em uma const;
console.log(idade);