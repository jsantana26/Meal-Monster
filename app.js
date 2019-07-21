const express = require('express');
const app = express();

const port = 3000;

//Import Routes
const users = require('./routes/users');

//Route Middleware
app.use('/users', users);

app.get('/', (req, res) => {
  res.send('Index');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});