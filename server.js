require('dotenv').config()
const connectDB=require('./database/mongodb')
const port=process.env.PORT||2000
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
const Starter= async ()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server started on <http://localhost:${port}>`);
        });
    } catch (error) {
       console.log(error); 
    }
}
Starter()

