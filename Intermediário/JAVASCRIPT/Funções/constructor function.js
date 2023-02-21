/* Constructor function

- expressão new
- craiar um novo objeto
- this keyword

*/

function Person(name, idade) {
	this.name = name;
    this.idade = idade;
	this.walk = function() {
		return this.name + " está andando e tem " + this.idade +" anos"
	}
}
const mayk = new Person("Filipe", 38)
const joao = new Person("João", 27)

console.log(mayk.walk());
console.log(joao.walk());