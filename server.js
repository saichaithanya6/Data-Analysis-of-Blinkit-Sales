// Importing modules
const express = require('express'); //Framework that simplifies process of building web applications
const bodyParser = require('body-parser'); // Middleware to parse incoming request bodies (form data)
const path = require('path'); // Handle and manipulate file paths

// Express App
const app = express();  // Instance of Express application that handles requests and routes
const port = 3000; // Port number on which server will listen to incoming requests

// Middleware to Parse form data
app.use(bodyParser.urlencoded({ extended: true })); // This middleware parses form data sent via POST requests

// Serve HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); //'app.get' sets up a route when a user visits. 'res.sendFile' sends the HTML file to the user's browser
});

// Handle Form Submission
app.post('/submit-form', (req, res) => { // app.post: set route to handle POST requests to '/submit-form', triggered when form is submitted
    const { name, email } = req.body; // req.body contains the form data submitted by user. Populated by 'body-parser'
    res.send(`Name: ${name}, Email: ${email}`); // Use backticks to correctly interpolate variables
}); 

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`); // app.listen(port) starts the server and makes it listen for incoming requests
});
