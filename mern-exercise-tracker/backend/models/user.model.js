const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { //single field for this 
        type: String,
        required: true,
        unique: true,
        trim: true, //trim whitespace from the end
        minlength: 3 //must be at least three characters long
    },
}, {
    timestamps: true, ///creates time fields for when a user is created/modified
});

const User = mongoose.model('User', userSchema);

module.exports = User;