const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/college", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(error => console.error("MongoDB connection error:", error));

mongoose.set("useCreateIndex", true);

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    email: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    },
    friends: [String],
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    }
}, {
    collection: 'users'
});

module.exports = mongoose.model('User', userSchema);
