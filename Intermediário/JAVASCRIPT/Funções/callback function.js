// Callback function

function sayMyName (name){
    console.log('Antes de iniciar a callback;');

    name()

    console.log('Depois de executar a callback');

}

sayMyName(
    /* name = */() => {
        console.log('estou em uma callback');
    }
)