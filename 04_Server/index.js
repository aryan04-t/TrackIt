const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Configure Env Variables.
dotenv.config();
const port = process.env.PORT || 5500;
const live = process.env.LIVE || 'http://localhost:';

// Configure static file path
const publicDirectoryPath = path.join(__dirname, 'public');
const filePath = path.join(publicDirectoryPath, 'index.html');

// Create express instance.
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(publicDirectoryPath));

// Serve root Req
app.get('/', (req, res) => {
    res.status(200).sendFile(filePath);
});

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening to port ${port} happily`);
            console.log(`Go Live at ${live}${port}`);
        });
    } catch (err) {
        console.log('Error starting the server: ', err);
        process.exit(1);
    }
}

start();

// ShutDown on SIGINT signal.
process.on('SIGINT', () => {
    console.log('Shutting down gracefully');

    // try {
    //     disconnectDB();
    // } catch (err) {
    //     console.log("Error disconnecting mongoDB", err);
    // }

    process.exit(0);
});