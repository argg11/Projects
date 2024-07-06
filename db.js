const mongoose = require ('mongoose');
const mongoURL = 'mongodb://localhost:27017/Office'

mongoose.connect(mongoURL,{
    // useNewUrlParser: true,
    // useUnifiedTopology : true
})

const db = mongoose.connection;


db.on('connected',()=>{
    console.log('connection established with db');
});

db.on('error',(err)=>{
    console.error('error',err);
});

db.on('disconnected',()=>{
    console.log('connection terminated with db');
});


module.exports=db;