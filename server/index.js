const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.route('/').get( (req,res) => res.send('hello'))

let  datas = {
    "users": [
        {
            "id": 0,
            "name": "lais santos",
            "avatar": 'https://avatars.githubusercontent.com/u/84108989?v=4',
            "city" : 'Rio de Janeiro',
            "music" : 'rock'

        },
    
    ]
}


app.route('/api').get( (req,res) => {
    res.send(datas)
})

app.route('/api').post( (req,res) => {
    datas.users.push({
        id: datas.users.length + 1,
        name: req.body.name,
        avatar: req.body.avatar,
        city: req.body.city,
        music: req.body.music
    })
    res.send('done')
})

app.route('/api:id').get( (req,res) => {
    const onlyOneUser = datas.users.find(user => Number(user.id) === Number(req.params.id))

    onlyOneUser 
    ? res.send(onlyOneUser)
    : res.send('user not found')
})

app.listen(5500)