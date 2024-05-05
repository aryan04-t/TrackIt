const express = require('express');
const router = express.Router();

const userModel = require('../models/users.js')


router.get('/getAllNotes/:email/:isLoggedIn', async (req, res) => {

    let email = req.params.email;
    let isLoggedIn = req.params.isLoggedIn;

    if(isLoggedIn === 'true') isLoggedIn = true;
    else isLoggedIn = false;

    try{
        if(isLoggedIn){
            
            const userData = await userModel.findOne({email: email}); 
            const allUserNotes = userData.notepad; 

            return res.status(200).json({notes: allUserNotes}); 

        }
        else{
            return res.status(401).json({message: "Unauthorized access try"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server error"});
    }

})


router.post('/createNotepad/:email/:isLoggedIn', async (req, res) => {

    let email = req.params.email;
    let isLoggedIn = req.params.isLoggedIn;

    let {notepadHeading, notepadContent} = req.body;

    if(isLoggedIn === 'true') isLoggedIn = true;
    else isLoggedIn = false;

    try{
        if(isLoggedIn){
            
            let userData = await userModel.findOne({email: email});
            
            const prevLen = userData.notepad.length;
            
            userData = await userModel.findOneAndUpdate(
                { email: email },    // Search criteria
                { $push: { notepad: { notepadHeading, notepadContent } } },      // Update operation
                { new: true }        // To return the updated document
            );

            const newLen = userData.notepad.length;

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

})


router.delete('/deleteNote/:id/:email/:isLoggedIn', async (req, res) => {

    const id = req.params.id;
    
    let email = req.params.email;
    let isLoggedIn = req.params.isLoggedIn;

    if(isLoggedIn === 'true') isLoggedIn = true;
    else isLoggedIn = false;

    try{
        if(isLoggedIn){
            
            let userData = await userModel.findOne({email: email});
            let userNotepadArray = userData.notepad;
            
            const prevLen = userData.notepad.length; 

            let notepadIndex = userNotepadArray.findIndex( eachNote => eachNote._id.toString() === id );
            userNotepadArray.splice(notepadIndex, 1); 

            await userModel.findOneAndUpdate(
                { email: email },
                { notepad: userNotepadArray },
                { new: true }
            ); 

            const newLen = userData.notepad.length; 

            if((prevLen-1) === newLen){
                return res.status(200).json({ message: "Expense entry deleted successfully" });
            }
            else{
                return res.status(304).json({message: "Failed to delete the data."}); 
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

})


module.exports = router;