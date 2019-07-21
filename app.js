const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

const port = 3000;

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

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
  res.json({ message: err.message, error: req.app.get('env') === 'development' ? err : {} })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});