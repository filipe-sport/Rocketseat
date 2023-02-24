// Callback

// Funções aceitam qualquer tipo de dado como argumento
function imprimirDado(dado){
    console.log("outras tarefas");
    console.log(dado())
}
// imprimirDado(1)
// imprimirDado('texto')
// imprimirDado(true)
// imprimirDado({nome:"Filipe"})
// imprimirDado([1,2,3])

imprimirDado(function(){
    return "Hello World"
})