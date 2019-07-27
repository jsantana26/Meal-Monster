const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

const port = 3000;

//Middleware
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser('cattle_cover'));

//Import Routes
const users = require('./routes/users');
const auth = require('./auth/index');

//Route Middleware
app.use('/users', users);
app.use('/auth', auth);

//Home page
app.get('/', (req, res) => {
  res.send('Index');
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ message: err.message, error: err })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});