const admins = require('../models/adminSchema')

// Admin login
exports.adminLogin= async(req,res)=>{
    // Get admin details from request
    const {email,password} = req.body

    // logic
    try{
        const admin = await admins.findOne({email})
        if(admin){
            if (password==admin.password) {
                res.status(200).json('Admin login successful.')
            } else {
                res.status(404).json({message:'Invalid password!'})
            }
        }
        else{
            res.status(404).json({message:'Admin does not exist!'})
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}