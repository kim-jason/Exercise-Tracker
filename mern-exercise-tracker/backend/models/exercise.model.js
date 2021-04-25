const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: { type: String, required: true}, //single field for this 
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true},
}, {
    timestamps: true, ///creates time fields for when a user is created/modified
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;