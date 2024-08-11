const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../utils/asyncHandler'); 
const { createCommunityMessage, findCommunityMessage } = require('../controllers/communityController');


router.post('/create', asyncHandler(createCommunityMessage));

router.get('/find',asyncHandler(findCommunityMessage))

module.exports = router;

