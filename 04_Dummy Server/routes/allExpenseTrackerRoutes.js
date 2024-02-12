const express = require('express'); 
const router = express.Router(); 

const userModel = require('../models/users.js')


router.post('/createExpenseEntry', async (req, res) => {
    
    let {email, isLoggedIn, expenseName, expenseAmount} = req.body; 

    if(isLoggedIn === 'true') isLoggedIn = true;
    else isLoggedIn = false;

    try{
        
        if(isLoggedIn){
            let userData = await userModel.findOne({email: email});
            
            const prevLen = userData.expenseTracker.length;
            
            userData = await userModel.findOneAndUpdate(
                { email: email },    // Search criteria
                { $push: { expenseTracker: { expenseName, expenseAmount } } },      // Update operation
                { new: true }        // To return the updated document
            );

            const newLen = userData.expenseTracker.length;

            if((prevLen + 1) === newLen){
                return res.status(200).json({message: "Expense entry is created successfully."});
            }
            else{
                return res.status(304).json({message: "Failed to update the data, Not Modified."}); 
            } 
        }
        else{
            return res.status(401).json({message: "Unauthorized access try"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server error"});
    }

});


router.get('/getAllExpenseHistory/:email/:isLoggedIn', async (req, res) =>{

    let email = req.params.email;
    let isLoggedIn = req.params.isLoggedIn;

    if(isLoggedIn === 'true') isLoggedIn = true;
    else isLoggedIn = false;

    try{
        if(isLoggedIn){
            const userData = await userModel.findOne({email: email}) 

            const len = userData.expenseTracker.length; 
            const data = userData.expenseTracker; 

            if(len == 0){
                return res.status(200).json({message : "No data exists"});
            }
            else{
                return res.status(200).json({entry: data});
            }
        }
        else{
            return res.status(401).json({message: "Unauthorized access try"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal Server Error"}); 
    }
    
});


router.get('/getOneExpenseEntry/:id/:email/:isLoggedIn', async (req, res) => {
    
    const id = req.params.id;
    let email = req.params.email;
    let isLoggedIn = req.params.isLoggedIn;

    if(isLoggedIn === 'true') isLoggedIn = true;
    else isLoggedIn = false;

    try{
        if(isLoggedIn){
            const userData = await userModel.findOne({email: email});
            const expenseTracker = userData.expenseTracker;
            let singleEntry;

            expenseTracker.map( (ele) => {
                if(ele._id.toString() === id){
                    singleEntry = ele;
                }
            })

            return res.status(200).json({singleEntry});
        }
        else{
            return res.status(401).json({message: "Unauthorized access try"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }

});


router.put('/editExpenseEntry/:id/:email/:isLoggedIn', async (req, res) => {
    
    const id = req.params.id;
    let email = req.params.email;
    let isLoggedIn = req.params.isLoggedIn;

    if(isLoggedIn === 'true') isLoggedIn = true;
    else isLoggedIn = false;

    try{
        if(isLoggedIn){

            const userData = await userModel.findOne({email: email});
            const expenseTracker = userData.expenseTracker;

            expenseTracker.map(entry => {
                if (entry._id.toString() === id) {
                    entry.expenseName = req.body.expenseName;
                    entry.expenseAmount = req.body.expenseAmount;
                }
            });

            await userModel.findOneAndUpdate(
                { email: email },
                { expenseTracker: expenseTracker },
                { new: true }
            );

            return res.status(200).json({message: "Successfully updted the expense entry"});
            
        }
        else{
            return res.status(401).json({message: "Unauthorized access try"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
    
});


router.delete('/deleteExpenseEntry/:id/:email/:isLoggedIn', async (req, res) => {

    const id = req.params.id;
    let email = req.params.email;
    let isLoggedIn = req.params.isLoggedIn;

    if(isLoggedIn === 'true') isLoggedIn = true;
    else isLoggedIn = false;

    try{

        if(isLoggedIn){
            
            const userData = await userModel.findOne({email: email});
            const expenseTracker = userData.expenseTracker;

            const expenseIndex = expenseTracker.findIndex(entry => entry._id.toString() === id);
            expenseTracker.splice(expenseIndex, 1);

            await userModel.findOneAndUpdate(
                { email: email },
                { expenseTracker: expenseTracker },
                { new: true }
            ); 

            return res.status(200).json({ message: "Expense entry deleted successfully" });

        }
        else{
            return res.status(401).json({message: "Unauthorized access try"});
        }

    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }

});


module.exports = router;