const people = ["Filipe", "Diego", "Dani", "Jamile"]
const upperCasePeopleThatStartWithD = people.filter(person => person.startsWith("D")).map(dperson => dperson.toUpperCase());

console.log(upperCasePeopleThatStartWithD);