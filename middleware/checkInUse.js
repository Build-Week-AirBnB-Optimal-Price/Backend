const User = require('../models/User-model');

// this middleware will check if either the email or username
// in the request are already in use
module.exports = checkInUse = async (req, res, next) => {
  // first we'll pull the username and email from the request body
  const { username, email } = req.body;
  try {
    // we'll check the database for the username
    const user = await User.findUserBy({ username });
    // then we'll check the database for the email
    const mail = await User.findUserBy({ email });

    // if either the username or email return a positive, reject it
    if (user || mail) {
      user
        ? res.status(400).json({ message: 'Username is already in use' })
        : res.status(400).json({ message: 'Email is already in use' });
    }

    next();
  } catch (err) {
    // catch errors
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
