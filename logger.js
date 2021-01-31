function log(req,res,next){
    console.log("This is middlewaer function...wait..")
    next();
}

module.exports = log;