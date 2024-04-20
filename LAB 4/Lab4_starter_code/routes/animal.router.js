const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animal.controller');

// GET routes
// Route to get all animals
router.get('/all-animals', animalController.retrieveAnimalData);


// Route to add a new animal
router.post('/edit-animal', animalController.newAnimal);

// Route to update an existing animal
router.put('/edit-animal', animalController.updateData);

// Route to delete an animal
router.delete('/edit-animal', animalController.deleteData);

module.exports = router;



