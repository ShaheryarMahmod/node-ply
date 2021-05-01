const Request = require("../models/Request")

const requestChecker = async (req, res, next) => {
    try {
      const requestId = req.headers['x-request-id']
      let request = await Request.findOne({ requestId }).exec() // using mongo here but any redis, memcache should be used
      if(!request){
        const newReq = new Request({
          requestId
        })
        await newReq.save()
        next() 
      }else{
        return res.status(304).send('')
      }
    } catch (error) {
      throw error
    }
}

const handleError = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }
    let code = err.statusCode || 500
    return res.status(code).json({
        message: err.message
    });
}

module.exports = {requestChecker, handleError}
