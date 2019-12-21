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
    const user = await User.findById(id);

    res.json(user);
  } catch (err) {
    // catch errors
  }
});

module.exports = router;
