// 1. Automaticlly load .env file into the application
require('dotenv').config()

// 2. import express
const express = require('express')

// 6. import cors
const cors = require('cors')

// 9. import connection.js
require('./connection')

// 10. import router
const router = require('./routes/router')

// 3. create an application using the express
const server = express()

// 4. Define the port number
const PORT = 5000

// 7. use cors in server app
server.use(cors())
server.use(express.json())
server.use(router)

// 5. run the application
server.listen(PORT,()=>{
    console.log('Listening on port '+PORT);
})

// 8. define routes
server.get('/',(req,res)=>{
    res.status(200).json('Hotel booking service started.')
})