const express=require('express')
const app=express()
const hbs = require('hbs');
const contact=require('./route/contact')
const newsLetter=require('./route/newLetter')
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/contact',contact)
app.use('/singup',newsLetter)
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server started on <http://localhost:3000>');
});
