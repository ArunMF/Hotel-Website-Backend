// import users collection
const users = require('../models/usersSchema')

// Sign up
exports.signUp= async(req,res)=>{
    // Get user details from request
    const {username,email,password} = req.body

    // Logic
    try{
        // check if user already exist in users collection
        const allUsers = await users.findOne({email})
        if(allUsers){
            res.status(404).json({message:'User already exist.'})
        }
        else{
            // Add new user in the users
            const newUser = new users({username,email,password})

            // To store new user in the users
            await newUser.save();

            // Send response back to client
            res.status(200).json("Account created successfully.")
        }
    }
    catch(error){
        res.status(401).json(error);
    }
}

// Login
exports.login= async(req,res)=>{
    // Get user details from request
    const {email,password} = req.body

    // Logic
    try{
        // check if user already exist in users collection
        const user = await users.findOne({email})
        // If user already exist
        if(user){
            // check given password equal to user password in the db
            if(password==user.password){
                // Send response back to client
                res.status(200).json('Login Successful.')
            }
            else{
                // Send response back to client
                res.status(404).json({message:'Invalid password!'})
            }
        }
        else{
            // Send response back to client
            res.status(404).json({message:'User does not exist!'})
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}

