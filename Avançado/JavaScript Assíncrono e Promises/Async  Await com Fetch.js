/* 
fetch('https://api.github.com/users/maykbrito')
.then(response =>response.json()) // RESPOSTA EM JSON
.then(data =>fetch(data.repos_url)) //NOVO FETCH
.then(resp => resp.json()) // RESPOSTA EM JSON
.then(d => console.log(d))
.catch(err =>console.error(err))
.finally(() => console.log('final'))
*/

async function start(){
   const response = await fetch('https://api.github.com/users/maykbrito')
   const user = await response.json()
   const reposResponse = await fetch(user.repos_url)
   const repos = await reposResponse.json()
   console.log(repos)
}

start()

// OU

async function start(){

    try{
        const response = await fetch('https://api.github.com/users/maykbrito')
        const user = await response.json()
        const reposResponse = await fetch(user.repos_url)
        const repos = await reposResponse.json()
        console.log(repos)
    }
    catch(err){
        console.error(err)

    }
}
 
 start()

 // OU

 async function start(){
    const user = await fetch('https://api.github.com/users/maykbrito').then(r => r.json())
    const repos = await fetch(user.repos_url).then (r => r.json())    
    console.log(repos)
 }
 
 start()

