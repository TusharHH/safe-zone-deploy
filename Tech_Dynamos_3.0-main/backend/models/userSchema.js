const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    mobile: {
        type: Number,
    },
    password: {
        type: String,
        required: true,
    },
    city: {
        type: String,
    }
}, { timestamps: true, collection: 'disaster' });

const User = mongoose.model('User', UserSchema);

module.exports = User;
