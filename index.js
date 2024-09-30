const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Handle requests to the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Replace 'index.html' with your actual HTML file name
});

// Handle requests to the /roll endpoint
app.get('/roll', (req, res) => {
    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Send the dice image as a response
    res.sendFile(path.join(__dirname, 'images', `dice${randomNumber}.png`)); // Assuming the images are in a 'dice' directory
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get('/images/dice1.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'images', 'dice1.png'));
});