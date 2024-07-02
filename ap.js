// Import the necessary modules
const express = require('express'); // Import the Express module
const morgan = require('morgan'); // Import the Morgan module for logging
const bodyParser = require('body-parser'); // Import the Body-Parser module for parsing request bodies

// Create an instance of Express
const app = express(); // Create an Express application

// Use morgan as a logger middleware to log all requests
app.use(morgan('dev')); // Use Morgan middleware with 'dev' format to log incoming requests

// Use body-parser to parse JSON bodies of incoming requests
app.use(bodyParser.json()); // Use Body-Parser middleware to parse JSON request bodies

// Define the root route with a welcome message
app.get('/', (req, res) => { // Define a route handler for GET requests to the root URL
  res.send('Welcome to my Express server!'); // Send a welcome message as the response
});

// Define the about route with a description of the server
app.get('/about', (req, res) => { // Define a route handler for GET requests to the '/about' URL
  res.send('This server is a basic example of using Express with Node.js.'); // Send a description message as the response
});

// Handle non-existent routes with an error message
app.use((req, res) => { // Use middleware to handle any requests that don't match defined routes
  res.status(404).send('Sorry, that route does not exist.'); // Send a 404 status and an error message as the response
});

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000; // Set the port from environment variable or default to 3000

// Start the server and log the running status
app.listen(PORT, () => { // Start the server and listen on the defined port
  console.log(`Server is running on port ${PORT}`); // Log a message indicating the server is running
});
