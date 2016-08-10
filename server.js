var express = require('express');
var app = express(); // Creating an express app
var path = require('path');
var middleware = require('./middleware')
var PORT = process.env.PORT || 3000;

// This middleware is now for the whole app with the use of app.use
// Calling on the middleware from middleware.js
app.use(middleware.requireAuthentication);

app.get('/', function(req, res){
  res.send('<h1>Express Todo API</h1>');
})

app.get('/about', middleware.logger, function(req, res) {
  res.send('<h1>Express About Page</h1>')
})

app.listen(PORT, function(){
  console.log('Listening on PORT ' + PORT);
})
