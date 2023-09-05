const mongoose=require('mongoose')
const validator = require('validator');

const userSchema= new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },
        
})

module.exports= mongoose.model('UserEmail',userSchema)