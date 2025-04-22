const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World in new version');
});

// Username and password validation route
app.post('/validate', (req, res) => {
  const { username, password } = req.body;

  // Basic validation logic
  if (!username || !password) {
    return res.status(400).send('Username and password are required.');
  }

  if (username === 'admin' && password === 'password123') {
    return res.status(200).send('Validation successful.');
  } else {
    return res.status(401).send('Invalid username or password.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


