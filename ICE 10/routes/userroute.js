const express = require('express');
const { userView} = require('../controllers/user.controller.js');

// Create an Express router object
const router = express.Router();

// Define route handler for '/'
router.get('/user', userView);


// Export the router
module.exports = router;