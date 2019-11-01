const express = require('express');
const app = express();

let {middleware} = require(__dirname+"/middleware.js");


app.get('/a',middleware, (req,res,next)=>{
    res.send("ROUTE a" + (res.locals.message || "no message!"));
    //next('route');
    
    
    // let error = new Error('Oh no, something is not right!');
    //When you pass an error to next, Express will skill all remeaning middleware and go directly to the first error handler middleware
    
    
    // next(error);
});

// app.use(middleware);

app.get('/b', (req,res)=>{
    res.send("ROUTE b" + + (res.locals.message || "no message!"));
});

app.get('/:c', (req,res)=>{
    res.send("ROUTE c " + req.params.c + (res.locals.message || "no message!"));
});
// assignment 3 may use this error handler
let errorHandler = (error, req, res, next)=>{
    res.send('There has been an error!'+error.message);
    
    // res.send will terminate the request/response cycle, next is not necessary 
}

app.use(middleware);

const server = app.listen(8080, ()=>{console.log('listening')});