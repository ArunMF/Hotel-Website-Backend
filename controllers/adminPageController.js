// import booking collection
const bookings = require('../models/adminPageSchema')

// book rooms
exports.addBookings= async(req,res)=>{
    // get bookings from request
    const {firstName,lastName,emailId,phone,company,address,country,
        state,district,postalCode,orderNotes,roomType,checkIn,checkOut,guests,roomClean,
        massageCount,spaCount,totalAmt,payMethod} = req.body

    // logic
    try{
        const newBooking = new bookings({firstName,lastName,emailId,phone,company,address,country,
            state,district,postalCode,orderNotes,roomType,checkIn,checkOut,guests,roomClean,
            massageCount,spaCount,totalAmt,payMethod})

        await newBooking.save();

        res.status(200).json("Booking placed successful.")
    }
    catch(error){
        res.status(401).json(error);
    }
}

// get all bookings
exports.getAllBookings = async(req,res)=>{
    // Logic
    try{
        const allBookings = await bookings.find()
        res.status(200).json(allBookings)
    }
    catch(error){
        res.status(401).json(error)
    }
}