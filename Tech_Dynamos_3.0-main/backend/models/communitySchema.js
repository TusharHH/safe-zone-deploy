const mongoose = require('mongoose');

// to store username and messages
const MessageSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        ref: 'User'  
    },
    message: {
        type: String,
        required: true
    }
});

const CommunitySchema = new mongoose.Schema({
    location: {
        type: {
            latitude: {
                type: Number,
                required: true
            },
            longitude: {
                type: Number,
                required: true
            }
        },
        required: true
    },
    city: {
        type: String,
    },
    message: {
        type: MessageSchema,  
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Community', CommunitySchema);
