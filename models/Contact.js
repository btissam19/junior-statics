const mongoose=require('mongoose')
const db=require('../database/mongodb')

const contactSchema= new mongoose.Schema({
   username:{
    type: String,
    trim: true,},

    email: {
        type: String,
        required: true,
        trim: true,
    },


    phoneNumber: {
        type: String,
        required: true,
        trim: true,
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