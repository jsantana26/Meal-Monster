const express = require('express');
const router = express.Router();
const { Client } = require('pg');
const User = require('../db/user');

//Get all users
router.get('/', (req, res) => {
  const client = new Client({
    user: "postgres",
    password: "jeffrey1",
    host: "localhost",
    port: 5432,
    database: "MealMonsterDb"
  });

  client.connect()
    .then(() => client.query('SELECT * FROM users'))
    .then(results => res.status(200).json({ success: true, users: results.rows }))
    .catch(err => res.status(503).json({ success: false, msg: `ERROR: ${err}` }))
    .finally(() => client.end());
});

//Get user by id
router.get('/:id', (req, res) => {

  if (!isNaN(req.params.id)) {
    User.getOne(req.params.id).then(user => {
      if (user) {
        delete user.password
        res.json(user);
      } else {
        resError(res, 404, "User Not Found");
      }
    })
  }
});

//Create user


//Edit user


//Delete user

function resError(res, statusCode, message) {
  res.status(statusCode);
  res.json({ message });
}
module.exports = router;