const express = require('express');

const app = express();
const PORT = 3000;
const backend_URL = process.env.backend_URL || 'http://backend:80';

app.get('/', async (req, res) => {
  try {
    const response = await fetch(backend_URL);
    const data = await response.json();

    res.send(`
      <html>
        <head>
          <title>ECS Service Connect Demo</title>
        </head>
        <body>
          <h1>Hello from Frontend- V2!</h1>
          <h2>Backend Response:</h2>
          <p>${data.message}</p>
        </body>
      </html>
    `);
  } catch (error) {
    console.error(error);

    res.status(500).send(`
      <h1>Frontend is running</h1>
      <p>Could not connect to backend.</p>
    `);
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Frontend running on port ${PORT}`);
});
