const url = 'http://localhost:5500/api'

async function getUsers(){
    const users = await axios(url).then(response => response.data)
    apiResult.textContent = JSON.stringify(users)
}
function addNewUser(newUser = {}){
    axios.post(url, newUser)
        .catch(error => console.error(error))
}
async function getUser(id){
    let user = await axios.get(`${url}${id}`).then(response => response.data)

    userName.textContent = user.name
    userCity.textContent = user.city
    userAvatar.src = user.avatar
}

function updateUser(userUpdated = {}, id){
    axios.put(`${url}/${id}`,userUpdated)
        .catch(error => console.error(error))
}

function daleteUser(id = 0){
    axios.delete(`${url}/${id}`)
}

const newUser = {
    name: 'Amanda',
    avatar: "https://picsum.photos/300/300",
    city: "Rio Grande do Sul",
    music: "bury a friend"
}
addNewUser(newUser)


const userUpdated = {
    name: 'Amanda Aguiar Souza',
    avatar: "https://picsum.photos/300/300",
    city: "Rio Grande do Sul",
    music: "bury a friend"
}

updateUser(userUpdated,3)
getUsers().catch(erro => console.error(erro))
getUser(0).catch(erro => console.error(erro))