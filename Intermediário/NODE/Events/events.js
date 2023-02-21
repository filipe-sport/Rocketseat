// EVENT EMITTER
const events = require('events')
console.log(events);

const {EventEmitter} = require('events')
const ev = new EventEmitter()
console.log(ev);


console.log("---".repeat(15))

// // OUVINDO EVENTOS (on)
// ev.on('saySomething', (message) => {
//     console.log('Eu ouvi você: ' + message)
// })

// OUVINDO EVENTOS UNICA VEZ (once)
ev.once('saySomething', (message) => {
    console.log('Eu ouvi você: ' + message)
})

// EMITINDO EVENTOS (emit)
ev.emit('saySomething', "Filipe")
ev.emit('saySomething', "Jamile")
ev.emit('saySomething', "Maria")

