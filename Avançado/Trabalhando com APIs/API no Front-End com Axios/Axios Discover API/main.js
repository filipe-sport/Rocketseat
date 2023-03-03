const url = "http://localhost:5500/api"


// GET METHOD

function getUsers(){
    axios.get(url)
    .then(response =>apiResult.textContent = JSON.stringify (response.data))
    .catch(error => console.error(error))
}
getUsers()

// GET METHOD WITH PARAMETERS

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userID.textContent = response.data.id
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}
getUser(5)

//  POST METHOD

function addUsers(newUser){
    axios.post(url, newUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const newUser = {
    name: "Filipe",
    avatar: "https://picsum.photos/200/300",
    city:"Recife"
}

addUsers(newUser)

// PUT METHOD

function updateUser(){
    axios.put
}
