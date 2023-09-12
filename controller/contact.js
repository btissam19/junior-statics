const Contact = require('../models/Contact');
const db=require('../database/mongodb')

const contactForm = async (req, res) => {
    const data = {
        username: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phone,
        message: req.body.message
    }

    try {
        await Contact.insertMany([data]);
        res.redirect('/');
    } catch (e) {
        console.error(e);
        res.status(500).send('An error occurred while processing the form.');
    }
}

module.exports = { contactForm };
