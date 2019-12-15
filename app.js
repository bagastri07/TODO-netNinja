var express = require('express')
var todoController = require('./controllers/todoController')

var app = express()

//set up template engine
app.set('view engine', 'ejs')

//static files
app.use(express.static('./public'))

//fire controller
todoController(app)

//listen to port
app.listen(2000)
console.log("hey Sulthan, you're listening to port 3000")


