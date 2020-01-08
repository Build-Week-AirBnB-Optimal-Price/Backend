const router = require('express').Router();

// bring in verification middleware
const verifyRoute = require('../middleware/verifyRoute');
const auth = require('../middleware/verifyToken');

const Properties = require('../models/Properties-model');

// @ROUTE       GET /user/:userID/properties
// @DESC        Gets user's saved properties
// @ACCESS      Private
router.get('/:userID/properties/', auth, verifyRoute, async (req, res) => {
  const { userID } = req.params;
  try {
    const userData = await Properties.getUserProps(userID);

    if (!userData[0]) {
      res.status(200).json({ message: 'There are no properties saved' });
    }

    res.status(200).json({ user_properties: userData });
  } catch (err) {
    // catch errors
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @ROUTE       GET /user/:userID/properties/:propID
// @DESC        Get specific saved property
// @ACCESS      Private
router.get(
  '/:userID/properties/:propID',
  auth,
  verifyRoute,
  async (req, res) => {
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
  }
);

// @ROUTE       POST /user/:userID/properties
// @DESC        Add a property to the user's account
// @ACCESS      Private
router.post('/:userID/properties/', auth, verifyRoute, async (req, res) => {
  const { userID } = req.params;
  const { body } = req;
  const {
    name,
    host_since,
    zipcode,
    room_type,
    max_nights,
    min_nights,
    extra_people,
    accomodates,
    neighborhood,
    beds,
    property_type,
    cancel_policy,
    guests,
    bedrooms,
    bathrooms,
    optimal_price
  } = body;

  if (
    !name ||
    !host_since ||
    !zipcode ||
    !room_type ||
    !max_nights ||
    !min_nights ||
    !extra_people ||
    !accomodates ||
    !neighborhood ||
    !beds ||
    !property_type ||
    !cancel_policy ||
    !guests ||
    !bedrooms ||
    !bathrooms ||
    !optimal_price
  ) {
    res.status(400).json({ message: 'All fields are required' });
  }

  const userProperty = new Object({ ...body, host_id: userID });

  try {
    const userData = await Properties.addUserProperty(userProperty);

    res.status(201).json({
      message: 'Property was successfully added',
      user_property: userData[0]
    });
  } catch (err) {
    // catch errors
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @ROUTE       PUT /user/:userID/properties/:propID
// @DESC        Update a user's info saved property info
// @ACCESS      Private
router.put(
  '/:userID/properties/:propID',
  auth,
  verifyRoute,
  async (req, res) => {
    const { userID, propID } = req.params;
    const { body } = req;
    const userProperty = new Object({ ...body, host_id: userID });
    try {
      const userData = await Properties.updateUserProperty(
        userID,
        propID,
        userProperty
      );

      if (!userData[0]) {
        res.status(404).json({ message: 'Property does not exist' });
      }

      res.status(201).json({
        message: 'Property has been updated',
        user_property: userData[0]
      });
    } catch (err) {
      // catch errors
      console.log(err);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

// @ROUTE       DELETE /user/:userID/properties/:propID
// @DESC        Gets user's information
// @ACCESS      Private
router.delete(
  '/:userID/properties/:propID',
  auth,
  verifyRoute,
  async (req, res) => {
    const { userID, propID } = req.params;

    try {
      let userData = await Properties.removeProp(userID, propID);

      if (userData == 0) {
        res.status(404).json({ message: 'Property was not found' });
      }

      res.status(200).json({
        message: 'Property has been successfully deleted'
      });
    } catch (err) {
      // catch errors
      console.log(err);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

module.exports = router;
