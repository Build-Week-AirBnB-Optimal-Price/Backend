const User = require('../models/User-model');

module.exports = checkInUse = async (req, res, next) => {
  const { username, email } = req.body;
  try {
    const user = await User.findUserBy({ username });
    const mail = await User.findUserBy({ email });

    if (user || mail) {
      user
        ? res.status(400).json({ message: 'Username is already in use' })
        : res.status(400).json({ message: 'Email is already in use' });
    }

    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
