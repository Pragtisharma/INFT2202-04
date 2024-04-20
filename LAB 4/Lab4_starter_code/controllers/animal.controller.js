// Import Animal model
const Animal = require("../model/Animal");

// Method to retrieve animal data from the database
const retrieveAnimalData = async (req, res) => {
    try {
        const animals = await Animal.find();
        res.json(animals);
    } catch (err) {
        console.error("Error fetching animals:", err);
        res.status(500).json({ error: "Error fetching animals" });
    }
};


// Method to add a new animal to the database
const newAnimal = async (req, res) => {
    try {
        const newAnimal = new Animal(req.body);
        await newAnimal.save();
        res.status(201).json(newAnimal);
    } catch (err) {
        console.error("Error adding new animal:", err);
        res.status(500).json({ error: "Error adding new animal" });
    }
};

// Method to update an existing animal in the database
const updateData = async (req, res) => {
    try {
        const updatedData = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedData) {
            return res.status(404).json({ error: "Animal not found" });
        }
        res.json(updatedData);
    } catch (err) {
        console.error("Error updating animal:", err);
        res.status(500).json({ error: "Error updating animal" });
    }
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

