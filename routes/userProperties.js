const router = require('express').Router();

// bring in verification middleware
const verifyRoute = require('../middleware/verifyRoute');
const auth = require('../middleware/verifyToken');

// bring in Property model
const Properties = require('../models/Properties-model');

// @ROUTE       GET /user/:userID/properties
// @DESC        Gets user's saved properties
// @ACCESS      Private
router.get('/:userID/properties/', auth, verifyRoute, async (req, res) => {
  // pull the userID from the req.params
  const { userID } = req.params;
  try {
    // user getUserProps by passing in the userID and only returning what belongs to this user
    const userData = await Properties.getUserProps(userID);

    // if there isn't anything, reject
    if (!userData[0]) {
      res.status(200).json({ message: 'There are no properties saved' });
    }

    // otherwise, continue
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
    // pull userID and property ID from req params
    const { userID, propID } = req.params;

    try {
      // pass in the userID and property ID to get that specific property, as long as it belong to the user
      const userData = await Properties.getSpecificProp(userID, propID);

      // if nothing comes back, reject
      if (!userData) {
        res.status(200).json({ message: 'That property does not exist' });
      }

      // otherwise, send the data back
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
  // pull user ID from params
  const { userID } = req.params;
  // pull body from request
  const { body } = req;
  // pull all necessary parameters from body
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

  // check if all above parameters are present, if not, reject
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

  // we'll create a new object using the body, and passing in the userID as host_id
  const userProperty = new Object({ ...body, host_id: userID });

  try {
    // from here, we'll pass in the new userProperty and await the object
    const userData = await Properties.addUserProperty(userProperty);

    // if successful, send back along with a message
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
    // pull user ID and property ID from req params
    const { userID, propID } = req.params;
    // pull body from request
    const { body } = req;

    // create a new userProperty, pass in the body above, and create a new key under host_id
    const userProperty = new Object({ ...body, host_id: userID });

    try {
      // pass in the userID, property ID, and the new userProperty object and await the array
      const userData = await Properties.updateUserProperty(
        userID,
        propID,
        userProperty
      );

      // check if the array has values, if not, reject
      if (!userData[0]) {
        res.status(404).json({ message: 'Property does not exist' });
      }

      // if it does, send a success and the object
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
    // pull userID and property ID from req.params
    const { userID, propID } = req.params;

    try {
      // pass in the userID and propertyID into the removeProp method, await amount of items deleted
      let userData = await Properties.removeProp(userID, propID);

      // if the amount is 0, reject
      if (userData == 0) {
        res.status(404).json({ message: 'Property was not found' });
      }

      // if it's more than that, send a success message
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
