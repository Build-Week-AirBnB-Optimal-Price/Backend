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
  // pull the body from the request
  const { body } = req;
  // pull the first_name, last_name, email, username, and password from the body
  const { first_name, last_name, email, username, password } = body;
  // if either of the above don't appear or are empty - reject the request
  if (!first_name || !last_name || !email || !username || !password) {
    res.status(400).json({ message: 'All fields are required' });
  }

  // if all the above is clear, we'll take the password passed in the body
  // and hash it using bcrypt
  const hash = bcrypt.hashSync(password, 12);
  // after, we'll replace the password in the body with the hashed password we created
  body.password = hash;

  try {
    // now, we'll insert the modified body into our db, this will return a user object
    const user = await User.addUser(body);
    // from here, we'll use that user object to generate a token
    const token = genToken(user);

    // respond with the user information and the token
    res.status(201).json({ user, token });
  } catch (err) {
    // catch errors
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
  // we'll pull the body from the request
  const { body } = req;
  // pull the username and password from the body
  const { username, password } = body;
  // if the username or password don't exist in the request - reject
  if (!username || !password) {
    res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Using the username above, we'll check the db for a match
    const user = await User.findUserBy({ username });

    // if the user exists, we'll use compareSync on bcrypt
    // by passing in the password from the request,
    // and the password from the user we returned from the db
    // this will return a true or false if there's a match
    if (user && bcrypt.compareSync(password, user.password)) {
      // if both return true, we'll generate a token using the user object above
      const token = genToken(user);
      // we'll also pull the id from the user
      const { id } = user;
      // we'll respond with the user id, a welcome message, and the token
      res.status(200).json({
        user: {
          id,
          message: `Welcome back, ${user.first_name}`
        },
        token
      });
    } else {
      // if either no user is returned or the password doesn't match - reject
      res.status(401).json({ message: 'Incorrect Username/Password' });
    }
  } catch (err) {
    // catch errors
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
