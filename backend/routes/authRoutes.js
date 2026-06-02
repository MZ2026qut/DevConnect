
// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getProfile, updateUserProfile } = require('../controllers/authController');

// Map the routes to the controller functions
router.post('/register', registerUser);
router.post('/login', loginUser);

// Note: getProfile and updateUserProfile usually require an auth middleware, 
// but we will test these primary endpoints first!

module.exports = router;
