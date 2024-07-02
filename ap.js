// Import the necessary modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();

// Use morgan as a logger middleware to log all requests
app.use(morgan('dev'));

// Use body-parser to parse JSON bodies of incoming requests
app.use(bodyParser.json());

// Define the root route with a welcome message
app.get('/', (req, res) => {
  res.send('Welcome to my Express server!');
});

// Define the about route with a description of the server
app.get('/about', (req, res) => {
  res.send('This server is a basic example of using Express with Node.js.');
});

// Handle non-existent routes with an error message
app.use((req, res) => {
  res.status(404).send('Sorry, that route does not exist.');
});

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server and log the running status
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
