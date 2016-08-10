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

- to use code from another place in the folder, you must first require it in the file you need it and also module.exports from the file you're exporting it from
