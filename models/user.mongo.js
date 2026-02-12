const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const UserSchema = mongoose.model('User', userSchema);
module.exports = {
   UserSchema
}
