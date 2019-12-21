const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// bring in verification middleware
const auth = require('../middleware/verifyToken');
const verifyRoute = require('../middleware/verifyRoute');
// bring in email/username check
const checkInUse = require('../middleware/checkInUse');

// bring in db
const User = require('../models/User-model');

/**
 * @api {get} /user/:id Retrieve a user's information
 * @apiVersion 1.0.0
 * @apiName Retrieve User Info
 * @apiGroup Accounts
 *
 * @apiSuccess {Number} id User's account id
 * @apisuccess {String} first_name User's firstname
 * @apisuccess {String} last_name User's lastname
 * @apisuccess {String} email User's email
 * @apisuccess {String} username User's username
 *
 * @apiSuccessExample Successful response:
 *    HTTP/1.1 200 OK
 * {
 *    "id" : 66,
 *    "first_name" : "Emperor",
 *    "last_name" : "Palpatine",
 *    "email" : "sithlord66@deathstar2.gov",
 *    "username" : "SithRulez"
 * }
 */

// @ROUTE       GET /user/:id
// @DESC        Gets user's information
// @ACCESS      Private
router.get('/:id', auth, verifyRoute, async (req, res) => {
  // pull the id from the request parameters
  const { id } = req.params;
  try {
    // ping the database for the user with that id
    const user = await User.findUserBy({ id });
    // since the above returns a hashed password,
    // create a new object without it
    const cleanUser = new Object({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      username: user.username
    });

    // respond with that new 'clean' user object
    res.status(200).json(cleanUser);
  } catch (err) {
    // catch errors
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

/**
 * @api {put} /user/:id Update a user's info
 * @apiVersion 1.0.0
 * @apiName Update User
 * @apiGroup Accounts
 *
 * @apiparam {String} first_name User's firstname - optional
 * @apiparam {String} last_name User's lastname - optional
 * @apiparam {String} email User's email - must be unique, but is optional
 * @apiparam {String} username User's username - must be unique, but is optional
 * @apiparam {String} password User's password - optional
 *
 * @apiParamExample Example Body:
 * {
 *    "first_name" : "Anakin",
 *    "last_name" : "Skywalker",
 *    "email" : "dvader@deathstar.gov",
 *    "username" : "xX_OldDarthVader_Xx"
 * }
 *
 * @apiSuccess {Number} id User's account id
 * @apiSuccess {String} first_name User's firstname - optional based on above
 * @apiSuccess {String} last_name User's lastname - optional based on above
 * @apiSuccess {String} email User's email - must be unique, but is optional based on above
 * @apiSuccess {String} username User's username - must be unique, but is optional based on above
 * @apisuccess {String} message Success message upon completion of account update
 *
 * @apiSuccessExample Successful response:
 *    HTTP/1.1 201 OK
 * {
 *    "cleanUser": {
 *        "id": 5,
 *        "first_name" : "Anakin",
 *        "last_name" : "Skywalker",
 *        "email" : "dvader@deathstar.gov",
 *        "username" : "xX_OldDarthVader_Xx"
 *    },
 *    "message": "Account info updated successfully"
 * }
 */

// @ROUTE       PUT /user/:id
// @DESC        Updates a user's information
// @ACCESS      Private
router.put(
  '/:id',
  // auth verifies jwt
  auth,
  // verifyRoute verifies the user can access this route
  verifyRoute,
  // checkInUse verifies the users request email/pw is free
  checkInUse,
  async (req, res) => {
    // pull id from req.params
    const { id } = req.params;
    // pull body from request
    const { body } = req;
    // pull password from the body
    const { password } = body;

    // if there is a password in the request, hash it
    if (password) {
      hash = bcrypt.hashSync(password, 12);
      // then replace the password in the body with that hash
      body.password = hash;
    }

    try {
      // from there, call updateUser, pass in the id and body
      const user = await User.updateUser(id, body);

      // since the above returns all the user's info
      // including the hashed password,
      // we'll create a new object without it
      const cleanUser = new Object({
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        username: user.username
      });

      // then respond withe that new 'clean' object,
      // and a success message
      res.status(201).json({
        cleanUser,
        message: 'Account info updated successfully'
      });
    } catch (err) {
      // catch errors
      console.log(err);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

module.exports = router;
