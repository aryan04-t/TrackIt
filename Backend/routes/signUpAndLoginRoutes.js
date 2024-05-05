const express = require('express');
const router = express.Router();

const userModel = require('../models/users.js')


router.post('/createUser', (req, res) => {

    userModel.create(req.body)
    .then( res.status(200).json({message : "User successfully created."}))
    .catch( (err) => {
        console.log(err);
        res.status(500).json({message : "Internal server error."});
    })

})


router.post('/login', async (req, res) => {

    const {email, password} = req.body; 

    if(email === '' || password === ''){
       return res.status(400).json({message : "Bad Request!! Enter both the input fields, none of them should be empty."});
    }

    try{
        const userData = await userModel.findOne({email: email})

        if(userData.password === password){
            return res.status(200).json({message: "user is now logged in"});
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