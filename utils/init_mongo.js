const mongoose = require('mongoose')

mongoose.connect(process.env.DB_CON, 
    { useNewUrlParser: true, useUnifiedTopology: true }
)

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to db`)
})

mongoose.connection.on('error', (err) => {
    throw err
})

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected`)
})

process.on('SIGINT', async () => {
    await mongoose.connection.close()
    process.exit(0)
})
