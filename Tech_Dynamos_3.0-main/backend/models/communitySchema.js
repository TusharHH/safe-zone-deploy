const mongoose = require('mongoose');

const CommunitySchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        ref: 'User',
    },
    location: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Community', CommunitySchema);
