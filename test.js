var mocha = require('mocha')
var assert = require('assert')
var todoController = require('./controllers/todoController')

// describe test
describe('saving record', function(){
    // create test
    it('saves a record to the database', function(){
        var newTodoScheme = new todoScheme({
            item: 'bag'
        })
        newTodoScheme.save()
    })

})