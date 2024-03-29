const User = require('../../models/users/authModel');
exports.registerUser = async (req, res) => {
    
    try {
        const token = {email:req.body.email};
        const user = await User.findOne(token);
        if (user) {
            console.log(user)
            res.status(400).json({
                message:"User already exists"
            })
        }
        else {
           await User.create(req.body)
            console.log(req.body)
            res.status(201).json({
                message: User,
            })
        }
    } catch {
        res.status(501).json({
            message:"Internal server error"
        })
    }
}


exports.loginUser = async (req, res) => {
    try{
        const token = {email:req.body.email, password:req.body.password};
        const user = await User.findOne(token);
        if(!user){
         res.status(404).json({
            message:"User not found"
         })
        } else{
            res.status(200).json({
                message:"User logged in successfully"
            })
        }
    }
    catch {
        res.status(501).json({
            message:"Internal Server error"
        })
    }
}