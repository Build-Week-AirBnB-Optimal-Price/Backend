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

// @ROUTE       Delete /user/:id
// @DESC        Delete a user
// @ACCESS      Private
router.delete('/:id', auth, verifyRoute, async (req, res) => {
  const { id } = req.params;
  try {
    await User.removeUser(id);

    res.status(200).json({
      message: 'Your account has been successfully deleted'
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

module.exports = router;
