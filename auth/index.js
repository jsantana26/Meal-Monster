const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const User = require('../db/user');

router.get('/', (req, res) => {
  res.json({
    message: 'success'
  });
});

function validUser(user) {
  const validEmail = typeof user.email == 'string' && user.email.trim() != '';
  const validPassword = typeof user.password == 'string' && user.password.trim() != '' && user.password.trim().length >= 6;

  return validEmail && validPassword;
}

router.post('/register', (req, res, next) => {
  //Make sure username and password are valid
  if (validUser(req.body)) {
    //Check if email is already in use
    User.getOneByEmail(req.body.email)
      .then(user => {
        if (!user) {
          //Email is not in use
          bcrypt.hash(req.body.password, 10)
            .then(hash => {
              const user = {
                name: req.body.name,
                email: req.body.email,
                password: hash,
                username: req.body.username,
                dateCreated: new Date()
              }
              User.create(user)
                .then(id => {
                  res.json({ success: true, id: id, message: 'User created' });
                });

            });
        } else {
          //Email is already in use
          res.json({ success: false, message: 'Email is already in use' });
        }
      });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

router.post('/login', (req, res, next) => {
  //Check db for user
  User.getOneByEmail(req.body.email)
    .then(user => {
      //If user email was found in db
      if (user) {
        //Compare password
        bcrypt.compare(req.body.password, user.password)
          .then(result => {
            //setting the set 'set-cookie' header
            res.cookie('user_id', user.id, {
              httpOnly: true,
              signed: true,
              secure: false
            });
            if (result) {
              res.json({ success: result, message: 'Logged In!' });
            } else {
              res.json({ success: result, message: 'Invalid Credentials' });
            }

          })

      } else {
        res.json({ success: false, message: 'Invalid Credentials' });
      }
    });
});

module.exports = router;