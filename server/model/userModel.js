const mongoose = require("mongoose")

const shema = new mongoose.Schema({
    email:{
        type:String,
    },
    password:{
        type:String,
        min:8,
        max:32
    }
})

const User = mongoose.model("Users",shema)
module.exports = User