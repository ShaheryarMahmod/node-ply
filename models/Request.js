const mongoose = require('mongoose')

const RequestSchema = mongoose.Schema({
    requestId: {
        type: String
    }
})

module.exports = mongoose.model('Request', RequestSchema)
