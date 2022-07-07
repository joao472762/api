const express = require('express')
const app = express()

app.use(express.json())

let author =  {
    "id": "1",
    "name": "lais",
    "content" : "hello wori"
}

app.route('/').get( (req,res) => res.send(author))


app.route('/').put((req,res) => {
    author = req.body.author
    res.send(author)
})

app.route('/').delete( (req,res)  => {})

app.listen(3000)