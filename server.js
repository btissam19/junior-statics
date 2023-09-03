const express=require('express')
const app=express()
const hbs = require('hbs');
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server started on <http://localhost:3000>');
});
