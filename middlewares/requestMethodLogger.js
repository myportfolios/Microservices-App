const logRequestMethod =  (req,res, next) => {
    if(req && req.method){
        console.log(req.method)
    }
    return next()
}

module.exports = logRequestMethod;