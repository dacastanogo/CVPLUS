const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    userEmail: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    userPassword: {
        type: String,
        required: true,
        trim: true
    }
});


module.exports = model('User', userSchema)