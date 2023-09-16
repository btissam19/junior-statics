const newLetter = require('../models/User');
const connectDB=require('../database/mongodb')
require('dotenv').config()
const newLetterFunction = async (req, res) => {
    const data = {
        email: req.body.email,
    }

    try {
      
        await newLetter.insertMany([data]);
        console.log('Success!!!!')
        res.redirect('/');
    } catch (e) {
        console.error(e);
        res.status(500).send('An error occurred while processing the form.');
    }
}

module.exports = { newLetterFunction };