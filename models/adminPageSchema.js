// import mongoose
const mongoose = require('mongoose');

// Define schema for booking collection to store bookings
const bookingSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    company:{
        type:String
    },
    address:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    postalCode:{
        type:Number,
        required:true
    },
    orderNotes:{
        type:String
    },
    roomType:{
        type:String,
        required:true
    },
    checkIn:{
        type:String,
        required:true
    },
    checkOut:{
        type:String,
        required:true
    },
    guests:{
        type:Number,
        required:true
    },
    roomClean:{
        type:Number
    },
    massageCount:{
        type:Number
    },
    spaCount:{
        type:Number
    },
    totalAmt:{
        type:Number,
        required:true
    },
    payMethod:{
        type:String,
        required:true
    }
})

const bookings = new mongoose.model('bookings',bookingSchema)

module.exports = bookings