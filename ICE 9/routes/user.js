// user.js

const express = require('express');
const { homeView } = require('../controllers/userController');

// Create an Express router object
const router = express.Router();

// Define route handler for '/'
router.get('/', homeView);

// Export the router
module.exports = router;
