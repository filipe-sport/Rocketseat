const sayMyName = () => console.log("Filipe")
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction ( () => console.log("discover"));

console.log(runFunction(Math.random));
