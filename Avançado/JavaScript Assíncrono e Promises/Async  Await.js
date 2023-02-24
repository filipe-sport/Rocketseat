/* Async / Await
    - Manerio de escrever promises
    - Syntactic Suger
*/

const promessa = new Promise (function (resolve, reject){
    //return resolve('ok')
    return reject ('error') 
})

// promessa
//     .then(function (response){
//         console.log(response);
//     })
//     .catch(function (error){
//         console.log(error);
//     })
//     .finally(function () {console.log('sempre irei executar')})

// o trecho de código acima comentado pode ser substituído pelo codigo a seguir: 
async function start(){
    try{
        const result = await promessa
    console.log(result);
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log("Rodar sempre");
    }
}
start();

