const express = require('express');
const router = express.Router();
const { Client } = require('pg');

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
  const client = new Client({
    user: "postgres",
    password: "jeffrey1",
    host: "localhost",
    port: 5432,
    database: "MealMonsterDb"
  });

  const query = {
    name: 'fetch-user',
    text: 'SELECT * FROM users WHERE id = $1',
    values: [req.params.id],
  }

  client.connect()
    .then(() => client.query(query))
    .then(results => res.status(200).json({ success: true, user: results.rows[0] }))
    .catch(err => res.status(503).json({ success: false, msg: `ERROR: ${err}` }))
    .finally(() => client.end());
});

//Create user


//Edit user


//Delete user

module.exports = router;