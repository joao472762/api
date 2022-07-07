const express = require('express')
const app = express()

app.route('/').get( (req, res) => {
    res.send(req.query.city)
})

app.route('/:nome').get( (req, res) => {
    res.send(req.params)
})

app.listen(3000)