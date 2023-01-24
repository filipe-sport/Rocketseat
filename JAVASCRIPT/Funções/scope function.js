// function scope
/*
let subject = 'create video'
function createThink(subject) {
    subject = 'study'
    return subject;
}
console.log(createThink(subject));
console.log(subject);
*/

let subject1 = 'create video'
function createThink() {
    subject1 = 'study'
    return subject1;
}
console.log(createThink(subject1));
console.log(subject1);