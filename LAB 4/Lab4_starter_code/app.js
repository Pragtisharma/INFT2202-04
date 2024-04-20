const express = require('express');
const pug = require('pug');
const app = express(); 
const animalRouter = require('./routes/animal.router.js'); 
require('dotenv').config();
app.use(express.urlencoded({extended: false}));

// Setup template engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { pageTitle: "INFT2202- ANIMALS" }); 
});

  app.get('/edit-animal', (req, res) => {
    
    res.render('./animals/edit-animal');
  });  
  app.get('/entry-form', (req, res) => {
    
    res.render('./animals/entry-form');
  }); 

app.use('/', animalRouter); 

// Listen on port 3000
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
