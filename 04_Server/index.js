const express = require("express");          // Import the Express module 


// // Create an instance of Express 
const app = express(); 
const port = 3000; 



// - - - - - - - - - - 



/* 
    # Calories and Macros Tracker Section: 
*/


// Defining a route for handling GET requests, fetching all the given data of user for calories and macros 
app.get('/caloriesAndMacrosTrackerFetchData', (request, response) => { 

    // Send a response back to the client
    response.send(`Fetched User's Last 30 days stored Data of Calories and Protein`); 
    response.send(`Showing User the data, if they want to keep data of more than 30 days take subscription`); 

});


// Storing users new given data input for calories and protein 
app.post('/caloriesAndMacrosTrackerFeedNewData', (request, response) => {

    // Access the request body for data sent with the PUT request
    const dataFromClient = request.body;

    // Perform actions with the data (e.g., create a new resource in the server)

    // Send a response back to the client 
    response.send('POST request successful!'); 

}); 



// - - - - - - - - - - 



/* 
    # Notepad: 
*/


// Fetching all notepads of user which are created till this date: 
app.get('/allNotepadsFetch', (request, response) => {

    response.send('Notepads fetched and displayed successfully');

}); 


// Storing users newly created data: 
app.post('addingNewNotepad', (request, response) => {

    response.send('New Notepad stored successfully'); 

});



// - - - - - - - - - - 



/* 
    # Expense Tracker: 
*/








// - - - - - - - - - - 



// Opening Port 
app.listen(port, () => {

    console.log("Server Successfully Spun Up."); 

}); 

// listen() fuction -> Starts the server on the specified port. The callback function is called once the server is successfully listening, and it logs a message to the console. 