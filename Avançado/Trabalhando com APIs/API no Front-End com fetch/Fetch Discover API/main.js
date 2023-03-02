const url = "http://localhost:5500/api"

function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.log(error))
}

getUsers()

function getUser (){
    fetch(`${url}/1`)
    .then(response => response.json())
    .then (data => {
        // return renderApiResult.textContent = JSON.stringify(data.avatar)
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.log(error))
}

getUser()

function addUser (newUser){
    fetch(url,{
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        alertApi.textContent = data
    })
    .catch(error => console.log(error))
}

const newUser = {
    name:"Olivia Zars",
    avatar: "https://picsum.photos/200/300",
    city:"Olinda"
}
addUser(newUser)


