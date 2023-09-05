const mongoose=require('mongoose');
const dataPort= 'mongodb://127.0.0.1:27017/Enginnering'
mongoose.connect(dataPort,{    
    useNewUrlParser: true,
    useUnifiedTopology: true,})
.then(()=>console.log("connected"))
.catch((e)=>console.log(e))

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB successfully!');
});
mongoose.connection.on('error',(err) => {
    console.error('Error connecting to MongoDB:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});