const express = require('express');
const { animalView } = require('../controllers/animal.controller.js');

// Create an Express router object
const router = express.Router();

// Define route handler for '/'
router.get('/', animalView); 

// Export the router
module.exports = router;
