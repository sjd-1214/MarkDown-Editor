var express = require('express');
    var app = express();

    // set the view engine to ejs
    app.set('view engine', 'ejs');

    // public folder to store assets
    app.use(express.static(__dirname + '/public'));

    // routes for app
    app.get('/', function(req, res) {
      res.render('Home');
    });
    app.get('/(:id)', function(req, res) {
      res.render('pad');
    });

    app.listen(3000,(req,res)=>{
        console.log('The Server is connected to port 3000');
        
    });