const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    item: {
        type: String
    }
})

module.exports = mongoose.model('Order', OrderSchema)