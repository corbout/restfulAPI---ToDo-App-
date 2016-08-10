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
```js
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
