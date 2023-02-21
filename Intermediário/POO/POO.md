# Programação Orientada a Objetos

- Oriented Object Programming ou OOP
- Um paradigma de desenvolvimento
- Uma maneira de resolver um problema, um modo de pensar
- Não está ligado somente à linguagem de programação, mas a um entendimento amplo e atemporal para criação de softwares

# Utilização no mercado

- Na maioria dos sistemas atuais
- Várias linguagens (JS, TS, JAVA, Python...)
- Utilizado por Analistas de Sistemas e não somente por programadores
    - Na fase de levantamento de requisitos de sistemas
    - Via gráficos, desenhos e textos

# Onde e quando é utilizado

- Linguagens
- Quando quiser aplicação Padrões de Projetos
- Quando quiser organizar seu código
- Para melhorar entendimento do código, pensando nele como Objetos
- Para separar a complexidade de código, abstrair código e expor de maneira mais simples
- Para classificar as rotinas e trechos de código.

# Conceitos

- Precisamos entender os conceitos e paradigma e não somente códigos
- Uma boa fundamentação é essencial

# Objetos

* Todos os objetos possuem:
- Propriedades e Funcionalidades
- Estados e Comportamentos
- Atributos e Métodos

# Abstratos VS Mundo Real

* Representação de algo do mundo real para Objetos

- Pessoa
- Aluno
- Produto
- Carrinho de compras

* Porém, alguns objetos na programação não são fáceis de identificar, pois são abstratos como, por exemplo:
- Autenticação
- Autorização

* OBS: Nem todo objeto do mundo real fará parte do seu sistema.

# Classes

- As classes na orientação a objetos funciona como um molde para os objetos. Os objetos são criados a partir de uma classe e muitos deles podem ser feitos da mesma classe.
- Ex: Máquina de biscoitos
    - Instâncias que resultam em 1 ou vários biscoitos

# Classes em JavaScript

- Multiparadigma
- Syntactival sugar
    - Maneira de se escrever em prototipos
-Prototype

# Encapsulamento

- Por abstração pode-se dirigir um carro sem conhecer o motor do carro
- Coloca numa cápsula
- Agrupamento de funções e variáveis
- Esconder detalhes de implementação
- Camada de segurança para os atributos e métodos.

# Encapsulamento no código JavaScript

// Estrutural

let altura = 50
let largura = 60
function calcularArea(){
    return (altura + largura)
}
let area = calcularArea();

// Orientação a Objetos

class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }
    #calculateArea(){  
        return this.altura * this.largura
    }
    get area() { return this.#calculateArea() 
    }
    <!-- OBS: O uso do # em metodo ou função traduz que só será visivel dentro do escopo da Classe designada -->
}

<!-- criar o objeto -->
let poligono = new Poligono(50,60);
console.log(poligono);
<!-- se quiser acessar a função poligono fora do escopo irá resultar um error: Expected identifier-->
console.log(poligono.#calcularArea());

# Programação Estruturada VS Orientada a Objetos

* Programação Estruturada

- Processa a entrada e manipulação dos dados, até a saida
- Uso de sequências, estruturas de repetições e condições
- Uso de uma rotina maior, ou sub-rotinas
- Não existem restrições as variáveis

* Programação Orientada
- Surge para trazer um cuidado ao uso estruturado
    -Obs:  Não elimina por completo o uso estruturado
- Conceitos como Objetos e Classes
- Cuidados com variáveis e rotinas (Encapsulamento)
- Melhor reuso de código (Herança)

* Estruturada

let valorHora = 50
let tempoEstimado =20
let desconto = valorHora * tempoEstimado * (10/100)
let custoEstimado = valorHora * tempoEstimado - desconto;
console.log(custoEstimado)

*POO
const job = new Job();
job.valorHora = 50
job.tempoEstimado = 20
job.desconto = 10
const custoEstimado = job.calcularEstimativa();
console.log(custoEstimado)

# Herança

- Pais e Filhos
- Objetos podem herdar, ou estender, características bases
- Uma cópia de atributos e métodos de outra classe
- Um objeto pode estender de outro objeto que pode estender de outro objeto
- Fácil reutilização de código


* Exemplo
class Veiculo {
    rodas = 4;
    mover (direcao){}
    virar (direcao){}
}

class Moto extends Veiculo {
    constructor(){
       super() <!-- puxa atributos e métodos do pai -->
        this.rodas = 2;
    }
}

# Polimorfismo

- Quando um objeto estende de outro (herança) talvez haja a necessidade de reescrever uma ou mais características (atributos e métodos) nesse novo Objeto.
- Recriamos então um método (ou mais) da classe herdada.
- Polimorfismo significa muitas formas.

# Polimorfismo com JavaScript

class Atleta {
    peso;
    categoria;
    constructor(peso){  
        this.peso =peso;
    }
    definirCategoria(){
        if (this.peso <= 50){
            this.categoria = "infantil";
        }
        else if (this.peso <= 65 ){
            this.categoria = "juvenil";
        }
        else{
            this.categoria = "adulto";
        }
    }
}

class Lutador extends Atleta {
    constructor(peso){
        super(peso);
    }
    if(this.peso <= 54){
        this.categoria = "pluma";
    }
    else if (this.peso <= 60){
        this.categoria = "leve";
    }
    else if (this.peso <= 75){
        this.categoria = "meio-leve";  
    else{
        this.categoria = "pesado";
    }
    }
}

# Abstração

- Tenplate ou identidade de uma classe que será constrída no futuro;
- Atributos e métodos podem ser criados na classe de Abstração
- A implementação dos métodos e atributos, só poderá ser feita na classe que irá herdar essa Abstração

# Abstração com Código JavaScript

class Parafuso {
    constructor(){
        if (this.constructor === Parafuso)
            throw new Error("Classe abstrata, não pode ser instanciada");
    }
    get tipo(){
        throw new Error("Método "get tipo()" precisa ser implementado");    
    }
}

class Fenda extends Parafuso{
    constructor(){
        super();
    }
    get tipo(){
        return "Fenda";
}

class Philips extends Parafuso{
    constructor(){
        super();
    }
    get tipo(){
        return "philips"
    }
}
class Allen extends Parafuso{}

<!-- criar e usar -->
new Parafuso() <!--Classe abstrata não pode ser instanciada -->
let fenda = new Fenda();
let philips = new Philips();
let allen = new Allen();

console.log(fenda.tipo, philips.tipo);
console.log(allen.tipo); <!-- Método "get tipo()" precisa ser implementado (colocado as devidas características, assim como as classes fenda e philips) -->