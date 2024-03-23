const express = require('express');
const { homeView, aboutView } = require('../controllers/index.controller');

// Create an Express router object
const router = express.Router();

// Define route handler for '/'
router.get('/', homeView);

// Define route handler for '/about'
router.get('/about', aboutView);

// Export the router
module.exports = router;

//https://expressjs.com/en/guide/routing.html