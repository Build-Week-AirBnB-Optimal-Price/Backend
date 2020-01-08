const router = require('express').Router();

// bring in verification middleware
const verifyRoute = require('../middleware/verifyRoute');
const auth = require('../middleware/verifyToken');

const Properties = require('../models/Properties-model');

// @ROUTE       GET /user/:userID/properties
// @DESC        Gets user's saved properties
// @ACCESS      Private
router.get('/:userID/properties/', async (req, res) => {
  const { userID } = req.params;
  try {
    const userData = await Properties.getUserProps(userID);

    if (!userData[0]) {
      res.status(200).json({ message: 'There are no properties saved' });
    }

    res.status(200).json(userData);
  } catch (err) {
    // catch errors
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @ROUTE       GET /user/:userID/properties/:propID
// @DESC        Get specific saved property
// @ACCESS      Private
router.get('/:userID/properties/:propID', async (req, res) => {
  const { userID, propID } = req.params;

  try {
    const userData = await Properties.getSpecificProp(userID, propID);

    if (!userData) {
      res.status(200).json({ message: 'That property does not exist' });
    }

    res.status(200).json(userData);
  } catch (err) {
    // catch errors
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @ROUTE       POST /user/:userID/properties
// @DESC        Add a property to the user's account
// @ACCESS      Private
router.post('/:userID/properties/', async (req, res) => {
  try {
  } catch (err) {
    // catch errors
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @ROUTE       PUT /user/:userID/properties/:propID
// @DESC        Update a user's info saved property info
// @ACCESS      Private
router.put('/:userID/properties/:propID', async (req, res) => {
  try {
  } catch (err) {
    // catch errors
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @ROUTE       DELETE /user/:id/properties/:propID
// @DESC        Gets user's information
// @ACCESS      Private
router.delete('/:userID/properties/:propID', async (req, res) => {
  try {
  } catch (err) {
    // catch errors
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
