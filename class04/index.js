const {default: axios} = require('axios')
const express = require("express")

const app = express()

const url = 'https://api.github.com/users/joao472762'


async function fetchGithubProfile(){
    try{
        const profile = await axios.get(url).then(response => response.data)
        gitHubProfile = profile

    } 
    catch(erro){
        console.log(erro)
    }
}

let gitHubProfile = fetchGithubProfile()



app.route('/').get((req, res) => {
    res.send(`<img src=${gitHubProfile.avatar_url}/>`)
})



app.listen(3000)



