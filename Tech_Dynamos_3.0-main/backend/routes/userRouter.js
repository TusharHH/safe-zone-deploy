const express = require('express');
const { addUser, findUsers, deleteUser, updateUser, login } = require('../controllers/user.controller.js');
const { asyncHandler } = require('../utils/asyncHandler.js');

const router = express.Router();

router.post('/signup', asyncHandler(addUser));
router.post('/login', asyncHandler(login))
router.get('/findusers', asyncHandler(findUsers));
router.delete('/deleteuser/:id', asyncHandler(deleteUser));
router.patch('/updateuser/:id', asyncHandler(updateUser));

module.exports = router;
