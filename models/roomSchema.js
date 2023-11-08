// import mongoose
const mongoose = require('mongoose')

// Define schema for room collection to store rooms
const roomSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    area:{
        type:Number,
        required:true
    },
    view:{
        type:String,
        required:true
    },
    guests:{
        type:Number,
        required:true
    },
    bathroom:{
        type:Number,
        required:true
    },
    beds:{
        type:Number,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    images:[
        {type:String,required:true},
        {type:String,required:true},
        {type:String,required:true},
        {type:String,required:true}
    ]
})

// Create a model to store rooms
const rooms = new mongoose.model('rooms',roomSchema)

// export the model
module.exports = rooms