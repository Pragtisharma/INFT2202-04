// Import Animal model
const Animal = require("../model/Animal");

// Method to retrieve animal data from the database
const retrieveAnimalData = async (req, res) => {
    try {
        const animals = await Animal.find();
        res.render('animals/all-animals', { animals: animals });
    } catch (err) {
        console.error("Error fetching animals:", err);
        res.status(500).json({ error: "Error fetching animals" });
    }
};


const newAnimal = async (req, res) => {
    try {
        // Create a new animal object based on the request body
        const newAnimalData = {
            zoo: req.body.zoo,
            scientificName: req.body.scientificName,
            commonName: req.body.commonName,
            givenName: req.body.givenName,
            gender: req.body.gender,
            dateOfBirth: req.body.dateOfBirth,
            age: req.body.age,
            isTransportable: req.body.isTransportable
        };

        // Create a new Animal instance with the data
        const newAnimal = new Animal(newAnimalData);

        // Save the new animal to the database
        const savedAnimal = await newAnimal.save();

        // Redirect the user to a different page or render a different template
        res.redirect('animals/all-animals');
    } catch (err) {
        console.error("Error adding new animal:", err);
        res.status(500).json({ error: "Error adding new animal" });
    }
};



// Method to update an existing animal in the database
const updateData = (req, res) => {
    let animalData = {
      id:req.body._id,  
      zoo: req.body.zoo,
      scientificName: req.body.scientificName,
      commonName: req.body.commonName,
      givenName: req.body.givenName,
      gender: req.body.gender,
      dateOfBirth: req.body.dateOfBirth,
      age: req.body.age,
      isTransportable: req.body.isTransportable
    };
  
    Animal.find({ _id: req.body._id }).then(function (animalList) {
      if (animalList?.length > 0) {
        // There is already an animal with the given ID
        console.log("----updateOne");
        Animal.updateOne(
          { _id: req.body._id },
          animalData
        ).then((updateAnimal) => {
          console.log("---updated!!", updateAnimal);
          // Reload or redirect to a page showing updated animal data
          res.redirect('animals/edit-animal' + req.body._id);
        });
      } else {
        // There is no animal with the matching ID
        res.status(404).json({ error: "Animal not found" });
      }
    }).catch(err => {
      console.error("Error updating animal:", err);
      res.status(500).json({ error: "Error updating animal" });
    });
  };
  

// Method to delete an animal from the database
const deleteData = async (req, res) => {
    try {
        const deletedData = await Animal.findByIdAndDelete(req.params.id);
        if (!deletedData) {
            return res.status(404).json({ error: "Animal not found" });
        }
        res.json({ message: "Animal deleted successfully" });
    } catch (err) {
        console.error("Error deleting animal:", err);
        res.status(500).json({ error: "Error deleting animal" });
    }
};

module.exports = {
    retrieveAnimalData,
    newAnimal,
    updateData,
    deleteData
};

