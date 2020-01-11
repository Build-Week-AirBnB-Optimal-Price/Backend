const router = require('express').Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  // pull body from req
  const { body } = req;
  // pull all necessary parameters from body
  console.log(body);
  const {
    host_since,
    zipcode,
    room_type,
    maximum_nights,
    minimum_nights,
    extra_people,
    accommodates,
    neighbourhood,
    beds,
    property_type,
    cancellation_policy,
    guests_included,
    bedrooms,
    bathrooms
  } = body;

  // check if all above parameters are present, if not, reject
  if (
    !host_since ||
    !zipcode ||
    !room_type ||
    !maximum_nights ||
    !minimum_nights ||
    !extra_people ||
    !accommodates ||
    !neighbourhood ||
    !beds ||
    !property_type ||
    !cancellation_policy ||
    !guests_included ||
    !bedrooms ||
    !bathrooms
  ) {
    res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // await axios call to DS backend
    const response = await axios.post(
      'https://hidden-waters-19421.herokuapp.com/',
      body
    );
    // if successfull, respond with results
    res.status(200).send({
      results: response.data.results.results
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
