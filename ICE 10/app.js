const express = require('express');
const pug = require('pug');
const user = require('./routes/userroute');
const app = express(); // Initialize the Express app

// Setup template engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/',(req,res)=>{
    res.render('./pages/home',{
        pageTitle:"INFT2202- USER VIEW"
    })
})

app.use('/', user);

// Listen on port 3000
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
