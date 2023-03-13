# Verificação tipo estático

- Já sabemos que o TypeScript verifica erros antes da execução, mas vamos ver isso na prática:

const userName = "João Inácio"

userName()

- Ao tentar executar userName() como função no Typescript, o próprio nos avisará que userName é uma variável do tipo String
--------------------------------------------------------------------------------------------

const user = {
    name: "Filipe",
    email: "filipecesar@outlook.com"
}
console.log(user.location);

- Ao tentar processar o console.log será informado o seguinte erro para location (Property 'location' does not exist on type '{ name: string; email: string; }')
--------------------------------------------------------------------------------------------

function soma(a , b){
    return a + b;
}
soma (1,2)

- Ao tentar executar a soma, será informado o seguinte erro para "a" e "b" (Parameter 'a' implicitly has an 'any' type.)

- Sempre que usar parametros deve-se especificar o tipo da variavel usada:

function soma(a: number , b: number){
    return a + b;
}
soma (1,2)
