const mongoose = require('mongoose');

const URI = "mongodb+srv://admin:santiagoesmeragueva@cvplus-iatmc.mongodb.net/test?retryWrites=true&w=majority"
    //process.env.MONGODB_URI ?
    //process.env.MONGODB_URI
    //: 'mongodb://localhost/databasetest';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});