const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const genToken = require('../auth/generateToken');

const User = require('../models/User-model');
const checkInUse = require('../middleware/checkInUse');

/**
 * @api {post} /register Registers a user
 * @apiVersion 1.0.0
 * @apiName Register
 * @apiGroup Accounts
 *
 * @apiparam {String} first_name User's firstname
 * @apiparam {String} last_name User's lastname
 * @apiparam {String} email User's email - must be unique
 * @apiparam {String} username User's username - must be unique
 * @apiparam {String} password User's password
 *
 * @apiParamExample Example Body:
 * {
 *    "first_name" : "Darth",
 *    "last_name" : "Vader",
 *    "email" : "dvader@deathstar.gov",
 *    "username" : "xX_DarthVader_Xx",
 *    "password" : "UnderestimatedPower"
 * }
 *
 * @apiSuccess {Number} id User's account id
 * @apisuccess {String} username User's username
 * @apisuccess {String} token JWT generated for the user
 *
 * @apiSuccessExample Successful response:
 *    HTTP/1.1 201 OK
 * {
 *    "user": {
 *        "id" : 5,
 *        "username" : "xX_DarthVader_Xx"
 *      },
 *    "token" : "a really long string of letters and numbers, separated by dots"
 * }
 */

// @ROUTE       POST /register
// @DESC        Registers a user
// @ACCESS      PUBLIC
router.post('/register', checkInUse, async (req, res) => {
  const { body } = req;
  const { first_name, last_name, email, username, password } = body;
  if (!first_name || !last_name || !email || !username || !password) {
    res.status(400).json({ message: 'All fields are required' });
  }

  const hash = bcrypt.hashSync(password, 12);
  body.password = hash;

  try {
    const user = await User.addUser(body);
    const token = genToken(user);

    res.status(201).json({ user, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

/**
 * @api {post} /login Logs a user in
 * @apiVersion 1.0.0
 * @apiName Login
 * @apiGroup Accounts
 *
 * @apiparam {String} username User's username
 * @apiparam {String} password User's password
 *
 * @apiParamExample Example Body:
 * {
 *    "username" : "TheRealYoda",
 *    "password" : "GreenIAm"
 * }
 *
 * @apiSuccess {Number} id User's account id
 * @apisuccess {String} message User greeting
 * @apisuccess {String} token JWT generated for the user
 *
 * @apiSuccessExample Successful response:
 *    HTTP/1.1 201 OK
 * {
 *    "user": {
 *        "id" : 10,
 *        "message" : "Welcome back, TheRealYoda"
 *      },
 *    "token" : "a really long string of letters and numbers, separated by dots"
 * }
 */

// @ROUTE       POST /login
// @DESC        Logs in a user
// @ACCESS      PUBLIC
router.post('/login', async (req, res) => {
  const { body } = req;
  const { username, password } = body;
  if (!username || !password) {
    res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const user = await User.findUserBy({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = genToken(user);
      const { id } = user;
      res.status(200).json({
        user: {
          id,
          message: `Welcome back, ${user.first_name}`
        },
        token
      });
    } else {
      res.status(401).json({ message: 'Incorrect Username/Password' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
