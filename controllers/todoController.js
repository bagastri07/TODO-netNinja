var bodyParser = require('body-parser')
var mongoose = require('mongoose')

//connect to database (monggodb with mongoose)
mongoose.connect('mongodb+srv://sulthan1:1@todo-xw17o.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
//mongoose.connect('monggodb://localhost', {useNewUrlParser: true})

//create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
    item: String
})

var Todo = mongoose.model('Todo', todoSchema)

/* var itemOne = Todo({item: 'buy flowers'}).save(function(err){
    if (err) throw err
    console.log('item saved to database')
}) 
*/

// var data = [{item: 'get milk'}, {item: 'feed kittens'}, {item: 'study'}]

var urlencodedParser = bodyParser.urlencoded({extended: false})

module.exports = function(app){

app.get('/todo', function(req, res){
    // get data from mongodb and pass it to view
    Todo.find({}, function(err, data){
        if (err) throw err
        res.render('todoView', {todos: data})
    })
})

app.post('/todo', urlencodedParser, function(req, res){
    // get data from the view and put it on the database (mongodb)
    var newTodo = Todo(req.body).save(function(err, data){
        if (err) throw err
        res.json(data)
    })
})

app.delete('/todo/:item', function(req, res){
    // delete the requested item from the database (mongodb)
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
        if (err) throw err
        res.json(data)
    })
})

app.get('/daftarlowongan', function(req, res){
    res.render('post_lowongan')
})

}