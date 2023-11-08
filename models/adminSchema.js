// import mongoose
const mongoose = require('mongoose')

// Define schema for admin to store admin
const adminSchema = new mongoose.Schema({
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

// Create a model to store admin
const admin = new mongoose.model('admin',adminSchema)

// export the model
module.exports = admin
