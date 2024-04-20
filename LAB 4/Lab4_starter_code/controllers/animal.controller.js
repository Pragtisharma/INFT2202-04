const Animal = require('../model/Animal'); // Correct path to Animal model
const animalRouter = require('../routes/animal.router.js');

// Function to render animal view
function animalView(req, res) {
    res.render('index', { pageTitle: "INFT 2202- animalView" }); 
}

// Exporting the function so it can be used in other files
module.exports = {
    animalView: animalView
};
