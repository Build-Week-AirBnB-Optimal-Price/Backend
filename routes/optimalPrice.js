const router = require('express').Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  const { body } = req;
  try {
    const response = await axios.post(
      'https://hidden-waters-19421.herokuapp.com/',
      body
    );
    res.status(200).send({
      results: response.data.results.results
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
