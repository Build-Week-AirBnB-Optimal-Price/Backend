const express = require('express');
const router = express.Router();

// bring in verification middleware
const auth = require('../middleware/verifyToken');
const verifyRoute = require('../middleware/verifyRoute');

// bring in db
const User = require('../models/User-model');

// @ROUTE       GET /user/:id
// @DESC        Gets user's information
// @ACCESS      Private
router.get('/:id', auth, verifyRoute, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findUserBy({ id });
    const cleanUser = new Object({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      username: user.username
    });

    res.status(200).json(cleanUser);
  } catch (err) {
    // catch errors
  }
});

module.exports = router;
