const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const signUpAndlLoginRoutes = require('./routes/signUpAndLoginRoutes.js'); 
const allExpenseTrackerRoutes = require('./routes/allExpenseTrackerRoutes.js'); 
const allNotepadRoutes = require('./routes/allNotepadRoutes.js'); 


const app = express();
const port = 3000;



app.use(cors()); 
app.use(express.json());


mongoose.connect('mongodb+srv://aryantomar5000:<password>@cluster0.a3z9k3y.mongodb.net/tackit?retryWrites=true&w=majority').then( (db) => {
    console.log("connected successfully");
}).catch( err => console.log(err) );



app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});



app.use(signUpAndlLoginRoutes); 
app.use(allExpenseTrackerRoutes); 
app.use(allNotepadRoutes);