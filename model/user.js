const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, 'a user must provide a valid username'],
        unique: [true, "username already exist"]
    },
    password:{
        type: String,
        required: [true, "please input a password"],
        min: 6,
        max: 15
    },
    // token:{
    //     type: String,
    //     required: true
    // }
})

const User = mongoose.model('User', userSchema)

module.exports = User