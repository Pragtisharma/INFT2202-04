const express = require('express');
const pug = require('pug');

//port
const PORT=3000;
//initialize method
const app= express();

//setup template engine
app.set('views',__dirname+'/views')
app.set('view enfine','pug')

app.get("/",function(req,res){
    res.render("index",{
        title:"INFT2202-Working with Node and Pug",
        firstname:"Pragti",

    });
});
const userRouter = require('./routes/user');
app.use('/', userRouter);
