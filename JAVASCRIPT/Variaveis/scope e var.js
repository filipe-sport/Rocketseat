/*
* Scope
- Escopo determina a visibilidade de alguma variável no JS

* Block statement

{   // inicia bloco
    //aqui dentro é um bloco e coloca-se qualquer código 
}   //fecha bloco

- var é  escopo global e também local
- var => hoisting

*/

console.log('Existe x antes do bloco?', x);

{
    var x = 0;
}

console.log("Existe x antes do bloco?", x);