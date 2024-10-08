const express = require('express');
const app = express();

app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(3000,(req,res)=>{
    console.log('Server is started at Port 3000')
    
})