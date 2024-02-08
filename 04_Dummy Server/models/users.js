const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({

    
    expenseName: String,
    expenseAmount: Number

});

const expenseModel = mongoose.model("expenseTracker", expenseSchema);

module.exports = expenseModel; 