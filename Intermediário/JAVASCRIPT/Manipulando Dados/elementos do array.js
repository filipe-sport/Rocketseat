//Para contar a quantidade de elementos em um array pode-se usar o método length.

//Contar elementos de um array

console.log(['a', 'b', 'c']);

console.log([
    'a', 
    {
        type: "array"
    },
    function(){
        return "alô"
    }
].length);

console.log('----'.repeat(8));

console.log([
    'a', 
    {
        type: "array"
    },
    function(){
        return "alô"
    }
][2]());