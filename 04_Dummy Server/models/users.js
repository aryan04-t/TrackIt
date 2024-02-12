const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    expenseTracker: [{
        expenseName: String,
        expenseAmount: Number
    }],
    notepad : [{
        notepadHeading: String,
        notepadContent: String
    }]

});

const userModel = mongoose.model("trackItUsers", userSchema);

module.exports = userModel; 