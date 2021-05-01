const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
require('dotenv/config')
require('./utils/init_mongo')
const { requestChecker, handleError } = require('./utils/middlewares')

app.use(express.json())
app.use(requestChecker)
app.use(require('./routes/orders.routes'))

/* 500 Error handler */
app.use(handleError)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
