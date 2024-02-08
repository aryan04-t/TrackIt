const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/users.js')


const app = express();
const port = process.env.PORT || 3000;


app.use(cors()); 
app.use(express.json());


mongoose.connect('mongodb+srv://aryantomar5000:<password>@cluster0.a3z9k3y.mongodb.net/crud?retryWrites=true&w=majority').then( (db) => {
    console.log("connected successfully");
}).catch( err => console.log(err) );



app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});




app.post('/createExpenseEntry', (req, res) => {
    
    const {expenseName, expenseAmount} = req.body; 

    const expenseNumber = Number(expenseAmount);
    
    if(!expenseName || !expenseNumber){
        return res.status(400).json({message: "Please fill all the fields correctly"});
    }

    userModel.create(req.body)
    .then( () => {
        return res.status(200).json({message: "Data added successfully."})        
    })
    .catch( (err) => { 
        console.log(err);
        res.status(500).json({message: "Failed to add data."}); 
    }); 

});


app.get('/getAllExpenseHistory', async (req, res) =>{

    try{
        const data = await userModel.find();
        
        if(data.length == 0){
            return res.status(200).json({message : "No data exists"});
        }
        else{
            return res.status(200).json({entry: data});
        }

    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal Server Error"}); 
    }
    
});


app.get('/getExpenseEntry/:id', async (req, res) => {
    
    try{
        const id = req.params.id;
        const singleEntry = await userModel.findById({_id: id});

        return res.status(200).json({singleEntry});

    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }

});


app.put('/editExpenseEntry/:id', (req, res) => {
    
    const id = req.params.id;
    
    userModel.findByIdAndUpdate({_id: id}, {expenseName: req.body.expenseName, expenseAmount: req.body.expenseAmount})
    .then( () => {
        return res.status(200).json({message: "Successfully Updated Records"});
    })
    .catch( (err) => {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    })
    
});


app.delete('/deleteExpenseEntry/:id', (req, res) => {

    const id = req.params.id;

    userModel.findByIdAndDelete({_id: id})
    .then( () => {
        return res.status(200).json({message: "Successfully Deleted Records"});
    }) 
    .catch( (err) => {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    })

});