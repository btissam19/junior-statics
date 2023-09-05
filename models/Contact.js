const mongoose=require('mongoose')
const validator = require('validator');

const contactSchema= new mongoose.Schema({
   username:{
    type: String,
    required: true,
    trim: true,},

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


    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isMobilePhone(value, 'any', { strictMode: false })) {
                throw new Error('Phone number is invalid');
            }
        }
    },

    message:{
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 500,
    }
})

module.exports=mongoose.model('Contact',contactSchema)