const {doSomething1, doSomething2} = require("./doSomething.js")
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = {
    creditCards: []
}


app.get('/', function (req, res) {
    res.send('Hello World!')
})


app.get('/new', function (req, res) {
    res.send({
        something: 'else',
        someArray: [
            {"one": 1 },
            {"two": 2 }

        ]
    })
})

app.get('/creditCards', function (req, res) {
    res.send(db.creditCards)
    doSomething1()
    doSomething2()
})

app.put('/save', bodyParser.json(), function (req, res) {


    res.send('got it.')
})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

