const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))    //used with html forms
        //bodyParser.text for stuff to come back as text
        //bodyParser.json for stuff to come back as json
        //extended: true allows to post nested objects

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', function(req, res) {
    //req.body logs the form data and shtuff under network>localhost>headers
    //so if you want to access a var just use req.body.var
    //Passed back as text
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    let result = num1 + num2
    res.send("The result is " + result)
})

app.listen(3000, function() {console.log('server started')})
