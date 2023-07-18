const User = require("../model/userModel")

const createUser = async (req,res)=>{
    const user =  new User({
        email:req.body.email,
        password:req.body.password
    })
    
    await user.save()
    res.send(user)
} 

module.exports = createUser;