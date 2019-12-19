const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const genToken = require('../auth/generateToken');

const User = require('../models/User-model');

// @ROUTE       POST /register
// @DESC        Registers a user
// @ACCESS      PUBLIC
router.post('/register', async (req, res) => {
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

// @ROUTE       POST /register
// @DESC        Registers a user
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
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
