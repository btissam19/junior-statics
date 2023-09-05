const newLetter = require('../models/User');
const newLetterFunction = async (req, res) => {
    const data = {
        email: req.body.email,
    }

    try {
        await Contact.insertMany([data]);
        res.redirect('/');
    } catch (e) {
        console.error(e);
        res.status(500).send('An error occurred while processing the form.');
    }
}

module.exports = { newLetterFunction };