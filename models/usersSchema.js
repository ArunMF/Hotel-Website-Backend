// import mongoose
const mongoose = require('mongoose')

// Define schema for user collection to store users
const usersSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

// Create a model to store users
const users = new mongoose.model('users',usersSchema)

// export the model
module.exports = users