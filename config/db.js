const mongoose = require('mongoose');

const connectDB = async()=> {
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })

    console.log('Succesfully connected to database');
}

module.exports = connectDB
