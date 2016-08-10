var express = require('express');
var app = express(); // Creating an express app
var path = require('path');
var bodyParser = require('body-parser');

var middleware = require('./middleware')
var PORT = process.env.PORT || 3000;

var todos = [
  // {
  //   id: 1,
  //   description: 'Teach REST API',
  //   completed: false
  // },
  // {
  //   id: 2,
  //   description: 'Go eat a healthy lunch',
  //   completed: true
  // }
]

var todoNextId = 1;

// This middleware is now for the whole app with the use of app.use
// Calling on the middleware from middleware.js
app.use(middleware.requireAuthentication);
app.use(bodyParser());

app.get('/', function(req, res) {
  res.send('<h1>Express Todo API</h1>');
})

app.get('/todos', function(req, res) {
  res.json(todos);
})

// Creating a variable that will hold id from params object
app.get('/todos/:id', function(req, res) {
  var todoId = parseInt(req.params.id);
  var matchToDo;
  todos.forEach(function(todo) {
    if (todoId === todo.id) {
      matchToDo = todo;
    }
  })
    if (matchToDo) {
      res.json(matchToDo);
    }
    else {
      res.status(404).send();
    }
})

app.post('/todos', function(req, res) {
  // Need the body of this request
  var body = req.body;
  // Challenge
    // add id field
    body.id = todoNextId;
    todoNextId++;
    // push body into array
    todos.push(body);
    res.json(body)
})

app.get('/about', middleware.logger, function(req, res) {
  res.send('<h1>Express About Page</h1>')
})

app.listen(PORT, function(){
  console.log('Listening on PORT ' + PORT);
})
