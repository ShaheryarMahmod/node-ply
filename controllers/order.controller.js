const Order = require('../models/Order')

const create = async (req, res, next) => {
    const { body: { item } } = req
    const order = new Order({
        item
    })
    try {
        const o = await order.save()
        return res.status(201).json(o)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    create
}