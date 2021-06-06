const mongoose = require('mongoose')

const shapeSchema = new mongoose.Schema({
    shape: {
        type: String,
        default: "square",
        unique: false
    },
    dimension: {
        lenght_a:{
            type: Number,
            trim: true,
        },
        lenght_b:{
            type: Number,
            trim: true,
        },
        lenght_c:{
            type: Number,
            trim: true,
        }
       
    },
    result:{
        type: Number,
        trim: true
    }
    
})

const Shape = mongoose.model('Shape', shapeSchema)

module.exports = Shape