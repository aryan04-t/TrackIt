const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const signUpAndlLoginRoutes = require('./routes/signUpAndLoginRoutes.js'); 
const allExpenseTrackerRoutes = require('./routes/allExpenseTrackerRoutes.js'); 
const allNotepadRoutes = require('./routes/allNotepadRoutes.js'); 

dotenv.config();
const app = express();
const port = process.env.PORT;



app.use(cors()); 
app.use(express.json());


mongoose.connect(process.env.MONGOD_URI).then( (db) => {
    console.log("connected successfully");
}).catch( err => console.log(err) );



app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});



app.use(signUpAndlLoginRoutes); 
app.use(allExpenseTrackerRoutes); 
app.use(allNotepadRoutes);