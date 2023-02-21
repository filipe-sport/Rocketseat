/*
# Stack (pilha)

- Pilha linear, um após o outro
- Pilha LIFO (Last In First Out) - o último a entrar é o primeiro a sair

# Métodos Fundamentais
- push(): adicionar um elemento ao final da pilha
- pop(): remover o último elemento da pilha
- peek(): retorna o último elemento da pilha
- isEmpty(): verifica se a pilha está vazia
- size(): retorna o tamanho da pilha
*/

// Modelando 
class Stack {
    constructor() {
        this.data = [];
        this.top = -1;
    }
    push(value){
        this.top++
        this.data[this.top] = value
        return this.data
    }
    pop(){
    if (this.top < 0) return undefined
    const poppedTop = this.data [this.top]
    delete this.data[this.top]
    this.top--
    return poppedTop
    }
    
    peek(){
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}

// Utilizando
const stack = new Stack()
// adicionando dados
stack.push("learning")
stack.push("data")
console.log(stack.push("structures"));
console.log(stack.peek());
// remover
stack.pop();
console.log(stack.pop());
console.log(stack.peek());