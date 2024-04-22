const mongoose = require("mongoose");

// Set Mongoose Promise to global Promise
mongoose.Promise = global.Promise;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/INFT2202", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(error => console.error("MongoDB connection error:", error));

// Define Animal Schema
const animalSchema = new mongoose.Schema({
    
    zoo: {
        type: String,
        required: true
    },
    scientificName: {
        type: String,
        required: true
    },
    commonName: {
        type: String,
        required: true
    },
    givenName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    isTransportable: {
        type: Boolean,
        required: true
    }
}, {
    collection: 'animal'
});

// Export Animal model
module.exports = mongoose.model('animal', animalSchema);
