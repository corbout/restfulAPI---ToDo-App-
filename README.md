# Express-App-API-TODO

- mkdir for app
- npm init --yes unless you want some changes
- npm install express --save
- require express in server.js file
- var express = require('express');
- var app = express();
- check if app will run
  - app.listen(3000, function(){
      console.log('Listening on PORT 3000')
    })

- Created a custom middleware
- app.use(objectName.key) to use middleware throughout the app (globally)
- app.get('/', can put middleware here, anonymous function)
- What is requiring a module and then how do I mount it
  - example npm install body-parser --save
  - require it at the top => var bodyParser = require('body-parser')
  - app.use('moduleName'()) example => app.use(bodyParser()) <= bodyParser() allows it to be used throughout the whole app

- to use code from another place in the folder, you must first require it in the file you need it and also module.exports from the file you're exporting it from

- created 1st GET /todos & tested it with POSTMAN by creating a Collection -> Environment -> Route

- created 2nd GET /todos/:id & tested with POSTMAN and pushed to heroku and created -Environment->Route, learned that POSTMAN is useful to test your API

- created POST //todos
first, intilized id
then we first had to require the body

- Refactored todos/:id with underscore
```javascript
app.get('/todos/:id', function(req, res) {
  var todoId = parseInt(req.params.id);
  var matchToDo = _.findWhere(todos, {id: todoId})
    if (matchToDo) {
      res.json(matchToDo);
    }
    else {
      res.status(404).send();
    }
})
```

- Refactored POST todos/:id with underscore. Easier to pick exactly what you need with .pick underscore
```javascript
app.post('/todos', function(req, res){
    var body = _.pick(req.body, 'description', 'completed');
    //_.isBoolean & _.isString are Object functions that allows us to validate. We have the body object through body-parser
    if(!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0) {
      return res.status(400).send();
    }
        body.description = body.description.trim();      body.id = todoNextId;
        todoNextId++;

        todos.push(body)
        res.json(body)
})
```

- Created DELETE todos/:id with underscore
- Returns a copy of the array with all instances of the values removed
=> .without([1, 2, 1, 0, 3, 1, 4], 0, 1);
=> [2, 3, 4]

```javascript
app.delete('/todos/:id', function(req, res){
  var todoId = parseInt(req.params.id);
  var matchedTodo = _.findWhere(todos, {id: todoId});
  // negative, if it does not work/find match res
  if (!matchedTodo) {
    res.status(404).json({"error": "No ToDo Found."})
  }
  else {
    // .without, the first argument is the array name & second argument is the values that we want removed. Which in this case is the matchedTodo
    todos = _.without(todos, matchedTodo);
  }
  res.json(matchedTodo);
})
```
