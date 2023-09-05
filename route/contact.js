const express=require('express');
const contact=express.Router();
const {contactForm}=require('../controller/contact')
contact.post('/',contactForm)
module.exports=contact