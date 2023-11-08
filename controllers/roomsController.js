// Logic for getting all rooms from mongodb

// import rooms collection
const rooms = require('../models/roomSchema')

// Create function for getting all rooms
exports.getAllRooms= async(req,res)=>{
    // Get all rooms
    try{
        const allRooms = await rooms.find()
        res.status(200).json(allRooms) // Response send back to client
    }
    catch(error){
        res.status(401).json(error) // Error msg send back to client
    }
}

// Create function for view particular room
exports.viewRoom= async(req,res)=>{
    // Get room id from request
    const id = req.params.id;
    try{
        // check if id present in the db
        const room = await rooms.findOne({id})
        if(room){
            res.status(200).json(room) // Send room details to client
        }
        else{
            res.status(404).json("Room not found")
        }
    }
    catch(error){
        res.status(404).json(error)
    }
}

