var express = require('express')
var bodyParser = require('body-parser')
var http = require('http')
var app = express()

app.use(bodyParser())

var PORT = process.env.PORT || 3000

var todos = [
  {todo: 'learn node', completed: 'false',
  {todo: 'learn express', completed: false}
]

app.get('/todos', function(req, res) {
  res.json(todos)
})

app.post('/todo', function(req, res) {
  var task = req.body // only works because of bodyparser!
  todos.push(task)
  res.json(todos)
})

//app.put('/todo'
//app.delete('/todo/:id

app.get('/todos/:id', function(req, res) {
  res.json(todos[req.params.id])
})

app.listen(PORT, function() {
  console.log('app listening on port: ' + PORT)  
})
