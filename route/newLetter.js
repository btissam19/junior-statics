const express=require('express');
const newLetter=express.Router();
const { newLetterFunction }=require('../controller/newsLetter')
newLetter.post('/', newLetterFunction )
module.exports=newLetter