const User = require('../models/User')

exports.getUser = async(req,res) => {
    try {
        const users = await User.find();
        res.json(users);
        
    } catch (err) {
        res.status(500).json({message: err.message})
        
    }
}

// create user
exports.createUser = async(req,res) => {
    const{name, email, password} = req.body;
    try {
       const newUser = new User({name, email, password})
       const savedUser = await newUser.save()
       res.status(201).json(savedUser)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}