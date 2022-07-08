let dataApi
let url = 'http://localhost:5500/api'


async function getUsers(){
    const users = await fetch(url).then(response => response.json())
    renderApiResult.textContent = JSON.stringify(users)
}

async function getUser(){
    const user = await fetch(`${url}3`).then(response => response.json())

    userName.textContent = user.name
    userCity.textContent = user.city
    userAvatar.src = user.avatar
}

function addNewUser(newUser = []){
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type" : 'application/json;charset=UTF-8'
        }
    })
}

const newUser = {
    name: 'Amanda',
    avatar: "https://picsum.photos/300/300",
    city: "Rio Grande do Sul",
    music: "bury a friend"
}

getUsers().catch(erro => console.error(erro))
getUser().catch(erro => console.error(erro))
//addNewUser(newUser)
