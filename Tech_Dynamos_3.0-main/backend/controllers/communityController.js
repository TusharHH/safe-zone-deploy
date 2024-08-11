const Community = require('../models/communitySchema');

// api link : /api/community/create  called-in : frontend/src/screens/community.js 
const createCommunityMessage = async (req, res) => {

    const { location, city, message } = req.body;

    const newMessage = new Community({
        location,
        city,
        message
    });

    await newMessage.save();

    res.status(201).json({ message: 'Message created successfully', data: newMessage });

};

// api link : /api/community/find  called-in : frontend/src/screens/community.js 
const findCommunityMessage = async (req, res) => {

    const message = await Community.find();

    res.json({
        message: message
    })

}

module.exports = {

    createCommunityMessage,
    findCommunityMessage

};
