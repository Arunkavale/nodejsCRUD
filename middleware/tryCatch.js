const handleError = require('./error');

/* this middleware will take function as parameter and handle it in side try catch */
function tryCatch(handler){
    return async (req,res,next)=>{
        try{
            console.log("inside handler");
            await handler(req,res);
        }catch(ex){
            console.log("iaide error");
            handleError(ex ,res); // if exception then calling  handleError middleware
        }
    }
}

module.exports = tryCatch ;