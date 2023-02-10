/*
# Queue

* FIFO: First In First Out
    - O primeiro a entrar na fila, é o primeiro a sair dela.
* Front(frente) é a referencia do primeiro elemento a entrar na fila.
* Back(fundo) é a referencia do último elemento a entrar na fila.

# Métodos Fundamentais
- enqueue(): adicionar um elemento ao final da fila
- dequeue(): remover o primeiro elemento a entrar na fila
- size() para mostrar o tamanho da fila
- front() para pegar o primeiro elemento da fila
*/

// Modelando
class Queue {
    constructor(){
        this.data = [];
    }

    enqueue(element){
        this.data.push(element);
        console.log(`${element} chegou na fila!`);
    }
    dequeue(){
        const element = this.data.shift()
        console.log(`${element} saia da fila!`);
    }
}
// Utilizando
const fila = new Queue();

//adicionando dados
fila.enqueue("Mariana");
fila.enqueue("João");
fila.enqueue("Pedro");
//removendo dados
fila.dequeue();
fila.dequeue();
fila.dequeue();
fila.dequeue(); // caso não tenha mais elementos retorna undefined
//
