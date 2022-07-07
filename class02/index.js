const express = require('express')
const app = express()

app.use(express.json())

app.route('/').post( (req,res) => {
    const {name,city} = req.body[0]
    res.send(`${name},${city}`)
})

app.listen(3000)