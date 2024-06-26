const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use('/myrefscore', express.static(path.join(__dirname, '../client/build')));

// Example API route
app.get('/hello', (req, res) => {
  res.json('Hello from the backend!');
});

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});