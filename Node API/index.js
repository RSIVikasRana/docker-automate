const express = require('express');
const app = express();
const PORT = 3000;

// Simple endpoint that logs and responds with "Hello, Vikas!"
app.get('/', (req, res) => {
  console.log('Endpoint "/" was hit');
  res.send('Hello, Vikas!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
