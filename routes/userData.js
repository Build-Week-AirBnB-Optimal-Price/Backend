const express = require('express');
const router = express.Router();

// bring in verify middleware
const auth = require('../middleware/verifyToken');

// @ROUTE       GET /user/:id
// @DESC        Gets user's information
// @ACCESS      Private
router.get('/:id', auth, (req, res) => {
  res.status(200).json({ message: 'USER AUTHORIZED ' });
});

module.exports = router;
