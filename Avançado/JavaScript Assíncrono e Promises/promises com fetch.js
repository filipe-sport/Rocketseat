// fetch('https://servicodados.ibge.gov.br/api/v2/censos/nomes')
// .then(response =>response.json())
// .then(data => console.log(data[0]))


fetch('https://api.github.com/users/maykbrito')
.then(response =>response.json()) // RESPOSTA EM JSON
.then(data =>fetch(data.repos_url)) //NOVO FETCH
.then(resp => resp.json()) // RESPOSTA EM JSON
.then(d => console.log(d))
.catch(err =>console.error(err))
.finally(() => console.log('final'))