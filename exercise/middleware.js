let middleware = (req,res,next)=>{
    
    res.locals.message = "hooray!";
    // res.locals is an object that contains information associated with this response
    
    
    // if we don't do this, the request will hang. 
    next();
}
